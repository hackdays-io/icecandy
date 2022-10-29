// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {ISNSAccountModule} from "../../interfaces/ISNSAccountModule.sol";

contract SNSAccountModule is ISNSAccountModule {
    address internal _profile;
    mapping(uint256 => ISNSAccountModule.SNSAccountStruct[]) internal _snsAccounts;

    constructor(address profile) {
        _profile = profile;
    }

    modifier onlyProfile() {
        require(msg.sender == _profile, "SNSAccountModule: only profile");
        _;
    }

    function processSNSAccount(
        uint256 profileId,
        ISNSAccountModule.SNSAccountStruct[] calldata snsAccounts
    ) external override onlyProfile {
        for (uint i = 0; i < snsAccounts.length; i++) {
            _snsAccounts[profileId].push(snsAccounts[i]);
        }
    }

    function getSNSAccounts(uint256 profileId) external view override onlyProfile returns (ISNSAccountModule.SNSAccountStruct[] memory) {
        return _snsAccounts[profileId];
    }
}
