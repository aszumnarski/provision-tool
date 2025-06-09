import "./Input.css";

import { useContext, useEffect } from "react";
import { FormValuesContext } from "../../context";
import { useState, type ChangeEvent } from "react";

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

export const Input = (props: IField) => {
  // const [value, setValue] = useState(props.initValue)

  // const { formValues, setFormValues } = useContext(FormValuesContext);
  // const onChange = (e: ChangeEvent) => {
  //   const input = e.target as HTMLInputElement;
  //   // setValue(input.value);
  //   setFormValues({ ...formValues, [props.name]: input.value });
  // };

  return (
    <label>
      <span>{props.label}</span>
      <input
        type="text"
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      />
    </label>
  );
};
