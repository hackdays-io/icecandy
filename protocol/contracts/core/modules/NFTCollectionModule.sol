// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {NFTCollectionModuleBase} from "../bases/NFTCollectionModuleBase.sol";

contract NFTCollectionModule is NFTCollectionModuleBase {
    constructor(address profile) {
        _profile = profile;
    }
}
