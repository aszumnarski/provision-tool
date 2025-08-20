import type { IConditionalDisabled } from "./Field";




export const isFieldDisabled = (
  conditionalDisabled: IConditionalDisabled[] | undefined,
  formValues: Record<string, any>,
  defaultDisabled?: boolean
): boolean => {
  if (!conditionalDisabled) return !!defaultDisabled;

  if (!formValues || typeof formValues !== "object") {
    console.warn("formValues is null or not an object:", formValues);
    return !!defaultDisabled;
  }

  return conditionalDisabled.some((or) => {
    if (!Array.isArray(or.conditions)) {
      console.warn("Invalid 'or' object in conditionalDisabled:", or);
      return false;
    }

    return or.conditions.every((c) => {
      if (
        !c ||
        typeof c !== "object" ||
        c === null ||
        !("when" in c) ||
        !("is" in c)
      ) {
        console.warn("Invalid condition in conditionalDisabled:", c);
        return false;
      }

      const value = formValues[c.when];

      if (typeof c.is === "object" && c.is !== null) {
        if (typeof value !== "object" || value === null) {
          console.warn(
            `Expected object at formValues[${c.when}] to match ${JSON.stringify(
              c.is
            )}, but got:`,
            value
          );
          return false;
        }

        return Object.entries(c.is).every(([key, expected]) => {
          return value[key] === expected;
        });
      }

      if (value === null || value === undefined) {
        console.warn(`formValues[${c.when}] is null or undefined`);
        return false;
      }

      return value === c.is;
    });
  });
};

