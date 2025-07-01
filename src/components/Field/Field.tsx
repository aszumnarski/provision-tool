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
  type: "text" | "select" | "number" | "date" | "button" | "file";
  calculatedValue?: string[];
  conditionalDisabled?: IConditionalDisabled[];
  dependentOptions?: IDependentOptions;
  dependentOptions2?: IDependentOptions2[];
  disabled?: boolean;
  error?: string;
  hidden?: boolean;
  initValue?: string;
  label?: string;
  maxlength?: string;
  onBlur?: (e: ChangeEvent) => void;
  onChange?: (e: ChangeEvent) => void;
  options?: IOption[];
  patterns?: IPattern[];
  value?: string;
}

export interface ICondition {
  when: string;
  is: string | boolean;
}

export interface IDependentOptions2 {
  conditions: ICondition[];
  options: IOption[];
}

export interface IConditionalDisabled {
  conditions: ICondition[];
}

export interface IDependentOptions {
  dependency: string;
  values: IDependentOptionsValue[];
}

export interface IDependentOptionsValue {
  keys: string[];
  options: IOption[];
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

  const options2 = () => {
    if (!props.dependentOptions2) return props.options;
    props.dependentOptions2.map(
      (or) =>
        or.conditions
          .map(
            (c) => formValues[c.when] == c.is || !!formValues[c.when] == c.is,
          )
          .filter(Boolean).length === or.conditions.length,
    );
  };

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
