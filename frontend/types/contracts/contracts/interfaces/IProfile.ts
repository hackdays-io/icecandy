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

export declare namespace IMirrorModule {
  export type MirrorStructStruct = { hoge: PromiseOrValue<string> };

  export type MirrorStructStructOutput = [string] & { hoge: string };
}

export declare namespace ISkillModule {
  export type SkillStructStruct = {
    name: PromiseOrValue<string>;
    description: PromiseOrValue<string>;
    link: PromiseOrValue<string>;
  };

  export type SkillStructStructOutput = [string, string, string] & {
    name: string;
    description: string;
    link: string;
  };
}

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

export declare namespace ISNSAccountModule {
  export type SNSAccountStructStruct = {
    service: PromiseOrValue<string>;
    userId: PromiseOrValue<string>;
    userPageURL: PromiseOrValue<string>;
    wallet: PromiseOrValue<string>;
  };

  export type SNSAccountStructStructOutput = [
    string,
    string,
    string,
    string
  ] & { service: string; userId: string; userPageURL: string; wallet: string };
}

export declare namespace IProfile {
  export type CreateProfileStructDataStruct = {
    name: PromiseOrValue<string>;
    introduction: PromiseOrValue<string>;
    imageURI: PromiseOrValue<string>;
    nfts: INFTCollectionModule.NFTStructStruct[];
    poaps: INFTCollectionModule.NFTStructStruct[];
    snsAccounts: ISNSAccountModule.SNSAccountStructStruct[];
    skills: ISkillModule.SkillStructStruct[];
  };

  export type CreateProfileStructDataStructOutput = [
    string,
    string,
    string,
    INFTCollectionModule.NFTStructStructOutput[],
    INFTCollectionModule.NFTStructStructOutput[],
    ISNSAccountModule.SNSAccountStructStructOutput[],
    ISkillModule.SkillStructStructOutput[]
  ] & {
    name: string;
    introduction: string;
    imageURI: string;
    nfts: INFTCollectionModule.NFTStructStructOutput[];
    poaps: INFTCollectionModule.NFTStructStructOutput[];
    snsAccounts: ISNSAccountModule.SNSAccountStructStructOutput[];
    skills: ISkillModule.SkillStructStructOutput[];
  };

  export type ProfileStructStruct = {
    wallets: PromiseOrValue<string>[];
    name: PromiseOrValue<string>;
    introduction: PromiseOrValue<string>;
    imageURI: PromiseOrValue<string>;
    snsAccountsPubId: PromiseOrValue<BigNumberish>;
  };

  export type ProfileStructStructOutput = [
    string[],
    string,
    string,
    string,
    BigNumber
  ] & {
    wallets: string[];
    name: string;
    introduction: string;
    imageURI: string;
    snsAccountsPubId: BigNumber;
  };
}

export declare namespace IFlavorExtension {
  export type FlavorStructStruct = {
    flavorType: PromiseOrValue<BigNumberish>;
    active: PromiseOrValue<boolean>;
  };

  export type FlavorStructStructOutput = [number, boolean] & {
    flavorType: number;
    active: boolean;
  };
}

export declare namespace IScoreModule {
  export type ScoreStructStruct = {
    scoreType: PromiseOrValue<BigNumberish>;
    point: PromiseOrValue<BigNumberish>;
  };

  export type ScoreStructStructOutput = [number, BigNumber] & {
    scoreType: number;
    point: BigNumber;
  };
}

