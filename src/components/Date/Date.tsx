import "./Date.css";
import { useContext, useEffect } from "react";
import { FormContext } from "../../context";
import { type IField, type IPattern } from "../Field/Field";
import type { ChangeEvent } from "react";

export const DateInput = (props: IField) => {
  //@ts-ignore
  const { formValues, setFormValues, patterns } = useContext(FormContext);
  const className = `field ${props.error ? "field--error" : ""}`;
  //const toDashed = (dottedDate?: string) =>
  //  dottedDate ? dottedDate.split(".").reverse().join("-") : "";
  //const toDotted = (dashedDate: string) =>
  //  dashedDate ? dashedDate.split("-").reverse().join(".") : "";
  const noDash = (dashedDate?: string) =>
    dashedDate ? dashedDate.split("-").join("") : "";
  const toDash = (notDash?: string) =>
    notDash
      ? notDash.substring(0, 4) +
        "-" +
        notDash.substring(4, 6) +
        "-" +
        notDash.substring(6, 8)
      : "";
  const today = new Date().toISOString().substring(0, 10);
  const isFuture =
    patterns &&
    patterns[props.name]?.map((p: IPattern) => p.reg).includes("future");
  const min = isFuture ? today : "";

  const handleChange = (e: ChangeEvent) => {
    const input = e.target as HTMLInputElement;

    setFormValues({
      ...formValues,
      [props.name]: noDash(input.value || today),
    });
  };

  //useEffect(() => {
  // setTimeout(() => {
  //    setFormValues((formValues: any) => {
  //      return {
  //        ...formValues,
  //        [props.name]: noDash(today),
  //      };
  //    });
  //  }, 20);
  //}, []);

  

  useEffect(() => {
    if (!formValues[props.name]) {
      setFormValues((prev: any) => ({
        ...prev,
        [props.name]: noDash(today),
      }));
    }
  }, [formValues, props.name, setFormValues]);
  


 //useEffect(() => {
 // if (formValues) {
//    setFormValues((formValues: any) => ({
//      ...formValues,
//      [props.name]: noDash(today),
//    }));
//  }
//}, []);

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
          value={toDash(props.value) || today}
          min={min}
          disabled={props.disabled}
        />
      </label>
      <p className="error-message">{props.error}</p>
    </div>
  );
};
