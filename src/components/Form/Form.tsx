import { useEffect, useState, type FormEventHandler } from "react";
import "./Form.css";
import type { IRow } from "../Row/Row";
import { Row } from "../Row/Row";
import type { IInitResponse, IPattern } from "../../types";
import { useFormContext } from "../../context/useFormContext";
import { buildRows } from "../../utils/layoutBuilder";


export interface IForm {}

export function Form() {
  const isDebug = window.location.search.includes("debug=true");
  const [rows, setRows] = useState<IRow[]>([]);
  const { dataset } = document.querySelector("body") || {
    dataset: { url: "/", query: "appno", init: "init" },
  };
  const { url, query, init } = dataset;

  const {
    formValues,
    setFormValues,
    formErrors,
    patterns,
    setPatterns,
    setAppConfig,
    setLoading,
    setModalContent,
    setDefaultValues,
  } = useFormContext();

  async function getInitData(url: string): Promise<IInitResponse | undefined> {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json();
      return { ...data, mode: "modify" };
    } catch (error: any) {
      console.error(error.message);
      setModalContent({
        message: "Ups something went wrong...",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  }
  const initializeValues = async () => {
    const res = await getInitData(`${url}&${query}=${init}`);

    if (!res) {
      return;
    }

    const generatedRows = buildRows(res.layout);
    setRows(generatedRows);
    console.log(JSON.stringify(generatedRows, null, 2));
    setAppConfig(res.config);

    const initialState = {
      ...res.data,
      appCreator: res.data.user,
      locked: false,
      message: "",
    };

    await setFormValues(initialState);
    console.log("DEFAULT SNAPSHOT", initialState);
    setDefaultValues({ ...initialState });
    setPatterns(createPatternState(generatedRows));
  };

  useEffect(() => {
    initializeValues();
  }, []);

  function createPatternState(rows: IRow[]): Record<string, IPattern[]> {
    let values: Record<string, IPattern[]> = {};
    rows.forEach((row) =>
      row.columns.forEach((column) =>
        column.fields.forEach((field) => {
          values[field.name] = field.patterns || [];
        })
      )
    );
    return values;
  }

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return formValues ? (
    <form onSubmit={onSubmit} className="form">
      <div className="row-wrapper">
        {rows.map((r, i) => (
          <Row key={i} title={r.title} columns={r.columns} isMatrix={r.isMatrix} />
        ))}
      </div>

      {isDebug && (
        <>
          <pre>X{formValues ? Object.keys(formValues).length : ""}X</pre>
          <pre>{JSON.stringify(formValues, null, 2)}</pre>
          <hr />
          <pre>{JSON.stringify(formErrors, null, 2)}</pre>
          <hr />
          <pre>{JSON.stringify(patterns, null, 2)}</pre>
        </>
      )}
    </form>
  ) : (
    ""
  );
}
