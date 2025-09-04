import type { IPattern } from "../components/Field/Field";

export interface IValidatePattern {
  pattern: string;
  value?: string | boolean;
  formValues: any;
  att: any;
}


export interface IValidateAll {
  patterns: Record<string, IPattern[]>;
  setFormErrors: any;
  formValues: any;
  att: any;
}

export interface IValidate {
  patterns: Record<string, IPattern[]>;
  name: string;
  disabled: boolean;
  setFormErrors: any;
  formValues: any;
  att: any;
}

export interface IValidatField {
  patterns: IPattern[];
  value?: string | boolean;
  formValues: any;
  att: any;
}
export const toDash = (notDash?: string) =>
  notDash
    ? notDash.substring(0, 4) +
      "-" +
      notDash.substring(4, 6) +
      "-" +
      notDash.substring(6, 8)
    : "";
function validatePattern({
  pattern,
  value,
  formValues,
  att,
}: IValidatePattern) {
  if (typeof value === "boolean") return undefined;
  const tokens = {
    required: () => !value,
    future: () =>
      value && toDash(value) < new Date().toISOString().substring(0, 10),
    min: () => {
      const minimum = Number(pattern.split("_")[1]);
      return value && value?.length < minimum;
    },
    max: () => {
      const maximum = Number(pattern.split("_")[1]);
      return value && value?.length > maximum;
    },
    maxSize: () => {
      const maximum = Number(pattern.split("_")[1]);
      return att ? Number(att.fileSize) / 1024 / 1024 > maximum : false;
      //return att ? att.fileSize > maximum : false;
    },
    lt: () => {
      const fieldName = pattern.split("_")[1];
      const fieldValue = formValues[fieldName];
      return value && toDash(value) < toDash(fieldValue);
    },
    gt: () => {
      const fieldName = pattern.split("_")[1];
      const fieldValue = formValues[fieldName];
      return value && toDash(value) > toDash(fieldValue);
    },
    numberOnly: () => {
      return value && !/^\d+$/.test(value);
    },
    empty: () => {
      return pattern
        .split("_")[1]
        .split(",")
        .some(
          (field) =>
            formValues[field] !== "" &&
            formValues[field] !== null &&
            formValues[field] !== "0" &&
            formValues[field] !== 0,
        );
    },
  };
  const patternFromToken = tokens[pattern.split("_")[0] as keyof typeof tokens];
  const regex = new RegExp(pattern);
  return patternFromToken
    ? patternFromToken()
    : value && !regex.test(value || "");
}

const validateField = ({ patterns, value, formValues, att }: IValidatField) => {
  if (typeof value !== "string") return undefined;
  const messages = patterns
    ?.map(
      (p) =>
        validatePattern({ pattern: p.reg, value, formValues, att }) &&
        p.message,
    )
    .filter(Boolean);
  return messages?.length ? messages[0] : undefined;
};

export const validate = ({
  patterns,
  disabled,
  name,
  setFormErrors,
  formValues,
  att,
}: IValidate) => {
  const errMsg = validateField({
    patterns: patterns[name],
    value: formValues[name],
    formValues,
    att,
  });
  const result = disabled ? undefined : errMsg;
  setFormErrors((prev: any) => {
    return { ...prev, [name]: result };
  });
  return result;
};



export const validateAll = ({
patterns,
    setFormErrors,
    formValues,
    att

}:IValidateAll) => {
    const enabledFields = document.querySelectorAll(".field[disabled]")

}


