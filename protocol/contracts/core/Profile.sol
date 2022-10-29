// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {ERC721Enumerable} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import {IProfile} from "../interfaces/IProfile.sol";
import {INFTCollectionModule} from "../interfaces/INFTCollectionModule.sol";
import {IScoreModule} from "../interfaces/IScoreModule.sol";
import {IMirrorModule} from "../interfaces/IMirrorModule.sol";
import {ISNSAccountModule} from "../interfaces/ISNSAccountModule.sol";
import {NFTCollectionModule} from "./modules/NFTCollectionModule.sol";
import {SNSAccountModule} from "./modules/SNSAccountModule.sol";
import {IceCandy} from "./IceCandy.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Profile is ERC721Enumerable, IProfile, Ownable {
    mapping(uint256 => IProfile.ProfileStruct) internal _profile;
    uint256 internal _profileCounter;
    address internal _icecandy;
    address internal _nftCollectionModule;
    address internal _snsAccountModule;
    address internal _poapCollectionModule;
    address internal _scoreModule;
    address internal _mirrorModule;

    constructor(address owner) ERC721("Profile", "PROFILE") {
        _transferOwnership(owner);
    }

    modifier hasIceCandy() {
        require(IceCandy(_icecandy).balanceOfNotEaten(msg.sender) > 0, "Profile: caller has no icecandy");
        _;
    }

    function setIceCandy(address icecandy) external override onlyOwner {
        _icecandy = icecandy;
    }

    function setNFTCollectionModule(address nftCollectionModule) external override onlyOwner {
        _nftCollectionModule = nftCollectionModule;
    }

    function setSNSAccountModule(address snsAccountModule) external override onlyOwner {
        _snsAccountModule = snsAccountModule;
    }

    function setPOAPCollectionModule(address poapCollectionModule) external override onlyOwner {
        _poapCollectionModule = poapCollectionModule;
    }

    function setScoreModule(address scoreModule) external override onlyOwner {
        _scoreModule = scoreModule;
    }

    function setMirrorModule(address mirrorModule) external override onlyOwner {
        _mirrorModule = mirrorModule;
    }

    function createProfile(CreateProfileStructData calldata vars) external override returns (uint256) {
        uint256 profileId = ++_profileCounter;

        _createProfile(profileId, msg.sender, vars.name, vars.introduction, vars.imageURI);
        _createNFTCollection(profileId, _nftCollectionModule, vars.nfts);
        _createNFTCollection(profileId, _poapCollectionModule, vars.poaps);
        _createSNSAccount(profileId, vars.snsAccounts);

        return profileId;
    }

    function createNFTCollection(uint256 profileId, INFTCollectionModule.NFTStruct[] calldata nfts) external override {
        require(_isApprovedOrOwner(msg.sender, profileId), "Profile: caller is not owner or approved");
        _createNFTCollection(profileId, _nftCollectionModule, nfts);
    }

    function createPOAPCollection(uint256 profileId, INFTCollectionModule.NFTStruct[] calldata poaps)
        external
        override
    {
        require(_isApprovedOrOwner(msg.sender, profileId), "Profile: caller is not owner or approved");
        _createNFTCollection(profileId, _poapCollectionModule, poaps);
    }

    function createScore(uint256 profileId) external override {
        require(_isApprovedOrOwner(msg.sender, profileId), "Profile: caller is not owner or approved");
        _createScore(profileId);
    }

    function addMirror(uint256 profileId, IMirrorModule.MirrorStruct calldata mirror) external override {
        require(_isApprovedOrOwner(msg.sender, profileId), "Profile: caller is not owner or approved");
        _addMirror(profileId, mirror);
    }

    function createSNSAccount(uint256 profileId, ISNSAccountModule.SNSAccountStruct[] calldata snsAccounts) public override {
        require(_isApprovedOrOwner(msg.sender, profileId), "Profile: caller is not owner or approved");
        _createSNSAccount(profileId, snsAccounts);
    }

    function addWallet(uint256 profileId, address wallet) external override {
        require(_isApprovedOrOwner(msg.sender, profileId), "Profile: caller is not owner or approved");
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
        return _getNFTCollection(profileId, _nftCollectionModule);
    }

    function getPOAPCollection(uint256 profileId)
        external
        view
        override
        returns (INFTCollectionModule.NFTStruct[] memory)
    {
        return _getNFTCollection(profileId, _poapCollectionModule);
    }

    function getScore(uint256 profileId) external view override returns (IScoreModule.ScoreStruct[] memory) {
        return _getScore(profileId);
    }

    function getMirror(uint256 profileId) external view override returns (IMirrorModule.MirrorStruct[] memory) {
        return _getMirror(profileId);
    }

    function _createProfile(
        uint256 profileId,
        address owner,
        string memory name,
        string memory introduction,
        string memory imageURI
    ) internal {
        // mint
        _mint(msg.sender, profileId);

        // create Profile
        _profile[profileId].wallets.push(owner);
        _profile[profileId].name = name;
        _profile[profileId].introduction = introduction;
        _profile[profileId].imageURI = imageURI;

        emit ProfileCreated(owner, profileId, block.number);
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
        IScoreModule(_scoreModule).processScore(profileId);
        emit ScoreCreated(profileId, block.number);
    }

    function _addMirror(uint256 profileId, IMirrorModule.MirrorStruct calldata mirror) internal {
        IMirrorModule(_mirrorModule).processRegist(profileId, mirror);
        emit MirrorCreated(profileId, block.number);
    }

    function _createSNSAccount(uint256 profileId, ISNSAccountModule.SNSAccountStruct[] calldata snsAccounts) internal {
        ISNSAccountModule(_snsAccountModule).processSNSAccount(profileId, snsAccounts);
        emit SNSAccountCreated(profileId, block.number);
    }

    function _getNFTCollection(uint256 profileId, address module)
        internal
        view
        returns (INFTCollectionModule.NFTStruct[] memory)
    {
        return INFTCollectionModule(module).getCollection(profileId);
    }

    function _getScore(uint256 profileId) internal view returns (IScoreModule.ScoreStruct[] memory) {
        return IScoreModule(_scoreModule).getScore(profileId);
    }

    function _getMirror(uint256 profileId) internal view returns (IMirrorModule.MirrorStruct[] memory) {
        return IMirrorModule(_mirrorModule).getMirror(profileId);
    }

    function getSNSAccounts(uint256 profileId) external view override returns (ISNSAccountModule.SNSAccountStruct[] memory) {
        return SNSAccountModule(_snsAccountModule).getSNSAccounts(profileId);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "http://example.com/";
    }
}
