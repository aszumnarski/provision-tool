import "./Button.css";
import { useContext, useEffect } from "react";
import { FormContext } from "../../context";
import { type IField } from "../Field/Field";
import type { ChangeEvent } from "react";

export const Button = (props: IField) => {
  //@ts-ignore
  const { formValues, setFormValues } = useContext(FormContext);
  const className = `field ${props.error ? "field--error" : ""}`;

  const toDashed = (dottedDate?: string) =>
    dottedDate ? dottedDate.split(".").reverse().join("-") : "";
  const toDotted = (dashedDate: string) =>
    dashedDate ? dashedDate.split("-").reverse().join(".") : "";

  const handleChange = (e: ChangeEvent) => {
    const input = e.target as HTMLInputElement;

    setFormValues({ ...formValues, [props.name]: toDotted(input.value) });
  };

  return (
    <div className={className}>
      <button>{props.label}</button>
      <p className="error-message">{props.error}</p>
    </div>
  );
};
