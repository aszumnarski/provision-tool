import { type IAppConfig } from "./config";

export interface IInitResponse {
  data: IInitData;
  config: IAppConfig;
}

export interface IApplicationResponse {
  data?: Record<string, any>;
  errors?: Record<string, string>;
}

export interface IPostResponse {
  data?: {
    appNumber: string;
  };

  errors?: Record<string, string>;
}

export interface IInitData {
  user: string;
  mode: string;
  provisionType: string;
  subType: string;
}
