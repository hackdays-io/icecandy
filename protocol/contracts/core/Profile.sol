// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {ERC721Enumerable} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import {IProfile} from "../interfaces/IProfile.sol";
import {INFTCollectionModule} from "../interfaces/INFTCollectionModule.sol";
import {IceCandy} from "./IceCandy.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Profile is ERC721Enumerable, IProfile, Ownable {
    mapping(uint256 => IProfile.ProfileStruct) internal _profile;
    uint256 internal _profileCounter;
    address internal _icecandy;
    address internal _nftCollectionModule;
    address internal _poapCollectionModule;

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

    function setPOAPCollectionModule(address poapCollectionModule) external override onlyOwner {
        _poapCollectionModule = poapCollectionModule;
    }

    function createProfile(CreateProfileStructData calldata vars) external override returns (uint256) {
        uint256 profileId = ++_profileCounter;

        _createProfile(profileId, msg.sender, vars.name, vars.introduction, vars.imageURI);
        _createNFTCollection(profileId, _nftCollectionModule, vars.nfts);
        _createNFTCollection(profileId, _poapCollectionModule, vars.poaps);

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
