// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

/*
 * This contract is borrowed from AssetProvider by Satoshi Nakashima.
 */

interface IIceCandyAssetStore {
    struct Asset {
        string name;
        address creator;
        string assetURI;
    }

    function getAsset(uint256 _assetId) external view returns (Asset memory);

    function getAssetCount() external view returns (uint256);

    function owner() external view returns (address);

    function registerAsset(Asset memory) external returns (uint256);

    function renounceOwnership() external;

    function setAdmin(address _admin) external;

    function setAssetBlacklistStatus(uint256 _assetId, bool _status) external;

    function setCreatorWhitelistStatus(address _address, bool _status) external;

    function transferOwnership(address newOwner) external;
}
