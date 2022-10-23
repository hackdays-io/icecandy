// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {ERC721Enumerable} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import {IProfile} from "../interface/IProfile.sol";

contract Profile is ERC721Enumerable, IProfile {
    mapping(uint256 => IProfile.ProfileStruct) internal _profileById;
    uint256 internal _profileCounter;

    constructor() ERC721("Icecandy", "AME") {}

    function createProfile(IProfile.CreateProfileData memory vars) external override returns (uint256) {
        // increment id
        uint256 profileId = ++_profileCounter;
        // mint token
        _mint(vars.to, profileId);
        // create profile
        _profileById[profileId].handle = vars.handle;
        _profileById[profileId].imageURI = vars.imageURI;
        // emit event
        emit ProfileCreated(profileId, msg.sender, vars.to, vars.handle, vars.imageURI, block.number);
        // return profile id
        return profileId;
    }

    function getProfile(uint256 profileId) external view override returns (IProfile.ProfileStruct memory) {
        return _profileById[profileId];
    }

    function _baseURI() internal pure override returns (string memory) {
        return "http://example.com/";
    }

    event ProfileCreated(
        uint256 indexed profileId,
        address indexed creator,
        address indexed to,
        string handle,
        string imageURI,
        uint256 blockNumber
    );
}
