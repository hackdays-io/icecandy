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

export interface SNSAccountModuleInterface extends utils.Interface {
  functions: {
    "getSNSAccounts(uint256,uint256)": FunctionFragment;
    "processSNSAccount(uint256,uint256,(string,string,string,address))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getSNSAccounts" | "processSNSAccount"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getSNSAccounts",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "processSNSAccount",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      ISNSAccountModule.SNSAccountStructStruct
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getSNSAccounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "processSNSAccount",
    data: BytesLike
  ): Result;

  events: {
    "Query(string,string,address,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Query"): EventFragment;
}

export interface QueryEventObject {
  id: string;
  publicSignature: string;
  account: string;
  queryId: string;
}
export type QueryEvent = TypedEvent<
  [string, string, string, string],
  QueryEventObject
>;

export type QueryEventFilter = TypedEventFilter<QueryEvent>;

export interface SNSAccountModule extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SNSAccountModuleInterface;

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
    getSNSAccounts(
      profileId: PromiseOrValue<BigNumberish>,
      pubId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[ISNSAccountModule.SNSAccountStructStructOutput[]]>;

    processSNSAccount(
      profileId: PromiseOrValue<BigNumberish>,
      pubId: PromiseOrValue<BigNumberish>,
      sns: ISNSAccountModule.SNSAccountStructStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getSNSAccounts(
    profileId: PromiseOrValue<BigNumberish>,
    pubId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<ISNSAccountModule.SNSAccountStructStructOutput[]>;

  processSNSAccount(
    profileId: PromiseOrValue<BigNumberish>,
    pubId: PromiseOrValue<BigNumberish>,
    sns: ISNSAccountModule.SNSAccountStructStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getSNSAccounts(
      profileId: PromiseOrValue<BigNumberish>,
      pubId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<ISNSAccountModule.SNSAccountStructStructOutput[]>;

    processSNSAccount(
      profileId: PromiseOrValue<BigNumberish>,
      pubId: PromiseOrValue<BigNumberish>,
      sns: ISNSAccountModule.SNSAccountStructStruct,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Query(string,string,address,bytes32)"(
      id?: null,
      publicSignature?: null,
      account?: null,
      queryId?: null
    ): QueryEventFilter;
    Query(
      id?: null,
      publicSignature?: null,
      account?: null,
      queryId?: null
    ): QueryEventFilter;
  };

  estimateGas: {
    getSNSAccounts(
      profileId: PromiseOrValue<BigNumberish>,
      pubId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    processSNSAccount(
      profileId: PromiseOrValue<BigNumberish>,
      pubId: PromiseOrValue<BigNumberish>,
      sns: ISNSAccountModule.SNSAccountStructStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getSNSAccounts(
      profileId: PromiseOrValue<BigNumberish>,
      pubId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    processSNSAccount(
      profileId: PromiseOrValue<BigNumberish>,
      pubId: PromiseOrValue<BigNumberish>,
      sns: ISNSAccountModule.SNSAccountStructStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
