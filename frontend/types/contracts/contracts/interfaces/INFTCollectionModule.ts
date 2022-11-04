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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

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

export interface INFTCollectionModuleInterface extends utils.Interface {
  functions: {
    "createCollection(uint256,(uint256,address,uint256,string,address)[])": FunctionFragment;
    "getCollection(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "createCollection" | "getCollection"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createCollection",
    values: [
      PromiseOrValue<BigNumberish>,
      INFTCollectionModule.NFTStructStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getCollection",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "createCollection",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCollection",
    data: BytesLike
  ): Result;

  events: {
    "NFTCollectionCreated(uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NFTCollectionCreated"): EventFragment;
}

export interface NFTCollectionCreatedEventObject {
  profileId: BigNumber;
  module: string;
  blockNumber: BigNumber;
}
export type NFTCollectionCreatedEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  NFTCollectionCreatedEventObject
>;

export type NFTCollectionCreatedEventFilter =
  TypedEventFilter<NFTCollectionCreatedEvent>;

export interface INFTCollectionModule extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: INFTCollectionModuleInterface;

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
    createCollection(
      profileId: PromiseOrValue<BigNumberish>,
      nfts: INFTCollectionModule.NFTStructStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getCollection(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[INFTCollectionModule.NFTStructStructOutput[]]>;
  };

  createCollection(
    profileId: PromiseOrValue<BigNumberish>,
    nfts: INFTCollectionModule.NFTStructStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getCollection(
    profileId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<INFTCollectionModule.NFTStructStructOutput[]>;

  callStatic: {
    createCollection(
      profileId: PromiseOrValue<BigNumberish>,
      nfts: INFTCollectionModule.NFTStructStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    getCollection(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<INFTCollectionModule.NFTStructStructOutput[]>;
  };

  filters: {
    "NFTCollectionCreated(uint256,address,uint256)"(
      profileId?: PromiseOrValue<BigNumberish> | null,
      module?: PromiseOrValue<string> | null,
      blockNumber?: null
    ): NFTCollectionCreatedEventFilter;
    NFTCollectionCreated(
      profileId?: PromiseOrValue<BigNumberish> | null,
      module?: PromiseOrValue<string> | null,
      blockNumber?: null
    ): NFTCollectionCreatedEventFilter;
  };

  estimateGas: {
    createCollection(
      profileId: PromiseOrValue<BigNumberish>,
      nfts: INFTCollectionModule.NFTStructStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getCollection(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createCollection(
      profileId: PromiseOrValue<BigNumberish>,
      nfts: INFTCollectionModule.NFTStructStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getCollection(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
