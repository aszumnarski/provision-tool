import { type IAppConfig } from "./config";

export interface IInitResponse {
  data: IInitData;
  config: IAppConfig;
  layout: ILayout;
}

export interface ILayout {
  sections: ISectionConfig[];
  fields: Record<string, IFieldConfig>;
}

export interface ISectionConfig {
  key: string;
  title: string | null;
  displayOrder: number;
  matrix: boolean;
}

export interface IFieldConfig {
  key: string;
  label: string;
  type: string;
  description: string;
  database: string;
  visible: boolean;
  section: string;
  column: number;
  position: number;
}

export interface IApiResponse {
  data?: IApplicationData;
  errors?: Record<string, string>;
}

export interface IInitData {
  user: string;
  mode: string;
  provisionType: string;
  subType: string;
}


export interface IAmountPair {
  postedBooked: number;
  update: number;
}


export interface IAmountData {
  carryForward: number;

  creationAddition: IAmountPair;

  usagePy: IAmountPair;
  usageCy: IAmountPair;

  releasePy: IAmountPair;
  releaseCy: IAmountPair;

  closingBalance: IAmountPair;
}


export interface IApplicationData {
  fields: Record<string, string>;
  amounts: Record<string, IAmountData>;
}

