import "./Field.css";

import { useContext, useEffect } from "react";
import { FormContext } from "../../context";
import { useState, type ChangeEvent } from "react";
import { Select } from "../Select/Select";
import { Input } from "../Input/Input";
import { DateInput } from "../Date/Date";
import { Button } from "../Button/Button";

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
  } = useContext(FormContext);

  function validatePattern(pattern: string, value?: string) {
    const tokens = {
      required: () => !value,
      future: () =>
        value &&
        value.split(".").reverse().join("-") <
          new Date().toISOString().substring(0, 10),
      min: () => {
        const minimum = Number(pattern.split("_")[1]);
        return value && value?.length < minimum;
      },
      max: () => {
        const maximum = Number(pattern.split("_")[1]);
        return value && value?.length > maximum;
      },
      maxSize: () => {
        //console.log("hi");
        const maximum = Number(pattern.split("_")[1]);
        return att ? Number(att.fileSize) / 1024 / 1024 > maximum : false;
        //return att ? att.fileSize > maximum : false;
      },
      lt: () => {
        const fieldName = pattern.split("_")[1];
        const fieldValue = formValues[fieldName];
        return (
          value &&
          value.split(".").reverse().join("-") <
            fieldValue.split(".").reverse().join("-")
        );
      },
      gt: () => {
        const fieldName = pattern.split("_")[1];
        const fieldValue = formValues[fieldName];
        return (
          value &&
          value.split(".").reverse().join("-") >
            fieldValue.split(".").reverse().join("-")
        );
      },
    };
    const patternFromToken =
      tokens[pattern.split("_")[0] as keyof typeof tokens];
    const regex = new RegExp(pattern);
    return patternFromToken
      ? patternFromToken()
      : value && !regex.test(value || "");
  }

  const validateField = (patterns: IPattern[], value?: string | boolean) => {
    if (typeof value !== "string") return undefined;
    const messages = patterns
      .map((p) => validatePattern(p.reg, value) && p.message)
      .filter(Boolean);
    return messages.length ? messages[0] : undefined;
  };

  const onBlur = () => {
    validate();
  };

  const [shouldValidate, setShouldValidate] = useState(false);

  const onChange = (e: ChangeEvent) => {
    const input = e.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      setAtt({
        fileName: input.files[0].name,
        fileData: input.files[0],
        fileSize: input.files[0].size,
      });
    }else{
      setAtt(null);
    }
    const val =
      props.type === "number" ? input.value.replace("-", "") : input.value;
    setFormValues({ ...formValues, [props.name]: val });
  };

  const options = (): IOption[] => {
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
                  c.is.includes(!!formValues[c.when])
              )
              .filter(Boolean).length === scenario.conditions.length &&
            (scenario.isFromValue
              ? valuedOptions(scenario.options)
              : scenario.options)
        )
        .filter(Boolean)[0] || [];
    return result.length ? result : props.options || [];
  };

  const evalExpression = () =>
    props.calculatedValue?.expression
      ? eval(props.calculatedValue.expression)
      : "";

  const monthAddition = () => {
    if (!Object.keys(JSON.parse(JSON.stringify(formValues))).length) return "";
    if (!props.calculatedValue?.month) return "";
    if (!props.calculatedValue?.date) return "";
    const newDate = new Date(
      formValues[props.calculatedValue.date].split(".").reverse().join("-")
    );
    newDate.setMonth(newDate.getMonth() + props.calculatedValue.month);
    return "0" + newDate.toLocaleString("en-US", { month: "2-digit" });
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
                  formValues[c.when] == c.is || !!formValues[c.when] == c.is
              )
              .filter(Boolean).length === or.conditions.length
        )
        .filter(Boolean).length > 0
    : props.disabled;

  const copyValue = () => {
    if (!props.dependantValue) return "";

    const match = props.dependantValue.find((or) =>
      or.conditions.every((c) => c.is.includes(formValues[c.when]))
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
