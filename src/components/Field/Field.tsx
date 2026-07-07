import "./Field.css";

import { useFormContext } from "../../context/useFormContext";
import { useEffect } from "react";
import { toDash, validate } from "../../utils/validation";
import { type ChangeEvent } from "react";
import { Select } from "../Select/Select";
import { Input } from "../Input/Input";
import { DateInput } from "../Date/Date";
import { Button } from "../Button/Button";
import { getOptions, getFieldValue } from "../../utils/config-resolver";

import { layout } from "../../config";

import {
  type IField,
  type IOption,
  type IAttachment,
  type ICondition,
} from "../../types";
import { resolveAmount } from "../../utils/resolveAmount";

export const Field = (props: IField) => {
  const {
    formValues,
    applicationData,
    setFormValues,
    defaultValues,
    setDefaultValues,
    formErrors,
    setFormErrors,
    patterns,
    setAtt,
    att,
    appConfig,
  } = useFormContext();

  const onBlur = () => {
    validate({
      patterns,
      disabled,
      name: props.name,
      setFormErrors,
      formValues,
      att,
    });
  };

  const onChange = async (e: ChangeEvent) => {
    const input = e.target as HTMLInputElement;
    const isDebug = window.location.search.includes("debug=true");
    if (input.files && input.files.length > 0) {
      const files = Array.from(input.files);

      const attachments: IAttachment[] = files.map(
        (file: File): IAttachment => ({
          fileName: file.name,
          fileData: file,
          fileSize: file.size,
        })
      );
      setAtt(attachments);
    }
    if (!defaultValues) {
      setDefaultValues(formValues);
      if (isDebug) console.log("✅ Default values initialized:", formValues);
    }
    const val =
      props.type === "number" ? input.value.replace(/-/g, "") : input.value;
    await setFormValues({
      [props.name]: val,
    });
  };

  const options = (): IOption[] => {
    if (appConfig) {
      const configOptions = getOptions(props.name, formValues, appConfig);

      if (configOptions) {
        return configOptions;
      }
    }

    return props.options || [];
  };

  const evaluateCalculation = () => {
    const calculator = props.calculatedValue?.calculator;

    if (!calculator) {
      return "";
    }

    return calculator(formValues).toLocaleString("en-US").replace(/\,/g, "");
  };

  const today = new Date().toISOString().substring(0, 10);
  const monthAddition = () => {
    if (!Object.keys(JSON.parse(JSON.stringify(formValues))).length) return "";
    if (!props.calculatedValue?.month) return "";
    if (!props.calculatedValue?.date) return "";
    const baseDate = new Date(
      toDash(formValues[props.calculatedValue.date]) || today
    );
    const targetDate = new Date(baseDate);
    targetDate.setMonth(targetDate.getMonth() + props.calculatedValue.month);
    const year = targetDate.getFullYear();
    const monthStr = String(targetDate.getMonth() + 1).padStart(2, "0");
    return `${year}${monthStr}`;
  };

  const getSum = () => {
    if (!props.calculatedValue) return "";
    if (props.calculatedValue.calculator) return evaluateCalculation();
    if (props.calculatedValue.date) return monthAddition();
    return "";
  };
  const sum = getSum();

  const conditionMatches = (c: ICondition) => {
    if (c.category) {
      const subType = appConfig?.subType?.[formValues.subType?.toLowerCase()];

      return subType?.amountCategory === c.category;
    }

    if (!c.when || c.is === undefined) {
      return false;
    }

    const value = formValues[c.when];

    if (Array.isArray(c.is)) {
      return c.is.includes(value);
    }

    return value == c.is || !!value == c.is;
  };

  const disabled = props.conditionalDisabled
    ? props.conditionalDisabled
        ?.map(
          (or) =>
            or.conditions.map(conditionMatches).filter(Boolean).length ===
            or.conditions.length
        )
        .filter(Boolean).length > 0
    : !!props.disabled;

  const copyValue = () => {
    if (!props.dependentValue) return "";

    const match = props.dependentValue.find((or) =>
      or.conditions.every(conditionMatches)
    );

    return match ? formValues[match.valueFrom] : formValues[props.name];
  };

  const getValue = () => {
    console.log("field", props.name);
    if (appConfig) {
      const resolvedValue = getFieldValue(props.name, formValues, appConfig);

      if (resolvedValue) {
        return resolvedValue;
      }
    }

    if (!Object.keys(JSON.parse(JSON.stringify(formValues))).length) return "";
    if (props.dependentValue) {
      console.log("dependent value shortcut", props.name);

      const copied = copyValue();

      if (copied !== undefined && copied !== "") {
        return copied;
      }
    }
    if (sum) return sum;

    console.log("getting value for", props.name);

    const amountValue = resolveAmount(props.name, applicationData);

    if (amountValue !== undefined) {
      return amountValue;
    }

    if (formValues[props.name]) return formValues[props.name];
    if (props.type === "select" && options().length) return options()[0].value;

    return "";
  };

  const opts = options();
  const value = getValue();
  const error = formErrors[props.name];
  const enhancedProps = {
    ...props,

    onChange,
    error,
    onBlur,
    disabled,
    options: opts,
    value,
  };

  useEffect(() => {
    const currentValue = formValues?.[props.name];
    const firstOptionValue = opts?.[0]?.value;

    const updateVals = async () => {
      await setFormValues({
        [props.name]: firstOptionValue,
      });
    };

    const shouldUpdate =
      props.type === "select" &&
      opts?.length &&
      (!currentValue || !opts.some((opt) => opt.value === currentValue));

    if (shouldUpdate && firstOptionValue) {
      updateVals();
    }
  }, [opts]);

  useEffect(() => {
    if (disabled) {
      validate({
        patterns,
        disabled,
        name: props.name,
        setFormErrors,
        formValues,
        att,
      });
    }
  }, [disabled]);

  const typeMap = {
    text: Input,
    number: Input,
    file: Input,
    select: Select,
    date: DateInput,
    button: Button,
  };

  useEffect(() => {
    if (enhancedProps.value !== formValues[props.name]) {
      setFormValues({
        [props.name]: enhancedProps.value,
      });
    }
  });

  const fieldLayout = props.layout || layout || "vertical";
  const Component = typeMap[props.type];

  if (!Component) return "";

  return (
    <div
      className={`field field--${fieldLayout} ${
        props.showLabel === false ? "field--no-label" : ""
      }`}
    >
      {/* Render label ONLY when needed */}
      {props.showLabel !== false && (
        <div className="field-label">{props.label || ""}</div>
      )}

      <div className="field-input">
        <Component {...enhancedProps} />

        <p
          className={`error-message ${
            enhancedProps.error ? "error-message--active" : ""
          }`}
          title={enhancedProps.error || ""}
        >
          {enhancedProps.error || ""}
        </p>
      </div>
    </div>
  );
};
