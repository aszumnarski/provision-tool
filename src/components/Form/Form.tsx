
import { useContext, useEffect, type FormEventHandler } from "react";
import { FormContext } from "../../context";
import "./Form.css";
import type { IRow } from "../Row/Row";
import { Row } from "../Row/Row";
import type { IPattern } from "../../context/types";

export interface IForm {
  rows: IRow[];
}




export function Form({ rows }: IForm) {
  const context = useContext(FormContext);
if (!context) {
  throw new Error("Form must be used within a FormContext.Provider");
}
  const {
    formValues,
    setFormValues,
    formErrors,
    patterns,
    setPatterns,
  } = context;

  function createInitialValues(rows: IRow[]): Record<string, any> {
    const values: Record<string, any> = {};
    rows.forEach((r) =>
      r.columns.forEach((c) =>
        c.fields.forEach((f) => {
          const defaultVal =
            f.type === "number"
              ? 0
              : f.type === "select"
              ? f.options?.[0]?.value ?? ""
              : "";
          values[f.name] = f.initValue ?? defaultVal;
        })
      )
    );
    return values;
  }

  function createInitialPatterns(rows: IRow[]): Record<string, IPattern[]> {
    const patternMap: Record<string, IPattern[]> = {};
    rows.forEach((r) =>
      r.columns.forEach((c) =>
        c.fields.forEach((f) => {
          patternMap[f.name] = f.patterns ?? [];
        })
      )
    );
    return patternMap;
  }

  // Initialize values and patterns only once

  useEffect(() => {
    if (Object.keys(formValues).length === 0) {
      setFormValues(createInitialValues(rows));
      setPatterns(createInitialPatterns(rows));
    }
  }, [formValues, rows, setFormValues, setPatterns]);
  

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
