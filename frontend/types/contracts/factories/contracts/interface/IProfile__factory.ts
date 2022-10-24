/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IProfile,
  IProfileInterface,
} from "../../../contracts/interface/IProfile";

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
        indexed: true,
        internalType: "uint256",
        name: "pubId",
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
        ],
        indexed: false,
        internalType: "struct INFTCollectionModule.NFTStruct[]",
        name: "nfts",
        type: "tuple[]",
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
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "handle",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "imageURI",
        type: "string",
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
        components: [
          {
            internalType: "string",
            name: "handle",
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
            ],
            internalType: "struct INFTCollectionModule.NFTStruct[]",
            name: "nfts",
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
        internalType: "uint256",
        name: "nftCollectionPubId",
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
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "string",
            name: "handle",
            type: "string",
          },
          {
            internalType: "string",
            name: "imageURI",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "nftCollectionPubId",
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
