/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IColorExtension,
  IColorExtensionInterface,
} from "../../../contracts/interfaces/IColorExtension";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "moduleId",
        type: "uint256",
      },
    ],
    name: "activate",
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
        internalType: "string",
        name: "color",
        type: "string",
      },
    ],
    name: "addColor",
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
        name: "moduleId",
        type: "uint256",
      },
    ],
    name: "deactivate",
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
    name: "getColor",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "color",
            type: "string",
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool",
          },
        ],
        internalType: "struct IColorExtension.ColorStruct[]",
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

export class IColorExtension__factory {
  static readonly abi = _abi;
  static createInterface(): IColorExtensionInterface {
    return new utils.Interface(_abi) as IColorExtensionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IColorExtension {
    return new Contract(address, _abi, signerOrProvider) as IColorExtension;
  }
}