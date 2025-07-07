import { createContext } from "react";

export type TFormContext = {
  formValues: any;
  setFormValues: (v: any) => void;
  formErrors: any;
  setFormErrors: (e: any) => void;
  patterns: any;
  setPatterns: (e: any) => void;
  att: any;
  setAtt: (e: any) => void;
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
} | null;
export const FormContext = createContext<TFormContext>(null);
