// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {ModuleBase} from "./ModuleBase.sol";
import {INFTCollectionModule} from "../../interfaces/INFTCollectionModule.sol";

abstract contract NFTCollectionModuleBase is INFTCollectionModule, ModuleBase {
    mapping(uint256 => mapping(uint256 => NFTStruct)) internal _nfts;
    mapping(uint256 => uint256) internal _nftCount;

    function processCollect(uint256 profileId, NFTStruct[] calldata nfts) external override onlyProfile {
        // reset NFTs
        for (uint256 i = 0; i < _nftCount[profileId]; i++) {
            delete _nfts[profileId][i];
        }
        // set NFTs
        for (uint256 i = 0; i < nfts.length; i++) {
            _nfts[profileId][i] = nfts[i];
        }
        _nftCount[profileId] = nfts.length;
    }

    function getCollection(uint256 profileId) external view override returns (NFTStruct[] memory) {
        NFTStruct[] memory nftArray = new NFTStruct[](_nftCount[profileId]);
        for (uint256 i = 0; i < _nftCount[profileId]; i++) {
            nftArray[i] = _nfts[profileId][i];
        }
        return nftArray;
    }
}
