import "./Select.css";
import { type IField } from "../Field/Field";
import { useContext, useEffect } from "react";
import { FormContext } from "../../context";

export const Select = (props: IField) => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("Select must be used within a FormProvider");
  }

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

  const optionsValue =
    props.value ?? (props.options && props.options[0]?.value) ?? "";

  useEffect(() => {
    const currentValue = formValues?.[props.name];
    const firstOptionValue = props.options?.[0]?.value;

    const shouldUpdate =
      props.type === "select" &&
      props.options?.length &&
      (!currentValue ||
        !props.options.some((opt) => opt.value === currentValue));

    if (shouldUpdate && firstOptionValue) {
      setFormValues((prev: any) => ({
        ...prev,
        [props.name]: firstOptionValue,
      }));
    }
  }, [props.options]);

  return (
    <div className={className}>
      <label>
        <span>{props.label}</span>
        <select
          className="field-input"
          name={props.name}
          value={props.value || optionsValue}
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
