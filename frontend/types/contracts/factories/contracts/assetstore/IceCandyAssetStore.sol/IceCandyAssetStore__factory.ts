/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  IceCandyAssetStore,
  IceCandyAssetStoreInterface,
} from "../../../../contracts/assetstore/IceCandyAssetStore.sol/IceCandyAssetStore";

const _abi = [
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
        name: "_assetId",
        type: "uint256",
      },
    ],
    name: "getAsset",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "address",
            name: "creator",
            type: "address",
          },
          {
            internalType: "string",
            name: "assetURI",
            type: "string",
          },
        ],
        internalType: "struct IceCandyAssetStoreCore.Asset",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAssetCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_assetURI",
        type: "string",
      },
    ],
    name: "registerAsset",
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
        name: "_admin",
        type: "address",
      },
    ],
    name: "setAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_assetId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "setAssetBlacklistStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "setCreatorWhitelistStatus",
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
  "0x608060405234801561001057600080fd5b5061002d61002261010360201b60201c565b61010b60201b60201c565b61004160016101cf60201b61069b1760201c565b6001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600360006100ad6101e560201b60201c565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061020e565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6001816000016000828254019250508190555050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61140a806200021e6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80638da5cb5b116100665780638da5cb5b146100f65780639fe4000a14610114578063a0aead4d14610144578063eac8f5b814610162578063f2fde38b1461019257610093565b806315ec824c14610098578063704b6c02146100b4578063715018a6146100d057806383ccebf5146100da575b600080fd5b6100b260048036038101906100ad9190610c1f565b6101ae565b005b6100ce60048036038101906100c99190610c5f565b6102e0565b005b6100d8610343565b005b6100f460048036038101906100ef9190610cc2565b610357565b005b6100fe6104b6565b60405161010b9190610d11565b60405180910390f35b61012e60048036038101906101299190610e72565b6104df565b60405161013b9190610ef9565b60405180910390f35b61014c61057f565b6040516101599190610ef9565b60405180910390f35b61017c60048036038101906101779190610f14565b61059c565b604051610189919061102f565b60405180910390f35b6101ac60048036038101906101a79190610c5f565b610617565b005b6101b66106b1565b73ffffffffffffffffffffffffffffffffffffffff166101d46104b6565b73ffffffffffffffffffffffffffffffffffffffff1614806102465750600360006101fd6106b1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b610285576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161027c906110ae565b60405180910390fd5b80600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6102e86106b9565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b61034b6106b9565b6103556000610737565b565b81600081118015610370575061036d60016107fb565b81105b6103af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a69061111a565b60405180910390fd5b6103b76106b1565b73ffffffffffffffffffffffffffffffffffffffff166103d56104b6565b73ffffffffffffffffffffffffffffffffffffffff1614806104475750600360006103fe6106b1565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b610486576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047d906110ae565b60405180910390fd5b816005600085815260200190815260200160002060006101000a81548160ff021916908315150217905550505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661056d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056490611186565b60405180910390fd5b6105778383610809565b905092915050565b6000600161058d60016107fb565b61059791906111d5565b905090565b6105a4610a9b565b816005600082815260200190815260200160002060009054906101000a900460ff1615610606576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105fd90611255565b60405180910390fd5b61060f836108f4565b915050919050565b61061f6106b9565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561068f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610686906112e7565b60405180910390fd5b61069881610737565b50565b6001816000016000828254019250508190555050565b600033905090565b6106c16106b1565b73ffffffffffffffffffffffffffffffffffffffff166106df6104b6565b73ffffffffffffffffffffffffffffffffffffffff1614610735576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072c90611353565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081600001549050919050565b60008061081660016107fb565b9050610822600161069b565b60405180606001604052808581526020013373ffffffffffffffffffffffffffffffffffffffff16815260200184815250600260008381526020019081526020016000206000820151816000019080519060200190610882929190610ad2565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020190805190602001906108e6929190610ad2565b509050508091505092915050565b6108fc610a9b565b6002600083815260200190815260200160002060405180606001604052908160008201805461092a906113a2565b80601f0160208091040260200160405190810160405280929190818152602001828054610956906113a2565b80156109a35780601f10610978576101008083540402835291602001916109a3565b820191906000526020600020905b81548152906001019060200180831161098657829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600282018054610a12906113a2565b80601f0160208091040260200160405190810160405280929190818152602001828054610a3e906113a2565b8015610a8b5780601f10610a6057610100808354040283529160200191610a8b565b820191906000526020600020905b815481529060010190602001808311610a6e57829003601f168201915b5050505050815250509050919050565b604051806060016040528060608152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001606081525090565b828054610ade906113a2565b90600052602060002090601f016020900481019282610b005760008555610b47565b82601f10610b1957805160ff1916838001178555610b47565b82800160010185558215610b47579182015b82811115610b46578251825591602001919060010190610b2b565b5b509050610b549190610b58565b5090565b5b80821115610b71576000816000905550600101610b59565b5090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610bb482610b89565b9050919050565b610bc481610ba9565b8114610bcf57600080fd5b50565b600081359050610be181610bbb565b92915050565b60008115159050919050565b610bfc81610be7565b8114610c0757600080fd5b50565b600081359050610c1981610bf3565b92915050565b60008060408385031215610c3657610c35610b7f565b5b6000610c4485828601610bd2565b9250506020610c5585828601610c0a565b9150509250929050565b600060208284031215610c7557610c74610b7f565b5b6000610c8384828501610bd2565b91505092915050565b6000819050919050565b610c9f81610c8c565b8114610caa57600080fd5b50565b600081359050610cbc81610c96565b92915050565b60008060408385031215610cd957610cd8610b7f565b5b6000610ce785828601610cad565b9250506020610cf885828601610c0a565b9150509250929050565b610d0b81610ba9565b82525050565b6000602082019050610d266000830184610d02565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610d7f82610d36565b810181811067ffffffffffffffff82111715610d9e57610d9d610d47565b5b80604052505050565b6000610db1610b75565b9050610dbd8282610d76565b919050565b600067ffffffffffffffff821115610ddd57610ddc610d47565b5b610de682610d36565b9050602081019050919050565b82818337600083830152505050565b6000610e15610e1084610dc2565b610da7565b905082815260208101848484011115610e3157610e30610d31565b5b610e3c848285610df3565b509392505050565b600082601f830112610e5957610e58610d2c565b5b8135610e69848260208601610e02565b91505092915050565b60008060408385031215610e8957610e88610b7f565b5b600083013567ffffffffffffffff811115610ea757610ea6610b84565b5b610eb385828601610e44565b925050602083013567ffffffffffffffff811115610ed457610ed3610b84565b5b610ee085828601610e44565b9150509250929050565b610ef381610c8c565b82525050565b6000602082019050610f0e6000830184610eea565b92915050565b600060208284031215610f2a57610f29610b7f565b5b6000610f3884828501610cad565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610f7b578082015181840152602081019050610f60565b83811115610f8a576000848401525b50505050565b6000610f9b82610f41565b610fa58185610f4c565b9350610fb5818560208601610f5d565b610fbe81610d36565b840191505092915050565b610fd281610ba9565b82525050565b60006060830160008301518482036000860152610ff58282610f90565b915050602083015161100a6020860182610fc9565b50604083015184820360408601526110228282610f90565b9150508091505092915050565b600060208201905081810360008301526110498184610fd8565b905092915050565b600082825260208201905092915050565b7f596f7520617265206e6f74207468652061646d696e0000000000000000000000600082015250565b6000611098601583611051565b91506110a382611062565b602082019050919050565b600060208201905081810360008301526110c78161108b565b9050919050565b7f6173736574206973206e6f742065786973740000000000000000000000000000600082015250565b6000611104601283611051565b915061110f826110ce565b602082019050919050565b60006020820190508181036000830152611133816110f7565b9050919050565b7f596f7520617265206e6f74206c69737465640000000000000000000000000000600082015250565b6000611170601283611051565b915061117b8261113a565b602082019050919050565b6000602082019050818103600083015261119f81611163565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006111e082610c8c565b91506111eb83610c8c565b9250828210156111fe576111fd6111a6565b5b828203905092915050565b7f746869732061737365742063616e6e6f74207573650000000000000000000000600082015250565b600061123f601583611051565b915061124a82611209565b602082019050919050565b6000602082019050818103600083015261126e81611232565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006112d1602683611051565b91506112dc82611275565b604082019050919050565b60006020820190508181036000830152611300816112c4565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061133d602083611051565b915061134882611307565b602082019050919050565b6000602082019050818103600083015261136c81611330565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806113ba57607f821691505b602082108114156113ce576113cd611373565b5b5091905056fea2646970667358221220eabc8917b59153fab8679125bf37f6bbca9639a1c5735ab7eecc7ecfd898ed8b64736f6c634300080a0033";

type IceCandyAssetStoreConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IceCandyAssetStoreConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class IceCandyAssetStore__factory extends ContractFactory {
  constructor(...args: IceCandyAssetStoreConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<IceCandyAssetStore> {
    return super.deploy(overrides || {}) as Promise<IceCandyAssetStore>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): IceCandyAssetStore {
    return super.attach(address) as IceCandyAssetStore;
  }
  override connect(signer: Signer): IceCandyAssetStore__factory {
    return super.connect(signer) as IceCandyAssetStore__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IceCandyAssetStoreInterface {
    return new utils.Interface(_abi) as IceCandyAssetStoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IceCandyAssetStore {
    return new Contract(address, _abi, signerOrProvider) as IceCandyAssetStore;
  }
}