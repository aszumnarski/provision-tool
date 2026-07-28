import { createContext } from "react";
import { type IAppConfig, type IApplicationData, type IAttachment, type IPattern } from "../types";

export interface IFormContext {
  formValues: FormValues;

  setFormValues: (
    values: Partial<FormValues>,
    shouldOverwrite?: boolean
  ) => Promise<void>;

  applicationData: IApplicationData | null;
  setApplicationData: (p: IApplicationData | null) => void;
  defaultValues: FormValues | null;
  setDefaultValues: (v: FormValues | null) => void;

  formErrors: FormErrors;
  setFormErrors: React.Dispatch<React.SetStateAction<FormErrors>>;


  patterns: ValidationPatterns;
  setPatterns: React.Dispatch<React.SetStateAction<ValidationPatterns>>;


  att: IAttachment[] | null;
  setAtt: (a: IAttachment[] | null) => void;
  
  appConfig: IAppConfig | null;
  setAppConfig: (config: IAppConfig | null) => void;
  isLoading: boolean;
  setLoading: (loading: boolean) => void;

  modalContent: Record<string, string> | null;
  setModalContent: (
    content: Record<string, string> | null
  ) => void

}
export const FormContext = createContext<IFormContext | null>(null);

export type FormValue = string | number | boolean | null | undefined;

export type FormValues = Record<string, FormValue>;

export type FormErrors = Record<string, string>;

export type ValidationPatterns = Record<string, IPattern[]>;
