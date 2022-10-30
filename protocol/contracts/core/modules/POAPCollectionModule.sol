// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {NFTCollectionModuleBase} from "../bases/NFTCollectionModuleBase.sol";
import {ModuleBase} from "../bases/ModuleBase.sol";

contract POAPCollectionModule is NFTCollectionModuleBase {
    constructor(address owner) ModuleBase(owner) {}
}
