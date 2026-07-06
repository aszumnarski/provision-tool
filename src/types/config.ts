import { type IOption } from "./field";

export interface IAppConfig {
  mode: IOption[];

  companyCode: IOption[];

  localCurrency: Record<string, string>;

  fiscalYear: Record<string, string>;

  ledgerGroup: Record<string, IOption[]>;

  provisionType: IProvisionType[];

  subType: Record<string, ISubType>;

  accountingRule: Record<string, IAccountingRule>;
}


export interface IAccountingRule {
  sign: string;

  reference: string;

  headerText: string;

  postingKeyDebit: string;
  glDebit: string;

  postingKeyCredit: string;
  glCredit: string;

  developmentCode: string;

  docType: string;
}


export interface IProvisionType {
  code: string;
  description: string;

  createAllowed: boolean;
  modifyAllowed: boolean;

  subTypes: string[];
}



export interface ISubType {
  label: string;
  amountCategory:AmountCategory;
}



export enum AmountCategory {
  CREATION_ADDITION = "CREATION_ADDITION",
  USAGE_PY = "USAGE_PY",
  USAGE_CY = "USAGE_CY",
  RELEASE_PY = "RELEASE_PY",
  RELEASE_CY = "RELEASE_CY",
}



  export const isAmountCategory = (
    subType: string | undefined,
    subTypes: Record<string, ISubType>,
    category: AmountCategory
  ) =>
    subTypes[subType?.toLowerCase() ?? ""]
      ?.amountCategory === category;
  
