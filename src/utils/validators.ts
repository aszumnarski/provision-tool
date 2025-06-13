import { type IPattern } from "../components/Field/Field";

function validatePattern(pattern: string, value?: string) {
  const tokens = {
    required: () => !value,
    min: () => {
      const minimum = Number(pattern.split("_")[1]);
      return value && value?.length < minimum;
    },
  };
  const patternFromToken = tokens[pattern.split("_")[0] as keyof typeof tokens];
  const regex = new RegExp(pattern);
  return patternFromToken
    ? patternFromToken()
    : value && !regex.test(value || "");
}

export const validateField = (
  patterns: IPattern[],
  value?: string | boolean,
) => {
  if (typeof value !== "string") return undefined;
  const messages = patterns
    .map((p) => validatePattern(p.reg, value) && p.message)
    .filter(Boolean);
  return messages.length ? messages[0] : undefined;
};
