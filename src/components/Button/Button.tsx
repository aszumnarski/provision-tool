import "./Button.css";
import { useContext, useEffect, useState } from "react";
import { FormContext } from "../../context";
import { type IField } from "../Field/Field";
import { validateField } from "../../utils/validators";
import type { ChangeEvent, MouseEventHandler } from "react";

const url = "http://localhost:6060/protool?appno=init";
const url1 = "http://localhost:6060/protool";

export const Button = (props: IField) => {
  //@ts-ignore
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
  const className = `field ${props.error ? "field--error" : ""}`;
  const [shouldValidate, setShouldValudate] = useState(false);
  const [shouldPost, setShouldPost] = useState(false);

  const e = JSON.parse(JSON.stringify(formErrors));
  const f = () => JSON.parse(JSON.stringify(formErrors));
  function g() {
    return JSON.parse(JSON.stringify(formErrors));
  }
  const post = async () => {
    const res = await postData(url1, formValues);
    console.log({ res });
    if (res.errors) {
      setFormErrors(res.errors);
    }
  };
  useEffect(() => {
    if (shouldValidate) {
      console.log("VALIDATE", { formErrors, e, f: f(), g: g() });
      if (!Object.keys(g()).length) {
        post();
      }

      setTimeout(() => {
        console.log("VALIDATE2", { formErrors, e, f: f(), g: g() });
        setShouldValudate(false);
      }, 500);
    }
  }, [shouldValidate]);
  const handleGet: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    // validateForm();

    // window.dispatchEvent(new Event("validate"));
    // await loadData();
    // const res = await postData(url1, formValues);
    const res = await getData(`${url1}?appno=${formValues.editableAppNumber}`);
    setFormValues((formValues: any) => {
      return { ...formValues, ...res.data };
    });
    console.log("data", res.data, "errors", res.errors, { res });
    // console.log("send form", { formErrors });
  };
  async function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(g());
      }, 200);
    });
  }
  const handlePost: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();

    window.dispatchEvent(new Event("validate"));
    const xxx = await fetchData();
    console.log({ xxx });
    setShouldValudate(true);
  };

  const loadData = async () => {
    const res = await getData(url);

    console.log(res.data);
    setFormValues((formValues: any) => {
      return { ...formValues, user: res.data.user };
    });
    // setFormValues(res.data);
  };
  useEffect(() => {
    console.log("useEffect rerender");
    setTimeout(loadData, 1000);
  }, []);

  const states = {
    CREATE: { label: "CREATE", onClick: handlePost },
    UPDATE: { label: "UPDATE", onClick: handlePost },
    GET: { label: "GET", onClick: handleGet },
  };

  const getState = () => {
    if (formValues.mode === "create") return states.CREATE;

    if (
      formValues.mode === "modify" &&
      !formValues.editableAppNumber &&
      formValues.appNumber
    )
      return states.UPDATE;

    return states.GET;
  };
  console.log({ formErrors, formValues });
  return (
    <div className={className}>
      <button
        className="magic-btn"
        disabled={props.disabled}
        onClick={getState().onClick}
      >
        {getState().label}
      </button>
      <p className="error-message">{props.error}</p>
    </div>
  );
};

export async function getData(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error(error.message);
  }
}

async function postData(url: string, body: Record<string, any>) {
  var formData = new FormData();
  formData.append("json", JSON.stringify(body));
  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    return { error };
  }
}
