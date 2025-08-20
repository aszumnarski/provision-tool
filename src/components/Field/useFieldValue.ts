import { useMemo } from "react";
import type { IField } from "./Field";
import { toDash } from "./validationUtils";

export const useFieldValue = (
  props: IField,
  formValues: Record<string, any>
): string => {
  const today = new Date().toISOString().substring(0, 10);

  const evalExpression = () =>
    props.calculatedValue?.expression
      ? eval(props.calculatedValue.expression)
          .toLocaleString("en-US")
          .replace(/,/g, "")
      : "";

  const monthAddition = () => {
    if (!props.calculatedValue?.month || !props.calculatedValue?.date)
      return "";
    const baseDate = new Date(
      toDash(formValues[props.calculatedValue.date]) || today
    );
    baseDate.setMonth(baseDate.getMonth() + props.calculatedValue.month);
    return baseDate.toLocaleString("en-US", { month: "2-digit" });
  };

  const getSum = () => {
    if (!props.calculatedValue) return "";
    if (props.calculatedValue.expression) return evalExpression();
    if (props.calculatedValue.date) return monthAddition();
    return "";
  };

  const copyValue = () => {
    const match = props.dependantValue?.find((or) =>
      or.conditions.every((c) => c.is.includes(formValues[c.when]))
    );
    return match ? formValues[match.valueFrom] : formValues[props.name];
  };

  const value = useMemo(() => {
    if (!formValues || typeof formValues !== "object") return "";
    if (!Object.keys(formValues).length) return "";
    if (props.dependantValue) return copyValue();
    const sum = getSum();
    if (sum) return sum;
    if (formValues[props.name]) return formValues[props.name];
    if (props.type === "select" && props.options?.length)
      return props.options[0].value;
    return "";
  }, [formValues, props]);

  return value;
};
