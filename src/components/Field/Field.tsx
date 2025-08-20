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
    const errMsg = validateField(
      patterns[props.name],
      value,
      formValues[props.name]
    );
    await setFormErrors((formErrors: any) => {
      return { ...formErrors, [props.name]: disabled ? undefined : errMsg };
    });
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

  useEffect(() => {
    if (value !== "" && formValues[props.name] !== value) {
      setFormValues((prev) => ({ ...prev, [props.name]: value }));
    }
  }, [value]);

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
    if (enhancedProps.value !== formValues[props.name]) {
      setFormValues({
        ...formValues,
        [props.name]: enhancedProps.value,
      });
    }
  });

  return props.type ? typeMap[props.type](enhancedProps) : "";
};
