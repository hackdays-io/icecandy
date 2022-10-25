// SPDX-License-Identifier: MIT

/*
 * This contract is borrowed from AssetProvider by Satoshi Nakashima.
 */

pragma solidity ^0.8.10;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import "../interface/assetstore/IIceCandyAssetStore.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

// ToDo checksupport interface as Nakashima's contract
// import "@openzeppelin/contracts/interfaces/IERC165.sol";

contract IceCandyAssetStoreProvider is Ownable {
    IIceCandyAssetStore public immutable assetStore;
    string private constant PROVIDER_KEY = "IceCandyAsset";

    event Payout(string providerKey, uint256 assetId, address payable to, uint256 amount);

    struct ProviderInfo {
        string key;
        string name;
    }

    constructor(IIceCandyAssetStore _assetStore) {
        assetStore = _assetStore;
    }

    function getOwner() external view returns (address) {
        return owner();
    }

    function getProviderInfo() external pure returns (ProviderInfo memory) {
        return ProviderInfo(PROVIDER_KEY, "IceCandy Asset Store");
    }

    function totalSupply() external view returns (uint256) {
        return assetStore.getAssetCount();
    }

    function getAsset(uint256 _assetId) external view returns (IIceCandyAssetStore.Asset memory asset) {
        return assetStore.getAsset(_assetId);
    }

    function processPayout(uint256 _assetId) external payable {
        IIceCandyAssetStore.Asset memory asset = assetStore.getAsset(_assetId);
        address payable payableTo = payable(asset.creator);
        payableTo.transfer(msg.value);
        emit Payout(PROVIDER_KEY, _assetId, payableTo, msg.value);
    }

    function generateTraits(uint256 _assetId) external pure returns (string memory traits) {
        // BUGBUG: Implement this later (return Asset Name by calling getAttributes)
    }
}
