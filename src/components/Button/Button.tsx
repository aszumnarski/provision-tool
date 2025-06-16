import "./Button.css";
import { useContext, useEffect } from "react";
import { FormContext } from "../../context";
import { type IField } from "../Field/Field";
import { validateField } from "../../utils/validators";
import type { ChangeEvent, MouseEventHandler } from "react";

const CREATE = "Create";
const GET = "Get";
const UPDATE = "Update";

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

  const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    validateForm();
  };

  function validateForm() {
    Object.keys(formValues).forEach((k) => {
      const errMsg = validateField(patterns[k], formValues[k]);
      setFormErrors((formErrors: any) => {
        return { ...formErrors, [k]: errMsg };
      });
    });
  }

  return (
    <div className={className}>
      <button disabled={props.disabled} onClick={onClick}>
        {props.label}
      </button>
      <p className="error-message">{props.error}</p>
    </div>
  );
};
