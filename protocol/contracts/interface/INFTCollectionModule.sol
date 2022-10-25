// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

interface INFTCollectionModule {
    struct NFTStruct {
        uint256 chainId;
        address contractAddress;
        uint256 tokenId;
        string tokenURI; // for cross chain
        address wallet;
    }

    function processCollect(
        uint256 profileId,
        uint256 pubId,
        NFTStruct[] calldata nfts
    ) external;

    function getNFTs(uint256 profileId, uint256 pubId) external view returns (NFTStruct[] memory);
}
