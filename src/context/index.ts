import { createContext } from "react";

export type TFormContext = {
  formValues: any;
  setFormValues: (v: any) => void;
  formErrors: any;
  setFormErrors: (e: any) => void;
  patterns: any;
  setPatterns: (e: any) => void;
} | null;
export const FormContext = createContext<TFormContext>(null);
