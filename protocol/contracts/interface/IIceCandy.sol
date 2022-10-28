// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

interface IIceCandy {
    struct IceCandyStruct {
        bool isEaten;
    }

    function setProfile(address profile) external;

    function eat(uint256 tokenId) external;

    function mint(address to) external;

    function isEaten(uint256 tokenId) external view returns (bool);

    function balanceOfEaten(address owner) external view returns (uint256);

    function balanceOfNotEaten(address owner) external view returns (uint256);

    event Eaten(uint256 indexed tokenId, address indexed owner, uint256 blockNumber);
}
