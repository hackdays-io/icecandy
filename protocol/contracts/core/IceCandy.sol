// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {ERC721Enumerable} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {IIceCandy} from "../interfaces/IIceCandy.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract IceCandy is ERC721Enumerable, IIceCandy, Ownable {
    uint256 internal _tokenCounter;
    address internal _profile;
    mapping(uint256 => IIceCandy.IceCandyStruct) internal _iceCandy;
    mapping(address => uint256) private _eatenBalances;
    mapping(address => uint256) private _notEatenBalances;

    constructor(address owner) ERC721("IceCandy", "ICE") {
        _transferOwnership(owner);
    }

    function setProfile(address profile) external override onlyOwner {
        _profile = profile;
    }

    function eat(
        uint256 tokenId,
        uint256 profileId,
        address module,
        uint256 moduleId
    ) external override {
        require(_isApprovedOrOwner(msg.sender, tokenId), "IceCandy: caller is not owner or approved");
        require(_iceCandy[tokenId].isEaten == false, "IceCandy: already eaten");

        _iceCandy[tokenId].isEaten = true;
        _iceCandy[tokenId].eatenProfileId = profileId;
        _iceCandy[tokenId].eatenModule = module;
        _iceCandy[tokenId].eatenModuleId = moduleId;

        _eatenBalances[ownerOf(tokenId)] += 1;
        _notEatenBalances[ownerOf(tokenId)] -= 1;

        emit Eaten(tokenId, msg.sender, profileId, module, moduleId, block.number);
    }

    function mint(address to) external override onlyOwner {
        uint256 tokenId = ++_tokenCounter;
        _mint(to, tokenId);
    }

    function isEaten(uint256 tokenId) external view override returns (bool) {
        return _iceCandy[tokenId].isEaten;
    }

    function balanceOfEaten(address owner) external view override returns (uint256) {
        return _eatenBalances[owner];
    }

    function balanceOfNotEaten(address owner) external view override returns (uint256) {
        return _notEatenBalances[owner];
    }

    function isApprovedForAll(address owner, address operator) public view override returns (bool) {
        if (operator == _profile) {
            return true;
        }
        return super.isApprovedForAll(owner, operator);
    }

    function _mint(address to, uint256 tokenId) internal override {
        unchecked {
            _notEatenBalances[to] += 1;
        }
        super._mint(to, tokenId);
    }

    function _burn(uint256 tokenId) internal override {
        unchecked {
            if (_iceCandy[tokenId].isEaten) {
                _eatenBalances[ownerOf(tokenId)] -= 1;
            } else {
                _notEatenBalances[ownerOf(tokenId)] -= 1;
            }
        }
        super._burn(tokenId);
    }

    function _transfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override {
        unchecked {
            if (_iceCandy[tokenId].isEaten) {
                _eatenBalances[from] -= 1;
                _eatenBalances[to] += 1;
            } else {
                _notEatenBalances[from] -= 1;
                _notEatenBalances[to] += 1;
            }
        }
        super._transfer(from, to, tokenId);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 firstTokenId,
        uint256 batchSize
    ) internal {
        if (batchSize > 1) {
            if (from != address(0)) {
                unchecked {
                    if (_iceCandy[firstTokenId].isEaten) {
                        _eatenBalances[from] -= batchSize;
                    } else {
                        _notEatenBalances[from] -= batchSize;
                    }
                }
            }
            if (to != address(0)) {
                unchecked {
                    if (_iceCandy[firstTokenId].isEaten) {
                        _eatenBalances[to] += batchSize;
                    } else {
                        _notEatenBalances[to] += batchSize;
                    }
                }
            }
        }
        super._beforeTokenTransfer(from, to, batchSize);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "http://example.com/";
    }
}
