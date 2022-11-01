/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  IceCandy,
  IceCandyInterface,
} from "../../../contracts/core/IceCandy";

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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "module",
        type: "address",
      },
      {
        indexed: false,
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
    name: "Eaten",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOfEaten",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOfNotEaten",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "module",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "moduleId",
        type: "uint256",
      },
    ],
    name: "eat",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "isEaten",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
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
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
  "0x60806040523480156200001157600080fd5b5060405162001e7a38038062001e7a8339810160408190526200003491620001c0565b604080518082018252600881526749636543616e647960c01b60208083019182528351808501909452600384526249434560e81b9084015281519192916200007f916000916200011a565b508051620000959060019060208401906200011a565b505050620000b2620000ac620000c460201b60201c565b620000c8565b620000bd81620000c8565b506200022f565b3390565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200012890620001f2565b90600052602060002090601f0160209004810192826200014c576000855562000197565b82601f106200016757805160ff191683800117855562000197565b8280016001018555821562000197579182015b82811115620001975782518255916020019190600101906200017a565b50620001a5929150620001a9565b5090565b5b80821115620001a55760008155600101620001aa565b600060208284031215620001d357600080fd5b81516001600160a01b0381168114620001eb57600080fd5b9392505050565b600181811c908216806200020757607f821691505b602082108114156200022957634e487b7160e01b600052602260045260246000fd5b50919050565b611c3b806200023f6000396000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c80636352211e116100de57806395d89b4111610097578063c87b56dd11610071578063c87b56dd1461035b578063cc2e0a261461036e578063e985e9c514610381578063f2fde38b1461039457600080fd5b806395d89b411461032d578063a22cb46514610335578063b88d4fde1461034857600080fd5b80636352211e146102b25780636a627842146102c55780636b7a6f8c146102d857806370a0823114610301578063715018a6146103145780638da5cb5b1461031c57600080fd5b80632f745c59116101305780632f745c591461021a5780633424e8041461022d57806342842e0e146102505780634aebaa75146102635780634f6ccce71461027657806355c774b61461028957600080fd5b806301ffc9a71461017857806306fdde03146101a0578063081812fc146101b5578063095ea7b3146101e057806318160ddd146101f557806323b872dd14610207575b600080fd5b61018b6101863660046116a8565b6103a7565b60405190151581526020015b60405180910390f35b6101a86103d2565b6040516101979190611712565b6101c86101c3366004611725565b610464565b6040516001600160a01b039091168152602001610197565b6101f36101ee366004611753565b61048b565b005b6008545b604051908152602001610197565b6101f361021536600461177f565b6105a6565b6101f9610228366004611753565b6105d7565b61018b61023b366004611725565b6000908152600d602052604090205460ff1690565b6101f361025e36600461177f565b61066d565b6101f36102713660046117c0565b610688565b6101f9610284366004611725565b610870565b6101f96102973660046117ff565b6001600160a01b03166000908152600f602052604090205490565b6101c86102c0366004611725565b610903565b6101f36102d33660046117ff565b610963565b6101f96102e63660046117ff565b6001600160a01b03166000908152600e602052604090205490565b6101f961030f3660046117ff565b610991565b6101f3610a17565b600a546001600160a01b03166101c8565b6101a8610a2b565b6101f361034336600461181c565b610a3a565b6101f3610356366004611870565b610a45565b6101a8610369366004611725565b610a7d565b6101f361037c3660046117ff565b610b1b565b61018b61038f366004611950565b610b45565b6101f36103a23660046117ff565b610c05565b60006001600160e01b0319821663780e9d6360e01b14806103cc57506103cc82610c7e565b92915050565b6060600080546103e19061197e565b80601f016020809104026020016040519081016040528092919081815260200182805461040d9061197e565b801561045a5780601f1061042f5761010080835404028352916020019161045a565b820191906000526020600020905b81548152906001019060200180831161043d57829003601f168201915b5050505050905090565b600061046f82610cce565b506000908152600460205260409020546001600160a01b031690565b600061049682610903565b9050806001600160a01b0316836001600160a01b031614156105095760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061052557506105258133610b45565b6105975760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610500565b6105a18383610d2d565b505050565b6105b03382610d9b565b6105cc5760405162461bcd60e51b8152600401610500906119b3565b6105a1838383610dfa565b60006105e283610991565b82106106445760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b6064820152608401610500565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b6105a183838360405180602001604052806000815250610a45565b6106923385610d9b565b6106f05760405162461bcd60e51b815260206004820152602960248201527f49636543616e64793a2063616c6c6572206973206e6f74206f776e6572206f7260448201526808185c1c1c9bdd995960ba1b6064820152608401610500565b6000848152600d602052604090205460ff161561074f5760405162461bcd60e51b815260206004820152601760248201527f49636543616e64793a20616c726561647920656174656e0000000000000000006044820152606401610500565b6000848152600d602052604081208054600160ff19909116811782558082018690556002820180546001600160a01b0319166001600160a01b038716179055600390910183905590600e906107a387610903565b6001600160a01b03166001600160a01b0316815260200190815260200160002060008282546107d29190611a17565b9091555060019050600f60006107e787610903565b6001600160a01b03166001600160a01b0316815260200190815260200160002060008282546108169190611a2f565b9091555050604080516001600160a01b038416815260208101839052438183015290518491339187917fd46f0b613182c214b5bccf920a8a8855ade3e81e083a1c8420b5751f1ea573e4919081900360600190a450505050565b600061087b60085490565b82106108de5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b6064820152608401610500565b600882815481106108f1576108f1611a46565b90600052602060002001549050919050565b6000818152600260205260408120546001600160a01b0316806103cc5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610500565b61096b610e80565b6000600b6000815461097c90611a5c565b9182905550905061098d8282610eda565b5050565b60006001600160a01b0382166109fb5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610500565b506001600160a01b031660009081526003602052604090205490565b610a1f610e80565b610a296000610f03565b565b6060600180546103e19061197e565b61098d338383610f55565b610a4f3383610d9b565b610a6b5760405162461bcd60e51b8152600401610500906119b3565b610a7784848484611024565b50505050565b6000818152600d60209081526040918290208251608081018452815460ff16158015825260018301549382019390935260028201546001600160a01b031693810193909352600301546060838101919091529190610af557604051806080016040528060568152602001611b57605691399392505050565b604051806080016040528060598152602001611bad605991399392505050565b50919050565b610b23610e80565b600c80546001600160a01b0319166001600160a01b0392909216919091179055565b600c546040805163d6afc9b160e01b815290516000926001600160a01b03169163d6afc9b19160048083019260209291908290030181865afa158015610b8f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb39190611a77565b6001600160a01b0316826001600160a01b03161415610bd4575060016103cc565b6001600160a01b0380841660009081526005602090815260408083209386168352929052205460ff165b9392505050565b610c0d610e80565b6001600160a01b038116610c725760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610500565b610c7b81610f03565b50565b60006001600160e01b031982166380ac58cd60e01b1480610caf57506001600160e01b03198216635b5e139f60e01b145b806103cc57506301ffc9a760e01b6001600160e01b03198316146103cc565b6000818152600260205260409020546001600160a01b0316610c7b5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610500565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610d6282610903565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610da783610903565b9050806001600160a01b0316846001600160a01b03161480610dce5750610dce8185610b45565b80610df25750836001600160a01b0316610de784610464565b6001600160a01b0316145b949350505050565b6000818152600d602052604090205460ff1615610e45576001600160a01b038084166000908152600e6020526040808220805460001901905591841681522080546001019055610e75565b6001600160a01b038084166000908152600f60205260408082208054600019019055918416815220805460010190555b6105a1838383611057565b600a546001600160a01b03163314610a295760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610500565b6001600160a01b0382166000908152600f602052604090208054600101905561098d82826111fe565b600a80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b03161415610fb75760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610500565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b61102f848484610dfa565b61103b8484848461134c565b610a775760405162461bcd60e51b815260040161050090611a94565b826001600160a01b031661106a82610903565b6001600160a01b0316146110ce5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610500565b6001600160a01b0382166111305760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610500565b61113b83838361144a565b611146600082610d2d565b6001600160a01b038316600090815260036020526040812080546001929061116f908490611a2f565b90915550506001600160a01b038216600090815260036020526040812080546001929061119d908490611a17565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6001600160a01b0382166112545760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610500565b6000818152600260205260409020546001600160a01b0316156112b95760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610500565b6112c56000838361144a565b6001600160a01b03821660009081526003602052604081208054600192906112ee908490611a17565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006001600160a01b0384163b1561143f57604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611390903390899088908890600401611ae6565b6020604051808303816000875af19250505080156113cb575060408051601f3d908101601f191682019092526113c891810190611b23565b60015b611425573d8080156113f9576040519150601f19603f3d011682016040523d82523d6000602084013e6113fe565b606091505b50805161141d5760405162461bcd60e51b815260040161050090611a94565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610df2565b506001949350505050565b6001600160a01b0383166114a5576114a081600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b6114c8565b816001600160a01b0316836001600160a01b0316146114c8576114c88382611502565b6001600160a01b0382166114df576105a18161159f565b826001600160a01b0316826001600160a01b0316146105a1576105a1828261164e565b6000600161150f84610991565b6115199190611a2f565b60008381526007602052604090205490915080821461156c576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b6008546000906115b190600190611a2f565b600083815260096020526040812054600880549394509092849081106115d9576115d9611a46565b9060005260206000200154905080600883815481106115fa576115fa611a46565b600091825260208083209091019290925582815260099091526040808220849055858252812055600880548061163257611632611b40565b6001900381819060005260206000200160009055905550505050565b600061165983610991565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b6001600160e01b031981168114610c7b57600080fd5b6000602082840312156116ba57600080fd5b8135610bfe81611692565b6000815180845260005b818110156116eb576020818501810151868301820152016116cf565b818111156116fd576000602083870101525b50601f01601f19169290920160200192915050565b602081526000610bfe60208301846116c5565b60006020828403121561173757600080fd5b5035919050565b6001600160a01b0381168114610c7b57600080fd5b6000806040838503121561176657600080fd5b82356117718161173e565b946020939093013593505050565b60008060006060848603121561179457600080fd5b833561179f8161173e565b925060208401356117af8161173e565b929592945050506040919091013590565b600080600080608085870312156117d657600080fd5b843593506020850135925060408501356117ef8161173e565b9396929550929360600135925050565b60006020828403121561181157600080fd5b8135610bfe8161173e565b6000806040838503121561182f57600080fd5b823561183a8161173e565b91506020830135801515811461184f57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561188657600080fd5b84356118918161173e565b935060208501356118a18161173e565b925060408501359150606085013567ffffffffffffffff808211156118c557600080fd5b818701915087601f8301126118d957600080fd5b8135818111156118eb576118eb61185a565b604051601f8201601f19908116603f011681019083821181831017156119135761191361185a565b816040528281528a602084870101111561192c57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561196357600080fd5b823561196e8161173e565b9150602083013561184f8161173e565b600181811c9082168061199257607f821691505b60208210811415610b1557634e487b7160e01b600052602260045260246000fd5b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b60008219821115611a2a57611a2a611a01565b500190565b600082821015611a4157611a41611a01565b500390565b634e487b7160e01b600052603260045260246000fd5b6000600019821415611a7057611a70611a01565b5060010190565b600060208284031215611a8957600080fd5b8151610bfe8161173e565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611b19908301846116c5565b9695505050505050565b600060208284031215611b3557600080fd5b8151610bfe81611692565b634e487b7160e01b600052603160045260246000fdfe697066733a2f2f62616679626569667070366568786437646e666b7169626e71776234373365657165737a6e326c326f647669356a6a6d67756f646f7935707270342f69636543616e64795f656174656e2e6a736f6e697066733a2f2f62616679626569657170647873636f656865617a78776e6a326a71346e336e3668666b6d7a7666623764797479613632666179367a327a717275612f69636543616e64795f6e6f74456174656e2e6a736f6ea2646970667358221220bb80c5463510ba645cb37cb2ccd9a091264072d564fea9a526970d8a83aad2f964736f6c634300080a0033";

type IceCandyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IceCandyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class IceCandy__factory extends ContractFactory {
  constructor(...args: IceCandyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<IceCandy> {
    return super.deploy(owner, overrides || {}) as Promise<IceCandy>;
  }
  override getDeployTransaction(
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(owner, overrides || {});
  }
  override attach(address: string): IceCandy {
    return super.attach(address) as IceCandy;
  }
  override connect(signer: Signer): IceCandy__factory {
    return super.connect(signer) as IceCandy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IceCandyInterface {
    return new utils.Interface(_abi) as IceCandyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IceCandy {
    return new Contract(address, _abi, signerOrProvider) as IceCandy;
  }
}
