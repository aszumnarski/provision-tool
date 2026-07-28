import { type ChangeEvent } from "react";
import type { TAmountCategory } from "./config";
import type { FormValue, FormValues } from "../context";

export interface IOption {
  label: string;
  value: string;
}

export interface IPattern {
  reg: string;
  message: string;
}

export interface IField {
  name: string;
  type: "text" | "select" | "number" | "date" | "button" | "file";
  calculatedValue?: ICalculatedValue;
  conditionalDisabled?: IConditionalDisabled[];
  dependentValue?: IDependentValue[];
  disabled?: boolean;
  error?: string;
  hidden?: boolean;
  label?: string;
  maxlength?: string;
  onBlur?: (e: ChangeEvent) => void;
  onChange?: (e: ChangeEvent) => void;
  options?: IOption[];
  patterns?: IPattern[];
  value?: FormValue;
  layout?: "vertical" | "horizontal";
  showLabel?: boolean;
}

export interface ICondition {
  when?: string;
  is?: string | boolean | (string | boolean)[];
  category?: TAmountCategory;
}

export interface IConditionalDisabled {
  conditions: ICondition[];
}

export interface IDependentValue {
  conditions: ICondition[];
  valueFrom: string;
}

export type IAttachment = {
  fileName: string;
  fileData: File;
  fileSize: number;
};


export interface ICalculatedValue {
  calculator?: Calculator;
  date?: string;
  month?: number;
}

export type Calculator = (
  formValues: FormValues
) => number | string;

