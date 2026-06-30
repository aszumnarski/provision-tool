import { createContext } from "react";
import { type IAppConfig } from "../types";

export interface IFormContext {
  formValues: any;
  setFormValues: (v: any) => void;
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

/*
export interface IFormContext {
    formValues: Record<string, string>;
  
    setFormValues: (
      values: Record<string, string>,
      shouldOverwrite?: boolean
    ) => Promise<void>;
  
    appConfig: IAppConfig | null;
  
    setAppConfig: React.Dispatch<
      React.SetStateAction<IAppConfig | null>
    >;
  
    isLoading: boolean;
    setLoading: (loading: boolean) => void;
  
 
  }
  */
