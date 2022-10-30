// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {IScoreModule} from "../../interfaces/IScoreModule.sol";
import {ModuleBase} from "../bases/ModuleBase.sol";
import {IGlobals} from "../../interfaces/IGlobals.sol";

contract ScoreModule is IScoreModule, ModuleBase {
    mapping(uint256 => mapping(address => ScoreStruct)) internal _scores;

    constructor(address owner) ModuleBase(owner) {}

    function processScore(uint256 profileId) external override onlyProfile {
        _scores[profileId][address(0)].name = "PROFILE";
        _scores[profileId][address(0)].point = 300;
        _scores[profileId][IGlobals(_globals).getNFTCollectionModule()].name = "NFT";
        _scores[profileId][IGlobals(_globals).getNFTCollectionModule()].point = 100;
        _scores[profileId][IGlobals(_globals).getPOAPCollectionModule()].name = "POAP";
        _scores[profileId][IGlobals(_globals).getPOAPCollectionModule()].point = 200;
    }

    function getScore(uint256 profileId) external view override returns (ScoreStruct[] memory) {
        ScoreStruct[] memory scoreArray = new ScoreStruct[](3);
        scoreArray[0] = _scores[profileId][address(0)];
        scoreArray[1] = _scores[profileId][IGlobals(_globals).getNFTCollectionModule()];
        scoreArray[2] = _scores[profileId][IGlobals(_globals).getPOAPCollectionModule()];
        return scoreArray;
    }
}