export interface IProfileInterface extends utils.Interface {
  functions: {
    "activateFlavor(uint256,uint256)": FunctionFragment;
    "addMirror(uint256,(string))": FunctionFragment;
    "addSkill(uint256,(string,string,string))": FunctionFragment;
    "addWallet(uint256,address)": FunctionFragment;
    "createNFTCollection(uint256,(uint256,address,uint256,string,address)[])": FunctionFragment;
    "createPOAPCollection(uint256,(uint256,address,uint256,string,address)[])": FunctionFragment;
    "createProfile((string,string,string,(uint256,address,uint256,string,address)[],(uint256,address,uint256,string,address)[],(string,string,string,address)[],(string,string,string)[]))": FunctionFragment;
    "createSNSAccount(uint256,(string,string,string,address)[])": FunctionFragment;
    "deactivateFlavor(uint256,uint256)": FunctionFragment;
    "getFlavor(uint256)": FunctionFragment;
    "getMirror(uint256)": FunctionFragment;
    "getNFTCollection(uint256)": FunctionFragment;
    "getPOAPCollection(uint256)": FunctionFragment;
    "getProfile(uint256)": FunctionFragment;
    "getProfileId(address)": FunctionFragment;
    "getSNSAccounts(uint256)": FunctionFragment;
    "getScore(uint256)": FunctionFragment;
    "getSkill(uint256)": FunctionFragment;
    "setGlobals(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "activateFlavor"
      | "addMirror"
      | "addSkill"
      | "addWallet"
      | "createNFTCollection"
      | "createPOAPCollection"
      | "createProfile"
      | "createSNSAccount"
      | "deactivateFlavor"
      | "getFlavor"
      | "getMirror"
      | "getNFTCollection"
      | "getPOAPCollection"
      | "getProfile"
      | "getProfileId"
      | "getSNSAccounts"
      | "getScore"
      | "getSkill"
      | "setGlobals"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "activateFlavor",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "addMirror",
    values: [PromiseOrValue<BigNumberish>, IMirrorModule.MirrorStructStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "addSkill",
    values: [PromiseOrValue<BigNumberish>, ISkillModule.SkillStructStruct]
  ): string;
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
    functionFragment: "createPOAPCollection",
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
      ISNSAccountModule.SNSAccountStructStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deactivateFlavor",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getFlavor",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getMirror",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getNFTCollection",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPOAPCollection",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getProfile",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getProfileId",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSNSAccounts",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getScore",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSkill",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setGlobals",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "activateFlavor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addMirror", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addSkill", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addWallet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createNFTCollection",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createPOAPCollection",
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
    functionFragment: "deactivateFlavor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getFlavor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getMirror", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNFTCollection",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPOAPCollection",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getProfile", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getProfileId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSNSAccounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getScore", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getSkill", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setGlobals", data: BytesLike): Result;

  events: {
    "ProfileCreated(uint256,address,uint256)": EventFragment;
    "WalletAdded(uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ProfileCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WalletAdded"): EventFragment;
}

export interface ProfileCreatedEventObject {
  profileId: BigNumber;
  owner: string;
  blockNumber: BigNumber;
}
export type ProfileCreatedEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  ProfileCreatedEventObject
>;

