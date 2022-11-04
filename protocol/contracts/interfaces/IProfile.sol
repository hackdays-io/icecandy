// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {INFTCollectionModule} from "./INFTCollectionModule.sol";
import {ISNSAccountModule} from "./ISNSAccountModule.sol";
import {IScoreModule} from "./IScoreModule.sol";
import {IMirrorModule} from "./IMirrorModule.sol";
import {ISkillModule} from "./ISkillModule.sol";
import {IFlavorExtension} from "./IFlavorExtension.sol";

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

    function setGlobals(address globals) external;

    function createProfile(CreateProfileStructData calldata vars) external returns (uint256);

    function createNFTCollection(uint256 profileId, INFTCollectionModule.NFTStruct[] calldata nfts) external;

    function createPOAPCollection(uint256 profileId, INFTCollectionModule.NFTStruct[] calldata poaps) external;

    function createSNSAccount(uint256 profileId, ISNSAccountModule.SNSAccountStruct[] calldata snsAccounts) external;

    function addMirror(uint256 profileId, IMirrorModule.MirrorStruct calldata mirror) external;

    function addSkill(uint256 profileId, ISkillModule.SkillStruct calldata skill) external;

    function activateFlavor(uint256 profileId, uint256 extensionId) external;

    function deactivateFlavor(uint256 profileId, uint256 extensionId) external;

    function addWallet(uint256 profileId, address wallet) external;

    function getProfile(uint256 profileId) external view returns (ProfileStruct memory);

    function getNFTCollection(uint256 profileId) external view returns (INFTCollectionModule.NFTStruct[] memory);

    function getPOAPCollection(uint256 profileId) external view returns (INFTCollectionModule.NFTStruct[] memory);

    function getSNSAccounts(uint256 profileId) external view returns (ISNSAccountModule.SNSAccountStruct[] memory);

    function getScore(uint256 profileId) external view returns (IScoreModule.ScoreStruct[] memory);

    function getMirror(uint256 profileId) external view returns (IMirrorModule.MirrorStruct[] memory);

    function getSkill(uint256 profileId) external view returns (ISkillModule.SkillStruct[] memory);

    function getFlavor(uint256 profileId) external view returns (IFlavorExtension.FlavorStruct[] memory);

    function getProfileId(address wallet) external view returns (uint256);

    event ProfileCreated(uint256 indexed profileId, address indexed owner, uint256 blockNumber);

    event NFTCollectionCreated(uint256 indexed profileId, address indexed module, uint256 blockNumber);

    event SNSAccountCreated(uint256 indexed profileId, uint256 blockNumber);

    event ScoreCreated(uint256 indexed profileId, uint256 blockNumber);

    event MirrorAdded(uint256 indexed profileId, uint256 indexed moduleId, uint256 blockNumber);

    event SkillAdded(uint256 indexed profileId, uint256 indexed moduleId, uint256 blockNumber);

    event WalletAdded(uint256 profileId, address wallet);
}
