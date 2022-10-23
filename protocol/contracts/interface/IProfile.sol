// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

interface IProfile {
    struct ProfileStruct {
        string handle;
        string imageURI;
    }

    struct CreateProfileData {
        address to;
        string handle;
        string imageURI;
    }

    function createProfile(CreateProfileData calldata vars) external returns (uint256);

    function getProfile(uint256 profileId) external view returns (ProfileStruct memory);
}