export type ProfileCreatedEventFilter = TypedEventFilter<ProfileCreatedEvent>;

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
    activateFlavor(
      profileId: PromiseOrValue<BigNumberish>,
      extensionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addMirror(
      profileId: PromiseOrValue<BigNumberish>,
      mirror: IMirrorModule.MirrorStructStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addSkill(
      profileId: PromiseOrValue<BigNumberish>,
      skill: ISkillModule.SkillStructStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

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

    createPOAPCollection(
      profileId: PromiseOrValue<BigNumberish>,
      poaps: INFTCollectionModule.NFTStructStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createProfile(
      vars: IProfile.CreateProfileStructDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createSNSAccount(
      profileId: PromiseOrValue<BigNumberish>,
      snsAccounts: ISNSAccountModule.SNSAccountStructStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deactivateFlavor(
      profileId: PromiseOrValue<BigNumberish>,
      extensionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getFlavor(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IFlavorExtension.FlavorStructStructOutput[]]>;

    getMirror(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IMirrorModule.MirrorStructStructOutput[]]>;

    getNFTCollection(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[INFTCollectionModule.NFTStructStructOutput[]]>;

    getPOAPCollection(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[INFTCollectionModule.NFTStructStructOutput[]]>;

    getProfile(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IProfile.ProfileStructStructOutput]>;

    getProfileId(
      wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSNSAccounts(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[ISNSAccountModule.SNSAccountStructStructOutput[]]>;

    getScore(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IScoreModule.ScoreStructStructOutput[]]>;

    getSkill(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[ISkillModule.SkillStructStructOutput[]]>;

    setGlobals(
      globals: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  activateFlavor(
    profileId: PromiseOrValue<BigNumberish>,
    extensionId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addMirror(
    profileId: PromiseOrValue<BigNumberish>,
    mirror: IMirrorModule.MirrorStructStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addSkill(
    profileId: PromiseOrValue<BigNumberish>,
    skill: ISkillModule.SkillStructStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

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

  createPOAPCollection(
    profileId: PromiseOrValue<BigNumberish>,
    poaps: INFTCollectionModule.NFTStructStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createProfile(
    vars: IProfile.CreateProfileStructDataStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createSNSAccount(
    profileId: PromiseOrValue<BigNumberish>,
    snsAccounts: ISNSAccountModule.SNSAccountStructStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deactivateFlavor(
    profileId: PromiseOrValue<BigNumberish>,
    extensionId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getFlavor(
    profileId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IFlavorExtension.FlavorStructStructOutput[]>;

  getMirror(
    profileId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IMirrorModule.MirrorStructStructOutput[]>;

  getNFTCollection(
    profileId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<INFTCollectionModule.NFTStructStructOutput[]>;

  getPOAPCollection(
    profileId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<INFTCollectionModule.NFTStructStructOutput[]>;

  getProfile(
    profileId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IProfile.ProfileStructStructOutput>;

  getProfileId(
    wallet: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSNSAccounts(
    profileId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<ISNSAccountModule.SNSAccountStructStructOutput[]>;

  getScore(
    profileId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IScoreModule.ScoreStructStructOutput[]>;

  getSkill(
    profileId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<ISkillModule.SkillStructStructOutput[]>;

  setGlobals(
    globals: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    activateFlavor(
      profileId: PromiseOrValue<BigNumberish>,
      extensionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    addMirror(
      profileId: PromiseOrValue<BigNumberish>,
      mirror: IMirrorModule.MirrorStructStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    addSkill(
      profileId: PromiseOrValue<BigNumberish>,
      skill: ISkillModule.SkillStructStruct,
      overrides?: CallOverrides
    ): Promise<void>;

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

    createPOAPCollection(
      profileId: PromiseOrValue<BigNumberish>,
      poaps: INFTCollectionModule.NFTStructStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    createProfile(
      vars: IProfile.CreateProfileStructDataStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createSNSAccount(
      profileId: PromiseOrValue<BigNumberish>,
      snsAccounts: ISNSAccountModule.SNSAccountStructStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    deactivateFlavor(
      profileId: PromiseOrValue<BigNumberish>,
      extensionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getFlavor(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IFlavorExtension.FlavorStructStructOutput[]>;

    getMirror(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IMirrorModule.MirrorStructStructOutput[]>;

    getNFTCollection(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<INFTCollectionModule.NFTStructStructOutput[]>;

    getPOAPCollection(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<INFTCollectionModule.NFTStructStructOutput[]>;

    getProfile(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IProfile.ProfileStructStructOutput>;

    getProfileId(
      wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSNSAccounts(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<ISNSAccountModule.SNSAccountStructStructOutput[]>;

    getScore(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IScoreModule.ScoreStructStructOutput[]>;

    getSkill(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<ISkillModule.SkillStructStructOutput[]>;

    setGlobals(
      globals: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ProfileCreated(uint256,address,uint256)"(
      profileId?: PromiseOrValue<BigNumberish> | null,
      owner?: PromiseOrValue<string> | null,
      blockNumber?: null
    ): ProfileCreatedEventFilter;
    ProfileCreated(
      profileId?: PromiseOrValue<BigNumberish> | null,
      owner?: PromiseOrValue<string> | null,
      blockNumber?: null
    ): ProfileCreatedEventFilter;

    "WalletAdded(uint256,address)"(
      profileId?: null,
      wallet?: null
    ): WalletAddedEventFilter;
    WalletAdded(profileId?: null, wallet?: null): WalletAddedEventFilter;
  };

  estimateGas: {
    activateFlavor(
      profileId: PromiseOrValue<BigNumberish>,
      extensionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addMirror(
      profileId: PromiseOrValue<BigNumberish>,
      mirror: IMirrorModule.MirrorStructStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addSkill(
      profileId: PromiseOrValue<BigNumberish>,
      skill: ISkillModule.SkillStructStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

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

    createPOAPCollection(
      profileId: PromiseOrValue<BigNumberish>,
      poaps: INFTCollectionModule.NFTStructStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createProfile(
      vars: IProfile.CreateProfileStructDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createSNSAccount(
      profileId: PromiseOrValue<BigNumberish>,
      snsAccounts: ISNSAccountModule.SNSAccountStructStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deactivateFlavor(
      profileId: PromiseOrValue<BigNumberish>,
      extensionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getFlavor(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMirror(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNFTCollection(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPOAPCollection(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProfile(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProfileId(
      wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSNSAccounts(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getScore(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSkill(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setGlobals(
      globals: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    activateFlavor(
      profileId: PromiseOrValue<BigNumberish>,
      extensionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addMirror(
      profileId: PromiseOrValue<BigNumberish>,
      mirror: IMirrorModule.MirrorStructStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addSkill(
      profileId: PromiseOrValue<BigNumberish>,
      skill: ISkillModule.SkillStructStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

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

    createPOAPCollection(
      profileId: PromiseOrValue<BigNumberish>,
      poaps: INFTCollectionModule.NFTStructStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createProfile(
      vars: IProfile.CreateProfileStructDataStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createSNSAccount(
      profileId: PromiseOrValue<BigNumberish>,
      snsAccounts: ISNSAccountModule.SNSAccountStructStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deactivateFlavor(
      profileId: PromiseOrValue<BigNumberish>,
      extensionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getFlavor(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMirror(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNFTCollection(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPOAPCollection(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProfile(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProfileId(
      wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSNSAccounts(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getScore(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSkill(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setGlobals(
      globals: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
