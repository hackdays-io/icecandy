// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/access/Ownable.sol";
import {IGlobals} from "../../interfaces/IGlobals.sol";

abstract contract ModuleBase is Ownable {
    address internal _globals;

    constructor(address owner) {
        _transferOwnership(owner);
    }

    modifier onlyProfile() {
        require(msg.sender == IGlobals(_globals).getProfile(), "ModuleBase: only profile");
        _;
    }

    modifier onlyProfileAndIceCandy() {
        require(
            msg.sender == IGlobals(_globals).getProfile() || msg.sender == IGlobals(_globals).getIceCandy(),
            "ModuleBase: only profile"
        );
        _;
    }

    function setGlobals(address globals) external onlyOwner {
        _globals = globals;
    }
}
