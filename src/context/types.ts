import { type ChangeEvent } from "react";

export type TFormContext = {
  formValues: Record<string, any>;
  setFormValues: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  formErrors: Record<string, string | undefined>;
  setFormErrors: React.Dispatch<React.SetStateAction<Record<string, string | undefined>>>;
  patterns: Record<string, IPattern[]>;
  setPatterns: React.Dispatch<React.SetStateAction<Record<string, IPattern[]>>>;
  att: {
    fileName: string;
    fileData: File;
    fileSize: number;
  } | null;
  setAtt: React.Dispatch<React.SetStateAction<any>>;
  userCompanyCodes: IOption[];
  setUserCompanyCodes: React.Dispatch<React.SetStateAction<IOption[]>>;
  isLoading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  modalContent: any;
  setModalContent: React.Dispatch<React.SetStateAction<any>>;
  isEditingEnabled: boolean;
};


export interface IField {
    name: string;
    type: "text" | "select" | "number" | "date" | "button" | "file";
    calculatedValue?: ICalculatedValue;
    conditionalDisabled?: IConditionalDisabled[];
    dependentOptions?: IDependentOptions[];
    dependantValue?: IDependentValue[];
    disabled?: boolean;
    error?: string;
    hidden?: boolean;
    initValue?: string;
    label?: string;
    maxlength?: string;
    onBlur?: (e: ChangeEvent) => void;
    onChange?: (e: ChangeEvent) => void;
    options?: IOption[];
    patterns?: IPattern[];
    value?: string;
  }
  
  export interface ICalculatedValue {
    expression?: string;
    date?: string;
    month?: number;
  }
  
  export interface ICondition {
    when: string;
    is: string | boolean;
  }
  
  export interface IConditionMulti {
    when: string;
    is: (string | boolean)[];
  }
  
  export interface IDependentOptions {
    conditions: IConditionMulti[];
    options: IOption[];
    isFromValue?: boolean;
  }
  
  export interface IDependentValue {
    conditions: IConditionMulti[];
    valueFrom: string;
  }
  
  export interface IConditionalDisabled {
    conditions: ICondition[];
  }
  
  export interface IOption {
    label: string;
    value: string;
  }
  
  export interface IPattern {
    reg: string;
    message: string;
  }