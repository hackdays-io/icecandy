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

export interface ISkillModuleInterface extends utils.Interface {
  functions: {
    "addSkill(uint256,(string,string,string))": FunctionFragment;
    "getSkill(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "addSkill" | "getSkill"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addSkill",
    values: [PromiseOrValue<BigNumberish>, ISkillModule.SkillStructStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getSkill",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "addSkill", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getSkill", data: BytesLike): Result;

  events: {};
}

export interface ISkillModule extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISkillModuleInterface;

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
    addSkill(
      profileId: PromiseOrValue<BigNumberish>,
      skill: ISkillModule.SkillStructStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getSkill(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[ISkillModule.SkillStructStructOutput[]]>;
  };

  addSkill(
    profileId: PromiseOrValue<BigNumberish>,
    skill: ISkillModule.SkillStructStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getSkill(
    profileId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<ISkillModule.SkillStructStructOutput[]>;

  callStatic: {
    addSkill(
      profileId: PromiseOrValue<BigNumberish>,
      skill: ISkillModule.SkillStructStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSkill(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<ISkillModule.SkillStructStructOutput[]>;
  };

  filters: {};

  estimateGas: {
    addSkill(
      profileId: PromiseOrValue<BigNumberish>,
      skill: ISkillModule.SkillStructStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getSkill(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addSkill(
      profileId: PromiseOrValue<BigNumberish>,
      skill: ISkillModule.SkillStructStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getSkill(
      profileId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
