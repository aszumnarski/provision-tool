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
  const isDebug = window.location.search.includes("debug=true");
  const { dataset } = document.querySelector("body") || {
    dataset: { url: "/", query: "appno", init: "init" },
  };
  const { url, query, init } = dataset;
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
    //@ts-ignore
    setUserCompanyCodes,
    //@ts-ignore
    setLoading,
    //@ts-ignore
    setModalContent,
  } = useContext(FormContext);

  async function getData(url: string) {
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
    const res = await getData(`${url}&${query}=${init}`);
    setUserCompanyCodes(res.config.companyCodes);
    const initialState = {
      ...createFormState(rows, "initValue"),
      user: res.data.user,
      appCreator: res.data.user,
    };
    await setFormValues(initialState);
    console.log({ initialState });
    setPatterns(createFormState(rows, "patterns"));
  };

  useEffect(() => {
    initializeValues();
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
  return formValues ? (
    <form onSubmit={onSubmit} className="form">
      <div className="row-wrapper">
        {rows.map((r, i) => (
          <Row key={i} columns={r.columns} />
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
