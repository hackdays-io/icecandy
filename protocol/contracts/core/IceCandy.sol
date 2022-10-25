// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {ERC721Enumerable} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import {IIceCandy} from "../interface/IIceCandy.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract IceCandy is ERC721Enumerable, IIceCandy, Ownable {
    uint256 internal _tokenCounter;
    mapping(uint256 => IIceCandy.IceCandyStruct) internal _iceCandy;
    address internal _profile;

    constructor(address owner) ERC721("IceCandy", "ICE") {
        _transferOwnership(owner);
    }

    function setProfile(address profile) external override onlyOwner {
        _profile = profile;
    }

    function eat(uint256 tokenId) external override {
        require(_isApprovedOrOwner(msg.sender, tokenId), "IceCandy: caller is not owner or approved");
        require(_iceCandy[tokenId].isEaten == false, "IceCandy: already eaten");
        _iceCandy[tokenId].isEaten = true;
        emit Eaten(tokenId, msg.sender, block.number);
    }

    function mint(address to) external override onlyOwner {
        uint256 tokenId = ++_tokenCounter;
        _mint(to, tokenId);
    }

    function isEaten(uint256 tokenId) external view override returns (bool) {
        return _iceCandy[tokenId].isEaten;
    }

    function isApprovedForAll(address owner, address operator) public view override returns (bool) {
        if (operator == _profile) {
            return true;
        }
        return super.isApprovedForAll(owner, operator);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "http://example.com/";
    }
}
