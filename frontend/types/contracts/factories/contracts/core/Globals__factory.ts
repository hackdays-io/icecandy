/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Globals,
  GlobalsInterface,
} from "../../../contracts/core/Globals";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "getColorExtension",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getIceCandy",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMirrorModule",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNFTCollectionModule",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPOAPCollectionModule",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getProfile",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSNSAccountModule",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getScoreModule",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSkillModule",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "colorExtension_",
        type: "address",
      },
    ],
    name: "setColorExtension",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "mirrorModule_",
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
        name: "nftCollectionModule_",
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
        name: "poapCollectionModule_",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "snsAccountModule_",
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
        name: "scoreModule_",
        type: "address",
      },
    ],
    name: "setScoreModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "skillModule_",
        type: "address",
      },
    ],
    name: "setSkillModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516106b83803806106b883398101604081905261002f91610097565b61003833610047565b61004181610047565b506100c7565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100a957600080fd5b81516001600160a01b03811681146100c057600080fd5b9392505050565b6105e2806100d66000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80638da5cb5b116100b8578063da0386791161007c578063da03867914610258578063db9e41931461026b578063e0b6a1e31461027e578063e14607de14610291578063ec22013f146102a2578063f2fde38b146102b357600080fd5b80638da5cb5b146101ff5780639e68df1b14610210578063bd696d0914610223578063c741048914610234578063d6afc9b11461024757600080fd5b80631c9a337e116100ff5780631c9a337e146101b157806347d771be146101c25780634a56d00c146101d3578063715018a6146101e6578063852b6773146101ee57600080fd5b806303b7af901461013c57806308a71390146101655780630b0292601461017a5780630d2b4ae01461018b5780630da554b11461019e575b600080fd5b6004546001600160a01b03165b6040516001600160a01b03909116815260200160405180910390f35b61017861017336600461057c565b6102c6565b005b6009546001600160a01b0316610149565b61017861019936600461057c565b6102f0565b6101786101ac36600461057c565b61031a565b6007546001600160a01b0316610149565b6008546001600160a01b0316610149565b6101786101e136600461057c565b610344565b61017861036e565b6001546001600160a01b0316610149565b6000546001600160a01b0316610149565b61017861021e36600461057c565b610382565b6005546001600160a01b0316610149565b61017861024236600461057c565b6103ac565b6002546001600160a01b0316610149565b61017861026636600461057c565b6103d6565b61017861027936600461057c565b610400565b61017861028c36600461057c565b61042a565b6003546001600160a01b0316610149565b6006546001600160a01b0316610149565b6101786102c136600461057c565b610454565b6102ce6104d2565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b6102f86104d2565b600480546001600160a01b0319166001600160a01b0392909216919091179055565b6103226104d2565b600980546001600160a01b0319166001600160a01b0392909216919091179055565b61034c6104d2565b600680546001600160a01b0319166001600160a01b0392909216919091179055565b6103766104d2565b610380600061052c565b565b61038a6104d2565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6103b46104d2565b600880546001600160a01b0319166001600160a01b0392909216919091179055565b6103de6104d2565b600780546001600160a01b0319166001600160a01b0392909216919091179055565b6104086104d2565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b6104326104d2565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b61045c6104d2565b6001600160a01b0381166104c65760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6104cf8161052c565b50565b6000546001600160a01b031633146103805760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104bd565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561058e57600080fd5b81356001600160a01b03811681146105a557600080fd5b939250505056fea2646970667358221220889a2734a35a4821a6542686c57058c0ad02ace0f970dbde9d3eb244accde32664736f6c634300080a0033";

type GlobalsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GlobalsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Globals__factory extends ContractFactory {
  constructor(...args: GlobalsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Globals> {
    return super.deploy(owner, overrides || {}) as Promise<Globals>;
  }
  override getDeployTransaction(
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(owner, overrides || {});
  }
  override attach(address: string): Globals {
    return super.attach(address) as Globals;
  }
  override connect(signer: Signer): Globals__factory {
    return super.connect(signer) as Globals__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GlobalsInterface {
    return new utils.Interface(_abi) as GlobalsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Globals {
    return new Contract(address, _abi, signerOrProvider) as Globals;
  }
}
