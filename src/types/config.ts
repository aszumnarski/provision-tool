import { type IOption } from "./field";

export interface IAppConfig {
  mode: IOption[];

  companyCode: IOption[];

  localCurrency: Record<string, string>;

  ledgerGroup: Record<string, IOption[]>;

  provisionType: IProvisionType[];

  subType: Record<string, ISubtype>;

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


export interface ISubtype {
  label: string;
}
