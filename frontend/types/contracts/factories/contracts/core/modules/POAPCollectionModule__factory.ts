/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  POAPCollectionModule,
  POAPCollectionModuleInterface,
} from "../../../../contracts/core/modules/POAPCollectionModule";

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
    name: "createCollection",
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
    name: "getCollection",
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
  "0x608060405234801561001057600080fd5b50604051610c4b380380610c4b83398101604081905261002f91610099565b8061003933610049565b61004281610049565b50506100c9565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100ab57600080fd5b81516001600160a01b03811681146100c257600080fd5b9392505050565b610b73806100d86000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80635a1f3c2814610067578063715018a6146100905780638da5cb5b1461009a578063cc2e0a26146100b5578063e54fbbae146100c8578063f2fde38b146100db575b600080fd5b61007a6100753660046106b8565b6100ee565b60405161008791906106d1565b60405180910390f35b6100986102cc565b005b6000546040516001600160a01b039091168152602001610087565b6100986100c33660046107cf565b6102e0565b6100986100d63660046107f3565b61030a565b6100986100e93660046107cf565b610547565b6000818152600360205260408120546060919067ffffffffffffffff81111561011957610119610872565b60405190808252806020026020018201604052801561017157816020015b6040805160a08101825260008082526020808301829052928201819052606080830152608082015282526000199092019101816101375790505b50905060005b6000848152600360205260409020548110156102c5576000848152600260205260408120906101a783600161089e565b81526020808201929092526040908101600020815160a0810183528154815260018201546001600160a01b0316938101939093526002810154918301919091526003810180546060840191906101fc906108b6565b80601f0160208091040260200160405190810160405280929190818152602001828054610228906108b6565b80156102755780601f1061024a57610100808354040283529160200191610275565b820191906000526020600020905b81548152906001019060200180831161025857829003601f168201915b5050509183525050600491909101546001600160a01b031660209091015282518390839081106102a7576102a76108f1565b602002602001018190525080806102bd90610907565b915050610177565b5092915050565b6102d46105c0565b6102de600061061a565b565b6102e86105c0565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b600160009054906101000a90046001600160a01b03166001600160a01b031663d6afc9b16040518163ffffffff1660e01b8152600401602060405180830381865afa15801561035d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103819190610922565b6001600160a01b0316336001600160a01b0316146103e65760405162461bcd60e51b815260206004820152601860248201527f4d6f64756c65426173653a206f6e6c792070726f66696c65000000000000000060448201526064015b60405180910390fd5b60005b6000848152600360205260409020548110156104795760008481526002602052604081209061041983600161089e565b8152602081019190915260400160009081208181556001810180546001600160a01b03191690556002810182905590610455600383018261066a565b5060040180546001600160a01b03191690558061047181610907565b9150506103e9565b5060005b818110156104f257828282818110610497576104976108f1565b90506020028101906104a9919061093f565b6000858152600260205260408120906104c384600161089e565b815260200190815260200160002081816104dd9190610aa2565b508190506104ea81610907565b91505061047d565b506000838152600360205260409081902082905551309084907f368671e33babaefec9922793c2b772bfd5552fc5457ca10241a5922f14797f069061053a9043815260200190565b60405180910390a3505050565b61054f6105c0565b6001600160a01b0381166105b45760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103dd565b6105bd8161061a565b50565b6000546001600160a01b031633146102de5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103dd565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b508054610676906108b6565b6000825580601f10610686575050565b601f0160209004906000526020600020908101906105bd91905b808211156106b457600081556001016106a0565b5090565b6000602082840312156106ca57600080fd5b5035919050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b848110156107ab57898403603f19018652825180518552888101516001600160a01b031689860152878101518886015260608082015160a091870182905280519187018290528491905b81831015610761578083018c015188840160c00152918b0191610743565b5080821115610773578460c082890101525b6080928301516001600160a01b03811688850152929150978a0197601f01601f19169590950160c001945050918701916001016106f9565b50919998505050505050505050565b6001600160a01b03811681146105bd57600080fd5b6000602082840312156107e157600080fd5b81356107ec816107ba565b9392505050565b60008060006040848603121561080857600080fd5b83359250602084013567ffffffffffffffff8082111561082757600080fd5b818601915086601f83011261083b57600080fd5b81358181111561084a57600080fd5b8760208260051b850101111561085f57600080fd5b6020830194508093505050509250925092565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156108b1576108b1610888565b500190565b600181811c908216806108ca57607f821691505b602082108114156108eb57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b600060001982141561091b5761091b610888565b5060010190565b60006020828403121561093457600080fd5b81516107ec816107ba565b60008235609e1983360301811261095557600080fd5b9190910192915050565b6000813561096c816107ba565b92915050565b80546001600160a01b0319166001600160a01b0392909216919091179055565b601f8211156109dc57600081815260208120601f850160051c810160208610156109b95750805b601f850160051c820191505b818110156109d8578281556001016109c5565b5050505b505050565b67ffffffffffffffff8311156109f9576109f9610872565b610a0d83610a0783546108b6565b83610992565b6000601f841160018114610a415760008515610a295750838201355b600019600387901b1c1916600186901b178355610a9b565b600083815260209020601f19861690835b82811015610a725786850135825560209485019460019092019101610a52565b5086821015610a8f5760001960f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b813581556020820135610ab4816107ba565b610ac18160018401610972565b50604082013560028201556060820135601e19833603018112610ae357600080fd5b8201803567ffffffffffffffff811115610afc57600080fd5b602082019150803603821315610b1157600080fd5b610b1f8183600386016109e1565b5050610b39610b306080840161095f565b60048301610972565b505056fea26469706673582212209a7a4686ad40e351d7050c4a041ca653905fa4964152cd146001074a32db5b6864736f6c634300080a0033";

type POAPCollectionModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: POAPCollectionModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class POAPCollectionModule__factory extends ContractFactory {
  constructor(...args: POAPCollectionModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<POAPCollectionModule> {
    return super.deploy(
      owner,
      overrides || {}
    ) as Promise<POAPCollectionModule>;
  }
  override getDeployTransaction(
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(owner, overrides || {});
  }
  override attach(address: string): POAPCollectionModule {
    return super.attach(address) as POAPCollectionModule;
  }
  override connect(signer: Signer): POAPCollectionModule__factory {
    return super.connect(signer) as POAPCollectionModule__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): POAPCollectionModuleInterface {
    return new utils.Interface(_abi) as POAPCollectionModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): POAPCollectionModule {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as POAPCollectionModule;
  }
}
