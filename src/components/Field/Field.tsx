import "./Field.css";

import { useContext, useEffect } from "react";
import { FormValuesContext } from "../../context";
import { useState, type ChangeEvent } from "react";
import { Input } from "../Input/Input";

export interface IField {
  name: string;
  label: string;
  initValue: string;
  type?: "input" | "select" | "date" | "button";
  disabled?: boolean;
  hidden?: boolean;
  patterns: IPattern[];
  options?: IOption[];
  onChange?: (e: ChangeEvent) => void;
  value: string;
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
  const { formValues, setFormValues } = useContext(FormValuesContext);
  const onChange = (e: ChangeEvent) => {
    const input = e.target as HTMLInputElement;
    setFormValues({ ...formValues, [props.name]: input.value });
  };
  const value = formValues ? formValues[props.name] : "";
  const enhancedProps = { ...props, onChange, value };

  const typeMap = {
    input: Input(enhancedProps),
    select: <div>select</div>,
    date: <div>date</div>,
    button: <div>button</div>,
  };
  return props.type ? typeMap[props.type] : "";
};
