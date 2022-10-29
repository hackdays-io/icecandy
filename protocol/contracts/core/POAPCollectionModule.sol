// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {NFTCollectionModuleBase} from "../base/NFTCollectionModuleBase.sol";

contract POAPCollectionModule is NFTCollectionModuleBase {
    constructor(address profile) {
        _profile = profile;
    }
}
