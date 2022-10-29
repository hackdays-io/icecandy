// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

interface IMirrorModule {
    struct MirrorStruct {
        string hoge; // todo: add fields
    }

    function setProfile(address profile) external;

    function addMirror(uint256 profileId, MirrorStruct calldata mirror) external returns(uint256);

    function getMirror(uint256 profileId) external view returns (MirrorStruct[] memory);
}
