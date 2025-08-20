import "./Field.css";

import { useFieldValue } from "./useFieldValue";
import { useEnhancedFieldProps } from "./useEnhancedFieldProps";
import { validateField } from "./validationUtils";
import { useContext, useEffect } from "react";
import { FormContext } from "../../context";
import { useState, type ChangeEvent } from "react";
import { Select } from "../Select/Select";
import { Input } from "../Input/Input";
import { DateInput } from "../Date/Date";
import { Button } from "../Button/Button";

import { isFieldDisabled } from "./fieldUtils";

export interface IField {
  name: string;
  type: "text" | "select" | "number" | "date" | "button" | "file";
  calculatedValue?: ICalculatedValue;
  conditionalDisabled?: IConditionalDisabled[];
  dependentOptions?: IDependentOptions[];
  dependantValue?: IDependentValue[];
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

export interface ICalculatedValue {
  expression?: string;
  date?: string;
  month?: number;
}

export interface ICondition {
  when: string;
  is: string | boolean;
}

export interface IConditionMulti {
  when: string;
  is: (string | boolean)[];
}

export interface IDependentOptions {
  conditions: IConditionMulti[];
  options: IOption[];
  isFromValue?: boolean;
}

export interface IDependentValue {
  conditions: IConditionMulti[];
  valueFrom: string;
}

export interface IConditionalDisabled {
  conditions: ICondition[];
}

export interface IOption {
  label: string;
  value: string;
}

export interface IPattern {
  reg: string;
  message: string;
}

export const useFormContextSafe = () => {
  const context = useContext(FormContext);
  if (!context) throw new Error("FormContext is undefined");
  return context;
};

export const Field = (props: IField) => {
  const {
    formValues,
    setFormValues,
    formErrors,
    setFormErrors,
    patterns,
    att,
    userCompanyCodes,
  } = useFormContextSafe();

  const disabled = isFieldDisabled(
    props.conditionalDisabled,
    formValues,
    props.disabled
  );
  const [shouldValidate, setShouldValidate] = useState(false);

  const validate = async () => {
    const errMsg = validateField(patterns[props.name], formValues[props.name]);
    await setFormErrors((formErrors: any) => {
      return { ...formErrors, [props.name]: disabled ? undefined : errMsg };
    });
  };
  const value = useFieldValue(props, formValues);

  const enhancedProps = useEnhancedFieldProps(
    props,
    formValues,
    formErrors,
    setFormValues,
    setFormErrors,
    userCompanyCodes,
    att
  );

  const triggerValidate = () => {
    setShouldValidate(true);
    setTimeout(() => setShouldValidate(false), 1000);
  };

  useEffect(() => {
    if (
      formValues &&
      typeof formValues === "object" &&
      formValues[props.name] !== value
    ) {
      setFormValues((prev: any) => ({ ...prev, [props.name]: value }));
    }
  }, [value]);

  useEffect(() => {
    window.addEventListener("validate", triggerValidate);
    return () => {
      window.removeEventListener("validate", triggerValidate);
    };
  }, []);

  useEffect(() => {
    if (disabled || shouldValidate) {
      validate();
    }
  }, [disabled, shouldValidate]);

  const typeMap = {
    text: Input,
    number: Input,
    file: Input,
    select: Select,
    date: DateInput,
    button: Button,
  };
  return props.type ? typeMap[props.type](enhancedProps) : "";

  //return props.type ? typeMap[props.type] : null;
};
