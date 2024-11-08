/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  Asset,
  ContractInstance,
  getContractEventsCurrentCount,
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
  SignExecuteContractMethodParams,
  SignExecuteScriptTxResult,
  signExecuteMethod,
  addStdIdToFields,
  encodeContractFields,
  Narrow,
} from "@alephium/web3";
import { default as EnergyNFTContractJson } from "../EnergyNFT.ral.json";
import { getContractByCodeHash, registerContract } from "./contracts";

// Custom types for the contract
export namespace EnergyNFTTypes {
  export type Fields = {
    initialOwner: Address;
    initialEnergyAmount: bigint;
    tokenId: HexString;
    owner: Address;
    energyAmount: bigint;
    price: bigint;
    isListed: boolean;
  };

  export type State = ContractState<Fields>;

  export type NFTMintedEvent = ContractEvent<{
    owner: Address;
    tokenId: HexString;
    energyAmount: bigint;
  }>;
  export type NFTListedEvent = ContractEvent<{
    tokenId: HexString;
    price: bigint;
  }>;
  export type NFTSoldEvent = ContractEvent<{
    from: Address;
    to: Address;
    tokenId: HexString;
    price: bigint;
  }>;
  export type EnergyUpdatedEvent = ContractEvent<{
    tokenId: HexString;
    newAmount: bigint;
  }>;

  export interface CallMethodTable {
    mint: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<null>;
    };
    listForSale: {
      params: CallContractParams<{ newPrice: bigint }>;
      result: CallContractResult<null>;
    };
    buy: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<null>;
    };
    updateEnergy: {
      params: CallContractParams<{ newAmount: bigint }>;
      result: CallContractResult<null>;
    };
    getEnergyData: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<[Address, bigint, bigint, boolean]>;
    };
    getOwner: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<Address>;
    };
    getPrice: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    isForSale: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<boolean>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
  export type MulticallReturnType<Callss extends MultiCallParams[]> = {
    [index in keyof Callss]: MultiCallResults<Callss[index]>;
  };

  export interface SignExecuteMethodTable {
    mint: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    listForSale: {
      params: SignExecuteContractMethodParams<{ newPrice: bigint }>;
      result: SignExecuteScriptTxResult;
    };
    buy: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    updateEnergy: {
      params: SignExecuteContractMethodParams<{ newAmount: bigint }>;
      result: SignExecuteScriptTxResult;
    };
    getEnergyData: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getOwner: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    getPrice: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
    isForSale: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];
}

class Factory extends ContractFactory<
  EnergyNFTInstance,
  EnergyNFTTypes.Fields
