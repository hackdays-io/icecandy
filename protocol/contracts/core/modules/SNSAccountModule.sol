// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {ISNSAccountModule} from "../../interfaces/ISNSAccountModule.sol";
import {ModuleBase} from "../bases/ModuleBase.sol";

contract SNSAccountModule is ISNSAccountModule, ModuleBase {
    mapping(uint256 => ISNSAccountModule.SNSAccountStruct[]) internal _snsAccounts;

    constructor(address owner) ModuleBase(owner) {}

    function processSNSAccount(uint256 profileId, ISNSAccountModule.SNSAccountStruct[] calldata snsAccounts)
        external
        override
        onlyProfile
    {
        for (uint256 i = 0; i < snsAccounts.length; i++) {
            _snsAccounts[profileId].push(snsAccounts[i]);
        }
    }

    function getSNSAccounts(uint256 profileId)
        external
        view
        override
        returns (ISNSAccountModule.SNSAccountStruct[] memory)
    {
        return _snsAccounts[profileId];
    }
}
