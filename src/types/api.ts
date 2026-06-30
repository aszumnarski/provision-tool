import { type IAppConfig } from "./config";

export interface IInitResponse {
    data: Record<string, string>;
  
    config: IAppConfig;
  }