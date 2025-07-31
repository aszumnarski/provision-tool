import "./Date.css";
import { useContext, useEffect } from "react";
import { FormContext } from "../../context";
import { type IField, type IPattern } from "../Field/Field";
import type { ChangeEvent } from "react";

export const DateInput = (props: IField) => {
  //@ts-ignore
  const { formValues, setFormValues, patterns } = useContext(FormContext);
  const className = `field ${props.error ? "field--error" : ""}`;
  const toDashed = (dottedDate?: string) =>
    dottedDate ? dottedDate.split(".").reverse().join("-") : "";
  const toDotted = (dashedDate: string) =>
    dashedDate ? dashedDate.split("-").reverse().join(".") : "";

  const today = new Date().toISOString().substring(0, 10);
  const isFuture =
    patterns &&
    patterns[props.name]?.map((p: IPattern) => p.reg).includes("future");
  const min = isFuture ? today : "";

  const handleChange = (e: ChangeEvent) => {
    const input = e.target as HTMLInputElement;

    setFormValues({
      ...formValues,
      [props.name]: toDotted(input.value || today),
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setFormValues((formValues: any) => {
        return {
          ...formValues,
          [props.name]: toDotted(today),
        };
      });
    }, 5);
  }, []);

  return (
    <div className={className}>
      <label>
        <span>{props.label}</span>
        <input
          type="date"
          className="field-input"
          name={props.name}
          onChange={handleChange}
          onBlur={props.onBlur}
          value={toDashed(props.value) || today}
          min={min}
          disabled={props.disabled}
        />
      </label>
      <p className="error-message">{props.error}</p>
    </div>
  );
};
