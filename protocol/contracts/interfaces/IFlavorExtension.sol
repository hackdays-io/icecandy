// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

interface IFlavorExtension {
    struct FlavorStruct {
        FlavorType flavorType;
        bool active;
    }

    enum FlavorType {
        RICH,
        REFRESHING,
        CHOCOLATE,
        FRUITY,
        ELEGANT
    }

    function addFlavor(uint256 profileId) external;

    function activate(uint256 profileId, uint256 moduleId) external;

    function deactivate(uint256 profileId, uint256 moduleId) external;

    function getFlavor(uint256 profileId) external view returns (FlavorStruct[] memory);

    event FlavorAdded(uint256 indexed profileId, uint256 indexed extensionId, FlavorType flavorType, uint256 blockNumber);

    event FlavorActivated(uint256 indexed profileId, uint256 indexed extensionId, uint256 blockNumber);

    event FlavorDeactivated(uint256 indexed profileId, uint256 indexed extensionId, uint256 blockNumber);
}
