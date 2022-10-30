// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

interface ISNSAccountModule {
    struct SNSAccountStruct {
        string service;
        string userId;
        string userPageURL;
        address wallet;
    }

    function processSNSAccount(uint256 profileId, SNSAccountStruct[] calldata snsAccounts) external;

    function getSNSAccounts(uint256 profileId) external view returns (SNSAccountStruct[] memory);
}
