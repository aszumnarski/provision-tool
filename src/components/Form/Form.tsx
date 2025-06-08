// import { atom, useAtom } from "jotai";
// import { formValues } from "../../atoms";
import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../context";
import "./Form.css";
import type { IRow } from "../Row/Row";
import { Row } from "../Row/Row";

export interface IForm {
  rows: IRow[];
}

export function Form({ rows }: IForm) {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  useEffect(() => {
    setCurrentUser(createFormState(rows));
  }, []);
  // const [formState, setFormState] = useState(createFormState(rows));
  // const [form, setForm] = useAtom(formValues);
  function createFormState(rows: IRow[]) {
    let values: Record<string, string> = {};
    rows.forEach((r) =>
      r.columns.forEach((c) =>
        c.fields.forEach((f) => {
          values[f.name] = f.initValue;
        }),
      ),
    );
    return values;
  }
  return (
    <form className="form">
      <button type="submit">Submit</button>

      <div className="row-wrapper">
        {rows.map((r, i) => (
          <Row key={i} columns={r.columns} />
        ))}
      </div>
      <pre>{JSON.stringify(currentUser, null, 2)}</pre>
      <hr />
      <pre>{JSON.stringify(18, null, 2)}</pre>
    </form>
  );
}
