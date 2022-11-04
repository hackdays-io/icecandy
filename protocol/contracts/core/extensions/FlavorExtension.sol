// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {IFlavorExtension} from "../../interfaces/IFlavorExtension.sol";
import {IScoreModule} from "../../interfaces/IScoreModule.sol";
import {IGlobals} from "../../interfaces/IGlobals.sol";
import {ExtensionBase} from "../bases/ExtensionBase.sol";
import {ExtensionLogic} from "../../libraries/ExtensionLogic.sol";

contract FlavorExtension is IFlavorExtension, ExtensionBase {
    mapping(uint256 => mapping(uint256 => FlavorStruct)) internal _flavors;
    mapping(uint256 => uint256) internal _flavorCount;

    constructor(address owner) ExtensionBase(owner) {}

    function addFlavor(uint256 profileId) external override onlyIceCandy {
        FlavorType[] memory flavorTypes = ExtensionLogic.judgeFlavorExtension(
            IScoreModule(IGlobals(_globals).getScoreModule()).getScore(profileId)
        );
        for (uint256 i = 0; i < flavorTypes.length; i++) {
            bool hasFlavor = false;
            for (uint256 j = 0; j < _flavorCount[profileId]; j++) {
                if (_flavors[profileId][j + 1].flavorType == flavorTypes[i]) {
                    hasFlavor = true;
                    break;
                }
            }
            if (!hasFlavor) {
                ++_flavorCount[profileId];
                _flavors[profileId][_flavorCount[profileId]] = FlavorStruct(flavorTypes[i], false);
                emit FlavorAdded(profileId, _flavorCount[profileId], flavorTypes[i], block.number);
            }
        }
    }

    function activate(uint256 profileId, uint256 extensionId) external override onlyProfile {
        _flavors[profileId][extensionId].active = true;
        emit FlavorActivated(profileId, extensionId, block.number);
    }

    function deactivate(uint256 profileId, uint256 extensionId) external override onlyProfile {
        _flavors[profileId][extensionId].active = false;
        emit FlavorDeactivated(profileId, extensionId, block.number);
    }

    function getFlavor(uint256 profileId) external view override returns (FlavorStruct[] memory) {
        FlavorStruct[] memory flavorArray = new FlavorStruct[](_flavorCount[profileId]);
        for (uint256 i = 0; i < _flavorCount[profileId]; i++) {
            flavorArray[i] = _flavors[profileId][i + 1];
        }
        return flavorArray;
    }
}
