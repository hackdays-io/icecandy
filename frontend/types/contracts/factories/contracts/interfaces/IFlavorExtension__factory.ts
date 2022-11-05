/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IFlavorExtension,
  IFlavorExtensionInterface,
} from "../../../contracts/interfaces/IFlavorExtension";

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
        name: "extensionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "FlavorActivated",
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
        internalType: "uint256",
        name: "extensionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum IFlavorExtension.FlavorType",
        name: "flavorType",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "FlavorAdded",
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
        internalType: "uint256",
        name: "extensionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "FlavorDeactivated",
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
    ],
    name: "addFlavor",
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
    name: "getFlavor",
    outputs: [
      {
        components: [
          {
            internalType: "enum IFlavorExtension.FlavorType",
            name: "flavorType",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool",
          },
        ],
        internalType: "struct IFlavorExtension.FlavorStruct[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IFlavorExtension__factory {
  static readonly abi = _abi;
  static createInterface(): IFlavorExtensionInterface {
    return new utils.Interface(_abi) as IFlavorExtensionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFlavorExtension {
    return new Contract(address, _abi, signerOrProvider) as IFlavorExtension;
  }
}