// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

interface ISNSModule {
    struct SNSStruct {
        string service;
        string user_id;
        string userPageURL;
        string signature;
        address wallet;
    }

    function processSNSAccount(
        uint256 profileId,
        uint256 pubId,
        SNSStruct calldata snsAccounts
    ) external;

    function getSNSAccounts(uint256 profileId, uint256 pubId) external view returns (SNSStruct[] memory);

    event Query(string id, string publicSignature, address account, bytes32 queryId);
}
