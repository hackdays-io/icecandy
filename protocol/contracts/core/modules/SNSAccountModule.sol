// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {ISNSAccountModule} from "../../interfaces/ISNSAccountModule.sol";
import {ModuleBase} from "../bases/ModuleBase.sol";

contract SNSAccountModule is ISNSAccountModule, ModuleBase {
    mapping(uint256 => mapping(uint256 => SNSAccountStruct)) internal _sns;
    mapping(uint256 => uint256) internal _snsCount;

    constructor(address owner) ModuleBase(owner) {}

    function processSNSAccount(uint256 profileId, SNSAccountStruct[] calldata sns) external override onlyProfile {
        // reset SNS
        for (uint256 i = 0; i < _snsCount[profileId]; i++) {
            delete _sns[profileId][i + 1];
        }
        // set SNS
        for (uint256 i = 0; i < sns.length; i++) {
            _sns[profileId][i + 1] = sns[i];
        }
        _snsCount[profileId] = sns.length;
    }

    function getSNSAccounts(uint256 profileId) external view override returns (SNSAccountStruct[] memory) {
        SNSAccountStruct[] memory snsArray = new SNSAccountStruct[](_snsCount[profileId]);
        for (uint256 i = 0; i < _snsCount[profileId]; i++) {
            snsArray[i] = _sns[profileId][i + 1];
        }
        return snsArray;
    }
}
