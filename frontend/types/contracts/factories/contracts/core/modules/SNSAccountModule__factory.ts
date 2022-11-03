/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  SNSAccountModule,
  SNSAccountModuleInterface,
} from "../../../../contracts/core/modules/SNSAccountModule";

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
        name: "sns",
        type: "tuple[]",
      },
    ],
    name: "processSNSAccount",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x608060405234801561001057600080fd5b50604051610df6380380610df683398101604081905261002f91610099565b8061003933610049565b61004281610049565b50506100c9565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100ab57600080fd5b81516001600160a01b03811681146100c257600080fd5b9392505050565b610d1e806100d86000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631202dc6114610067578063715018a6146100905780638da5cb5b1461009a578063c7121650146100b5578063cc2e0a26146100c8578063f2fde38b146100db575b600080fd5b61007a61007536600461077e565b6100ee565b60405161008791906107e4565b60405180910390f35b6100986103d1565b005b6000546040516001600160a01b039091168152602001610087565b6100986100c3366004610899565b6103e5565b6100986100d636600461092d565b6105e3565b6100986100e936600461092d565b61060d565b6000818152600360205260408120546060919067ffffffffffffffff81111561011957610119610951565b60405190808252806020026020018201604052801561017e57816020015b61016b604051806080016040528060608152602001606081526020016060815260200160006001600160a01b031681525090565b8152602001906001900390816101375790505b50905060005b6000848152600360205260409020548110156103ca576000848152600260205260408120906101b483600161097d565b81526020019081526020016000206040518060800160405290816000820180546101dd90610995565b80601f016020809104026020016040519081016040528092919081815260200182805461020990610995565b80156102565780601f1061022b57610100808354040283529160200191610256565b820191906000526020600020905b81548152906001019060200180831161023957829003601f168201915b5050505050815260200160018201805461026f90610995565b80601f016020809104026020016040519081016040528092919081815260200182805461029b90610995565b80156102e85780601f106102bd576101008083540402835291602001916102e8565b820191906000526020600020905b8154815290600101906020018083116102cb57829003601f168201915b5050505050815260200160028201805461030190610995565b80601f016020809104026020016040519081016040528092919081815260200182805461032d90610995565b801561037a5780601f1061034f5761010080835404028352916020019161037a565b820191906000526020600020905b81548152906001019060200180831161035d57829003601f168201915b5050509183525050600391909101546001600160a01b031660209091015282518390839081106103ac576103ac6109d0565b602002602001018190525080806103c2906109e6565b915050610184565b5092915050565b6103d9610686565b6103e360006106e0565b565b600160009054906101000a90046001600160a01b03166001600160a01b031663d6afc9b16040518163ffffffff1660e01b8152600401602060405180830381865afa158015610438573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061045c9190610a01565b6001600160a01b0316336001600160a01b0316146104c15760405162461bcd60e51b815260206004820152601b60248201527f457874656e73696f6e426173653a206f6e6c792070726f66696c65000000000060448201526064015b60405180910390fd5b60005b600084815260036020526040902054811015610553576000848152600260205260408120906104f483600161097d565b8152602001908152602001600020600080820160006105139190610730565b610521600183016000610730565b61052f600283016000610730565b5060030180546001600160a01b03191690558061054b816109e6565b9150506104c4565b5060005b818110156105cc57828282818110610571576105716109d0565b90506020028101906105839190610a1e565b60008581526002602052604081209061059d84600161097d565b815260200190815260200160002081816105b79190610baf565b508190506105c4816109e6565b915050610557565b506000928352600360205260409092209190915550565b6105eb610686565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b610615610686565b6001600160a01b03811661067a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104b8565b610683816106e0565b50565b6000546001600160a01b031633146103e35760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104b8565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b50805461073c90610995565b6000825580601f1061074c575050565b601f01602090049060005260206000209081019061068391905b8082111561077a5760008155600101610766565b5090565b60006020828403121561079057600080fd5b5035919050565b6000815180845260005b818110156107bd576020818501810151868301820152016107a1565b818111156107cf576000602083870101525b50601f01601f19169290920160200192915050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b8381101561088b57603f1989840301855281516080815181865261083182870182610797565b915050888201518582038a8701526108498282610797565b91505087820151858203898701526108618282610797565b6060938401516001600160a01b03169690930195909552509487019492509086019060010161080b565b509098975050505050505050565b6000806000604084860312156108ae57600080fd5b83359250602084013567ffffffffffffffff808211156108cd57600080fd5b818601915086601f8301126108e157600080fd5b8135818111156108f057600080fd5b8760208260051b850101111561090557600080fd5b6020830194508093505050509250925092565b6001600160a01b038116811461068357600080fd5b60006020828403121561093f57600080fd5b813561094a81610918565b9392505050565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000821982111561099057610990610967565b500190565b600181811c908216806109a957607f821691505b602082108114156109ca57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b60006000198214156109fa576109fa610967565b5060010190565b600060208284031215610a1357600080fd5b815161094a81610918565b60008235607e19833603018112610a3457600080fd5b9190910192915050565b6000808335601e19843603018112610a5557600080fd5b83018035915067ffffffffffffffff821115610a7057600080fd5b602001915036819003821315610a8557600080fd5b9250929050565b601f821115610ad657600081815260208120601f850160051c81016020861015610ab35750805b601f850160051c820191505b81811015610ad257828155600101610abf565b5050505b505050565b67ffffffffffffffff831115610af357610af3610951565b610b0783610b018354610995565b83610a8c565b6000601f841160018114610b3b5760008515610b235750838201355b600019600387901b1c1916600186901b178355610b95565b600083815260209020601f19861690835b82811015610b6c5786850135825560209485019460019092019101610b4c565b5086821015610b895760001960f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b60008135610ba981610918565b92915050565b610bb98283610a3e565b67ffffffffffffffff811115610bd157610bd1610951565b610be581610bdf8554610995565b85610a8c565b6000601f821160018114610c195760008315610c015750838201355b600019600385901b1c1916600184901b178555610c73565b600085815260209020601f19841690835b82811015610c4a5786850135825560209485019460019092019101610c2a565b5084821015610c675760001960f88660031b161c19848701351681555b505060018360011b0185555b50505050610c846020830183610a3e565b610c92818360018601610adb565b5050610ca16040830183610a3e565b610caf818360028601610adb565b5050610ce4610cc060608401610b9c565b6003830180546001600160a01b0319166001600160a01b0392909216919091179055565b505056fea26469706673582212208fff2dad15af6ce82134da6dd5eab75e84eb8c96f7b1735adcc11fbb2203f90d64736f6c634300080a0033";

type SNSAccountModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SNSAccountModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SNSAccountModule__factory extends ContractFactory {
  constructor(...args: SNSAccountModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SNSAccountModule> {
    return super.deploy(owner, overrides || {}) as Promise<SNSAccountModule>;
  }
  override getDeployTransaction(
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(owner, overrides || {});
  }
  override attach(address: string): SNSAccountModule {
    return super.attach(address) as SNSAccountModule;
  }
  override connect(signer: Signer): SNSAccountModule__factory {
    return super.connect(signer) as SNSAccountModule__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SNSAccountModuleInterface {
    return new utils.Interface(_abi) as SNSAccountModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SNSAccountModule {
    return new Contract(address, _abi, signerOrProvider) as SNSAccountModule;
  }
}
