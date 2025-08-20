import type { IField, IOption } from "../../context/types";

export function getOptions(
  props: IField,
  formValues: Record<string, any>,
  userCompanyCodes: IOption[]
): IOption[] {
  if (props.name === "companyCode" && userCompanyCodes.length) {
    return userCompanyCodes;
  }

  if (!props.dependentOptions) {
    return props.options || [];
  }

  const valuedOptions = (opts: IOption[]): IOption[] => {
    return opts.map(o => ({
      label: formValues[o.label],
      value: formValues[o.value],
    }));
  };

  const result: IOption[] =
    props.dependentOptions
      .map(scenario => {
        const allConditionsMet = scenario.conditions.every(c =>
          c.is.includes(formValues[c.when]) ||
          c.is.includes(!!formValues[c.when])
        );

        if (!allConditionsMet) return null;

        return scenario.isFromValue
          ? valuedOptions(scenario.options)
          : scenario.options;
      })
      .filter(Boolean)[0] || [];

  return result.length ? result : props.options || [];
}


export function copyValue(
    props: IField,
    formValues: Record<string, any>
  ): string | undefined {
    if (!props.dependantValue) return undefined;
  
    const match = props.dependantValue.find(or =>
      or.conditions.every(c => c.is.includes(formValues[c.when]))
    );
  
    return match ? formValues[match.valueFrom] : formValues[props.name];
  }
  
export function getValue(
    props: IField,
    formValues: Record<string, any>,
    sum: string,
    options: { value: string }[]
  ): string {
    if (!Object.keys(formValues).length) return "";
  
    if (props.dependantValue) return copyValue(props, formValues) ?? "";
    if (sum) return sum;
  
    const val = formValues[props.name];
    if (val !== undefined && val !== null) return val;
  
    if (props.type === "select" && options.length) return options[0].value;
  
    return "";
  }
  