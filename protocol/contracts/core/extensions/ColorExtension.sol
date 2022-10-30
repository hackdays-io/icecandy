// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {IColorExtension} from "../../interfaces/IColorExtension.sol";
import {ExtensionBase} from "../bases/ExtensionBase.sol";

contract ColorExtension is IColorExtension, ExtensionBase {
    mapping(uint256 => mapping(uint256 => ColorStruct)) internal _colors;
    mapping(uint256 => uint256) internal _colorCount;

    constructor(address owner) ExtensionBase(owner) {}

    function addColor(uint256 profileId, string memory color) external override onlyProfile returns (uint256) {
        uint256 extensionId = ++_colorCount[profileId];
        _colors[profileId][extensionId].color = color;
        _colors[profileId][extensionId].active = false;
        return extensionId;
    }

    function activate(uint256 profileId, uint256 extensionId) external override onlyProfile {
        _colors[profileId][extensionId].active = true;
    }

    function deactivate(uint256 profileId, uint256 extensionId) external override onlyProfile {
        _colors[profileId][extensionId].active = false;
    }

    function getColor(uint256 profileId) external view override returns (ColorStruct[] memory) {
        ColorStruct[] memory colorArray = new ColorStruct[](_colorCount[profileId]);
        for (uint256 i = 0; i < _colorCount[profileId]; i++) {
            colorArray[i] = _colors[profileId][i + 1];
        }
        return colorArray;
    }
}
