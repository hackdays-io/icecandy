/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  SkillModule,
  SkillModuleInterface,
} from "../../../../contracts/core/modules/SkillModule";

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
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "link",
            type: "string",
          },
        ],
        internalType: "struct ISkillModule.SkillStruct",
        name: "skill",
        type: "tuple",
      },
    ],
    name: "addSkill",
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
    ],
    name: "getSkill",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "link",
            type: "string",
          },
        ],
        internalType: "struct ISkillModule.SkillStruct[]",
        name: "",
        type: "tuple[]",
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
        name: "globals",
        type: "address",
      },
    ],
    name: "setGlobals",
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
  "0x608060405234801561001057600080fd5b50604051610c0e380380610c0e83398101604081905261002f91610099565b8061003933610049565b61004281610049565b50506100c9565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100ab57600080fd5b81516001600160a01b03811681146100c257600080fd5b9392505050565b610b36806100d86000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063524c6bc714610067578063715018a61461008d5780638da5cb5b14610097578063bd880fae146100b2578063cc2e0a26146100d2578063f2fde38b146100e5575b600080fd5b61007a610075366004610641565b6100f8565b6040519081526020015b60405180910390f35b610095610224565b005b6000546040516001600160a01b039091168152602001610084565b6100c56100c036600461068f565b610238565b60405161008491906106f5565b6100956100e03660046107ab565b6104f4565b6100956100f33660046107ab565b61051e565b6001546040805163d6afc9b160e01b815290516000926001600160a01b03169163d6afc9b19160048083019260209291908290030181865afa158015610142573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061016691906107cf565b6001600160a01b0316336001600160a01b0316146101cb5760405162461bcd60e51b815260206004820152601b60248201527f457874656e73696f6e426173653a206f6e6c792070726f66696c65000000000060448201526064015b60405180910390fd5b6000838152600360205260408120805482906101e690610802565b91829055506000858152600260209081526040808320600383528184205484529091529020909150839061021a82826109cc565b5090949350505050565b61022c610597565b61023660006105f1565b565b6000818152600360205260408120546060919067ffffffffffffffff8111156102635761026361086b565b6040519080825280602002602001820160405280156102b857816020015b6102a560405180606001604052806060815260200160608152602001606081525090565b8152602001906001900390816102815790505b50905060005b6000848152600360205260409020548110156104ed576000848152600260205260408120906102ee836001610ad2565b815260200190815260200160002060405180606001604052908160008201805461031790610881565b80601f016020809104026020016040519081016040528092919081815260200182805461034390610881565b80156103905780601f1061036557610100808354040283529160200191610390565b820191906000526020600020905b81548152906001019060200180831161037357829003601f168201915b505050505081526020016001820180546103a990610881565b80601f01602080910402602001604051908101604052809291908181526020018280546103d590610881565b80156104225780601f106103f757610100808354040283529160200191610422565b820191906000526020600020905b81548152906001019060200180831161040557829003601f168201915b5050505050815260200160028201805461043b90610881565b80601f016020809104026020016040519081016040528092919081815260200182805461046790610881565b80156104b45780601f10610489576101008083540402835291602001916104b4565b820191906000526020600020905b81548152906001019060200180831161049757829003601f168201915b5050505050815250508282815181106104cf576104cf610aea565b602002602001018190525080806104e590610802565b9150506102be565b5092915050565b6104fc610597565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b610526610597565b6001600160a01b03811661058b5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016101c2565b610594816105f1565b50565b6000546001600160a01b031633146102365760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101c2565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000806040838503121561065457600080fd5b82359150602083013567ffffffffffffffff81111561067257600080fd5b83016060818603121561068457600080fd5b809150509250929050565b6000602082840312156106a157600080fd5b5035919050565b6000815180845260005b818110156106ce576020818501810151868301820152016106b2565b818111156106e0576000602083870101525b50601f01601f19169290920160200192915050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b8381101561078857603f19898403018552815160608151818652610742828701826106a8565b915050888201518582038a87015261075a82826106a8565b9150508782015191508481038886015261077481836106a8565b96890196945050509086019060010161071c565b509098975050505050505050565b6001600160a01b038116811461059457600080fd5b6000602082840312156107bd57600080fd5b81356107c881610796565b9392505050565b6000602082840312156107e157600080fd5b81516107c881610796565b634e487b7160e01b600052601160045260246000fd5b6000600019821415610816576108166107ec565b5060010190565b6000808335601e1984360301811261083457600080fd5b83018035915067ffffffffffffffff82111561084f57600080fd5b60200191503681900382131561086457600080fd5b9250929050565b634e487b7160e01b600052604160045260246000fd5b600181811c9082168061089557607f821691505b602082108114156108b657634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561090657600081815260208120601f850160051c810160208610156108e35750805b601f850160051c820191505b81811015610902578281556001016108ef565b5050505b505050565b67ffffffffffffffff8311156109235761092361086b565b610937836109318354610881565b836108bc565b6000601f84116001811461096b57600085156109535750838201355b600019600387901b1c1916600186901b1783556109c5565b600083815260209020601f19861690835b8281101561099c578685013582556020948501946001909201910161097c565b50868210156109b95760001960f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b6109d6828361081d565b67ffffffffffffffff8111156109ee576109ee61086b565b610a02816109fc8554610881565b856108bc565b6000601f821160018114610a365760008315610a1e5750838201355b600019600385901b1c1916600184901b178555610a90565b600085815260209020601f19841690835b82811015610a675786850135825560209485019460019092019101610a47565b5084821015610a845760001960f88660031b161c19848701351681555b505060018360011b0185555b50505050610aa1602083018361081d565b610aaf81836001860161090b565b5050610abe604083018361081d565b610acc81836002860161090b565b50505050565b60008219821115610ae557610ae56107ec565b500190565b634e487b7160e01b600052603260045260246000fdfea264697066735822122065785e467972b3d2fb8636f9ea50e6906a454c9a916dd52842a19bfdc1a9e92364736f6c634300080a0033";

type SkillModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SkillModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SkillModule__factory extends ContractFactory {
  constructor(...args: SkillModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SkillModule> {
    return super.deploy(owner, overrides || {}) as Promise<SkillModule>;
  }
  override getDeployTransaction(
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(owner, overrides || {});
  }
  override attach(address: string): SkillModule {
    return super.attach(address) as SkillModule;
  }
  override connect(signer: Signer): SkillModule__factory {
    return super.connect(signer) as SkillModule__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SkillModuleInterface {
    return new utils.Interface(_abi) as SkillModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SkillModule {
    return new Contract(address, _abi, signerOrProvider) as SkillModule;
  }
}
