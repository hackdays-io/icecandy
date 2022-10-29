// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {INFTCollectionModule} from "./INFTCollectionModule.sol";
import {ISNSAccountModule} from "./ISNSAccountModule.sol";
import {IScoreModule} from "./IScoreModule.sol";
import {IMirrorModule} from "./IMirrorModule.sol";
import {IColorExtension} from "./IColorExtension.sol";

interface IProfile {
    struct ProfileStruct {
        address[] wallets;
        string name;
        string introduction;
        string imageURI;
        uint256 snsAccountsPubId;
    }

    struct CreateProfileStructData {
        string name;
        string introduction;
        string imageURI;
        INFTCollectionModule.NFTStruct[] nfts;
        INFTCollectionModule.NFTStruct[] poaps;
        ISNSAccountModule.SNSAccountStruct[] snsAccounts;
    }

    function setIceCandy(address icecandy) external;

    function setNFTCollectionModule(address nftCollectionModule) external;

    function setPOAPCollectionModule(address poapCollectionModule) external;

    function setScoreModule(address scoreModule) external;

    function setMirrorModule(address mirrorModule) external;

    function setSNSAccountModule(address snsAccountModule) external;

    function setColorExtension(address colorExtension) external;

    function createProfile(CreateProfileStructData calldata vars) external returns (uint256);

    function createNFTCollection(uint256 profileId, INFTCollectionModule.NFTStruct[] calldata nfts) external;

    function createSNSAccount(uint256 profileId, ISNSAccountModule.SNSAccountStruct[] calldata snsAccounts) external;

    function createPOAPCollection(uint256 profileId, INFTCollectionModule.NFTStruct[] calldata poaps) external;

    function createScore(uint256 profileId) external;

    /*
    function addMirror(uint256 profileId, IMirrorModule.MirrorStruct calldata mirror) external;

    function addColor(uint256 profileId, string memory color) external;

    function activateColor(uint256 profileId, uint256 extensionId) external;

    function deactivateColor(uint256 profileId, uint256 extensionId) external;
    */
   
    function addWallet(uint256 profileId, address wallet) external;

    function getProfile(uint256 profileId) external view returns (ProfileStruct memory);

    function getNFTCollection(uint256 profileId) external view returns (INFTCollectionModule.NFTStruct[] memory);

    function getSNSAccounts(uint256 profileId) external view returns (ISNSAccountModule.SNSAccountStruct[] memory);

    function getPOAPCollection(uint256 profileId) external view returns (INFTCollectionModule.NFTStruct[] memory);

    function getScore(uint256 profileId) external view returns (IScoreModule.ScoreStruct[] memory);

    /*
    function getMirror(uint256 profileId) external view returns (IMirrorModule.MirrorStruct[] memory);

    function getColor(uint256 profileId) external view returns (IColorExtension.ColorStruct[] memory);
    */

    event ProfileCreated(uint256 indexed profileId, address indexed owner, uint256 blockNumber);

    event NFTCollectionCreated(uint256 indexed profileId, address indexed module, uint256 blockNumber);

    event SNSAccountCreated(uint256 indexed profileId, uint256 blockNumber);

    event ScoreCreated(uint256 indexed profileId, uint256 blockNumber);

    event MirrorAdded(uint256 indexed profileId, uint256 indexed moduleId, uint256 blockNumber);

    event ColorAdded(uint256 indexed profileId, uint256 indexed extensionId, uint256 blockNumber);

    event ColorActivated(uint256 indexed profileId, uint256 indexed extensionId, uint256 blockNumber);

    event ColorDeactivated(uint256 indexed profileId, uint256 indexed extensionId, uint256 blockNumber);

    event WalletAdded(uint256 profileId, address wallet);
}
