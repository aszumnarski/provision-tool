import { type ChangeEvent } from "react";

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
  dependantValue?: IDependentValue[];
  disabled?: boolean;
  error?: string;
  hidden?: boolean;
  label?: string;
  maxlength?: string;
  onBlur?: (e: ChangeEvent) => void;
  onChange?: (e: ChangeEvent) => void;
  options?: IOption[];
  patterns?: IPattern[];
  value?: string;
  layout?: "vertical" | "horizontal";
  showLabel?: boolean;
}

export interface ICondition {
  when: string;
  is: string | boolean;
}

export interface IConditionalDisabled {
  conditions: ICondition[];
}

export interface IDependentValue {
  conditions: IConditionMulti[];
  valueFrom: string;
}

export type IAttachment = {
  fileName: string;
  fileData: File;
  fileSize: number;
};

export interface ICalculatedValue {
  expression?: string;
  date?: string;
  month?: number;
}

export interface IConditionMulti {
  when: string;
  is: (string | boolean)[];
}
