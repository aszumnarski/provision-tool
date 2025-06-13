// import { atom, useAtom } from "jotai";
// import { formValues } from "../../atoms";
import { useContext, useEffect, useState, type FormEventHandler } from "react";
import { FormContext } from "../../context";
import "./Form.css";
import type { IRow } from "../Row/Row";
import { Row } from "../Row/Row";
import type { IField, IPattern } from "../Field/Field";

export interface IForm {
  rows: IRow[];
}

export function Form({ rows }: IForm) {
  //@ts-ignore
  const { formValues, setFormValues, formErrors, setFormErrors } =
    useContext(FormContext);

  const [patterns, setPatterns] = useState<any>();
  useEffect(() => {
    setFormValues(createFormState(rows, "initValue"));
    setPatterns(createFormState(rows, "patterns"));
  }, []);

  function validateForm() {
    Object.keys(formValues).forEach((k) => {
      const errMsg = validateField(patterns[k], formValues[k]);
      console.log({ k, errMsg, p: patterns[k], v: formValues[k] });
      setFormErrors((formErrors: any) => {
        return { ...formErrors, [k]: errMsg };
      });
    });
  }

  function validatePattern(pattern: string, value?: string) {
    const tokens = {
      required: () => !value,
      min: () => {
        const minimum = Number(pattern.split("_")[1]);
        return value && value?.length < minimum;
      },
    };
    const patternFromToken =
      tokens[pattern.split("_")[0] as keyof typeof tokens];
    const regex = new RegExp(pattern);
    return patternFromToken
      ? patternFromToken()
      : value && !regex.test(value || "");
  }

  const validateField = (patterns: IPattern[], value?: string | boolean) => {
    if (typeof value !== "string") return undefined;
    const messages = patterns
      .map((p) => validatePattern(p.reg, value) && p.message)
      .filter(Boolean);
    return messages.length ? messages[0] : undefined;
  };

  function createFormState(rows: IRow[], key: keyof IField) {
    let values: Record<string, string | IPattern[]> = {};
    rows.forEach((r) =>
      r.columns.forEach((c) =>
        c.fields.forEach((f) => {
          //@ts-ignore
          values[f.name] = f[key as keyof typeof f];
        }),
      ),
    );
    return values;
  }
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // setFormErrors({ name1: "Jakiś błąd" });
    validateForm();
  };
  return (
    <form onSubmit={onSubmit} className="form">
      <button type="submit">Submit</button>

      <div className="row-wrapper">
        {rows.map((r, i) => (
          <Row key={i} columns={r.columns} />
        ))}
      </div>
      <pre>{JSON.stringify(formValues, null, 2)}</pre>
      <hr />
      <pre>{JSON.stringify(formErrors, null, 2)}</pre>
      <hr />
      <pre>{JSON.stringify(patterns, null, 2)}</pre>
    </form>
  );
}
