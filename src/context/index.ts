import { createContext } from "react";

export type TFormContext = {
  formValues: any;
  setFormValues: (v: any) => void;
  formErrors: any;
  setFormErrors: (e: any) => void;
  patterns: any;
  setPatterns: (p: any) => void;
  att: any;
  setAtt: (a: any) => void;
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  modalContent: any;
  setModalContent: (m: any) => void;
} | null;
export const FormContext = createContext<TFormContext>(null);
