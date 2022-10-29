// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {ISNSAccountModule} from "../interface/ISNSAccountModule.sol";
import "hardhat/console.sol";

contract SNSAccountModule is ISNSAccountModule {
    address internal _profile;
    mapping(uint256 => mapping(uint256 => ISNSAccountModule.SNSAccountStruct[])) internal _snsAccounts;

    constructor(address profile) {
        _profile = profile;
    }

    modifier onlyProfile() {
        require(msg.sender == _profile, "SNSAccountModule: only profile");
        _;
    }

    function processSNSAccount(
        uint256 profileId,
        uint256 pubId,
        ISNSAccountModule.SNSAccountStruct calldata sns
    ) external override onlyProfile {
        _snsAccounts[profileId][pubId].push(sns);
    }

    function getSNSAccounts(uint256 profileId, uint256 pubId) external view override onlyProfile returns (ISNSAccountModule.SNSAccountStruct[] memory) {
        return _snsAccounts[profileId][pubId];
    }
}
