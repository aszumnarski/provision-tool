import "./Button.css";
import { useContext, useEffect } from "react";
import { FormContext } from "../../context";
import { type IField } from "../Field/Field";
import { validateField } from "../../utils/validators";
import type { ChangeEvent, MouseEventHandler } from "react";

const CREATE = "Create";
const GET = "Get";
const UPDATE = "Update";
const url = "http://localhost:6060/protool";

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

    window.dispatchEvent(new Event("validate"));
    await loadData();
    console.log("send form", { formErrors });
  };

  const loadData = async () => {
    const res = await getData(url);

    setFormValues(res.data);
  };
  useEffect(() => {
    console.log("useEffect rerender");
        loadData()
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
