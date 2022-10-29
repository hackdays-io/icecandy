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
    wallet: PromiseOrValue<string>;
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
    wallet: string;
  };
}

export declare namespace ISNSAccountModule {
  export type SNSAccountStructStruct = {
    service: PromiseOrValue<string>;
    user_id: PromiseOrValue<string>;
    userPageURL: PromiseOrValue<string>;
    wallet: PromiseOrValue<string>;
  };

  export type SNSAccountStructStructOutput = [
    string,
    string,
    string,
    string
  ] & { service: string; user_id: string; userPageURL: string; wallet: string };
}

export declare namespace IProfile {
  export type CreateProfileStructDataStruct = {
    handle: PromiseOrValue<string>;
    imageURI: PromiseOrValue<string>;
    nfts: INFTCollectionModule.NFTStructStruct[];
  };

  export type CreateProfileStructDataStructOutput = [
    string,
    string,
    INFTCollectionModule.NFTStructStructOutput[]
  ] & {
    handle: string;
    imageURI: string;
    nfts: INFTCollectionModule.NFTStructStructOutput[];
  };

  export type ProfileStructStruct = {
    wallets: PromiseOrValue<string>[];
    handle: PromiseOrValue<string>;
    imageURI: PromiseOrValue<string>;
    nftCollectionPubId: PromiseOrValue<BigNumberish>;
    snsPubId: PromiseOrValue<BigNumberish>;
  };

  export type ProfileStructStructOutput = [
    string[],
    string,
    string,
    BigNumber,
    BigNumber
  ] & {
    wallets: string[];
    handle: string;
    imageURI: string;
    nftCollectionPubId: BigNumber;
    snsPubId: BigNumber;
  };
}

