import { useState, type FormEventHandler } from "react";
import { FormContext } from "../../context";
import "./Form.css";
import type { IRow } from "../Row/Row";
import { Row } from "../Row/Row";
import type { IPattern, IOption, TFormContext } from "../../context/types";

export interface IForm {
  rows: IRow[];
}

export function Form({ rows }: IForm) {
  
  const [formErrors, setFormErrors] = useState<
    Record<string, string | undefined>
  >({});
  
  const [att, setAtt] = useState<{
    fileName: string;
    fileData: File;
    fileSize: number;
  } | null>(null);
  const [userCompanyCodes, setUserCompanyCodes] = useState<IOption[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<any>(null);


  
const initialValues = createInitialValues(rows);
const [formValues, setFormValues] = useState<Record<string, any>>(initialValues);
const initialPatterns = createInitialPatterns(rows);
const [patterns, setPatterns] = useState<Record<string, IPattern[]>>(initialPatterns);
const [isEditingEnabled] = useState(true);
  const contextValue: TFormContext = {
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
  };

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

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <FormContext.Provider value={contextValue}>
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
    </FormContext.Provider>
  );
}
