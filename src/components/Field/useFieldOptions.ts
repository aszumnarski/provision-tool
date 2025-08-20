import { useMemo } from "react";
import type { IField, IOption } from "./Field";

export const useFieldOptions = (
  props: IField,
  formValues: Record<string, any>,
  userCompanyCodes: IOption[]
): IOption[] => {
  return useMemo(() => {
    if (!formValues || typeof formValues !== "object") {
      console.warn("formValues is null or not an object:", formValues);
      return props.options || [];
    }

    if (props.name === "companyCode" && userCompanyCodes.length) {
      return userCompanyCodes;
    }

    if (!props.dependentOptions) return props.options || [];

    const valuedOptions = (opts: IOption[]) =>
      opts.map((o) => ({
        label: formValues[o.label] ?? o.label,
        value: formValues[o.value] ?? o.value,
      }));

    for (const scenario of props.dependentOptions) {
      const allMatch = scenario.conditions.every((c) => {
        if (!c || typeof c !== "object" || !("when" in c) || !("is" in c))
          return false;

        const value = formValues[c.when];
        return Array.isArray(c.is)
          ? c.is.includes(value) || c.is.includes(!!value)
          : value === c.is || !!value === c.is;
      });

      if (allMatch) {
        return scenario.isFromValue
          ? valuedOptions(scenario.options)
          : scenario.options;
      }
    }

    return props.options || [];
  }, [props, formValues, userCompanyCodes]);
};
