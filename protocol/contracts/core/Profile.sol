// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {ERC721Enumerable} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import {IProfile} from "../interfaces/IProfile.sol";
import {INFTCollectionModule} from "../interfaces/INFTCollectionModule.sol";
import {IScoreModule} from "../interfaces/IScoreModule.sol";
import {IMirrorModule} from "../interfaces/IMirrorModule.sol";
import {IColorExtension} from "../interfaces/IColorExtension.sol";
import {ISNSAccountModule} from "../interfaces/ISNSAccountModule.sol";
import {IIceCandy} from "../interfaces/IIceCandy.sol";
import {IGlobals} from "../interfaces/IGlobals.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Profile is ERC721Enumerable, IProfile, Ownable {
    mapping(uint256 => IProfile.ProfileStruct) internal _profile;
    mapping(address => uint256) internal _profileId;
    uint256 internal _profileCounter;
    address internal _globals;

    constructor(address owner) ERC721("Profile", "PROFILE") {
        _transferOwnership(owner);
    }

    modifier hasIceCandy() {
        require(
            IIceCandy(IGlobals(_globals).getIceCandy()).balanceOfNotRevealed(msg.sender) > 0,
            "Profile: caller has no icecandy"
        );
        _;
    }

    function setGlobals(address globals) external override onlyOwner {
        _globals = globals;
    }

    function createProfile(CreateProfileStructData calldata vars) external override returns (uint256) {
        require(_profileId[msg.sender] == 0, "Profile: profile already exists");

        uint256 profileId = ++_profileCounter;
        _profileId[msg.sender] = profileId;

        _createProfile(profileId, msg.sender, vars.name, vars.introduction, vars.imageURI);
        _createNFTCollection(profileId, IGlobals(_globals).getNFTCollectionModule(), vars.nfts);
        _createNFTCollection(profileId, IGlobals(_globals).getPOAPCollectionModule(), vars.poaps);
        _createSNSAccount(profileId, vars.snsAccounts);
        _createScore(profileId);

        return profileId;
    }

    function createNFTCollection(uint256 profileId, INFTCollectionModule.NFTStruct[] calldata nfts) external override {
        require(_isApprovedOrOwner(msg.sender, profileId), "Profile: caller is not owner or approved");
        _createNFTCollection(profileId, IGlobals(_globals).getNFTCollectionModule(), nfts);
        _createScore(profileId);
    }

    function createPOAPCollection(uint256 profileId, INFTCollectionModule.NFTStruct[] calldata poaps)
        external
        override
    {
        require(_isApprovedOrOwner(msg.sender, profileId), "Profile: caller is not owner or approved");
        _createNFTCollection(profileId, IGlobals(_globals).getPOAPCollectionModule(), poaps);
        _createScore(profileId);
    }

    function addMirror(uint256 profileId, IMirrorModule.MirrorStruct calldata mirror) external override {
        require(_isApprovedOrOwner(msg.sender, profileId), "Profile: caller is not owner or approved");
        uint256 moduleId = IMirrorModule(IGlobals(_globals).getMirrorModule()).addMirror(profileId, mirror);
        emit MirrorAdded(profileId, moduleId, block.number);
    }

    function addColor(uint256 profileId, string memory color) external override {
        require(_isApprovedOrOwner(msg.sender, profileId), "Profile: caller is not owner or approved");
        uint256 extensionId = IColorExtension(IGlobals(_globals).getColorExtension()).addColor(profileId, color);
        emit ColorAdded(profileId, extensionId, block.number);
    }

    function activateColor(uint256 profileId, uint256 extensionId) external override {
        require(_isApprovedOrOwner(msg.sender, profileId), "Profile: caller is not owner or approved");
        IColorExtension(IGlobals(_globals).getColorExtension()).activate(profileId, extensionId);
        emit ColorActivated(profileId, extensionId, block.number);
    }

    function deactivateColor(uint256 profileId, uint256 extensionId) external override {
        require(_isApprovedOrOwner(msg.sender, profileId), "Profile: caller is not owner or approved");
        IColorExtension(IGlobals(_globals).getColorExtension()).deactivate(profileId, extensionId);
        emit ColorDeactivated(profileId, extensionId, block.number);
    }

    function createSNSAccount(uint256 profileId, ISNSAccountModule.SNSAccountStruct[] calldata snsAccounts)
        public
        override
    {
        require(_isApprovedOrOwner(msg.sender, profileId), "Profile: caller is not owner or approved");
        _createSNSAccount(profileId, snsAccounts);
    }

    function addWallet(uint256 profileId, address wallet) external override {
        require(_isApprovedOrOwner(msg.sender, profileId), "Profile: caller is not owner or approved");
        require(_profileId[wallet] == 0, "Profile: profile already exists");

        _profileId[wallet] = profileId;
        _profile[profileId].wallets.push(wallet);

        emit WalletAdded(profileId, wallet);
    }

    function getProfile(uint256 profileId) external view override returns (IProfile.ProfileStruct memory) {
        return _profile[profileId];
    }

    function getNFTCollection(uint256 profileId)
        external
        view
        override
        returns (INFTCollectionModule.NFTStruct[] memory)
    {
        return _getNFTCollection(profileId, IGlobals(_globals).getNFTCollectionModule());
    }

    function getPOAPCollection(uint256 profileId)
        external
        view
        override
        returns (INFTCollectionModule.NFTStruct[] memory)
    {
        return _getNFTCollection(profileId, IGlobals(_globals).getPOAPCollectionModule());
    }

    function getSNSAccounts(uint256 profileId)
        external
        view
        override
        returns (ISNSAccountModule.SNSAccountStruct[] memory)
    {
        return ISNSAccountModule(IGlobals(_globals).getSNSAccountModule()).getSNSAccounts(profileId);
    }

    function getScore(uint256 profileId) external view override returns (IScoreModule.ScoreStruct[] memory) {
        return IScoreModule(IGlobals(_globals).getScoreModule()).getScore(profileId);
    }

    function getMirror(uint256 profileId) external view override returns (IMirrorModule.MirrorStruct[] memory) {
        return IMirrorModule(IGlobals(_globals).getMirrorModule()).getMirror(profileId);
    }

    function getColor(uint256 profileId) external view override returns (IColorExtension.ColorStruct[] memory) {
        return IColorExtension(IGlobals(_globals).getColorExtension()).getColor(profileId);
    }

    function getProfileId(address wallet) external view returns (uint256) {
        return _profileId[wallet];
    }

    function _createProfile(
        uint256 profileId,
        address owner,
        string memory name,
        string memory introduction,
        string memory imageURI
    ) internal {
        _mint(msg.sender, profileId);

        _profile[profileId].wallets.push(owner);
        _profile[profileId].name = name;
        _profile[profileId].introduction = introduction;
        _profile[profileId].imageURI = imageURI;

        emit ProfileCreated(profileId, owner, block.number);
    }

    function _createNFTCollection(
        uint256 profileId,
        address module,
        INFTCollectionModule.NFTStruct[] calldata nfts
    ) internal {
        INFTCollectionModule(module).processCollect(profileId, nfts);
        emit NFTCollectionCreated(profileId, module, block.number);
    }

    function _createScore(uint256 profileId) internal {
        IScoreModule(IGlobals(_globals).getScoreModule()).processScore(profileId);
        emit ScoreCreated(profileId, block.number);
    }

    function _createSNSAccount(uint256 profileId, ISNSAccountModule.SNSAccountStruct[] calldata snsAccounts) internal {
        ISNSAccountModule(IGlobals(_globals).getSNSAccountModule()).processSNSAccount(profileId, snsAccounts);
        emit SNSAccountCreated(profileId, block.number);
    }

    function _getNFTCollection(uint256 profileId, address module)
        internal
        view
        returns (INFTCollectionModule.NFTStruct[] memory)
    {
        return INFTCollectionModule(module).getCollection(profileId);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "http://example.com/";
    }
}
