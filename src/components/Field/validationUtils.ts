import type { IPattern } from "./Field"; 
export const toDash = (notDash?: string): string =>
    notDash
      ? `${notDash.substring(0, 4)}-${notDash.substring(4, 6)}-${notDash.substring(6, 8)}`
      : "";
  
  export function validatePattern(
    pattern: string,
    value?: string,
    formValues?: Record<string, any>,
    att?: { fileSize: number }
  ): boolean {
    const tokens = {
      required: () => !value,
      future: () => value && toDash(value) < new Date().toISOString().substring(0, 10),
      min: () => value && value.length < Number(pattern.split("_")[1]),
      max: () => value && value.length > Number(pattern.split("_")[1]),
      maxSize: () => att ? Number(att.fileSize) / 1024 / 1024 > Number(pattern.split("_")[1]) : false,
      lt: () => {
        const fieldName = pattern.split("_")[1];
        return value && toDash(value) < toDash(formValues?.[fieldName]);
      },
      gt: () => {
        const fieldName = pattern.split("_")[1];
        return value && toDash(value) > toDash(formValues?.[fieldName]);
      },
      numberOnly: () => value && !/^\d+$/.test(value),
      empty: () =>
        pattern
          .split("_")[1]
          .split(",")
          .some((field) => formValues?.[field] !== "" && formValues?.[field] !== null),
    };
  
    const tokenKey = pattern.split("_")[0] as keyof typeof tokens;
    const tokenValidator = tokens[tokenKey];
    const regex = new RegExp(pattern);
  
    return tokenValidator ? !!tokenValidator() : !!(value && !regex.test(value));
  }
  
export function validateField(
    patterns: IPattern[],
    value?: string,
    formValues?: Record<string, any>,
    att?: { fileSize: number }
  ): string | undefined {
    if (typeof value !== "string") return undefined;
  
    const messages = patterns
      .map((p) => {
        const isInvalid = validatePattern(p.reg, value, formValues, att);
        return isInvalid ? p.message : undefined;
      })
      .filter((msg): msg is string => typeof msg === "string");
  
    return messages.length ? messages[0] : undefined;
  }
  

  