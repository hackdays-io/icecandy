// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {INFTCollectionModule} from "../interface/INFTCollectionModule.sol";

interface IProfile {
    struct ProfileStruct {
        address[] wallets;
        string name;
        string introduction;
        string imageURI;
    }

    struct CreateProfileStructData {
        string name;
        string introduction;
        string imageURI;
        INFTCollectionModule.NFTStruct[] nfts;
        INFTCollectionModule.NFTStruct[] poaps;
    }

    function setIceCandy(address icecandy) external;

    function setNFTCollectionModule(address nftCollectionModule) external;

    function setPOAPCollectionModule(address poapCollectionModule) external;

    function createProfile(CreateProfileStructData calldata vars) external returns (uint256);

    function createNFTCollection(uint256 profileId, INFTCollectionModule.NFTStruct[] calldata nfts) external;

    function createPOAPCollection(uint256 profileId, INFTCollectionModule.NFTStruct[] calldata poaps) external;

    function addWallet(uint256 profileId, address wallet) external;

    function getProfile(uint256 profileId) external view returns (ProfileStruct memory);

    function getNFTCollection(uint256 profileId) external view returns (INFTCollectionModule.NFTStruct[] memory);

    function getPOAPCollection(uint256 profileId) external view returns (INFTCollectionModule.NFTStruct[] memory);

    event ProfileCreated(uint256 indexed profileId, address indexed owner, uint256 blockNumber);

    event NFTCollectionCreated(uint256 indexed profileId, address indexed module, uint256 blockNumber);

    event WalletAdded(uint256 profileId, address wallet);
}
