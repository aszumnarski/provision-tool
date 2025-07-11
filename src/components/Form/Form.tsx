import { useContext, useEffect, type FormEventHandler } from "react";
import { FormContext } from "../../context";
import "./Form.css";
import type { IRow } from "../Row/Row";
import { Row } from "../Row/Row";
import type { IField, IPattern } from "../Field/Field";

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

  function createFormState(rows: IRow[], key: keyof IField) {
    let values: Record<string, string | IPattern[]> = {};
    rows.forEach((r) =>
      r.columns.forEach((c) =>
        c.fields.forEach((f) => {
          const defaultVal =
            key === "patterns"
              ? []
              : f.type === "number"
                ? 0
                : f.type === "select"
                  ? f.options && f.options[0].value
                  : "";
          //@ts-ignore
          values[f.name] = f[key as keyof typeof f] || defaultVal;
        }),
      ),
    );
    return values;
  }
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmit} className="form">
      <div className="row-wrapper">
        {rows.map((r, i) => (
          <Row key={i} columns={r.columns} />
        ))}
      </div>
      <pre>X{Object.keys(formValues).length}X</pre>
      <pre>{JSON.stringify(formValues, null, 2)}</pre>
      <hr />
      <pre>{JSON.stringify(formErrors, null, 2)}</pre>
      <hr />
      <pre>{JSON.stringify(patterns, null, 2)}</pre>
    </form>
  );
}
