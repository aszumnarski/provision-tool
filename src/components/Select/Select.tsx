import "./Select.css";
import { type IField } from "../Field/Field";
import { useRef, useContext, useEffect } from "react";
import { FormContext } from "../../context";

export const Select = (props: IField) => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("Select must be used within a FormProvider");
  }

  const inputRef = useRef(null);

  const triggerChange = () => {
    const inputElement = inputRef.current;
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      "value",
    ).set;

    nativeInputValueSetter.call(inputElement, "New Value");

    const event = new Event("input", { bubbles: true });
    inputElement.dispatchEvent(event);
  };

  const { formValues, setFormValues } = context;
  const className = `field ${props.error ? "field--error" : ""}`;

  const renderOptions = () => {
    return (
      props.options?.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      )) ?? null
    );
  };

  const val =
    props.value || (props.options?.length ? props.options[0].value : "");

  console.log("hh", {
    val,
    pv: props.value,
    name: props.name,
    fv: formValues[props.name],
  });

  useEffect(() => {
    if (!formValues[props.name] && props.type==="select") {
      setFormValues({ [props.name]: val || "0" });
    }
    // triggerChange();
  });

  return (
    <div className={className}>
      <label>
        <span>{props.label}</span>
        <select
          className="field-input"
          name={props.name}
          ref={inputRef}
          value={props.value}
          onChange={props.onChange}
          disabled={props.disabled}
          onBlur={props.onBlur}
        >
          {renderOptions()}
        </select>
      </label>
      <p className="error-message">{props.error}</p>
    </div>
  );
};
