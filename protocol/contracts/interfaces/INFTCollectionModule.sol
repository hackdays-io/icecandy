// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

interface INFTCollectionModule {
    struct NFTStruct {
        uint256 chainId;
        address contractAddress;
        uint256 tokenId;
        string tokenURI; // for cross chain
        address owner;
    }

    function createCollection(uint256 profileId, NFTStruct[] calldata nfts) external;

    function getCollection(uint256 profileId) external view returns (NFTStruct[] memory);

    event NFTCollectionCreated(uint256 indexed profileId, address indexed module, uint256 blockNumber);
}
