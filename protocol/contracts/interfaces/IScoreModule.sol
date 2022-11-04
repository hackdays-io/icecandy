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

    function processScore(uint256 profileId) external;

    function getScore(uint256 profileId) external view returns (ScoreStruct[] memory);
}
