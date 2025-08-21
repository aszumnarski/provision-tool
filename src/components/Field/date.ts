import type { IField } from "../../context/types";
export function toDash(date?: string): string {
  return date
    ? `${date.substring(0, 4)}-${date.substring(4, 6)}-${date.substring(6, 8)}`
    : "";
}

export function getSum(
  props: IField,
  formValues: Record<string, any> | null,
  today: string
): string {
  if (!props.calculatedValue) return "";

  if (props.calculatedValue.expression) {
    try {
      return eval(props.calculatedValue.expression)
        .toLocaleString("en-US")
        .replace(/,/g, "");
    } catch {
      return "";
    }
  }

  if (
    props.calculatedValue.date &&
    props.calculatedValue.month &&
    formValues &&
    typeof formValues === "object"
  ) {
    const rawDate = formValues[props.calculatedValue.date];
    const newDate = new Date(toDash(rawDate || today));
    newDate.setMonth(newDate.getMonth() + props.calculatedValue.month);
    return newDate.toLocaleString("en-US", { month: "2-digit" });
  }

  return "";
}
