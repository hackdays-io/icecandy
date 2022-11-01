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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface IGlobalsInterface extends utils.Interface {
  functions: {
    "getColorExtension()": FunctionFragment;
    "getIceCandy()": FunctionFragment;
    "getMirrorModule()": FunctionFragment;
    "getNFTCollectionModule()": FunctionFragment;
    "getPOAPCollectionModule()": FunctionFragment;
    "getProfile()": FunctionFragment;
    "getSNSAccountModule()": FunctionFragment;
    "getScoreModule()": FunctionFragment;
    "setColorExtension(address)": FunctionFragment;
    "setIceCandy(address)": FunctionFragment;
    "setMirrorModule(address)": FunctionFragment;
    "setNFTCollectionModule(address)": FunctionFragment;
    "setPOAPCollectionModule(address)": FunctionFragment;
    "setProfile(address)": FunctionFragment;
    "setSNSAccountModule(address)": FunctionFragment;
    "setScoreModule(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getColorExtension"
      | "getIceCandy"
      | "getMirrorModule"
      | "getNFTCollectionModule"
      | "getPOAPCollectionModule"
      | "getProfile"
      | "getSNSAccountModule"
      | "getScoreModule"
      | "setColorExtension"
      | "setIceCandy"
      | "setMirrorModule"
      | "setNFTCollectionModule"
      | "setPOAPCollectionModule"
      | "setProfile"
      | "setSNSAccountModule"
      | "setScoreModule"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getColorExtension",
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
    functionFragment: "setColorExtension",
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

  decodeFunctionResult(
    functionFragment: "getColorExtension",
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
    functionFragment: "setColorExtension",
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

  events: {};
}

export interface IGlobals extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IGlobalsInterface;

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
    getColorExtension(overrides?: CallOverrides): Promise<[string]>;

    getIceCandy(overrides?: CallOverrides): Promise<[string]>;

    getMirrorModule(overrides?: CallOverrides): Promise<[string]>;

    getNFTCollectionModule(overrides?: CallOverrides): Promise<[string]>;

    getPOAPCollectionModule(overrides?: CallOverrides): Promise<[string]>;

    getProfile(overrides?: CallOverrides): Promise<[string]>;

    getSNSAccountModule(overrides?: CallOverrides): Promise<[string]>;

    getScoreModule(overrides?: CallOverrides): Promise<[string]>;

    setColorExtension(
      colorExtension: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setIceCandy(
      icecandy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMirrorModule(
      mirrorModule: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setNFTCollectionModule(
      nftCollectionModule: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPOAPCollectionModule(
      poapCollectionModule: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setProfile(
      profile: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSNSAccountModule(
      snsAccountModule: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setScoreModule(
      scoreModule: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getColorExtension(overrides?: CallOverrides): Promise<string>;

  getIceCandy(overrides?: CallOverrides): Promise<string>;

  getMirrorModule(overrides?: CallOverrides): Promise<string>;

  getNFTCollectionModule(overrides?: CallOverrides): Promise<string>;

  getPOAPCollectionModule(overrides?: CallOverrides): Promise<string>;

  getProfile(overrides?: CallOverrides): Promise<string>;

  getSNSAccountModule(overrides?: CallOverrides): Promise<string>;

  getScoreModule(overrides?: CallOverrides): Promise<string>;

  setColorExtension(
    colorExtension: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setIceCandy(
    icecandy: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMirrorModule(
    mirrorModule: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setNFTCollectionModule(
    nftCollectionModule: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPOAPCollectionModule(
    poapCollectionModule: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setProfile(
    profile: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSNSAccountModule(
    snsAccountModule: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setScoreModule(
    scoreModule: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getColorExtension(overrides?: CallOverrides): Promise<string>;

    getIceCandy(overrides?: CallOverrides): Promise<string>;

    getMirrorModule(overrides?: CallOverrides): Promise<string>;

    getNFTCollectionModule(overrides?: CallOverrides): Promise<string>;

    getPOAPCollectionModule(overrides?: CallOverrides): Promise<string>;

    getProfile(overrides?: CallOverrides): Promise<string>;

    getSNSAccountModule(overrides?: CallOverrides): Promise<string>;

    getScoreModule(overrides?: CallOverrides): Promise<string>;

    setColorExtension(
      colorExtension: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setIceCandy(
      icecandy: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMirrorModule(
      mirrorModule: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setNFTCollectionModule(
      nftCollectionModule: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setPOAPCollectionModule(
      poapCollectionModule: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setProfile(
      profile: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setSNSAccountModule(
      snsAccountModule: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setScoreModule(
      scoreModule: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getColorExtension(overrides?: CallOverrides): Promise<BigNumber>;

    getIceCandy(overrides?: CallOverrides): Promise<BigNumber>;

    getMirrorModule(overrides?: CallOverrides): Promise<BigNumber>;

    getNFTCollectionModule(overrides?: CallOverrides): Promise<BigNumber>;

    getPOAPCollectionModule(overrides?: CallOverrides): Promise<BigNumber>;

    getProfile(overrides?: CallOverrides): Promise<BigNumber>;

    getSNSAccountModule(overrides?: CallOverrides): Promise<BigNumber>;

    getScoreModule(overrides?: CallOverrides): Promise<BigNumber>;

    setColorExtension(
      colorExtension: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setIceCandy(
      icecandy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMirrorModule(
      mirrorModule: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setNFTCollectionModule(
      nftCollectionModule: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPOAPCollectionModule(
      poapCollectionModule: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setProfile(
      profile: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSNSAccountModule(
      snsAccountModule: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setScoreModule(
      scoreModule: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getColorExtension(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    setColorExtension(
      colorExtension: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setIceCandy(
      icecandy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMirrorModule(
      mirrorModule: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setNFTCollectionModule(
      nftCollectionModule: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPOAPCollectionModule(
      poapCollectionModule: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setProfile(
      profile: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSNSAccountModule(
      snsAccountModule: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setScoreModule(
      scoreModule: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
