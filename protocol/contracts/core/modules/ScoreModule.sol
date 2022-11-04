// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {IScoreModule} from "../../interfaces/IScoreModule.sol";
import {ModuleBase} from "../bases/ModuleBase.sol";
import {IGlobals} from "../../interfaces/IGlobals.sol";
import {IIceCandy} from "../../interfaces/IIceCandy.sol";
import {IProfile} from "../../interfaces/IProfile.sol";
import {ScoreLogic} from "../../libraries/ScoreLogic.sol";

contract ScoreModule is IScoreModule, ModuleBase {
    mapping(uint256 => mapping(address => ScoreStruct)) internal _scores;

    constructor(address owner) ModuleBase(owner) {}

    function processScore(uint256 profileId) external override onlyProfileAndIceCandy {
        _scores[profileId][address(0)].scoreType = IScoreModule.ScoreType.PROFILE;
        _scores[profileId][address(0)].point = _getProfileScore(profileId);
        _scores[profileId][IGlobals(_globals).getNFTCollectionModule()].scoreType = IScoreModule.ScoreType.NFT;
        _scores[profileId][IGlobals(_globals).getNFTCollectionModule()].point = _getNFTScore(profileId);
        _scores[profileId][IGlobals(_globals).getPOAPCollectionModule()].scoreType = IScoreModule.ScoreType.POAP;
        _scores[profileId][IGlobals(_globals).getPOAPCollectionModule()].point = _getPOAPScore(profileId);
    }

    function getScore(uint256 profileId) external view override returns (ScoreStruct[] memory) {
        ScoreStruct[] memory scoreArray = new ScoreStruct[](3);
        scoreArray[0] = _scores[profileId][address(0)];
        scoreArray[1] = _scores[profileId][IGlobals(_globals).getNFTCollectionModule()];
        scoreArray[2] = _scores[profileId][IGlobals(_globals).getPOAPCollectionModule()];
        return scoreArray;
    }

    function _getProfileScore(uint256 profileId) internal view returns (uint256) {
        return
            ScoreLogic.calcProfileScore(
                IIceCandy(IGlobals(_globals).getIceCandy()).numberOfSentProfiles(profileId),
                IIceCandy(IGlobals(_globals).getIceCandy()).numberOfReceivedProfiles(profileId),
                IIceCandy(IGlobals(_globals).getIceCandy()).numberOfSentIceCandies(profileId),
                IIceCandy(IGlobals(_globals).getIceCandy()).numberOfReceivedIceCandies(profileId)
            );
    }

    function _getNFTScore(uint256 profileId) internal view returns (uint256) {
        return ScoreLogic.calcNFTScore(IProfile(IGlobals(_globals).getProfile()).getNFTCollection(profileId).length);
    }

    function _getPOAPScore(uint256 profileId) internal view returns (uint256) {
        return ScoreLogic.calcNFTScore(IProfile(IGlobals(_globals).getProfile()).getPOAPCollection(profileId).length);
    }
}
