import "./Field.css";

import { useContext, useEffect } from "react";
import { FormContext } from "../../context";
import { useState, type ChangeEvent } from "react";
import { Select } from "../Select/Select";
import { Input } from "../Input/Input";
import { validateField } from "../../utils/validators";
import { DateInput } from "../Date/Date";

export interface IField {
  name: string;
  label: string;
  initValue: string;
  type: "input" | "select" | "date" | "button";
  disabled?: boolean;
  hidden?: boolean;
  patterns: IPattern[];
  options?: IOption[];
  value?: string;
  error?: string;
  onChange?: (e: ChangeEvent) => void;
  onBlur?: (e: ChangeEvent) => void;
}

export interface IOption {
  label: string;
  value: string;
}

export interface IPattern {
  reg: string;
  message: string;
}

export const Field = (props: IField) => {
  //@ts-ignore
  const {
    //@ts-ignore
    formValues,
    //@ts-ignore
    setFormValues,
    //@ts-ignore
    formErrors,
    //@ts-ignore
    setFormErrors,
    //@ts-ignore
    patterns,
    //@ts-ignore
    setPatterns,
  } = useContext(FormContext);

  const onBlur = () => {
    const errMsg = validateField(patterns[props.name], formValues[props.name]);
    setFormErrors((formErrors: any) => {
      return { ...formErrors, [props.name]: errMsg };
    });
  };

  const onChange = (e: ChangeEvent) => {
    const input = e.target as HTMLInputElement;
    setFormValues({ ...formValues, [props.name]: input.value });
  };
  const value = formValues ? formValues[props.name] : "";
  const error = formErrors[props.name];
  const enhancedProps = { ...props, onChange, error, onBlur, value };

  const typeMap = {
    input: Input(enhancedProps),
    select: Select(enhancedProps),
    date: DateInput(enhancedProps),
    button: <div>button</div>,
  };
  return props.type ? typeMap[props.type] : "";
};
