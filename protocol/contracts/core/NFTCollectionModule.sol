// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {INFTCollectionModule} from "../interface/INFTCollectionModule.sol";

contract NFTCollectionModule is INFTCollectionModule {
    address internal _profile;
    mapping(uint256 => mapping(uint256 => INFTCollectionModule.NFTStruct[])) internal _nfts;

    constructor(address profile) {
        _profile = profile;
    }

    modifier onlyProfile() {
        require(msg.sender == _profile, "NFTCollectionModule: only profile");
        _;
    }

    function processCollect(
        uint256 profileId,
        uint256 pubId,
        NFTStruct[] calldata nfts
    ) external override onlyProfile {
        // set NFTs
        for (uint256 i = 0; i < nfts.length; i++) {
            _nfts[profileId][pubId].push(nfts[i]);
        }
    }

    function getNFTs(uint256 profileId, uint256 pubId) external view override onlyProfile returns (NFTStruct[] memory) {
        return _nfts[profileId][pubId];
    }
}
