import "./Field.css";

import { useContext, useEffect } from "react";
import { FormContext } from "../../context";
import { toDash, validate } from "../../utils/validation";
import { type ChangeEvent } from "react";
import { Select } from "../Select/Select";
import { Input } from "../Input/Input";
import { DateInput } from "../Date/Date";
import { Button } from "../Button/Button";
import * as expressions from "../../utils/big-evals";
//export { expressions };
console.log({expressions});
export type TAttachment = {
  fileName: string;
  fileData: File;
  fileSize: number;
};

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

export const Field = (props: IField) => {
  //@ts-ignore
  const {
    //@ts-ignore
    formValues,
    //@ts-ignore
    setFormValues,
    //@ts-ignore
    defaultValues,
    //@ts-ignore
    setDefaultValues,
    //@ts-ignore
    formErrors,
    //@ts-ignore
    setFormErrors,
    //@ts-ignore
    patterns,
    //@ts-ignore
    setPatterns,
    //@ts-ignore
    setAtt,
    //@ts-ignore
    att,
    //@ts-ignore
    userCompanyCodes,
  } = useContext(FormContext);

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
    if (input.files && input.files.length > 0) {
      const files = Array.from(input.files);

      const attachments: TAttachment[] = files.map(
        (file: File): TAttachment => ({
          fileName: file.name,
          fileData: file,
          fileSize: file.size,
        }),
      );
      setAtt(attachments);
    }
    if (!defaultValues) {
      setDefaultValues(formValues);
    }
    const val =
      props.type === "number" ? input.value.replace(/-/g, "") : input.value;
    await setFormValues({
      [props.name]: val,
    });
  };

  const options = (): IOption[] => {
    if (props.name === "companyCode" && userCompanyCodes.length) {
      return userCompanyCodes;
    }

    if (!props.dependentOptions) return props.options || [];

    const valuedOptions = (opts: IOption[]) => {
      return opts.map((o) => {
        return {
          label: formValues[o.label],
          value: formValues[o.value],
        };
      });
    };

    const result: IOption[] =
      props.dependentOptions
        .map(
          (scenario) =>
            scenario.conditions
              .map(
                (c) =>
                  c.is.includes(formValues[c.when]) ||
                  c.is.includes(!!formValues[c.when]),
              )
              .filter(Boolean).length === scenario.conditions.length &&
            (scenario.isFromValue
              ? valuedOptions(scenario.options)
              : scenario.options),
        )
        .filter(Boolean)[0] || [];
    return result.length ? result : props.options || [];
  };

  const evalExpression = () =>
    props.calculatedValue?.expression
      ? eval(props.calculatedValue.expression)
          .toLocaleString("en-US")
          .replace(/\,/g, "")
      : "";
  const today = new Date().toISOString().substring(0, 10);
  const monthAddition = () => {
    if (!Object.keys(JSON.parse(JSON.stringify(formValues))).length) return "";
    if (!props.calculatedValue?.month) return "";
    if (!props.calculatedValue?.date) return "";
    const newDate = new Date(
      toDash(formValues[props.calculatedValue.date]) || today,
    );
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + props.calculatedValue.month;
    const tempDate = new Date(year, month, 1);
    tempDate.setMonth(tempDate.getMonth() + 1);
    tempDate.setDate(0);
    return ("0" + (tempDate.getMonth() + 1)).slice(-2);
  };

  const getSum = () => {
    if (!props.calculatedValue) return "";
    if (props.calculatedValue.expression) return evalExpression();
    if (props.calculatedValue.date) return monthAddition();
    return "";
  };
  const sum = getSum();
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
    : !!props.disabled;

  const copyValue = () => {
    if (!props.dependantValue) return "";

    const match = props.dependantValue.find((or) =>
      or.conditions.every((c) => c.is.includes(formValues[c.when])),
    );

    return match ? formValues[match.valueFrom] : formValues[props.name];
  };

  const getValue = () => {
    if (!Object.keys(JSON.parse(JSON.stringify(formValues))).length) return "";
    if (props.dependantValue) return copyValue();
    if (sum) return sum;

    if (formValues[props.name]) return formValues[props.name];
    if (props.type === "select" && options().length) return options()[0].value;

    return "";
  };

  const value = getValue();
  const error = formErrors[props.name];
  const enhancedProps = {
    ...props,

    onChange,
    error,
    onBlur,
    disabled,
    options: options(),
    value,
  };

  const opts = options();
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
  return props.type ? typeMap[props.type](enhancedProps) : "";
};

