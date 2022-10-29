// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {IScoreModule} from "../../interfaces/IScoreModule.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ScoreModule is IScoreModule, Ownable {
    mapping(uint256 => mapping(address => ScoreStruct)) internal _scores;
    address internal _profile;
    address internal _nftCollectionModule;
    address internal _poapCollectionModule;

    constructor(address owner) {
        _transferOwnership(owner);
    }

    modifier onlyProfile() {
        require(msg.sender == _profile, "ScoreModule: only profile");
        _;
    }

    function setProfile(address profile) external override onlyOwner {
        _profile = profile;
    }

    function setNFTCollectionModule(address nftCollectionModule) external override onlyOwner {
        _nftCollectionModule = nftCollectionModule;
    }

    function setPOAPCollectionModule(address poapCollectionModule) external override onlyOwner {
        _poapCollectionModule = poapCollectionModule;
    }

    function processScore(uint256 profileId) external override onlyProfile {
        _scores[profileId][address(0)].name = "PROFILE";
        _scores[profileId][address(0)].point = 300;
        _scores[profileId][_nftCollectionModule].name = "NFT";
        _scores[profileId][_nftCollectionModule].point = 100;
        _scores[profileId][_poapCollectionModule].name = "POAP";
        _scores[profileId][_poapCollectionModule].point = 200;
    }

    function getScore(uint256 profileId) external view override onlyProfile returns (ScoreStruct[] memory) {
        ScoreStruct[] memory scoreArray = new ScoreStruct[](3);
        scoreArray[0] = _scores[profileId][address(0)];
        scoreArray[1] = _scores[profileId][_nftCollectionModule];
        scoreArray[2] = _scores[profileId][_poapCollectionModule];
        return scoreArray;
    }
}
