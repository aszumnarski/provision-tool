export type ValidatorFn = (
  args: string[],
  formValues: Record<string, any>,
  value?: string,
  att?: { fileSize: number }
) => boolean;

export interface IPattern {
  reg: string;
  message: string;
}

function toDash(date?: string): string {
  return date
    ? `${date.substring(0, 4)}-${date.substring(4, 6)}-${date.substring(6, 8)}`
    : "";
}

function parsePattern(pattern: string): { type: string; args: string[] } {
  const [type, ...args] = pattern.split("_");
  return { type, args };
}

const validators: Record<string, ValidatorFn> = {
  required: (_, __, value) => !value,
  future: (_, __, value) =>
    !!(value && toDash(value) < new Date().toISOString().substring(0, 10)),
  min: ([minLength], __, value) => !!(value && value.length < Number(minLength)),
  max: ([maxLength], __, value) => !!(value && value.length > Number(maxLength)),
  numberOnly: (_, __, value) => !!(value && !/^\d+$/.test(value)),
  empty: ([fields], formValues) =>
    fields.split(",").some(field => formValues[field] !== "" && formValues[field] !== null),
  lt: ([fieldName], formValues, value) =>
    !!(value && toDash(value) < toDash(formValues[fieldName])),
  gt: ([fieldName], formValues, value) =>
    !!(value && toDash(value) > toDash(formValues[fieldName])),
  maxSize: ([maxMB], __, _, att) =>
    att ? att.fileSize / 1024 / 1024 > Number(maxMB) : false,
};

export function validatePattern(
  pattern: string,
  value: string | undefined,
  formValues: Record<string, any>,
  att?: { fileSize: number }
): boolean {
  const { type, args } = parsePattern(pattern);
  const validator = validators[type];

  if (validator) {
    return validator(args, formValues, value, att);
  }

  const regex = new RegExp(pattern);
  return !!(value && !regex.test(value));
}

export function validateField(
  patterns: IPattern[] | undefined,
  value: string | undefined,
  formValues: Record<string, any>,
  att?: { fileSize: number }
): string | undefined {
  if (!Array.isArray(patterns) || typeof value !== "string") return undefined;

  for (const pattern of patterns) {
    const isInvalid = validatePattern(pattern.reg, value, formValues, att);
    if (isInvalid) return pattern.message;
  }

  return undefined;
}
