// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {INFTCollectionModule} from "../interface/INFTCollectionModule.sol";
import {ISNSAccountModule} from "../interface/ISNSAccountModule.sol";

interface IProfile {
    struct ProfileStruct {
        address[] wallets;
        string handle;
        string imageURI;
        uint256 nftCollectionPubId; // 0 means no collection
        uint256 snsAccountsPubId;
    }

    struct CreateProfileStructData {
        string handle;
        string imageURI;
        INFTCollectionModule.NFTStruct[] nfts;
        ISNSAccountModule.SNSAccountStruct[] snsAccounts;
    }

    function setIceCandy(address icecandy) external;

    function setNFTCollectionModule(address nftCollectionModule) external;

    function createProfile(CreateProfileStructData calldata vars) external returns (uint256);

    function createNFTCollection(uint256 profileId, INFTCollectionModule.NFTStruct[] calldata nfts) external;

    function createSNSAccount(uint256 profileId, ISNSAccountModule.SNSAccountStruct calldata sns) external;

    function addWallet(uint256 profileId, address wallet) external;

    function getProfile(uint256 profileId) external view returns (ProfileStruct memory);

    function getNFTCollection(uint256 profileId, uint256 nftCollectionPubId)
        external
        view
        returns (INFTCollectionModule.NFTStruct[] memory);

    function getSNSAccounts(uint256 profileId, uint256 snsPubId)
        external
        view
        returns (ISNSAccountModule.SNSAccountStruct[] memory);

    event ProfileCreated(
        address indexed wallet,
        uint256 profileId,
        string handle,
        string imageURI,
        uint256 blockNumber
    );

    event NFTCollectionCreated(
        uint256 indexed profileId,
        uint256 indexed pubId,
        INFTCollectionModule.NFTStruct[] nfts,
        uint256 blockNumber
    );

    event SNSAccountCreated(
        uint256 indexed profileId,
        uint256 indexed pubId,
        ISNSAccountModule.SNSAccountStruct sns,
        uint256 blockNumber
    );

    event WalletAdded(uint256 profileId, address wallet);
}
