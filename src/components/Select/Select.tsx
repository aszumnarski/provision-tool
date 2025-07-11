import "./Select.css";
import { type IField } from "../Field/Field";
import { useContext, useEffect } from "react";
import { FormContext } from "../../context";

export const Select = (props: IField) => {
  //@ts-ignore
  const { formValues, setFormValues, patterns } = useContext(FormContext);
  const className = `field ${props.error ? "field--error" : ""}`;

  const renderOptions = () => {
    return !props.options
      ? ""
      : props.options.map((o) => (
          <option
            key={o.value}
            value={o.value}
            selected={
              o.value ===
              (props.value || (props.options && props.options[0].value))
            }
          >
            {o.label}
          </option>
        ));
  };

  const optionsValue = (props.options && props.options[0]?.value) || "";

  const setFirstOption = async () => {
    if (props.type === "select" && props.options && optionsValue) {
      await setFormValues((formValues: any) => {
        return {
          ...formValues,
          [props.name]: optionsValue,
        };
      });
    }
  };

  const setInitValue = async () => {
    if (props.type === "select" && props.value) {
      await setFormValues((formValues: any) => {
        return {
          ...formValues,
          [props.name]: props.value,
        };
      });
    }
  };

  useEffect(() => {
    setTimeout(
      () => {
        setFirstOption();
        setInitValue();
      },

      100,
    );
  }, [optionsValue, props.value]);

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
