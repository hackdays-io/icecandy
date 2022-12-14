/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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

export interface GlobalsInterface extends utils.Interface {
  functions: {
    "getFlavorExtension()": FunctionFragment;
    "getIceCandy()": FunctionFragment;
    "getMirrorModule()": FunctionFragment;
    "getNFTCollectionModule()": FunctionFragment;
    "getPOAPCollectionModule()": FunctionFragment;
    "getProfile()": FunctionFragment;
    "getSNSAccountModule()": FunctionFragment;
    "getScoreModule()": FunctionFragment;
    "getSkillModule()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setFlavorExtension(address)": FunctionFragment;
    "setIceCandy(address)": FunctionFragment;
    "setMirrorModule(address)": FunctionFragment;
    "setNFTCollectionModule(address)": FunctionFragment;
    "setPOAPCollectionModule(address)": FunctionFragment;
    "setProfile(address)": FunctionFragment;
    "setSNSAccountModule(address)": FunctionFragment;
    "setScoreModule(address)": FunctionFragment;
    "setSkillModule(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getFlavorExtension"
      | "getIceCandy"
      | "getMirrorModule"
      | "getNFTCollectionModule"
      | "getPOAPCollectionModule"
      | "getProfile"
      | "getSNSAccountModule"
      | "getScoreModule"
      | "getSkillModule"
      | "owner"
      | "renounceOwnership"
      | "setFlavorExtension"
      | "setIceCandy"
      | "setMirrorModule"
      | "setNFTCollectionModule"
      | "setPOAPCollectionModule"
      | "setProfile"
      | "setSNSAccountModule"
      | "setScoreModule"
      | "setSkillModule"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getFlavorExtension",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getIceCandy",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMirrorModule",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNFTCollectionModule",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPOAPCollectionModule",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getProfile",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSNSAccountModule",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getScoreModule",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSkillModule",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFlavorExtension",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setIceCandy",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setMirrorModule",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setNFTCollectionModule",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setPOAPCollectionModule",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setProfile",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setSNSAccountModule",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setScoreModule",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setSkillModule",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getFlavorExtension",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIceCandy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMirrorModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNFTCollectionModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPOAPCollectionModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getProfile", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSNSAccountModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getScoreModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSkillModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFlavorExtension",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setIceCandy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMirrorModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setNFTCollectionModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPOAPCollectionModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setProfile", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setSNSAccountModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setScoreModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSkillModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
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

export interface Globals extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GlobalsInterface;

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
    getFlavorExtension(overrides?: CallOverrides): Promise<[string]>;

    getIceCandy(overrides?: CallOverrides): Promise<[string]>;

    getMirrorModule(overrides?: CallOverrides): Promise<[string]>;

    getNFTCollectionModule(overrides?: CallOverrides): Promise<[string]>;

    getPOAPCollectionModule(overrides?: CallOverrides): Promise<[string]>;

    getProfile(overrides?: CallOverrides): Promise<[string]>;

    getSNSAccountModule(overrides?: CallOverrides): Promise<[string]>;

    getScoreModule(overrides?: CallOverrides): Promise<[string]>;

    getSkillModule(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setFlavorExtension(
      colorExtension_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setIceCandy(
      icecandy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMirrorModule(
      mirrorModule_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setNFTCollectionModule(
      nftCollectionModule_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPOAPCollectionModule(
      poapCollectionModule_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setProfile(
      profile: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSNSAccountModule(
      snsAccountModule_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setScoreModule(
      scoreModule_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSkillModule(
      skillModule_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getFlavorExtension(overrides?: CallOverrides): Promise<string>;

  getIceCandy(overrides?: CallOverrides): Promise<string>;

  getMirrorModule(overrides?: CallOverrides): Promise<string>;

  getNFTCollectionModule(overrides?: CallOverrides): Promise<string>;

  getPOAPCollectionModule(overrides?: CallOverrides): Promise<string>;

  getProfile(overrides?: CallOverrides): Promise<string>;

  getSNSAccountModule(overrides?: CallOverrides): Promise<string>;

  getScoreModule(overrides?: CallOverrides): Promise<string>;

  getSkillModule(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setFlavorExtension(
    colorExtension_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setIceCandy(
    icecandy: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMirrorModule(
    mirrorModule_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setNFTCollectionModule(
    nftCollectionModule_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPOAPCollectionModule(
    poapCollectionModule_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setProfile(
    profile: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSNSAccountModule(
    snsAccountModule_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setScoreModule(
    scoreModule_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSkillModule(
    skillModule_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getFlavorExtension(overrides?: CallOverrides): Promise<string>;

    getIceCandy(overrides?: CallOverrides): Promise<string>;

    getMirrorModule(overrides?: CallOverrides): Promise<string>;

    getNFTCollectionModule(overrides?: CallOverrides): Promise<string>;

    getPOAPCollectionModule(overrides?: CallOverrides): Promise<string>;

    getProfile(overrides?: CallOverrides): Promise<string>;

    getSNSAccountModule(overrides?: CallOverrides): Promise<string>;

    getScoreModule(overrides?: CallOverrides): Promise<string>;

    getSkillModule(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setFlavorExtension(
      colorExtension_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setIceCandy(
      icecandy: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMirrorModule(
      mirrorModule_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setNFTCollectionModule(
      nftCollectionModule_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setPOAPCollectionModule(
      poapCollectionModule_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setProfile(
      profile: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setSNSAccountModule(
      snsAccountModule_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setScoreModule(
      scoreModule_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setSkillModule(
      skillModule_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

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
  };

  estimateGas: {
    getFlavorExtension(overrides?: CallOverrides): Promise<BigNumber>;

    getIceCandy(overrides?: CallOverrides): Promise<BigNumber>;

    getMirrorModule(overrides?: CallOverrides): Promise<BigNumber>;

    getNFTCollectionModule(overrides?: CallOverrides): Promise<BigNumber>;

    getPOAPCollectionModule(overrides?: CallOverrides): Promise<BigNumber>;

    getProfile(overrides?: CallOverrides): Promise<BigNumber>;

    getSNSAccountModule(overrides?: CallOverrides): Promise<BigNumber>;

    getScoreModule(overrides?: CallOverrides): Promise<BigNumber>;

    getSkillModule(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setFlavorExtension(
      colorExtension_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setIceCandy(
      icecandy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMirrorModule(
      mirrorModule_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setNFTCollectionModule(
      nftCollectionModule_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPOAPCollectionModule(
      poapCollectionModule_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setProfile(
      profile: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSNSAccountModule(
      snsAccountModule_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setScoreModule(
      scoreModule_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSkillModule(
      skillModule_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getFlavorExtension(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getIceCandy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMirrorModule(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNFTCollectionModule(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPOAPCollectionModule(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProfile(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSNSAccountModule(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getScoreModule(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSkillModule(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setFlavorExtension(
      colorExtension_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setIceCandy(
      icecandy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMirrorModule(
      mirrorModule_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setNFTCollectionModule(
      nftCollectionModule_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPOAPCollectionModule(
      poapCollectionModule_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setProfile(
      profile: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSNSAccountModule(
      snsAccountModule_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setScoreModule(
      scoreModule_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSkillModule(
      skillModule_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
