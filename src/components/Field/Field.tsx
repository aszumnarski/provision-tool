import "./Field.css";

import { useContext, useEffect } from "react";
import { FormContext } from "../../context";
import { useState, type ChangeEvent } from "react";
import { Select } from "../Select/Select";
import { Input } from "../Input/Input";
import { validateField } from "../../utils/validators";
import { DateInput } from "../Date/Date";
import { Button } from "../Button/Button";

export interface IField {
  name: string;
  label: string;
  initValue: string;
  type: "text" | "select" | "number" | "date" | "button" | "file";
  disabled?: boolean;
  conditionalDisabled?: IConditionalDisabled[];
  hidden?: boolean;
  patterns: IPattern[];
  options?: IOption[];
  maxlength?: string;
  value?: string;
  error?: string;
  dependentOptions?: IDependentOptions;
  calculatedValue?: string[];
  onChange?: (e: ChangeEvent) => void;
  onBlur?: (e: ChangeEvent) => void;
}

export interface IConditionalDisabled {
  conditions: (
    | {
        when: string;
        is: string;
      }
    | {
        when: string;
        is: boolean;
      }
  )[];
}

export interface IDependentOptions {
  dependency: string;
  values: IDependentOptionsValue[];
}

export interface IDependentOptionsValue {
  keys: string[];
  options: {
    label: string;
    value: string;
  }[];
}

export interface IOption {
  label: string;
  value: string;
}

export interface IPattern {
  reg: string;
  message: string;
}

export const Field = (props: IField) => {
  //@ts-ignore
  const {
    //@ts-ignore
    formValues,
    //@ts-ignore
    setFormValues,
    //@ts-ignore
    formErrors,
    //@ts-ignore
    setFormErrors,
    //@ts-ignore
    patterns,
    //@ts-ignore
    setPatterns,
  } = useContext(FormContext);

  const onBlur = () => {
    validate();
  };

  const [shouldValidate, setShouldValidate] = useState(false);

  const onChange = (e: ChangeEvent) => {
    const input = e.target as HTMLInputElement;
    const val =
      props.type === "number" ? input.value.replace("-", "") : input.value;
    setFormValues({ ...formValues, [props.name]: val });
  };

  const options = props.dependentOptions?.dependency
    ? props.dependentOptions.values.find((v) =>
        v.keys.includes(formValues[props.dependentOptions?.dependency]),
      )?.options || props.options
    : props.options;

  const sum = props.calculatedValue?.length
    ? props.calculatedValue
        .map((v) => parseFloat(formValues[v]) || 0)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        .toLocaleString("en-US")
        .replace(/\,/g, "")
    : "";

  const disabled = props.conditionalDisabled
    ? props.conditionalDisabled
        ?.map(
          (or) =>
            or.conditions
              .map(
                (c) =>
                  formValues[c.when] == c.is || !!formValues[c.when] == c.is,
              )
              .filter(Boolean).length === or.conditions.length,
        )
        .filter(Boolean).length > 0
    : props.disabled;
  const value = sum ? sum : formValues ? formValues[props.name] : "";
  const error = formErrors[props.name];
  const enhancedProps = {
    ...props,
    onChange,
    error,
    onBlur,
    disabled,
    options,
    value,
  };

  const validate = async () => {
    const errMsg = validateField(patterns[props.name], formValues[props.name]);
    await setFormErrors((formErrors: any) => {
      return { ...formErrors, [props.name]: disabled ? undefined : errMsg };
    });
  };

  const triggerValidate = () => {
    setShouldValidate(true);
    setTimeout(() => setShouldValidate(false), 1000);
  };

  useEffect(() => {
    setFormValues({
      ...formValues,
      [props.name]: value,
    });
  }, [value]);

  useEffect(() => {
    window.addEventListener("validate", triggerValidate);
    return () => {
      window.removeEventListener("validate", triggerValidate);
    };
  }, []);

  useEffect(() => {
    if (disabled) {
      validate();
    }
  }, [disabled]);

  useEffect(() => {
    if (shouldValidate) {
      validate();
    }
  }, [shouldValidate]);

  const typeMap = {
    text: Input,
    number: Input,
    file: Input,
    select: Select,
    date: DateInput,
    button: Button,
  };
  return props.type ? typeMap[props.type](enhancedProps) : "";
};
