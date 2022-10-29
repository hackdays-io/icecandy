/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IProfile,
  IProfileInterface,
} from "../../../contracts/interfaces/IProfile";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "MirrorCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "module",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "NFTCollectionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "ProfileCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "SNSAccountCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "ScoreCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "WalletAdded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "string",
            name: "hoge",
            type: "string",
          },
        ],
        internalType: "struct IMirrorModule.MirrorStruct",
        name: "mirror",
        type: "tuple",
      },
    ],
    name: "addMirror",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "addWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "tokenURI",
            type: "string",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        internalType: "struct INFTCollectionModule.NFTStruct[]",
        name: "nfts",
        type: "tuple[]",
      },
    ],
    name: "createNFTCollection",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "tokenURI",
            type: "string",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        internalType: "struct INFTCollectionModule.NFTStruct[]",
        name: "poaps",
        type: "tuple[]",
      },
    ],
    name: "createPOAPCollection",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "introduction",
            type: "string",
          },
          {
            internalType: "string",
            name: "imageURI",
            type: "string",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "contractAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "tokenURI",
                type: "string",
              },
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
            ],
            internalType: "struct INFTCollectionModule.NFTStruct[]",
            name: "nfts",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "chainId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "contractAddress",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "tokenURI",
                type: "string",
              },
              {
                internalType: "address",
                name: "owner",
                type: "address",
              },
            ],
            internalType: "struct INFTCollectionModule.NFTStruct[]",
            name: "poaps",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "string",
                name: "service",
                type: "string",
              },
              {
                internalType: "string",
                name: "userId",
                type: "string",
              },
              {
                internalType: "string",
                name: "userPageURL",
                type: "string",
              },
              {
                internalType: "address",
                name: "wallet",
                type: "address",
              },
            ],
            internalType: "struct ISNSAccountModule.SNSAccountStruct[]",
            name: "snsAccounts",
            type: "tuple[]",
          },
        ],
        internalType: "struct IProfile.CreateProfileStructData",
        name: "vars",
        type: "tuple",
      },
    ],
    name: "createProfile",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "string",
            name: "service",
            type: "string",
          },
          {
            internalType: "string",
            name: "userId",
            type: "string",
          },
          {
            internalType: "string",
            name: "userPageURL",
            type: "string",
          },
          {
            internalType: "address",
            name: "wallet",
            type: "address",
          },
        ],
        internalType: "struct ISNSAccountModule.SNSAccountStruct[]",
        name: "snsAccounts",
        type: "tuple[]",
      },
    ],
    name: "createSNSAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
    ],
    name: "createScore",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
    ],
    name: "getMirror",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "hoge",
            type: "string",
          },
        ],
        internalType: "struct IMirrorModule.MirrorStruct[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
    ],
    name: "getNFTCollection",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "tokenURI",
            type: "string",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        internalType: "struct INFTCollectionModule.NFTStruct[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
    ],
    name: "getPOAPCollection",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "tokenURI",
            type: "string",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        internalType: "struct INFTCollectionModule.NFTStruct[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
    ],
    name: "getProfile",
    outputs: [
      {
        components: [
          {
            internalType: "address[]",
            name: "wallets",
            type: "address[]",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "introduction",
            type: "string",
          },
          {
            internalType: "string",
            name: "imageURI",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "snsAccountsPubId",
            type: "uint256",
          },
        ],
        internalType: "struct IProfile.ProfileStruct",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
    ],
    name: "getSNSAccounts",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "service",
            type: "string",
          },
          {
            internalType: "string",
            name: "userId",
            type: "string",
          },
          {
            internalType: "string",
            name: "userPageURL",
            type: "string",
          },
          {
            internalType: "address",
            name: "wallet",
            type: "address",
          },
        ],
        internalType: "struct ISNSAccountModule.SNSAccountStruct[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
    ],
    name: "getScore",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "point",
            type: "uint256",
          },
        ],
        internalType: "struct IScoreModule.ScoreStruct[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "icecandy",
        type: "address",
      },
    ],
    name: "setIceCandy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "mirrorModule",
        type: "address",
      },
    ],
    name: "setMirrorModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftCollectionModule",
        type: "address",
      },
    ],
    name: "setNFTCollectionModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "poapCollectionModule",
        type: "address",
      },
    ],
    name: "setPOAPCollectionModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "snsAccountModule",
        type: "address",
      },
    ],
    name: "setSNSAccountModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "scoreModule",
        type: "address",
      },
    ],
    name: "setScoreModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IProfile__factory {
  static readonly abi = _abi;
  static createInterface(): IProfileInterface {
    return new utils.Interface(_abi) as IProfileInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IProfile {
    return new Contract(address, _abi, signerOrProvider) as IProfile;
  }
}
