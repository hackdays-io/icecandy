// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/access/Ownable.sol";
import {IMirrorModule} from "../../interfaces/IMirrorModule.sol";

contract MirrorModule is IMirrorModule, Ownable {
    address internal _profile;
    mapping(uint256 => mapping(uint256 => MirrorStruct)) internal _mirrors;
    mapping(uint256 => uint256) internal _mirrorCount;

    constructor(address owner) {
        _transferOwnership(owner);
    }

    modifier onlyProfile() {
        require(msg.sender == _profile, "MirrorModule: only profile");
        _;
    }

    function setProfile(address profile) external onlyOwner {
        _profile = profile;
    }

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

    function getMirror(uint256 profileId) external view override onlyProfile returns (MirrorStruct[] memory) {
        MirrorStruct[] memory mirrorArray = new MirrorStruct[](_mirrorCount[profileId]);
        for (uint256 i = 0; i < _mirrorCount[profileId]; i++) {
            mirrorArray[i] = _mirrors[profileId][i];
        }
        return mirrorArray;
    }
}
