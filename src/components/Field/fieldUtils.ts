import type { IField } from "../../context/types";
export function isFieldDisabled(
  conditionalDisabled: IField["conditionalDisabled"],
  formValues: Record<string, any> | null
): boolean {
  if (!conditionalDisabled || !Array.isArray(conditionalDisabled)) return false;
  
  if (!formValues || typeof formValues !== "object") return true;

  return conditionalDisabled.some((orGroup) =>
    orGroup.conditions.every((condition) => {
      const actual = formValues[condition.when];
      return actual === condition.is || !!actual === condition.is;
    })
  );
}
