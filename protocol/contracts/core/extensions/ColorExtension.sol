// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/access/Ownable.sol";
import {IColorExtension} from "../../interfaces/IColorExtension.sol";

contract ColorExtension is IColorExtension, Ownable {
    address internal _profile;
    mapping(uint256 => mapping(uint256 => ColorStruct)) internal _colors;
    mapping(uint256 => uint256) internal _colorCount;

    constructor(address owner) {
        _transferOwnership(owner);
    }

    modifier onlyProfile() {
        require(msg.sender == _profile, "ColorExtension: only profile");
        _;
    }

    function setProfile(address profile) external onlyOwner {
        _profile = profile;
    }

    function addColor(uint256 profileId, string memory color) external override onlyProfile returns (uint256) {
        uint256 extensionId = _colorCount[profileId];
        _colors[profileId][extensionId].color = color;
        _colors[profileId][extensionId].active = false;
        _colorCount[profileId]++;
        return extensionId;
    }

    function activate(uint256 profileId, uint256 extensionId) external override onlyProfile {
        _colors[profileId][extensionId].active = true;
    }

    function deactivate(uint256 profileId, uint256 extensionId) external override onlyProfile {
        _colors[profileId][extensionId].active = false;
    }

    function getColor(uint256 profileId) external view override onlyProfile returns (ColorStruct[] memory) {
        ColorStruct[] memory colorArray = new ColorStruct[](_colorCount[profileId]);
        for (uint256 i = 0; i < _colorCount[profileId]; i++) {
            colorArray[i] = _colors[profileId][i];
        }
        return colorArray;
    }
}
