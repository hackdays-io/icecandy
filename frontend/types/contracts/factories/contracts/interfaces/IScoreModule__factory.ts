/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IScoreModule,
  IScoreModuleInterface,
} from "../../../contracts/interfaces/IScoreModule";

const _abi = [
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
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
    ],
    name: "processScore",
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
        name: "profile",
        type: "address",
      },
    ],
    name: "setProfile",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IScoreModule__factory {
  static readonly abi = _abi;
  static createInterface(): IScoreModuleInterface {
    return new utils.Interface(_abi) as IScoreModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IScoreModule {
    return new Contract(address, _abi, signerOrProvider) as IScoreModule;
  }
}