// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {ISNSModule} from "../interface/ISNSModule.sol";
import "hardhat/console.sol";

contract NFTCollectionModule is ISNSModule {
    address internal _profile;
    mapping(uint256 => mapping(uint256 => ISNSModule.SNSStruct[])) internal _snsAccounts;

    constructor(address profile) {
        _profile = profile;
    }

    modifier onlyProfile() {
        require(msg.sender == _profile, "SNSModule: only profile");
        _;
    }

    function processSNSAccount(
        uint256 profileId,
        uint256 pubId,
        ISNSModule.SNSStruct calldata sns
    ) external override onlyProfile {
        // set NFTs
        emit Query(sns.user_id, sns.signature, msg.sender, '11');
        _snsAccounts[profileId][pubId].push(sns);
    }

    function getSNSAccounts(uint256 profileId, uint256 pubId) external view override onlyProfile returns (ISNSModule.SNSStruct[] memory) {
        return _snsAccounts[profileId][pubId];
    }
}
