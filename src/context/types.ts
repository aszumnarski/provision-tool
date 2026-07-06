import { createContext } from "react";
import { type IAppConfig, type IApplicationData } from "../types";

export interface IFormContext {
  formValues: any;

  setFormValues: (
    values: Record<string, unknown>,
    shouldOverwrite?: boolean
  ) => Promise<void>;
  applicationData: IApplicationData | null;
  setApplicationData: (p: IApplicationData | null) => void;
  defaultValues: any;
  setDefaultValues: (v: any) => void;
  formErrors: any;
  setFormErrors: (e: any) => void;
  patterns: any;
  setPatterns: (p: any) => void;
  att: any;
  setAtt: (a: any) => void;
  appConfig: IAppConfig | null;
  setAppConfig: (config: IAppConfig | null) => void;
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  modalContent: any;
  setModalContent: (m: any) => void;
}
export const FormContext = createContext<IFormContext | null>(null);
