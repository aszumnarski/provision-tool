
import { useContext, type FormEventHandler } from "react";
import { FormContext } from "../../context";
import "./Form.css";
import type { IRow } from "../Row/Row";
import { Row } from "../Row/Row";

export interface IForm {
  rows: IRow[];
}

export function Form({ rows }: IForm) {
  const context = useContext(FormContext);
  if (!context) throw new Error("Form must be used within a FormContext");

  const {
    formValues,
    setFormValues,
    formErrors,
    setFormErrors,
    patterns,
    setPatterns,
    att,
    setAtt,
    userCompanyCodes,
    setUserCompanyCodes,
    isLoading,
    setLoading,
    modalContent,
    setModalContent,
    isEditingEnabled,
  } = context;

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
      <pre>X{formValues ? Object.keys(formValues).length : ""}X</pre>
      <pre>{JSON.stringify(formValues, null, 2)}</pre>
      <hr />
      <pre>{JSON.stringify(formErrors, null, 2)}</pre>
      <hr />
      <pre>{JSON.stringify(patterns, null, 2)}</pre>
      <hr />
      <pre>Editing enabled: {JSON.stringify(isEditingEnabled)}</pre>
    </form>
  );
}
