// SPDX-License-Identifier: MIT
/*
 * This contract is borrowed from AssetProvider by Satoshi Nakashima.
 */

pragma solidity ^0.8.10;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

abstract contract IceCandyAssetStoreCore is Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private assetId;

    struct Asset {
        string name;
        address creator;
        string assetURI;
    }

    mapping(uint256 => Asset) private assets;

    constructor() {
        assetId.increment();
    }

    function _registerAsset(string memory _name, string memory _assetURI) internal returns (uint256) {
        uint256 id = assetId.current();
        assetId.increment();
        assets[id] = Asset({name: _name, creator: msg.sender, assetURI: _assetURI});
        return id;
    }

    modifier assetExists(uint256 _assetId) {
        require(_assetId > 0 && _assetId < assetId.current(), "asset is not exist");
        _;
    }

    function getAssetCount() external view returns (uint256) {
        return assetId.current() - 1;
    }

    function _getAsset(uint256 _assetId) internal view returns (Asset memory) {
        return assets[_assetId];
    }
}

abstract contract IceCandyAssetStoreAdmin is IceCandyAssetStoreCore {
    mapping(address => bool) private admins;
    mapping(address => bool) internal creatorWhitelist;
    mapping(uint256 => bool) internal assetBlacklist;

    constructor() {
        creatorWhitelist[msg.sender] = true;
        admins[owner()] = true;
    }

    modifier onlyAdmin() {
        require(owner() == _msgSender() || admins[_msgSender()], "You are not the admin");
        _;
    }

    function setAdmin(address _admin) external onlyOwner {
        admins[_admin] = true;
    }

    function setCreatorWhitelistStatus(address _address, bool _status) external onlyAdmin {
        creatorWhitelist[_address] = _status;
    }

    function setAssetBlacklistStatus(uint256 _assetId, bool _status) external assetExists(_assetId) onlyAdmin {
        assetBlacklist[_assetId] = _status;
    }
}

contract IceCandyAssetStoreRegistory is IceCandyAssetStoreAdmin {
    modifier onlyWhitelistCreator() {
        require(creatorWhitelist[msg.sender], "You are not listed");
        _;
    }

    function registerAsset(string memory _name, string memory _assetURI)
        external
        onlyWhitelistCreator
        returns (uint256)
    {
        return _registerAsset(_name, _assetURI);
    }
}

contract IceCandyAssetStore is IceCandyAssetStoreRegistory {
    modifier isNotBlacklisted(uint256 _assetId) {
        require(!assetBlacklist[_assetId], "this asset cannot use");
        _;
    }

    function getAsset(uint256 _assetId) external view isNotBlacklisted(_assetId) returns (Asset memory) {
        return _getAsset(_assetId);
    }
}
