// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

interface IScoreModule {
    enum ScoreType {
        PROFILE,
        NFT,
        POAP
    }

    struct ScoreStruct {
        ScoreType scoreType;
        uint256 point;
    }

    function createScore(uint256 profileId) external;

    function getScore(uint256 profileId) external view returns (ScoreStruct[] memory);

    event ScoreCreated(uint256 indexed profileId, uint256 blockNumber);
}
