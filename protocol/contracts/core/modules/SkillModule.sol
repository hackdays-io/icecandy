// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {ISkillModule} from "../../interfaces/ISkillModule.sol";
import {ModuleBase} from "../bases/ModuleBase.sol";

contract SkillModule is ISkillModule, ModuleBase {
    mapping(uint256 => mapping(uint256 => SkillStruct)) internal _skills;
    mapping(uint256 => uint256) internal _skillCount;

    constructor(address owner) ModuleBase(owner) {}

    function addSkill(uint256 profileId, SkillStruct calldata skill) external override onlyProfile returns (uint256) {
        uint256 moduleId = ++_skillCount[profileId];
        _skills[profileId][_skillCount[profileId]] = skill;
        return moduleId;
    }

    function getSkill(uint256 profileId) external view override returns (SkillStruct[] memory) {
        SkillStruct[] memory skillArray = new SkillStruct[](_skillCount[profileId]);
        for (uint256 i = 0; i < _skillCount[profileId]; i++) {
            skillArray[i] = _skills[profileId][i + 1];
        }
        return skillArray;
    }
}
