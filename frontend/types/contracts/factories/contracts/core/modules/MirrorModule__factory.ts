/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  MirrorModule,
  MirrorModuleInterface,
} from "../../../../contracts/core/modules/MirrorModule";

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
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "moduleId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "MirrorAdded",
    type: "event",
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
  "0x608060405234801561001057600080fd5b506040516109a13803806109a183398101604081905261002f91610099565b8061003933610049565b61004281610049565b50506100c9565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100ab57600080fd5b81516001600160a01b03811681146100c257600080fd5b9392505050565b6108c9806100d86000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063715018a6146100675780637524fa07146100715780638da5cb5b1461009a5780639d6d9a70146100b5578063cc2e0a26146100c8578063f2fde38b146100db575b600080fd5b61006f6100ee565b005b61008461007f366004610545565b610102565b604051610091919061055e565b60405180910390f35b6000546040516001600160a01b039091168152602001610091565b61006f6100c3366004610600565b610285565b61006f6100d6366004610663565b6103f8565b61006f6100e9366004610663565b610422565b6100f661049b565b61010060006104f5565b565b6000818152600360205260408120546060919067ffffffffffffffff81111561012d5761012d610687565b60405190808252806020026020018201604052801561016d57816020015b60408051602081019091526060815281526020019060019003908161014b5790505b50905060005b60008481526003602052604090205481101561027e576000848152600260205260408120906101a38360016106b3565b81526020019081526020016000206040518060200160405290816000820180546101cc906106cb565b80601f01602080910402602001604051908101604052809291908181526020018280546101f8906106cb565b80156102455780601f1061021a57610100808354040283529160200191610245565b820191906000526020600020905b81548152906001019060200180831161022857829003601f168201915b50505050508152505082828151811061026057610260610706565b602002602001018190525080806102769061071c565b915050610173565b5092915050565b600160009054906101000a90046001600160a01b03166001600160a01b031663d6afc9b16040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102fc9190610737565b6001600160a01b0316336001600160a01b0316146103615760405162461bcd60e51b815260206004820152601860248201527f4d6f64756c65426173653a206f6e6c792070726f66696c65000000000000000060448201526064015b60405180910390fd5b6000828152600360205260408120805490919061037d9061071c565b90915550600082815260026020908152604080832060038352818420548452909152902081906103ad82826107a3565b505060008281526003602090815260409182902054915143815284917f44c8fa92ea188ac4a5d045570b403bd7d004b6ae9c6e6b173db92688d8257863910160405180910390a35050565b61040061049b565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b61042a61049b565b6001600160a01b03811661048f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610358565b610498816104f5565b50565b6000546001600160a01b031633146101005760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610358565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561055757600080fd5b5035919050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b848110156105f157603f198a85030186528251518885528051808a870152835b818110156105c1578281018b01518782018b01528a016105a6565b818111156105d157848a83890101525b5096890196601f01601f1916949094018701935091870191600101610586565b50919998505050505050505050565b6000806040838503121561061357600080fd5b82359150602083013567ffffffffffffffff81111561063157600080fd5b83016020818603121561064357600080fd5b809150509250929050565b6001600160a01b038116811461049857600080fd5b60006020828403121561067557600080fd5b81356106808161064e565b9392505050565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156106c6576106c661069d565b500190565b600181811c908216806106df57607f821691505b6020821081141561070057634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b60006000198214156107305761073061069d565b5060010190565b60006020828403121561074957600080fd5b81516106808161064e565b601f82111561079e57600081815260208120601f850160051c8101602086101561077b5750805b601f850160051c820191505b8181101561079a57828155600101610787565b5050505b505050565b8135601e198336030181126107b757600080fd5b8201803567ffffffffffffffff8111156107d057600080fd5b602081360381840113156107e357600080fd5b6107f7826107f186546106cb565b86610754565b6000601f83116001811461082d576000841561081557508482018301355b600019600386901b1c1916600185901b17865561088a565b600086815260209020601f19851690835b8281101561085f57878501860135825593850193600190910190850161083e565b508582101561087e5760001960f88760031b161c198585890101351681555b505060018460011b0186555b5050505050505056fea2646970667358221220f680a2ec6c66703369b804c0ef5d598e5edbad11b1f8a89dd213294d3787b7b364736f6c634300080a0033";

type MirrorModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MirrorModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MirrorModule__factory extends ContractFactory {
  constructor(...args: MirrorModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MirrorModule> {
    return super.deploy(owner, overrides || {}) as Promise<MirrorModule>;
  }
  override getDeployTransaction(
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(owner, overrides || {});
  }
  override attach(address: string): MirrorModule {
    return super.attach(address) as MirrorModule;
  }
  override connect(signer: Signer): MirrorModule__factory {
    return super.connect(signer) as MirrorModule__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MirrorModuleInterface {
    return new utils.Interface(_abi) as MirrorModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MirrorModule {
    return new Contract(address, _abi, signerOrProvider) as MirrorModule;
  }
}
