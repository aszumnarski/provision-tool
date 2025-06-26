import "./Button.css";
import { useContext, useEffect } from "react";
import { FormContext } from "../../context";
import { type IField } from "../Field/Field";
import { validateField } from "../../utils/validators";
import type { ChangeEvent, MouseEventHandler } from "react";

const CREATE = "Create";
const GET = "Get";
const UPDATE = "Update";
const url = "http://localhost:6060/protool?appno=init";
const url1 = "http://localhost:6060/protool";
const url2 = "http://localhost:6060/protool?appno=2";

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

  const onClick: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    // validateForm();

    // window.dispatchEvent(new Event("validate"));
    // await loadData();
    const res = await postData(url1, formValues);
    // const res = await getData(url2);
    // setFormValues((formValues: any) => {
      // return { ...formValues, ...res.data };
    // });
    console.log("data", res.data, "errors", res.errors, { res });
    // console.log("send form", { formErrors });
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
  return (
    <div className={className}>
      <button className="magic-btn" disabled={props.disabled} onClick={onClick}>
        {props.label}
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
