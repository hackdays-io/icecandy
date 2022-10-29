// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

interface IIceCandy {
    struct IceCandyStruct {
        bool isEaten;
        uint256 eatenProfileId;
        address eatenModule;
        uint256 eatenModuleId;
    }

    function setProfile(address profile) external;

    function eat(
        uint256 tokenId,
        uint256 profileId,
        address module,
        uint256 moduleId
    ) external;

    function mint(address to) external;

    function isEaten(uint256 tokenId) external view returns (bool);

    function balanceOfEaten(address owner) external view returns (uint256);

    function balanceOfNotEaten(address owner) external view returns (uint256);

    event Eaten(
        uint256 indexed tokenId,
        address indexed from,
        uint256 indexed profileId,
        address module,
        uint256 moduleId,
        uint256 blockNumber
    );
}
