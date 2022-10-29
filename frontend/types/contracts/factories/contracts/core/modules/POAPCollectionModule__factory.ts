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
        name: "profile",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    name: "processCollect",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620011f8380380620011f88339818101604052810190620000379190620000e8565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200011a565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000b08262000083565b9050919050565b620000c281620000a3565b8114620000ce57600080fd5b50565b600081519050620000e281620000b7565b92915050565b6000602082840312156200010157620001006200007e565b5b60006200011184828501620000d1565b91505092915050565b6110ce806200012a6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80635a1f3c281461003b5780639e1131371461006b575b600080fd5b61005560048036038101906100509190610643565b610087565b6040516100629190610891565b60405180910390f35b61008560048036038101906100809190610918565b61035c565b005b606060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610117576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161010e906109fb565b60405180910390fd5b6000600260008481526020019081526020016000205467ffffffffffffffff81111561014657610145610a1b565b5b60405190808252806020026020018201604052801561017f57816020015b61016c61054b565b8152602001906001900390816101645790505b50905060005b6002600085815260200190815260200160002054811015610352576001600085815260200190815260200160002060008281526020019081526020016000206040518060a0016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820154815260200160038201805461024990610a79565b80601f016020809104026020016040519081016040528092919081815260200182805461027590610a79565b80156102c25780601f10610297576101008083540402835291602001916102c2565b820191906000526020600020905b8154815290600101906020018083116102a557829003601f168201915b505050505081526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505082828151811061033457610333610aab565b5b6020026020010181905250808061034a90610b09565b915050610185565b5080915050919050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e1906109fb565b60405180910390fd5b60005b60026000858152602001908152602001600020548110156104b0576001600085815260200190815260200160002060008281526020019081526020016000206000808201600090556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600282016000905560038201600061047491906105a6565b6004820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055505080806104a890610b09565b9150506103ed565b5060005b8282905081101561052a578282828181106104d2576104d1610aab565b5b90506020028101906104e49190610b61565b6001600086815260200190815260200160002060008381526020019081526020016000208181610514919061108a565b905050808061052290610b09565b9150506104b4565b50818190506002600085815260200190815260200160002081905550505050565b6040518060a0016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b5080546105b290610a79565b6000825580601f106105c457506105e3565b601f0160209004906000526020600020908101906105e291906105e6565b5b50565b5b808211156105ff5760008160009055506001016105e7565b5090565b600080fd5b600080fd5b6000819050919050565b6106208161060d565b811461062b57600080fd5b50565b60008135905061063d81610617565b92915050565b60006020828403121561065957610658610603565b5b60006106678482850161062e565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6106a58161060d565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006106d6826106ab565b9050919050565b6106e6816106cb565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561072657808201518184015260208101905061070b565b83811115610735576000848401525b50505050565b6000601f19601f8301169050919050565b6000610757826106ec565b61076181856106f7565b9350610771818560208601610708565b61077a8161073b565b840191505092915050565b600060a08301600083015161079d600086018261069c565b5060208301516107b060208601826106dd565b5060408301516107c3604086018261069c565b50606083015184820360608601526107db828261074c565b91505060808301516107f060808601826106dd565b508091505092915050565b60006108078383610785565b905092915050565b6000602082019050919050565b600061082782610670565b610831818561067b565b9350836020820285016108438561068c565b8060005b8581101561087f578484038952815161086085826107fb565b945061086b8361080f565b925060208a01995050600181019050610847565b50829750879550505050505092915050565b600060208201905081810360008301526108ab818461081c565b905092915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126108d8576108d76108b3565b5b8235905067ffffffffffffffff8111156108f5576108f46108b8565b5b602083019150836020820283011115610911576109106108bd565b5b9250929050565b60008060006040848603121561093157610930610603565b5b600061093f8682870161062e565b935050602084013567ffffffffffffffff8111156109605761095f610608565b5b61096c868287016108c2565b92509250509250925092565b600082825260208201905092915050565b7f4e4654436f6c6c656374696f6e4d6f64756c65426173653a206f6e6c7920707260008201527f6f66696c65000000000000000000000000000000000000000000000000000000602082015250565b60006109e5602583610978565b91506109f082610989565b604082019050919050565b60006020820190508181036000830152610a14816109d8565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610a9157607f821691505b60208210811415610aa557610aa4610a4a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610b148261060d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610b4757610b46610ada565b5b600182019050919050565b600080fd5b600080fd5b600080fd5b60008235600160a003833603038112610b7d57610b7c610b52565b5b80830191505092915050565b60008135610b9681610617565b80915050919050565b60008160001b9050919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610bd884610b9f565b9350801983169250808416831791505092915050565b6000819050919050565b6000610c13610c0e610c098461060d565b610bee565b61060d565b9050919050565b6000819050919050565b610c2d82610bf8565b610c40610c3982610c1a565b8354610bac565b8255505050565b610c50816106cb565b8114610c5b57600080fd5b50565b60008135610c6b81610c47565b80915050919050565b600073ffffffffffffffffffffffffffffffffffffffff610c9484610b9f565b9350801983169250808416831791505092915050565b6000610cc5610cc0610cbb846106ab565b610bee565b6106ab565b9050919050565b6000610cd782610caa565b9050919050565b6000610ce982610ccc565b9050919050565b6000819050919050565b610d0382610cde565b610d16610d0f82610cf0565b8354610c74565b8255505050565b60008083356001602003843603038112610d3a57610d39610b52565b5b80840192508235915067ffffffffffffffff821115610d5c57610d5b610b57565b5b602083019250600182023603831315610d7857610d77610b5c565b5b509250929050565b600082905092915050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610ded7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610db0565b610df78683610db0565b95508019841693508086168417925050509392505050565b610e1883610bf8565b610e2c610e2482610c1a565b848454610dbd565b825550505050565b600090565b610e41610e34565b610e4c818484610e0f565b505050565b5b81811015610e7057610e65600082610e39565b600181019050610e52565b5050565b601f821115610eb557610e8681610d8b565b610e8f84610da0565b81016020851015610e9e578190505b610eb2610eaa85610da0565b830182610e51565b50505b505050565b600082821c905092915050565b6000610ed860001984600802610eba565b1980831691505092915050565b6000610ef18383610ec7565b9150826002028217905092915050565b610f0b8383610d80565b67ffffffffffffffff811115610f2457610f23610a1b565b5b610f2e8254610a79565b610f39828285610e74565b6000601f831160018114610f685760008415610f56578287013590505b610f608582610ee5565b865550610fc8565b601f198416610f7686610d8b565b60005b82811015610f9e57848901358255600182019150602085019450602081019050610f79565b86831015610fbb5784890135610fb7601f891682610ec7565b8355505b6001600288020188555050505b50505050505050565b610fdc838383610f01565b505050565b600081016000830180610ff381610b89565b9050610fff8184610c24565b50505060018101602083018061101481610c5e565b90506110208184610cfa565b50505060028101604083018061103581610b89565b90506110418184610c24565b50505060038101606083016110568185610d1d565b611061818386610fd1565b5050505060048101608083018061107781610c5e565b90506110838184610cfa565b5050505050565b6110948282610fe1565b505056fea2646970667358221220254e5b2a1f7b4c87b6d3fb74ba52dc4614ca75f607aef862d4c53b57838b1d0f64736f6c634300080a0033";

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
    profile: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<POAPCollectionModule> {
    return super.deploy(
      profile,
      overrides || {}
    ) as Promise<POAPCollectionModule>;
  }
  override getDeployTransaction(
    profile: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(profile, overrides || {});
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
