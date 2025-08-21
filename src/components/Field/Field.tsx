import "./Field.css";
import { useContext, useEffect, useMemo } from "react";
import { FormContext } from "../../context";
import type { IField } from "../../context/types";
import { useState, type ChangeEvent } from "react";
import { Select } from "../Select/Select";
import { Input } from "../Input/Input";
import { DateInput } from "../Date/Date";
import { Button } from "../Button/Button";
import { getOptions, getValue } from "./options";
import { getSum } from "./date";
import { validateField } from "./validation";
import { isFieldDisabled } from "./fieldUtils";

export const Field = (props: IField) => {
  const context = useContext(FormContext);
  if (!context) throw new Error("Field must be used within a FormProvider");

  const {
    formValues,
    setFormValues,
    formErrors,
    setFormErrors,
    patterns,
    setAtt,
    userCompanyCodes,
    isEditingEnabled,
  } = context;

  const options = getOptions(props, formValues, userCompanyCodes);

  const [shouldValidate, setShouldValidate] = useState(false);

  const onBlur = () => {
    validate();
  };

  const onChange = (e: ChangeEvent) => {
    const input = e.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      setAtt({
        fileName: input.files[0].name,
        fileData: input.files[0],
        fileSize: input.files[0].size,
      });
    } else {
      setAtt(null);
    }
    const val =
      props.type === "number" ? input.value.replace(/-/g, "") : input.value;
    setFormValues({ ...formValues, [props.name]: val });
  };

  const today = useMemo(() => new Date().toISOString().substring(0, 10), []);

  const sum = useMemo(
    () => getSum(props, formValues, today),
    [props, formValues, today]
  );

  const disabled = !isEditingEnabled
    ? true
    : props.conditionalDisabled
    ? isFieldDisabled(props.conditionalDisabled, formValues)
    : props.disabled;

  const value = useMemo(
    () => getValue(props, formValues, sum, options),
    [props, formValues, sum, options]
  );

  const error = formErrors[props.name];

  const enhancedProps = useMemo(() => {
    return {
      ...props,
      onChange,
      error,
      onBlur,
      disabled,
      options,
      value,
    };
  }, [props, onChange, error, onBlur, disabled, options, value]);
  



  const validate = async () => {
    const safeFormValues =
      formValues && typeof formValues === "object" ? formValues : {};
  
    try {
      const errMsg = validateField(
        patterns[props.name],
        value,
        safeFormValues[props.name]
      );
  
      await setFormErrors((formErrors: any) => {
        const safeFormErrors =
          formErrors && typeof formErrors === "object" ? formErrors : {};
        return {
          ...safeFormErrors,
          [props.name]: disabled ? undefined : errMsg,
        };
      });
    } catch (error) {
      console.error("Validation error:", error);
    }
  };
  
  

  const triggerValidate = () => {
    setShouldValidate(true);
    setTimeout(() => setShouldValidate(false), 1000);
  };

  useEffect(() => {
    const handler = () => triggerValidate();
    window.addEventListener("validate", handler);
    return () => window.removeEventListener("validate", handler);
  }, []);

  useEffect(() => {
    if (disabled || shouldValidate) {
      validate();
    }
  }, [disabled, shouldValidate]);


  const typeMap = useMemo(
    () => ({
      text: Input,
      number: Input,
      file: Input,
      select: Select,
      date: DateInput,
      button: Button,
    }),
    []
  );






  useEffect(() => {
    const currentValue = formValues?.[props.name];
    const incomingValue = enhancedProps.value;
  
    if (
      currentValue === undefined &&
      incomingValue !== undefined
    ) {
      setFormValues((prev) => {
        if (prev?.[props.name] === undefined) {
          return {
            ...prev,
            [props.name]: incomingValue,
          };
        }
        return prev;
      });
    }
  }, [props.name, enhancedProps.value]);
  
  
  
  
  

  return props.type ? typeMap[props.type](enhancedProps) : "";
};
