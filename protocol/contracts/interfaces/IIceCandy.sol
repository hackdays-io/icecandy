// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

interface IIceCandy {
    enum IceCandyType {
        NOT_REVEALED,
        REVEALED,
        LUCKY,
        UNLUCKY
    }

    struct IceCandyStruct {
        IceCandyType iceCandyType;
        uint256 sentProfileId;
        address sentModule;
        uint256 sentModuleId;
    }

    function setGlobals(address globals) external;

    function send(
        uint256 profileId,
        address module,
        uint256 moduleId
    ) external;

    function mint(address to) external;

    function getIceCandy(uint256 tokenId) external view returns (IceCandyStruct memory);

    function balanceOfRevealed(address owner) external view returns (uint256);

    function balanceOfNotRevealed(address owner) external view returns (uint256);

    function balanceOfLucky(address owner) external view returns (uint256);

    function balanceOfUnlucky(address owner) external view returns (uint256);

    function numberOfSender(uint256 profileId) external view returns (uint256);

    function numberOfReceiver(uint256 profileId) external view returns (uint256);

    function numberOfSent(uint256 profileId) external view returns (uint256);

    function numberOfReceived(uint256 profileId) external view returns (uint256);

    event Sent(
        uint256 indexed tokenId,
        uint256 indexed from,
        uint256 indexed to,
        address module,
        uint256 moduleId,
        uint256 blockNumber
    );

    event Mint(uint256 indexed tokenId, address indexed to, IceCandyType indexed iceCandyType, uint256 blockNumber);
}
