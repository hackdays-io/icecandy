// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {IGlobals} from "../interfaces/IGlobals.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Globals is IGlobals, Ownable {
    address private _iceCandy;
    address private _profile;
    address private _nftCollectionModule;
    address private _poapCollectionModule;
    address private _scoreModule;
    address private _mirrorModule;
    address private _snsAccountModule;
    address private _colorExtension;

    constructor(address owner) {
        _transferOwnership(owner);
    }

    function setIceCandy(address icecandy) external override onlyOwner {
        _iceCandy = icecandy;
    }

    function setProfile(address profile) external override onlyOwner {
        _profile = profile;
    }

    function setNFTCollectionModule(address nftCollectionModule_) external override onlyOwner {
        _nftCollectionModule = nftCollectionModule_;
    }

    function setPOAPCollectionModule(address poapCollectionModule_) external override onlyOwner {
        _poapCollectionModule = poapCollectionModule_;
    }

    function setScoreModule(address scoreModule_) external override onlyOwner {
        _scoreModule = scoreModule_;
    }

    function setMirrorModule(address mirrorModule_) external override onlyOwner {
        _mirrorModule = mirrorModule_;
    }

    function setSNSAccountModule(address snsAccountModule_) external override onlyOwner {
        _snsAccountModule = snsAccountModule_;
    }

    function setColorExtension(address colorExtension_) external override onlyOwner {
        _colorExtension = colorExtension_;
    }

    function getIceCandy() external view override returns (address) {
        return _iceCandy;
    }

    function getProfile() external view override returns (address) {
        return _profile;
    }

    function getNFTCollectionModule() external view override returns (address) {
        return _nftCollectionModule;
    }

    function getPOAPCollectionModule() external view override returns (address) {
        return _poapCollectionModule;
    }

    function getScoreModule() external view override returns (address) {
        return _scoreModule;
    }

    function getMirrorModule() external view override returns (address) {
        return _mirrorModule;
    }

    function getSNSAccountModule() external view override returns (address) {
        return _snsAccountModule;
    }

    function getColorExtension() external view override returns (address) {
        return _colorExtension;
    }
}
