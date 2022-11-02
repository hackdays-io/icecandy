/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ScoreModule,
  ScoreModuleInterface,
} from "../../../../contracts/core/modules/ScoreModule";

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
    ],
    name: "processScore",
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
  "0x608060405234801561001057600080fd5b50604051610d5c380380610d5c83398101604081905261002f91610099565b8061003933610049565b61004281610049565b50506100c9565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100ab57600080fd5b81516001600160a01b03811681146100c257600080fd5b9392505050565b610c84806100d86000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80630e1af57b14610067578063715018a614610090578063778f62811461009a5780638da5cb5b146100ad578063cc2e0a26146100c8578063f2fde38b146100db575b600080fd5b61007a610075366004610ae1565b6100ee565b6040516100879190610afa565b60405180910390f35b6100986104d7565b005b6100986100a8366004610ae1565b6104eb565b6000546040516001600160a01b039091168152602001610087565b6100986100d6366004610bbc565b6108fb565b6100986100e9366004610bbc565b610925565b6040805160038082526080820190925260609160009190816020015b60408051808201909152606081526000602082015281526020019060019003908161010a5750506000848152600260209081526040808320838052909152908190208151808301909252805492935090918290829061016890610be0565b80601f016020809104026020016040519081016040528092919081815260200182805461019490610be0565b80156101e15780601f106101b6576101008083540402835291602001916101e1565b820191906000526020600020905b8154815290600101906020018083116101c457829003601f168201915b505050505081526020016001820154815250508160008151811061020757610207610c1b565b602090810291909101810191909152600084815260028252604080822060015482516370a303ef60e11b8152925191946001600160a01b039091169263e14607de92600480830193928290030181865afa158015610269573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028d9190610c31565b6001600160a01b03166001600160a01b031681526020019081526020016000206040518060400160405290816000820180546102c890610be0565b80601f01602080910402602001604051908101604052809291908181526020018280546102f490610be0565b80156103415780601f1061031657610100808354040283529160200191610341565b820191906000526020600020905b81548152906001019060200180831161032457829003601f168201915b505050505081526020016001820154815250508160018151811061036757610367610c1b565b60209081029190910181019190915260008481526002825260408082206001548251623b7af960e41b8152925191946001600160a01b03909116926303b7af9092600480830193928290030181865afa1580156103c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ec9190610c31565b6001600160a01b03166001600160a01b0316815260200190815260200160002060405180604001604052908160008201805461042790610be0565b80601f016020809104026020016040519081016040528092919081815260200182805461045390610be0565b80156104a05780601f10610475576101008083540402835291602001916104a0565b820191906000526020600020905b81548152906001019060200180831161048357829003601f168201915b50505050508152602001600182015481525050816002815181106104c6576104c6610c1b565b602090810291909101015292915050565b6104df61099e565b6104e960006109f8565b565b600160009054906101000a90046001600160a01b03166001600160a01b031663d6afc9b16040518163ffffffff1660e01b8152600401602060405180830381865afa15801561053e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105629190610c31565b6001600160a01b0316336001600160a01b0316146105c75760405162461bcd60e51b815260206004820152601b60248201527f457874656e73696f6e426173653a206f6e6c792070726f66696c65000000000060448201526064015b60405180910390fd5b604080518082018252600781526650524f46494c4560c81b60208083019182526000858152600282528481208180529091529290922090516106099290610a48565b50600081815260026020818152604080842084805280835281852061012c60019182015582518084018452600381526213919560ea1b818601528787529484525482516370a303ef60e11b815292519495919491936001600160a01b039091169263e14607de92600480830193928290030181865afa158015610690573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b49190610c31565b6001600160a01b0316815260208082019290925260400160002082516106e09391929190910190610a48565b50600081815260026020908152604080832060015482516370a303ef60e11b81529251606495929492936001600160a01b039092169263e14607de92600480820193918290030181865afa15801561073c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107609190610c31565b6001600160a01b03166001600160a01b0316815260200190815260200160002060010181905550604051806040016040528060048152602001630504f41560e41b815250600260008381526020019081526020016000206000600160009054906101000a90046001600160a01b03166001600160a01b03166303b7af906040518163ffffffff1660e01b8152600401602060405180830381865afa15801561080c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108309190610c31565b6001600160a01b03168152602080820192909252604001600020825161085c9391929190910190610a48565b5060008181526002602090815260408083206001548251623b7af960e41b8152925160c895929492936001600160a01b03909216926303b7af9092600480820193918290030181865afa1580156108b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108db9190610c31565b6001600160a01b0316815260208101919091526040016000206001015550565b61090361099e565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b61092d61099e565b6001600160a01b0381166109925760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016105be565b61099b816109f8565b50565b6000546001600160a01b031633146104e95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105be565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054610a5490610be0565b90600052602060002090601f016020900481019282610a765760008555610abc565b82601f10610a8f57805160ff1916838001178555610abc565b82800160010185558215610abc579182015b82811115610abc578251825591602001919060010190610aa1565b50610ac8929150610acc565b5090565b5b80821115610ac85760008155600101610acd565b600060208284031215610af357600080fd5b5035919050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b84811015610b9857603f198a8503018652825180518886528051808a880152845b81811015610b5f578281018c0151888201606001528b01610b43565b81811115610b7057856060838a0101525b50918a0151868b01525095880195601f01601f19169093016060019291870191600101610b22565b50919998505050505050505050565b6001600160a01b038116811461099b57600080fd5b600060208284031215610bce57600080fd5b8135610bd981610ba7565b9392505050565b600181811c90821680610bf457607f821691505b60208210811415610c1557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b600060208284031215610c4357600080fd5b8151610bd981610ba756fea2646970667358221220c62cef2c7b282ec1349ae76abb3e480a49a42473265b0717f0a1c5e54f51941764736f6c634300080a0033";

type ScoreModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ScoreModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ScoreModule__factory extends ContractFactory {
  constructor(...args: ScoreModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ScoreModule> {
    return super.deploy(owner, overrides || {}) as Promise<ScoreModule>;
  }
  override getDeployTransaction(
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(owner, overrides || {});
  }
  override attach(address: string): ScoreModule {
    return super.attach(address) as ScoreModule;
  }
  override connect(signer: Signer): ScoreModule__factory {
    return super.connect(signer) as ScoreModule__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ScoreModuleInterface {
    return new utils.Interface(_abi) as ScoreModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ScoreModule {
    return new Contract(address, _abi, signerOrProvider) as ScoreModule;
  }
}
