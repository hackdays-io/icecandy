// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

interface IMirrorModule {
    struct MirrorStruct {
        string hoge; // todo: add fields
    }

    function addMirror(uint256 profileId, MirrorStruct calldata mirror) external;

    function getMirror(uint256 profileId) external view returns (MirrorStruct[] memory);

    event MirrorAdded(uint256 indexed profileId, uint256 indexed moduleId, uint256 blockNumber);
}
