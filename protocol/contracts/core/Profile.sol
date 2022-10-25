// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {ERC721Enumerable} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import {IProfile} from "../interface/IProfile.sol";
import {INFTCollectionModule} from "../interface/INFTCollectionModule.sol";
import {NFTCollectionModule} from "./NFTCollectionModule.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract Profile is ERC721Enumerable, IProfile, Ownable {
    mapping(uint256 => IProfile.ProfileStruct) internal _profile;
    uint256 internal _profileCounter;
    address internal _nftCollectionModule;

    constructor(address owner) ERC721("Profile", "PROFILE") {
        _transferOwnership(owner);
    }

    function setNFTCollectionModule(address nftCollectionModule) external onlyOwner {
        _nftCollectionModule = nftCollectionModule;
    }

    function createProfile(CreateProfileStructData calldata vars) external override returns (uint256) {
        uint256 profileId = ++_profileCounter;

        _mint(msg.sender, profileId);

        _profile[profileId].wallets.push(msg.sender);
        _profile[profileId].handle = vars.handle;
        _profile[profileId].imageURI = vars.imageURI;
        _profile[profileId].nftCollectionPubId = 0;

        _createNFTCollection(profileId, 1, vars.nfts);

        emit ProfileCreated(msg.sender, profileId, vars.handle, vars.imageURI, block.number);

        return profileId;
    }

    function createNFTCollection(uint256 profileId, INFTCollectionModule.NFTStruct[] calldata nfts) public override {
        require(_isApprovedOrOwner(msg.sender, profileId), "Profile: caller is not owner or approved");
        _createNFTCollection(profileId, ++_profile[profileId].nftCollectionPubId, nfts);
    }

    function addWallet(uint256 profileId, address wallet) external override {
        require(_isApprovedOrOwner(msg.sender, profileId), "Profile: caller is not owner or approved");
        _profile[profileId].wallets.push(wallet);

        emit WalletAdded(profileId, wallet);
    }

    function getProfile(uint256 profileId) external view override returns (IProfile.ProfileStruct memory) {
        return _profile[profileId];
    }

    function getNFTCollection(uint256 profileId, uint256 nftCollectionPubId)
        external
        view
        override
        returns (INFTCollectionModule.NFTStruct[] memory)
    {
        return NFTCollectionModule(_nftCollectionModule).getNFTs(profileId, nftCollectionPubId);
    }

    function _createNFTCollection(
        uint256 profileId,
        uint256 pubId,
        INFTCollectionModule.NFTStruct[] calldata nfts
    ) internal {
        NFTCollectionModule(_nftCollectionModule).processCollect(profileId, pubId, nfts);
        _profile[profileId].nftCollectionPubId = pubId;
        emit NFTCollectionCreated(profileId, pubId, nfts, block.number);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "http://example.com/";
    }
}
