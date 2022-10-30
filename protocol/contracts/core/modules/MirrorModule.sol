// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {IMirrorModule} from "../../interfaces/IMirrorModule.sol";
import {ModuleBase} from "../bases/ModuleBase.sol";

contract MirrorModule is IMirrorModule, ModuleBase {
    mapping(uint256 => mapping(uint256 => MirrorStruct)) internal _mirrors;
    mapping(uint256 => uint256) internal _mirrorCount;

    constructor(address owner) ModuleBase(owner) {}

    function addMirror(uint256 profileId, MirrorStruct calldata mirror)
        external
        override
        onlyProfile
        returns (uint256)
    {
        uint256 moduleId = _mirrorCount[profileId];
        _mirrors[profileId][_mirrorCount[profileId]] = mirror;
        _mirrorCount[profileId]++;
        return moduleId;
    }

    function getMirror(uint256 profileId) external view override returns (MirrorStruct[] memory) {
        MirrorStruct[] memory mirrorArray = new MirrorStruct[](_mirrorCount[profileId]);
        for (uint256 i = 0; i < _mirrorCount[profileId]; i++) {
            mirrorArray[i] = _mirrors[profileId][i];
        }
        return mirrorArray;
    }
}
