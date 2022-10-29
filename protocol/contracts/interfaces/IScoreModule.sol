// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

interface IScoreModule {
    struct ScoreStruct {
        string name;
        uint256 point;
    }

    function setProfile(address profile) external;

    function setNFTCollectionModule(address nftCollectionModule) external;

    function setPOAPCollectionModule(address poapCollectionModule) external;

    function processScore(uint256 profileId) external;

    function getScore(uint256 profileId) external view returns (ScoreStruct[] memory);
}
