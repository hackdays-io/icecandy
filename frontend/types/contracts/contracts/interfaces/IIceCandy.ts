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

export declare namespace IIceCandy {
  export type IceCandyStructStruct = {
    iceCandyType: PromiseOrValue<BigNumberish>;
    sentProfileId: PromiseOrValue<BigNumberish>;
    sentModule: PromiseOrValue<string>;
    sentModuleId: PromiseOrValue<BigNumberish>;
  };

  export type IceCandyStructStructOutput = [
    number,
    BigNumber,
    string,
    BigNumber
  ] & {
    iceCandyType: number;
    sentProfileId: BigNumber;
    sentModule: string;
    sentModuleId: BigNumber;
  };

  export type SentIceCandyStructStruct = {
    tokenId: PromiseOrValue<BigNumberish>;
    profileId: PromiseOrValue<BigNumberish>;
    module: PromiseOrValue<string>;
    moduleId: PromiseOrValue<BigNumberish>;
  };

  export type SentIceCandyStructStructOutput = [
    BigNumber,
    BigNumber,
    string,
    BigNumber
  ] & {
    tokenId: BigNumber;
    profileId: BigNumber;
    module: string;
    moduleId: BigNumber;
  };
}

export interface IIceCandyInterface extends utils.Interface {
  functions: {
    "balanceOfLucky(address)": FunctionFragment;
    "balanceOfNotRevealed(address)": FunctionFragment;
    "balanceOfRevealed(address)": FunctionFragment;
    "balanceOfUnlucky(address)": FunctionFragment;
    "getIceCandy(uint256)": FunctionFragment;
    "getReceivedIceCandies(uint256)": FunctionFragment;
    "getReceivedProfileIds(uint256)": FunctionFragment;
    "getSentIceCandies(uint256)": FunctionFragment;
    "getSentProfileIds(uint256)": FunctionFragment;
    "mint(address)": FunctionFragment;
    "numberOfReceivedIceCandies(uint256)": FunctionFragment;
    "numberOfReceivedProfiles(uint256)": FunctionFragment;
    "numberOfSentIceCandies(uint256)": FunctionFragment;
    "numberOfSentProfiles(uint256)": FunctionFragment;
    "send(uint256,address,uint256)": FunctionFragment;
    "setGlobals(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "balanceOfLucky"
      | "balanceOfNotRevealed"
      | "balanceOfRevealed"
      | "balanceOfUnlucky"
      | "getIceCandy"
      | "getReceivedIceCandies"
      | "getReceivedProfileIds"
      | "getSentIceCandies"
      | "getSentProfileIds"
      | "mint"
      | "numberOfReceivedIceCandies"
      | "numberOfReceivedProfiles"
      | "numberOfSentIceCandies"
      | "numberOfSentProfiles"
      | "send"
      | "setGlobals"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "balanceOfLucky",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfNotRevealed",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfRevealed",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfUnlucky",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getIceCandy",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getReceivedIceCandies",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getReceivedProfileIds",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSentIceCandies",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSentProfileIds",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "numberOfReceivedIceCandies",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "numberOfReceivedProfiles",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "numberOfSentIceCandies",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "numberOfSentProfiles",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "send",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setGlobals",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "balanceOfLucky",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfNotRevealed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfRevealed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfUnlucky",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIceCandy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReceivedIceCandies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReceivedProfileIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSentIceCandies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSentProfileIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "numberOfReceivedIceCandies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numberOfReceivedProfiles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numberOfSentIceCandies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numberOfSentProfiles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setGlobals", data: BytesLike): Result;

  events: {
    "Mint(uint256,address,uint8,uint256)": EventFragment;
    "Sent(uint256,uint256,uint256,address,uint256,uint8,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Sent"): EventFragment;
}

export interface MintEventObject {
  tokenId: BigNumber;
  to: string;
  iceCandyType: number;
  blockNumber: BigNumber;
}
export type MintEvent = TypedEvent<
  [BigNumber, string, number, BigNumber],
  MintEventObject
>;

export type MintEventFilter = TypedEventFilter<MintEvent>;

export interface SentEventObject {
  tokenId: BigNumber;
  from: BigNumber;
  to: BigNumber;
  module: string;
  moduleId: BigNumber;
  iceCandyType: number;
  blockNumber: BigNumber;
}
export type SentEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, string, BigNumber, number, BigNumber],
  SentEventObject
>;

export type SentEventFilter = TypedEventFilter<SentEvent>;

