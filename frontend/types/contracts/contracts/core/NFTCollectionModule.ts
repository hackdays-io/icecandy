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
} from "../../common";

export declare namespace INFTCollectionModule {
  export type NFTStructStruct = {
    chainId: PromiseOrValue<BigNumberish>;
    contractAddress: PromiseOrValue<string>;
    tokenId: PromiseOrValue<BigNumberish>;
    tokenURI: PromiseOrValue<string>;
  };

  export type NFTStructStructOutput = [BigNumber, string, BigNumber, string] & {
    chainId: BigNumber;
    contractAddress: string;
    tokenId: BigNumber;
    tokenURI: string;
  };
}

export interface NFTCollectionModuleInterface extends utils.Interface {
  functions: {
    "getNFTs(uint256,uint256)": FunctionFragment;
    "processCollect(uint256,uint256,(uint256,address,uint256,string)[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getNFTs" | "processCollect"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getNFTs",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "processCollect",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      INFTCollectionModule.NFTStructStruct[]
    ]
  ): string;

  decodeFunctionResult(functionFragment: "getNFTs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "processCollect",
    data: BytesLike
  ): Result;

  events: {};
}

export interface NFTCollectionModule extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NFTCollectionModuleInterface;

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
    getNFTs(
      profileId: PromiseOrValue<BigNumberish>,
      pubId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[INFTCollectionModule.NFTStructStructOutput[]]>;

    processCollect(
      profileId: PromiseOrValue<BigNumberish>,
      pubId: PromiseOrValue<BigNumberish>,
      nfts: INFTCollectionModule.NFTStructStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getNFTs(
    profileId: PromiseOrValue<BigNumberish>,
    pubId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<INFTCollectionModule.NFTStructStructOutput[]>;

  processCollect(
    profileId: PromiseOrValue<BigNumberish>,
    pubId: PromiseOrValue<BigNumberish>,
    nfts: INFTCollectionModule.NFTStructStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getNFTs(
      profileId: PromiseOrValue<BigNumberish>,
      pubId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<INFTCollectionModule.NFTStructStructOutput[]>;

    processCollect(
      profileId: PromiseOrValue<BigNumberish>,
      pubId: PromiseOrValue<BigNumberish>,
      nfts: INFTCollectionModule.NFTStructStruct[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getNFTs(
      profileId: PromiseOrValue<BigNumberish>,
      pubId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    processCollect(
      profileId: PromiseOrValue<BigNumberish>,
      pubId: PromiseOrValue<BigNumberish>,
      nfts: INFTCollectionModule.NFTStructStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getNFTs(
      profileId: PromiseOrValue<BigNumberish>,
      pubId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    processCollect(
      profileId: PromiseOrValue<BigNumberish>,
      pubId: PromiseOrValue<BigNumberish>,
      nfts: INFTCollectionModule.NFTStructStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
