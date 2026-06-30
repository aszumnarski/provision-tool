import { type IOption } from "./field";

export interface IAppConfig {
    companyCodes: IOption[];
  
    currencies: Record<string, string>;
  
    ledgerGroups: Record<string, IOption[]>;
  
    glMappings?: IGlMapping[];
  
    provisionTypes?: IOption[];
  
    subTypes?: Record<string, IOption[]>;
  }
  
  export interface IGlMapping {
    provisionType: string;
    subType: string;
  
    debitAccount: string;
    creditAccount: string;
  }