export interface IIceCandy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IIceCandyInterface;

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
    balanceOfLucky(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balanceOfNotRevealed(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balanceOfRevealed(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balanceOfUnlucky(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getIceCandy(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IIceCandy.IceCandyStructStructOutput]>;

    getReceivedIceCandies(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IIceCandy.SentIceCandyStructStructOutput[]]>;

    getReceivedProfileIds(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getSentIceCandies(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IIceCandy.SentIceCandyStructStructOutput[]]>;

    getSentProfileIds(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    mint(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    numberOfReceivedIceCandies(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    numberOfReceivedProfiles(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    numberOfSentIceCandies(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    numberOfSentProfiles(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    send(
      profileId: PromiseOrValue<BigNumberish>,
      module: PromiseOrValue<string>,
      moduleId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setGlobals(
      globals: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  balanceOfLucky(
    owner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOfNotRevealed(
    owner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOfRevealed(
    owner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOfUnlucky(
    owner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getIceCandy(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IIceCandy.IceCandyStructStructOutput>;

  getReceivedIceCandies(
    profileId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IIceCandy.SentIceCandyStructStructOutput[]>;

  getReceivedProfileIds(
    profileId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getSentIceCandies(
    profileId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IIceCandy.SentIceCandyStructStructOutput[]>;

  getSentProfileIds(
    profileId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  mint(
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  numberOfReceivedIceCandies(
    profileId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  numberOfReceivedProfiles(
    profileId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  numberOfSentIceCandies(
    profileId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  numberOfSentProfiles(
    profileId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  send(
    profileId: PromiseOrValue<BigNumberish>,
    module: PromiseOrValue<string>,
    moduleId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setGlobals(
    globals: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    balanceOfLucky(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfNotRevealed(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfRevealed(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfUnlucky(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getIceCandy(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IIceCandy.IceCandyStructStructOutput>;

    getReceivedIceCandies(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IIceCandy.SentIceCandyStructStructOutput[]>;

    getReceivedProfileIds(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getSentIceCandies(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IIceCandy.SentIceCandyStructStructOutput[]>;

    getSentProfileIds(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    mint(to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    numberOfReceivedIceCandies(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    numberOfReceivedProfiles(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    numberOfSentIceCandies(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    numberOfSentProfiles(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    send(
      profileId: PromiseOrValue<BigNumberish>,
      module: PromiseOrValue<string>,
      moduleId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setGlobals(
      globals: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Mint(uint256,address,uint8,uint256)"(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      to?: PromiseOrValue<string> | null,
      iceCandyType?: PromiseOrValue<BigNumberish> | null,
      blockNumber?: null
    ): MintEventFilter;
    Mint(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      to?: PromiseOrValue<string> | null,
      iceCandyType?: PromiseOrValue<BigNumberish> | null,
      blockNumber?: null
    ): MintEventFilter;

    "Sent(uint256,uint256,uint256,address,uint256,uint8,uint256)"(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      from?: PromiseOrValue<BigNumberish> | null,
      to?: PromiseOrValue<BigNumberish> | null,
      module?: null,
      moduleId?: null,
      iceCandyType?: null,
      blockNumber?: null
    ): SentEventFilter;
    Sent(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      from?: PromiseOrValue<BigNumberish> | null,
      to?: PromiseOrValue<BigNumberish> | null,
      module?: null,
      moduleId?: null,
      iceCandyType?: null,
      blockNumber?: null
    ): SentEventFilter;
  };

  estimateGas: {
    balanceOfLucky(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfNotRevealed(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfRevealed(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfUnlucky(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getIceCandy(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReceivedIceCandies(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReceivedProfileIds(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSentIceCandies(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSentProfileIds(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mint(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    numberOfReceivedIceCandies(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    numberOfReceivedProfiles(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    numberOfSentIceCandies(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    numberOfSentProfiles(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    send(
      profileId: PromiseOrValue<BigNumberish>,
      module: PromiseOrValue<string>,
      moduleId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setGlobals(
      globals: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOfLucky(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfNotRevealed(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfRevealed(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfUnlucky(
      owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getIceCandy(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReceivedIceCandies(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReceivedProfileIds(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSentIceCandies(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSentProfileIds(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    numberOfReceivedIceCandies(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numberOfReceivedProfiles(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numberOfSentIceCandies(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numberOfSentProfiles(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    send(
      profileId: PromiseOrValue<BigNumberish>,
      module: PromiseOrValue<string>,
      moduleId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setGlobals(
      globals: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
