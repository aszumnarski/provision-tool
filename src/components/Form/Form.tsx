// import { atom, useAtom } from "jotai";
// import { formValues } from "../../atoms";
import { useContext, useEffect, useState, type FormEventHandler } from "react";
import { FormContext } from "../../context";
import "./Form.css";
import type { IRow } from "../Row/Row";
import { Row } from "../Row/Row";
import type { IField, IPattern } from "../Field/Field";
import { validateField } from "../../utils/validators";

export interface IForm {
  rows: IRow[];
}

export function Form({ rows }: IForm) {
  const {
    //@ts-ignore
    formValues,
    //@ts-ignore
    setFormValues,
    //@ts-ignore
    formErrors,
    //@ts-ignore
    setFormErrors,
    //@ts-ignore
    patterns,
    //@ts-ignore
    setPatterns,
  } = useContext(FormContext);

  useEffect(() => {
    setFormValues(createFormState(rows, "initValue"));
    setPatterns(createFormState(rows, "patterns"));
  }, []);

  function validateForm() {
    Object.keys(formValues).forEach((k) => {
      const errMsg = validateField(patterns[k], formValues[k]);
      setFormErrors((formErrors: any) => {
        return { ...formErrors, [k]: errMsg };
      });
    });
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
