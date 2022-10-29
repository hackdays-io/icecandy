/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export declare namespace INFTCollectionModule {
  export type NFTStructStruct = {
    chainId: PromiseOrValue<BigNumberish>;
    contractAddress: PromiseOrValue<string>;
    tokenId: PromiseOrValue<BigNumberish>;
    tokenURI: PromiseOrValue<string>;
    owner: PromiseOrValue<string>;
  };

  export type NFTStructStructOutput = [
    BigNumber,
    string,
    BigNumber,
    string,
    string
  ] & {
    chainId: BigNumber;
    contractAddress: string;
    tokenId: BigNumber;
    tokenURI: string;
    owner: string;
  };
}

export interface NFTCollectionModuleBaseInterface extends utils.Interface {
  functions: {
    "getCollection(uint256)": FunctionFragment;
    "processCollect(uint256,(uint256,address,uint256,string,address)[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getCollection" | "processCollect"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getCollection",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "processCollect",
    values: [
      PromiseOrValue<BigNumberish>,
      INFTCollectionModule.NFTStructStruct[]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getCollection",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "processCollect",
    data: BytesLike
  ): Result;

  events: {};
}

export interface NFTCollectionModuleBase extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NFTCollectionModuleBaseInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getCollection(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[INFTCollectionModule.NFTStructStructOutput[]]>;

    processCollect(
      profileId: PromiseOrValue<BigNumberish>,
      nfts: INFTCollectionModule.NFTStructStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getCollection(
    profileId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<INFTCollectionModule.NFTStructStructOutput[]>;

  processCollect(
    profileId: PromiseOrValue<BigNumberish>,
    nfts: INFTCollectionModule.NFTStructStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getCollection(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<INFTCollectionModule.NFTStructStructOutput[]>;

    processCollect(
      profileId: PromiseOrValue<BigNumberish>,
      nfts: INFTCollectionModule.NFTStructStruct[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getCollection(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    processCollect(
      profileId: PromiseOrValue<BigNumberish>,
      nfts: INFTCollectionModule.NFTStructStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getCollection(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    processCollect(
      profileId: PromiseOrValue<BigNumberish>,
      nfts: INFTCollectionModule.NFTStructStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
