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
  PayableOverrides,
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
} from "../../../common";

export declare namespace IIceCandyAssetStore {
  export type AssetStruct = {
    name: PromiseOrValue<string>;
    creator: PromiseOrValue<string>;
    assetURI: PromiseOrValue<string>;
  };

  export type AssetStructOutput = [string, string, string] & {
    name: string;
    creator: string;
    assetURI: string;
  };
}

export declare namespace IceCandyAssetStoreProvider {
  export type ProviderInfoStruct = {
    key: PromiseOrValue<string>;
    name: PromiseOrValue<string>;
  };

  export type ProviderInfoStructOutput = [string, string] & {
    key: string;
    name: string;
  };
}

export interface IceCandyAssetStoreProviderInterface extends utils.Interface {
  functions: {
    "assetStore()": FunctionFragment;
    "generateTraits(uint256)": FunctionFragment;
    "getAsset(uint256)": FunctionFragment;
    "getOwner()": FunctionFragment;
    "getProviderInfo()": FunctionFragment;
    "owner()": FunctionFragment;
    "processPayout(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "assetStore"
      | "generateTraits"
      | "getAsset"
      | "getOwner"
      | "getProviderInfo"
      | "owner"
      | "processPayout"
      | "renounceOwnership"
      | "totalSupply"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "assetStore",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "generateTraits",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAsset",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "getOwner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getProviderInfo",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "processPayout",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "assetStore", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "generateTraits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAsset", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getProviderInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "processPayout",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "Payout(string,uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Payout"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PayoutEventObject {
  providerKey: string;
  assetId: BigNumber;
  to: string;
  amount: BigNumber;
}
export type PayoutEvent = TypedEvent<
  [string, BigNumber, string, BigNumber],
  PayoutEventObject
>;

export type PayoutEventFilter = TypedEventFilter<PayoutEvent>;

export interface IceCandyAssetStoreProvider extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IceCandyAssetStoreProviderInterface;

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
    assetStore(overrides?: CallOverrides): Promise<[string]>;

    generateTraits(
      _assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string] & { traits: string }>;

    getAsset(
      _assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [IIceCandyAssetStore.AssetStructOutput] & {
        asset: IIceCandyAssetStore.AssetStructOutput;
      }
    >;

    getOwner(overrides?: CallOverrides): Promise<[string]>;

    getProviderInfo(
      overrides?: CallOverrides
    ): Promise<[IceCandyAssetStoreProvider.ProviderInfoStructOutput]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    processPayout(
      _assetId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  assetStore(overrides?: CallOverrides): Promise<string>;

  generateTraits(
    _assetId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getAsset(
    _assetId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IIceCandyAssetStore.AssetStructOutput>;

  getOwner(overrides?: CallOverrides): Promise<string>;

  getProviderInfo(
    overrides?: CallOverrides
  ): Promise<IceCandyAssetStoreProvider.ProviderInfoStructOutput>;

  owner(overrides?: CallOverrides): Promise<string>;

  processPayout(
    _assetId: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    assetStore(overrides?: CallOverrides): Promise<string>;

    generateTraits(
      _assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getAsset(
      _assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IIceCandyAssetStore.AssetStructOutput>;

    getOwner(overrides?: CallOverrides): Promise<string>;

    getProviderInfo(
      overrides?: CallOverrides
    ): Promise<IceCandyAssetStoreProvider.ProviderInfoStructOutput>;

    owner(overrides?: CallOverrides): Promise<string>;

    processPayout(
      _assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Payout(string,uint256,address,uint256)"(
      providerKey?: null,
      assetId?: null,
      to?: null,
      amount?: null
    ): PayoutEventFilter;
    Payout(
      providerKey?: null,
      assetId?: null,
      to?: null,
      amount?: null
    ): PayoutEventFilter;
  };

  estimateGas: {
    assetStore(overrides?: CallOverrides): Promise<BigNumber>;

    generateTraits(
      _assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAsset(
      _assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOwner(overrides?: CallOverrides): Promise<BigNumber>;

    getProviderInfo(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    processPayout(
      _assetId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    assetStore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    generateTraits(
      _assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAsset(
      _assetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getProviderInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    processPayout(
      _assetId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
