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
  const [defaultValues, setDefaultValues] = useState(null);

  function errors() {
    return JSON.parse(JSON.stringify(formErrors));
  }
  const post = async () => {
    const res = await postData(url1, formValues);
    if (res.errors) {
      return setFormErrors(res.errors);
    }
    if (res.data) {
      resetForm();
    }
  };
  useEffect(() => {
    if (shouldValidate) {
      if (!Object.keys(errors()).length) {
        post();
      }

      setTimeout(() => {
        setShouldValudate(false);
      }, 500);
    }
  }, [shouldValidate]);
  const handleGet: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();

    const res = await getData(`${url1}?appno=${formValues.editableAppNumber}`);
    if (res.data) {
      setFormValues((formValues: any) => {
        return { ...formValues, ...res.data };
      });
      setFormErrors({});
    } else {
      setFormErrors((formErrors: any) => {
        return { ...formErrors, ...res.errors };
      });
    }
  };
  async function fetchErrors() {
    return new Promise((resolve, _) => {
      setTimeout(() => {
        resolve(errors());
      }, 200);
    });
  }
  const handlePost: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();

    window.dispatchEvent(new Event("validate"));
    await fetchErrors();
    setShouldValudate(true);
  };

  const loadData = async () => {
    const res = await getData(url);
    setFormValues((formValues: any) => {
      return { ...formValues, user: res.data.user };
    });
  };

  const resetForm = () => {
    setFormValues(defaultValues);
    setFormErrors({});
  };

  useEffect(() => {
    if (formValues.mode === "create") resetForm();
  }, [formValues.mode]);

  useEffect(() => {
    setTimeout(loadData, 100);
  }, []);

  useEffect(() => {
    if (formValues.user && !defaultValues) {
      setDefaultValues(formValues);
    }
  }, [formValues.user]);

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
