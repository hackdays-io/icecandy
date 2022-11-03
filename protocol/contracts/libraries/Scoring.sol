// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {IIceCandy} from "../interfaces/IIceCandy.sol";

library Scoring {
    function calcProfileScore(
        uint256 numberOfSentProfiles,
        uint256 unmberOfReceivedProfiles,
        uint256 numberOfSentIceCandies,
        uint256 umberOfReceivedIceCandies
    ) internal pure returns (uint256) {
        uint256 score;
        score += numberOfSentProfiles * 100;
        score += unmberOfReceivedProfiles * 100;
        score += numberOfSentIceCandies * 10;
        score += umberOfReceivedIceCandies * 10;
        return score;
    }

    function calcNFTScore(uint256 numberOfNFTs) internal pure returns (uint256) {
        return numberOfNFTs * 10;
    }

    function calcPOAPScore(uint256 numberOfPOAPs) internal pure returns (uint256) {
        return numberOfPOAPs * 10;
    }
}