export interface IProfileInterface extends utils.Interface {
  functions: {
    "addWallet(uint256,address)": FunctionFragment;
    "createNFTCollection(uint256,(uint256,address,uint256,string,address)[])": FunctionFragment;
    "createProfile((string,string,(uint256,address,uint256,string,address)[]))": FunctionFragment;
    "createSNSAccount(uint256,(string,string,string,address))": FunctionFragment;
    "getNFTCollection(uint256,uint256)": FunctionFragment;
    "getProfile(uint256)": FunctionFragment;
    "getSNSAccounts(uint256,uint256)": FunctionFragment;
    "setIceCandy(address)": FunctionFragment;
    "setNFTCollectionModule(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addWallet"
      | "createNFTCollection"
      | "createProfile"
      | "createSNSAccount"
      | "getNFTCollection"
      | "getProfile"
      | "getSNSAccounts"
      | "setIceCandy"
      | "setNFTCollectionModule"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addWallet",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "createNFTCollection",
    values: [
      PromiseOrValue<BigNumberish>,
      INFTCollectionModule.NFTStructStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createProfile",
    values: [IProfile.CreateProfileStructDataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "createSNSAccount",
    values: [
      PromiseOrValue<BigNumberish>,
      ISNSAccountModule.SNSAccountStructStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getNFTCollection",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getProfile",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSNSAccounts",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setIceCandy",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setNFTCollectionModule",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "addWallet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createNFTCollection",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createProfile",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createSNSAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNFTCollection",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getProfile", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSNSAccounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setIceCandy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setNFTCollectionModule",
    data: BytesLike
  ): Result;

  events: {
    "NFTCollectionCreated(uint256,uint256,tuple[],uint256)": EventFragment;
    "ProfileCreated(address,uint256,string,string,uint256)": EventFragment;
    "SNSAccountCreated(uint256,uint256,tuple,uint256)": EventFragment;
    "WalletAdded(uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NFTCollectionCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProfileCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SNSAccountCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WalletAdded"): EventFragment;
}

export interface NFTCollectionCreatedEventObject {
  profileId: BigNumber;
  pubId: BigNumber;
  nfts: INFTCollectionModule.NFTStructStructOutput[];
  blockNumber: BigNumber;
}
export type NFTCollectionCreatedEvent = TypedEvent<
  [
    BigNumber,
    BigNumber,
    INFTCollectionModule.NFTStructStructOutput[],
    BigNumber
  ],
  NFTCollectionCreatedEventObject
>;

export type NFTCollectionCreatedEventFilter =
  TypedEventFilter<NFTCollectionCreatedEvent>;

export interface ProfileCreatedEventObject {
  wallet: string;
  profileId: BigNumber;
  handle: string;
  imageURI: string;
  blockNumber: BigNumber;
}
export type ProfileCreatedEvent = TypedEvent<
  [string, BigNumber, string, string, BigNumber],
  ProfileCreatedEventObject
>;

export type ProfileCreatedEventFilter = TypedEventFilter<ProfileCreatedEvent>;

export interface SNSAccountCreatedEventObject {
  profileId: BigNumber;
  pubId: BigNumber;
  sns: ISNSAccountModule.SNSAccountStructStructOutput;
  blockNumber: BigNumber;
}
export type SNSAccountCreatedEvent = TypedEvent<
  [
    BigNumber,
    BigNumber,
    ISNSAccountModule.SNSAccountStructStructOutput,
    BigNumber
  ],
  SNSAccountCreatedEventObject
>;

export type SNSAccountCreatedEventFilter =
  TypedEventFilter<SNSAccountCreatedEvent>;

export interface WalletAddedEventObject {
  profileId: BigNumber;
  wallet: string;
}
export type WalletAddedEvent = TypedEvent<
  [BigNumber, string],
  WalletAddedEventObject
>;

export type WalletAddedEventFilter = TypedEventFilter<WalletAddedEvent>;

export interface IProfile extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IProfileInterface;

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
    addWallet(
      profileId: PromiseOrValue<BigNumberish>,
      wallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createNFTCollection(
      profileId: PromiseOrValue<BigNumberish>,
      nfts: INFTCollectionModule.NFTStructStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createProfile(
      vars: IProfile.CreateProfileStructDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createSNSAccount(
      profileId: PromiseOrValue<BigNumberish>,
      sns: ISNSAccountModule.SNSAccountStructStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getNFTCollection(
      profileId: PromiseOrValue<BigNumberish>,
      nftCollectionPubId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[INFTCollectionModule.NFTStructStructOutput[]]>;

    getProfile(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IProfile.ProfileStructStructOutput]>;

    getSNSAccounts(
      profileId: PromiseOrValue<BigNumberish>,
      snsPubId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[ISNSAccountModule.SNSAccountStructStructOutput[]]>;

    setIceCandy(
      icecandy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setNFTCollectionModule(
      nftCollectionModule: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addWallet(
    profileId: PromiseOrValue<BigNumberish>,
    wallet: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createNFTCollection(
    profileId: PromiseOrValue<BigNumberish>,
    nfts: INFTCollectionModule.NFTStructStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createProfile(
    vars: IProfile.CreateProfileStructDataStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createSNSAccount(
    profileId: PromiseOrValue<BigNumberish>,
    sns: ISNSAccountModule.SNSAccountStructStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getNFTCollection(
    profileId: PromiseOrValue<BigNumberish>,
    nftCollectionPubId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<INFTCollectionModule.NFTStructStructOutput[]>;

  getProfile(
    profileId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IProfile.ProfileStructStructOutput>;

  getSNSAccounts(
    profileId: PromiseOrValue<BigNumberish>,
    snsPubId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<ISNSAccountModule.SNSAccountStructStructOutput[]>;

  setIceCandy(
    icecandy: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setNFTCollectionModule(
    nftCollectionModule: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addWallet(
      profileId: PromiseOrValue<BigNumberish>,
      wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    createNFTCollection(
      profileId: PromiseOrValue<BigNumberish>,
      nfts: INFTCollectionModule.NFTStructStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    createProfile(
      vars: IProfile.CreateProfileStructDataStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createSNSAccount(
      profileId: PromiseOrValue<BigNumberish>,
      sns: ISNSAccountModule.SNSAccountStructStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    getNFTCollection(
      profileId: PromiseOrValue<BigNumberish>,
      nftCollectionPubId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<INFTCollectionModule.NFTStructStructOutput[]>;

    getProfile(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IProfile.ProfileStructStructOutput>;

    getSNSAccounts(
      profileId: PromiseOrValue<BigNumberish>,
      snsPubId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<ISNSAccountModule.SNSAccountStructStructOutput[]>;

    setIceCandy(
      icecandy: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setNFTCollectionModule(
      nftCollectionModule: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "NFTCollectionCreated(uint256,uint256,tuple[],uint256)"(
      profileId?: PromiseOrValue<BigNumberish> | null,
      pubId?: PromiseOrValue<BigNumberish> | null,
      nfts?: null,
      blockNumber?: null
    ): NFTCollectionCreatedEventFilter;
    NFTCollectionCreated(
      profileId?: PromiseOrValue<BigNumberish> | null,
      pubId?: PromiseOrValue<BigNumberish> | null,
      nfts?: null,
      blockNumber?: null
    ): NFTCollectionCreatedEventFilter;

    "ProfileCreated(address,uint256,string,string,uint256)"(
      wallet?: PromiseOrValue<string> | null,
      profileId?: null,
      handle?: null,
      imageURI?: null,
      blockNumber?: null
    ): ProfileCreatedEventFilter;
    ProfileCreated(
      wallet?: PromiseOrValue<string> | null,
      profileId?: null,
      handle?: null,
      imageURI?: null,
      blockNumber?: null
    ): ProfileCreatedEventFilter;

    "SNSAccountCreated(uint256,uint256,tuple,uint256)"(
      profileId?: PromiseOrValue<BigNumberish> | null,
      pubId?: PromiseOrValue<BigNumberish> | null,
      sns?: null,
      blockNumber?: null
    ): SNSAccountCreatedEventFilter;
    SNSAccountCreated(
      profileId?: PromiseOrValue<BigNumberish> | null,
      pubId?: PromiseOrValue<BigNumberish> | null,
      sns?: null,
      blockNumber?: null
    ): SNSAccountCreatedEventFilter;

    "WalletAdded(uint256,address)"(
      profileId?: null,
      wallet?: null
    ): WalletAddedEventFilter;
    WalletAdded(profileId?: null, wallet?: null): WalletAddedEventFilter;
  };

  estimateGas: {
    addWallet(
      profileId: PromiseOrValue<BigNumberish>,
      wallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createNFTCollection(
      profileId: PromiseOrValue<BigNumberish>,
      nfts: INFTCollectionModule.NFTStructStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createProfile(
      vars: IProfile.CreateProfileStructDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createSNSAccount(
      profileId: PromiseOrValue<BigNumberish>,
      sns: ISNSAccountModule.SNSAccountStructStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getNFTCollection(
      profileId: PromiseOrValue<BigNumberish>,
      nftCollectionPubId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProfile(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSNSAccounts(
      profileId: PromiseOrValue<BigNumberish>,
      snsPubId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setIceCandy(
      icecandy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setNFTCollectionModule(
      nftCollectionModule: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addWallet(
      profileId: PromiseOrValue<BigNumberish>,
      wallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createNFTCollection(
      profileId: PromiseOrValue<BigNumberish>,
      nfts: INFTCollectionModule.NFTStructStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createProfile(
      vars: IProfile.CreateProfileStructDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createSNSAccount(
      profileId: PromiseOrValue<BigNumberish>,
      sns: ISNSAccountModule.SNSAccountStructStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getNFTCollection(
      profileId: PromiseOrValue<BigNumberish>,
      nftCollectionPubId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProfile(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSNSAccounts(
      profileId: PromiseOrValue<BigNumberish>,
      snsPubId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setIceCandy(
      icecandy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setNFTCollectionModule(
      nftCollectionModule: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
