// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

interface IColorExtension {
    struct ColorStruct {
        string color;
        bool active;
    }

    function setProfile(address profile) external;

    function addColor(uint256 profileId, string memory color) external returns (uint256);

    function activate(uint256 profileId, uint256 moduleId) external;

    function deactivate(uint256 profileId, uint256 moduleId) external;

    function getColor(uint256 profileId) external view returns (ColorStruct[] memory);
}
