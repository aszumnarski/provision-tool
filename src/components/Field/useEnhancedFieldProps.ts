import { useFieldValue } from "./useFieldValue";
import { useFieldOptions } from "./useFieldOptions";
import { isFieldDisabled } from "./fieldUtils";
import { validateField } from "./validationUtils";
import type { IField } from "./Field";

export const useEnhancedFieldProps = (
  props: IField,
  formValues: Record<string, any>,
  formErrors: Record<string, string>,
  setFormValues: (v: any) => void,
  setFormErrors: (v: any) => void,
  userCompanyCodes: IField["options"],
  att?: { fileSize: number }
) => {
  const value = useFieldValue(props, formValues);
  const options = useFieldOptions(props, formValues, userCompanyCodes ?? []);
  const disabled = isFieldDisabled(props.conditionalDisabled, formValues, props.disabled);
  const error = formErrors[props.name];

  const onChange = (e: React.ChangeEvent<any>) => {
    const input = e.target;
    const val = props.type === "number" ? input.value.replace(/-/g, "") : input.value;
    setFormValues({ ...formValues, [props.name]: val });
  };

  const validate = async () => {
    const errMsg = validateField(props.patterns || [], formValues[props.name], formValues, att);
    await setFormErrors((prev:any) => ({
      ...prev,
      [props.name]: disabled ? undefined : errMsg,
    }));
  };

  return {
    ...props,
    value,
    options,
    disabled,
    error,
    onChange,
    onBlur: validate,
  };
};