> {
  encodeFields(fields: EnergyNFTTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      []
    );
  }

  eventIndex = { NFTMinted: 0, NFTListed: 1, NFTSold: 2, EnergyUpdated: 3 };
  consts = {
    ErrorCodes: {
      NotOwner: BigInt("0"),
      NotListed: BigInt("1"),
      AlreadyListed: BigInt("2"),
      InvalidAmount: BigInt("3"),
      InvalidBuyer: BigInt("4"),
      InsufficientPayment: BigInt("5"),
      NotInitialOwner: BigInt("6"),
    },
  };

  at(address: string): EnergyNFTInstance {
    return new EnergyNFTInstance(address);
  }

  tests = {
    mint: async (
      params: Omit<
        TestContractParamsWithoutMaps<EnergyNFTTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "mint", params, getContractByCodeHash);
    },
    listForSale: async (
      params: TestContractParamsWithoutMaps<
        EnergyNFTTypes.Fields,
        { newPrice: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "listForSale", params, getContractByCodeHash);
    },
    buy: async (
      params: Omit<
        TestContractParamsWithoutMaps<EnergyNFTTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "buy", params, getContractByCodeHash);
    },
    updateEnergy: async (
      params: TestContractParamsWithoutMaps<
        EnergyNFTTypes.Fields,
        { newAmount: bigint }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "updateEnergy", params, getContractByCodeHash);
    },
    getEnergyData: async (
      params: Omit<
        TestContractParamsWithoutMaps<EnergyNFTTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<
      TestContractResultWithoutMaps<[Address, bigint, bigint, boolean]>
    > => {
      return testMethod(this, "getEnergyData", params, getContractByCodeHash);
    },
    getOwner: async (
      params: Omit<
        TestContractParamsWithoutMaps<EnergyNFTTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<Address>> => {
      return testMethod(this, "getOwner", params, getContractByCodeHash);
    },
    getPrice: async (
      params: Omit<
        TestContractParamsWithoutMaps<EnergyNFTTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getPrice", params, getContractByCodeHash);
    },
    isForSale: async (
      params: Omit<
        TestContractParamsWithoutMaps<EnergyNFTTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<boolean>> => {
      return testMethod(this, "isForSale", params, getContractByCodeHash);
    },
  };

  stateForTest(
    initFields: EnergyNFTTypes.Fields,
    asset?: Asset,
    address?: string
  ) {
    return this.stateForTest_(initFields, asset, address, undefined);
  }
}

// Use this object to test and deploy the contract
export const EnergyNFT = new Factory(
  Contract.fromJson(
    EnergyNFTContractJson,
    "",
    "5b480f1923defa9589f68cc2e5e0e5519f754403f9ad4d722854ed9c5f8a93b9",
    []
  )
);
registerContract(EnergyNFT);

// Use this class to interact with the blockchain
export class EnergyNFTInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<EnergyNFTTypes.State> {
    return fetchContractState(EnergyNFT, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeNFTMintedEvent(
    options: EventSubscribeOptions<EnergyNFTTypes.NFTMintedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      EnergyNFT.contract,
      this,
      options,
      "NFTMinted",
      fromCount
    );
  }

  subscribeNFTListedEvent(
    options: EventSubscribeOptions<EnergyNFTTypes.NFTListedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      EnergyNFT.contract,
      this,
      options,
      "NFTListed",
      fromCount
    );
  }

  subscribeNFTSoldEvent(
    options: EventSubscribeOptions<EnergyNFTTypes.NFTSoldEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      EnergyNFT.contract,
      this,
      options,
      "NFTSold",
      fromCount
    );
  }

  subscribeEnergyUpdatedEvent(
    options: EventSubscribeOptions<EnergyNFTTypes.EnergyUpdatedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      EnergyNFT.contract,
      this,
      options,
      "EnergyUpdated",
      fromCount
    );
  }

  subscribeAllEvents(
    options: EventSubscribeOptions<
      | EnergyNFTTypes.NFTMintedEvent
      | EnergyNFTTypes.NFTListedEvent
      | EnergyNFTTypes.NFTSoldEvent
      | EnergyNFTTypes.EnergyUpdatedEvent
    >,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvents(
      EnergyNFT.contract,
      this,
      options,
      fromCount
    );
  }

  view = {
    mint: async (
      params?: EnergyNFTTypes.CallMethodParams<"mint">
    ): Promise<EnergyNFTTypes.CallMethodResult<"mint">> => {
      return callMethod(
        EnergyNFT,
        this,
        "mint",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    listForSale: async (
      params: EnergyNFTTypes.CallMethodParams<"listForSale">
    ): Promise<EnergyNFTTypes.CallMethodResult<"listForSale">> => {
      return callMethod(
        EnergyNFT,
        this,
        "listForSale",
        params,
        getContractByCodeHash
      );
    },
    buy: async (
      params?: EnergyNFTTypes.CallMethodParams<"buy">
    ): Promise<EnergyNFTTypes.CallMethodResult<"buy">> => {
      return callMethod(
        EnergyNFT,
        this,
        "buy",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    updateEnergy: async (
      params: EnergyNFTTypes.CallMethodParams<"updateEnergy">
    ): Promise<EnergyNFTTypes.CallMethodResult<"updateEnergy">> => {
      return callMethod(
        EnergyNFT,
        this,
        "updateEnergy",
        params,
        getContractByCodeHash
      );
    },
    getEnergyData: async (
      params?: EnergyNFTTypes.CallMethodParams<"getEnergyData">
    ): Promise<EnergyNFTTypes.CallMethodResult<"getEnergyData">> => {
      return callMethod(
        EnergyNFT,
        this,
        "getEnergyData",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getOwner: async (
      params?: EnergyNFTTypes.CallMethodParams<"getOwner">
    ): Promise<EnergyNFTTypes.CallMethodResult<"getOwner">> => {
      return callMethod(
        EnergyNFT,
        this,
        "getOwner",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getPrice: async (
      params?: EnergyNFTTypes.CallMethodParams<"getPrice">
    ): Promise<EnergyNFTTypes.CallMethodResult<"getPrice">> => {
      return callMethod(
        EnergyNFT,
        this,
        "getPrice",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    isForSale: async (
      params?: EnergyNFTTypes.CallMethodParams<"isForSale">
    ): Promise<EnergyNFTTypes.CallMethodResult<"isForSale">> => {
      return callMethod(
        EnergyNFT,
        this,
        "isForSale",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  transact = {
    mint: async (
      params: EnergyNFTTypes.SignExecuteMethodParams<"mint">
    ): Promise<EnergyNFTTypes.SignExecuteMethodResult<"mint">> => {
      return signExecuteMethod(EnergyNFT, this, "mint", params);
    },
    listForSale: async (
      params: EnergyNFTTypes.SignExecuteMethodParams<"listForSale">
    ): Promise<EnergyNFTTypes.SignExecuteMethodResult<"listForSale">> => {
      return signExecuteMethod(EnergyNFT, this, "listForSale", params);
    },
    buy: async (
      params: EnergyNFTTypes.SignExecuteMethodParams<"buy">
    ): Promise<EnergyNFTTypes.SignExecuteMethodResult<"buy">> => {
      return signExecuteMethod(EnergyNFT, this, "buy", params);
    },
    updateEnergy: async (
      params: EnergyNFTTypes.SignExecuteMethodParams<"updateEnergy">
    ): Promise<EnergyNFTTypes.SignExecuteMethodResult<"updateEnergy">> => {
      return signExecuteMethod(EnergyNFT, this, "updateEnergy", params);
    },
    getEnergyData: async (
      params: EnergyNFTTypes.SignExecuteMethodParams<"getEnergyData">
    ): Promise<EnergyNFTTypes.SignExecuteMethodResult<"getEnergyData">> => {
      return signExecuteMethod(EnergyNFT, this, "getEnergyData", params);
    },
    getOwner: async (
      params: EnergyNFTTypes.SignExecuteMethodParams<"getOwner">
    ): Promise<EnergyNFTTypes.SignExecuteMethodResult<"getOwner">> => {
      return signExecuteMethod(EnergyNFT, this, "getOwner", params);
    },
    getPrice: async (
      params: EnergyNFTTypes.SignExecuteMethodParams<"getPrice">
    ): Promise<EnergyNFTTypes.SignExecuteMethodResult<"getPrice">> => {
      return signExecuteMethod(EnergyNFT, this, "getPrice", params);
    },
    isForSale: async (
      params: EnergyNFTTypes.SignExecuteMethodParams<"isForSale">
    ): Promise<EnergyNFTTypes.SignExecuteMethodResult<"isForSale">> => {
      return signExecuteMethod(EnergyNFT, this, "isForSale", params);
    },
  };

  async multicall<Calls extends EnergyNFTTypes.MultiCallParams>(
    calls: Calls
  ): Promise<EnergyNFTTypes.MultiCallResults<Calls>>;
  async multicall<Callss extends EnergyNFTTypes.MultiCallParams[]>(
    callss: Narrow<Callss>
  ): Promise<EnergyNFTTypes.MulticallReturnType<Callss>>;
  async multicall<
    Callss extends
      | EnergyNFTTypes.MultiCallParams
      | EnergyNFTTypes.MultiCallParams[]
  >(callss: Callss): Promise<unknown> {
    return await multicallMethods(
      EnergyNFT,
      this,
      callss,
      getContractByCodeHash
    );
  }
}
