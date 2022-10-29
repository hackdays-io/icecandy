/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SNSAccountModule,
  SNSAccountModuleInterface,
} from "../../../contracts/core/SNSAccountModule";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "profile",
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
        indexed: false,
        internalType: "string",
        name: "id",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "publicSignature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "queryId",
        type: "bytes32",
      },
    ],
    name: "Query",
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
        name: "pubId",
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
            name: "user_id",
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
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pubId",
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
            name: "user_id",
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
        internalType: "struct ISNSAccountModule.SNSAccountStruct",
        name: "sns",
        type: "tuple",
      },
    ],
    name: "processSNSAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610eb2380380610eb2833981810160405281019061003291906100db565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610108565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100a88261007d565b9050919050565b6100b88161009d565b81146100c357600080fd5b50565b6000815190506100d5816100af565b92915050565b6000602082840312156100f1576100f0610078565b5b60006100ff848285016100c6565b91505092915050565b610d9b806101176000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80631ac128361461003b5780632cf41c5f1461006b575b600080fd5b610055600480360381019061005091906104d4565b610087565b6040516100629190610721565b60405180910390f35b61008560048036038101906100809190610767565b6103a5565b005b606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610117576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161010e90610833565b60405180910390fd5b600160008481526020019081526020016000206000838152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015610399578382906000526020600020906004020160405180608001604052908160008201805461018e90610882565b80601f01602080910402602001604051908101604052809291908181526020018280546101ba90610882565b80156102075780601f106101dc57610100808354040283529160200191610207565b820191906000526020600020905b8154815290600101906020018083116101ea57829003601f168201915b5050505050815260200160018201805461022090610882565b80601f016020809104026020016040519081016040528092919081815260200182805461024c90610882565b80156102995780601f1061026e57610100808354040283529160200191610299565b820191906000526020600020905b81548152906001019060200180831161027c57829003601f168201915b505050505081526020016002820180546102b290610882565b80601f01602080910402602001604051908101604052809291908181526020018280546102de90610882565b801561032b5780601f106103005761010080835404028352916020019161032b565b820191906000526020600020905b81548152906001019060200180831161030e57829003601f168201915b505050505081526020016003820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250508152602001906001019061015b565b50505050905092915050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610433576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042a90610833565b60405180910390fd5b600160008481526020019081526020016000206000838152602001908152602001600020819080600181540180825580915050600190039060005260206000209060040201600090919091909150818161048d9190610d57565b5050505050565b600080fd5b600080fd5b6000819050919050565b6104b18161049e565b81146104bc57600080fd5b50565b6000813590506104ce816104a8565b92915050565b600080604083850312156104eb576104ea610494565b5b60006104f9858286016104bf565b925050602061050a858286016104bf565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561057a57808201518184015260208101905061055f565b83811115610589576000848401525b50505050565b6000601f19601f8301169050919050565b60006105ab82610540565b6105b5818561054b565b93506105c581856020860161055c565b6105ce8161058f565b840191505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610604826105d9565b9050919050565b610614816105f9565b82525050565b6000608083016000830151848203600086015261063782826105a0565b9150506020830151848203602086015261065182826105a0565b9150506040830151848203604086015261066b82826105a0565b9150506060830151610680606086018261060b565b508091505092915050565b6000610697838361061a565b905092915050565b6000602082019050919050565b60006106b782610514565b6106c1818561051f565b9350836020820285016106d385610530565b8060005b8581101561070f57848403895281516106f0858261068b565b94506106fb8361069f565b925060208a019950506001810190506106d7565b50829750879550505050505092915050565b6000602082019050818103600083015261073b81846106ac565b905092915050565b600080fd5b60006080828403121561075e5761075d610743565b5b81905092915050565b6000806000606084860312156107805761077f610494565b5b600061078e868287016104bf565b935050602061079f868287016104bf565b925050604084013567ffffffffffffffff8111156107c0576107bf610499565b5b6107cc86828701610748565b9150509250925092565b600082825260208201905092915050565b7f534e534163636f756e744d6f64756c653a206f6e6c792070726f66696c650000600082015250565b600061081d601e836107d6565b9150610828826107e7565b602082019050919050565b6000602082019050818103600083015261084c81610810565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061089a57607f821691505b602082108114156108ae576108ad610853565b5b50919050565b600080fd5b600080fd5b600080fd5b600080833560016020038436030381126108e0576108df6108b4565b5b80840192508235915067ffffffffffffffff821115610902576109016108b9565b5b60208301925060018202360383131561091e5761091d6108be565b5b509250929050565b600082905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026109c27fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610985565b6109cc8683610985565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610a09610a046109ff8461049e565b6109e4565b61049e565b9050919050565b6000819050919050565b610a23836109ee565b610a37610a2f82610a10565b848454610992565b825550505050565b600090565b610a4c610a3f565b610a57818484610a1a565b505050565b5b81811015610a7b57610a70600082610a44565b600181019050610a5d565b5050565b601f821115610ac057610a9181610960565b610a9a84610975565b81016020851015610aa9578190505b610abd610ab585610975565b830182610a5c565b50505b505050565b600082821c905092915050565b6000610ae360001984600802610ac5565b1980831691505092915050565b6000610afc8383610ad2565b9150826002028217905092915050565b610b168383610926565b67ffffffffffffffff811115610b2f57610b2e610931565b5b610b398254610882565b610b44828285610a7f565b6000601f831160018114610b735760008415610b61578287013590505b610b6b8582610af0565b865550610bd3565b601f198416610b8186610960565b60005b82811015610ba957848901358255600182019150602085019450602081019050610b84565b86831015610bc65784890135610bc2601f891682610ad2565b8355505b6001600288020188555050505b50505050505050565b610be7838383610b0c565b505050565b610bf5816105f9565b8114610c0057600080fd5b50565b60008135610c1081610bec565b80915050919050565b60008160001b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff610c4684610c19565b9350801983169250808416831791505092915050565b6000610c77610c72610c6d846105d9565b6109e4565b6105d9565b9050919050565b6000610c8982610c5c565b9050919050565b6000610c9b82610c7e565b9050919050565b6000819050919050565b610cb582610c90565b610cc8610cc182610ca2565b8354610c26565b8255505050565b6000810160008301610ce181856108c3565b610cec818386610bdc565b505050506001810160208301610d0281856108c3565b610d0d818386610bdc565b505050506002810160408301610d2381856108c3565b610d2e818386610bdc565b50505050600381016060830180610d4481610c03565b9050610d508184610cac565b5050505050565b610d618282610ccf565b505056fea2646970667358221220d7159fcb97c1b5a2b98295ff37ce93ec599e649d7a03e722e55c765583c88d1f64736f6c634300080a0033";

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
    profile: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SNSAccountModule> {
    return super.deploy(profile, overrides || {}) as Promise<SNSAccountModule>;
  }
  override getDeployTransaction(
    profile: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(profile, overrides || {});
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
