// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

interface IGlobals {
    function setIceCandy(address icecandy) external;

    function setProfile(address profile) external;

    function setNFTCollectionModule(address nftCollectionModule) external;

    function setPOAPCollectionModule(address poapCollectionModule) external;

    function setSNSAccountModule(address snsAccountModule) external;

    function setScoreModule(address scoreModule) external;

    function setMirrorModule(address mirrorModule) external;

    function setSkillModule(address skillModule) external;

    function setFlavorExtension(address flavorExtension) external;

    function getIceCandy() external view returns (address);

    function getProfile() external view returns (address);

    function getNFTCollectionModule() external view returns (address);

    function getPOAPCollectionModule() external view returns (address);

    function getSNSAccountModule() external view returns (address);

    function getScoreModule() external view returns (address);

    function getMirrorModule() external view returns (address);

    function getSkillModule() external view returns (address);

    function getFlavorExtension() external view returns (address);
}
