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

  const [patterns, setPatterns] = useState<Record<string, IPattern[]>>();
  useEffect(() => {
    setFormValues(createFormState(rows, "initValue"));
    setPatterns(createFormState(rows, "patterns"));
  }, []);

  function validateForm() {
    Object.keys(formValues).forEach((k) => {
      setFormErrors({ ...formErrors, [k]: validateField(k) });
    });
  }

  function validateField(k: keyof typeof formValues) {
    const arr = patterns[k]
      .map((p: IPattern) => validatePattern(formValues[k], p))
      .filter(Boolean);
    return arr.length ? arr[0] : undefined;
  }

  function validatePattern(value: any, pattern: IPattern) {
    if (pattern.reg === "required" && !value) return pattern.message;
    return undefined;
  }

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
