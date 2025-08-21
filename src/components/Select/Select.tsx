
import "./Select.css";
import { type IField } from "../../context/types";
import { useContext, useEffect, useMemo } from "react";
import { FormContext } from "../../context";

export const Select = (props: IField) => {
  const formContext = useContext(FormContext);
  if (!formContext) {
    throw new Error("FormContext is not available");
  }

  const { formValues, setFormValues, patterns } = formContext;
  const className = `field ${props.error ? "field--error" : ""}`;

  const options = useMemo(() => props.options ?? [], [props.options]);

  const renderOptions = () => {
    return options.map((o) => (
      <option key={o.value} value={o.value}>
        {o.label}
      </option>
    ));
  };

  const setFirstOption = (optionsValue: string) => {
    setFormValues((formValues: any) => {
      if (formValues === null || typeof formValues !== "object") {
        return { [props.name]: optionsValue };
      }
      if (formValues[props.name] === undefined) {
        return {
          ...formValues,
          [props.name]: optionsValue,
        };
      }
      return formValues;
    });
  };

  // ✅ Only run once when options are available and value is not set
  useEffect(() => {
    if (
      props.type === "select" &&
      options.length > 0 &&
      formValues?.[props.name] === undefined
    ) {
      setFirstOption(options[0].value);
    }
  }, [props.name, props.type, options]);

  return (
    <div className={className}>
      <label>
        <span>{props.label}</span>
        <select
          className="field-input"
          name={props.name}
          value={props.value || formValues?.[props.name] || options[0]?.value || ""}
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
