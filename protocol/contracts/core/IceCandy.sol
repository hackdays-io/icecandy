// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import {ERC721Enumerable} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {IIceCandy} from "../interfaces/IIceCandy.sol";
import {IGlobals} from "../interfaces/IGlobals.sol";
import {IProfile} from "../interfaces/IProfile.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract IceCandy is ERC721Enumerable, IIceCandy, Ownable {
    uint256 private _tokenCounter;
    address private _globals;
    mapping(uint256 => IIceCandy.IceCandyStruct) private _iceCandy;
    mapping(address => uint256) private _revealed;
    mapping(address => uint256) private _notRevealed;
    mapping(address => uint256) private _luckey;
    mapping(address => uint256) private _unluckey;
    mapping(uint256 => uint256[]) private _sentTo;
    mapping(uint256 => uint256[]) private _receivedFrom;
    mapping(uint256 => HistoryStruct[]) private _sentHistory;
    mapping(uint256 => HistoryStruct[]) private _receivedHistory;
    mapping(address => uint256) private _availableTokenId;

    constructor(address owner) ERC721("IceCandy", "ICE") {
        _transferOwnership(owner);
    }

    function setGlobals(address globals) external override onlyOwner {
        _globals = globals;
    }

    function send(
        uint256 profileId,
        address module,
        uint256 moduleId
    ) external override {
        uint256 tokenId = _availableTokenId[msg.sender];
        uint256 fromProfileId = IProfile(IGlobals(_globals).getProfile()).getProfileId(msg.sender);

        require(tokenId > 0, "IceCandy: you don't have a IceCandy");
        require(
            _iceCandy[tokenId].iceCandyType == IIceCandy.IceCandyType.NOT_REVEALED,
            "IceCandy: only not revealed can send"
        );

        // update IceCandyStruct
        _iceCandy[tokenId].iceCandyType = IIceCandy.IceCandyType.REVEALED;
        _iceCandy[tokenId].sentProfileId = profileId;
        _iceCandy[tokenId].sentModule = module;
        _iceCandy[tokenId].sentModuleId = moduleId;

        // update _senders
        bool isExist = false;
        for (uint256 i = 0; i < _sentTo[fromProfileId].length; i++) {
            if (_sentTo[fromProfileId][i] == profileId) {
                isExist = true;
                break;
            }
        }
        if (!isExist) _sentTo[fromProfileId].push(profileId);

        // update _receivers
        isExist = false;
        for (uint256 i = 0; i < _receivedFrom[profileId].length; i++) {
            if (_receivedFrom[profileId][i] == fromProfileId) {
                isExist = true;
                break;
            }
        }
        if (!isExist) _receivedFrom[profileId].push(fromProfileId);

        // update _sentHistory
        _sentHistory[fromProfileId].push(
            HistoryStruct({tokenId: tokenId, profileId: profileId, module: module, moduleId: moduleId})
        );

        // update _receivedHistory
        _receivedHistory[profileId].push(
            HistoryStruct({tokenId: tokenId, profileId: fromProfileId, module: module, moduleId: moduleId})
        );

        _availableTokenId[msg.sender] = 0;

        unchecked {
            _notRevealed[ownerOf(tokenId)] -= 1;
            _revealed[ownerOf(tokenId)] += 1;
        }

        // transfer revealed icecandy
        _transfer(msg.sender, IProfile(IGlobals(_globals).getProfile()).getProfile(profileId).wallets[0], tokenId);

        // mint lucky or unlucky icecandy to sender
        ++_tokenCounter;
        if (_tokenCounter % 2 == 0) {
            _mint(msg.sender, _tokenCounter, IIceCandy.IceCandyType.LUCKY);
        } else {
            _mint(msg.sender, _tokenCounter, IIceCandy.IceCandyType.UNLUCKY);
        }

        emit Sent(
            tokenId,
            IProfile(IGlobals(_globals).getProfile()).getProfileId(msg.sender),
            profileId,
            module,
            moduleId,
            block.number
        );
    }

    function mint(address to) external override onlyOwner {
        uint256 tokenId = ++_tokenCounter;
        require(_availableTokenId[to] == 0, "IceCandy: only one mint per address");
        _mint(to, tokenId, IIceCandy.IceCandyType.NOT_REVEALED);
    }

    function getIceCandy(uint256 tokenId) external view override returns (IceCandyStruct memory) {
        return _iceCandy[tokenId];
    }

    function balanceOfRevealed(address owner) external view override returns (uint256) {
        return _revealed[owner];
    }

    function balanceOfNotRevealed(address owner) external view override returns (uint256) {
        return _notRevealed[owner];
    }

    function balanceOfLucky(address owner) external view override returns (uint256) {
        return _luckey[owner];
    }

    function balanceOfUnlucky(address owner) external view override returns (uint256) {
        return _unluckey[owner];
    }

    function numberOfSentTo(uint256 profileId) external view override returns (uint256) {
        return _sentTo[profileId].length;
    }

    function numberOfReceivedFrom(uint256 profileId) external view override returns (uint256) {
        return _receivedFrom[profileId].length;
    }

    function numberOfSent(uint256 profileId) external view override returns (uint256) {
        return _sentHistory[profileId].length;
    }

    function numberOfReceived(uint256 profileId) external view override returns (uint256) {
        return _receivedHistory[profileId].length;
    }

    function _mint(
        address to,
        uint256 tokenId,
        IIceCandy.IceCandyType iceCandyType
    ) internal {
        _iceCandy[tokenId].iceCandyType = iceCandyType;
        unchecked {
            if (iceCandyType == IIceCandy.IceCandyType.NOT_REVEALED) {
                _notRevealed[to] += 1;
                _availableTokenId[to] = tokenId;
            } else if (iceCandyType == IIceCandy.IceCandyType.LUCKY) {
                _luckey[to] += 1;
            } else if (iceCandyType == IIceCandy.IceCandyType.UNLUCKY) {
                _unluckey[to] += 1;
            }
        }
        super._mint(to, tokenId);
        emit Mint(tokenId, to, iceCandyType, block.number);
    }

    function _burn(uint256 tokenId) internal override {
        unchecked {
            if (_iceCandy[tokenId].iceCandyType == IIceCandy.IceCandyType.NOT_REVEALED) {
                _notRevealed[ownerOf(tokenId)] -= 1;
            } else if (_iceCandy[tokenId].iceCandyType == IIceCandy.IceCandyType.REVEALED) {
                _revealed[ownerOf(tokenId)] -= 1;
            } else if (_iceCandy[tokenId].iceCandyType == IIceCandy.IceCandyType.LUCKY) {
                _luckey[ownerOf(tokenId)] -= 1;
            } else if (_iceCandy[tokenId].iceCandyType == IIceCandy.IceCandyType.UNLUCKY) {
                _unluckey[ownerOf(tokenId)] -= 1;
            }
        }
        super._burn(tokenId);
    }

    function _transfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override {
        require(
            _iceCandy[tokenId].iceCandyType != IIceCandy.IceCandyType.NOT_REVEALED,
            "IceCandy: not revealed can't transfer"
        );
        unchecked {
            if (_iceCandy[tokenId].iceCandyType == IIceCandy.IceCandyType.REVEALED) {
                _revealed[from] -= 1;
                _revealed[to] += 1;
            } else if (_iceCandy[tokenId].iceCandyType == IIceCandy.IceCandyType.LUCKY) {
                _luckey[from] -= 1;
                _luckey[to] += 1;
            } else if (_iceCandy[tokenId].iceCandyType == IIceCandy.IceCandyType.UNLUCKY) {
                _unluckey[from] -= 1;
                _unluckey[to] += 1;
            }
        }
        super._transfer(from, to, tokenId);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "http://example.com/";
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        if (_iceCandy[tokenId].iceCandyType == IIceCandy.IceCandyType.REVEALED) {
            return "ipfs://bafybeia6z47fclyvyladuzfu5srqhthuu2l6uw2yxxsankpmatygrgiazm/iceCandy_eaten.json";
        } else if (_iceCandy[tokenId].iceCandyType == IIceCandy.IceCandyType.NOT_REVEALED) {
            return "ipfs://bafybeieqpdxscoeheazxwnj2jq4n3n6hfkmzvfb7dytya62fay6z2zqrua/iceCandy_notEaten.json";
        } else if (_iceCandy[tokenId].iceCandyType == IIceCandy.IceCandyType.LUCKY) {
            return "dummy";
        } else {
            return "dummy";
        }
    }
}
