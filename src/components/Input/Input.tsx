import "./Input.css";

import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../../context";
import { useState, type ChangeEvent } from "react";

export interface IField {
  name: string;
  label: string;
  initValue: string;
  type?: "input" | "select";
  disabled?: boolean;
  hidden?: boolean;
  patterns: IPattern[];
  options?: IOption[];
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

  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const onChange = (e: ChangeEvent) => {
    const input = e.target as HTMLInputElement;
    // setValue(input.value);
    setCurrentUser({ ...currentUser, [props.name]: input.value });
  };

  return (
    <label>
      <span>{props.label}</span>
      <input
        type="text"
        name={props.name}
        onChange={onChange}
        value={currentUser?currentUser[props.name]:""}
      />
    </label>
  );
};
