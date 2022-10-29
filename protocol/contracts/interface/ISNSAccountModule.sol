// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

interface ISNSAccountModule {
    struct SNSAccountStruct {
        string service;
        string userId;
        string userPageURL;
        address wallet;
    }

    function processSNSAccount(
        uint256 profileId,
        uint256 pubId,
        SNSAccountStruct calldata snsAccounts
    ) external;

    function getSNSAccounts(uint256 profileId, uint256 pubId) external view returns (SNSAccountStruct[] memory);

    event Query(string id, string publicSignature, address account, bytes32 queryId);
}
