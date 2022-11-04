// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

interface ISkillModule {
    struct SkillStruct {
        string name;
        string description;
        string link;
    }

    function addSkill(uint256 profileId, SkillStruct calldata skill) external returns (uint256);

    function getSkill(uint256 profileId) external view returns (SkillStruct[] memory);

    event SkillAdded(uint256 indexed profileId, uint256 indexed moduleId, uint256 blockNumber);
}
