import "./Date.css";
import { useEffect } from "react";
import { type IField, type IPattern } from "../../types";
import type { ChangeEvent } from "react";
import { preventEnterSubmit } from "../../utils/keyboard-utils";
import { toDash } from "../../utils/validation";
import { useFormContext } from "../../context/useFormContext";

export const DateInput = (props: IField) => {
  const { formValues, setFormValues, patterns } = useFormContext();

  const noDash = (dashedDate?: string) =>
    dashedDate ? dashedDate.split("-").join("") : "";

  const today = new Date().toISOString().substring(0, 10);
  const past = new Date(Date.now() - 60 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  const isFuture =
    patterns &&
    patterns[props.name]?.map((p: IPattern) => p.reg).includes("future");

  const min = isFuture ? past : "";

  const handleChange = (e: ChangeEvent) => {
    const input = e.target as HTMLInputElement;

    setFormValues({
      [props.name]: noDash(input.value || today),
    });
  };

  useEffect(() => {
    if (!formValues[props.name]) {
      setFormValues({
        [props.name]: noDash(today),
      });
    }
  }, [formValues, props.name]);

  return (
    <div className="date-wrapper">
      <input
        type="date"
        className={`input ${props.error ? "input--error" : ""}`}
        name={props.name}
        onChange={handleChange}
        onBlur={props.onBlur}
        onKeyDown={preventEnterSubmit}
        value={toDash(props.value) || today}
        min={min}
        disabled={props.disabled}
      />
    </div>
  );
};
