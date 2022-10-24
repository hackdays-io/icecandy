// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {INFTCollectionModule} from "../interface/INFTCollectionModule.sol";

interface IProfile {
    struct ProfileStruct {
        address owner;
        string handle;
        string imageURI;
        uint256 nftCollectionPubId; // 0 means no collection
    }

    struct CreateProfileStructData {
        string handle;
        string imageURI;
    }

    function createProfile(CreateProfileStructData calldata vars) external returns (uint256);

    function createNFTCollection(
        uint256 profileId,
        uint256 pubId,
        INFTCollectionModule.NFTStruct[] calldata nfts
    ) external;

    function getProfile(uint256 profileId) external view returns (ProfileStruct memory);

    function getNFTCollection(uint256 profileId, uint256 nftCollectionPubId)
        external
        view
        returns (INFTCollectionModule.NFTStruct[] memory);

    event ProfileCreated(
        uint256 indexed profileId,
        address indexed owner,
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
}
