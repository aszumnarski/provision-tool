import "./Button.css";
import { useContext, useEffect, useState } from "react";
import { FormContext } from "../../context";
import { type IField } from "../../context/types";
import type { MouseEventHandler } from "react";

export const Button = (props: IField) => {
  const context = useContext(FormContext);
  if (!context) throw new Error("Field must be used within a FormProvider");
  const {
    formValues,
    setFormValues,
    formErrors,
    setFormErrors,
    att,
    setLoading,
    setUserCompanyCodes,
    setModalContent,
  } = context;
  const className = `field ${props.error ? "field--error" : ""}`;
  const [shouldValidate, setShouldValidate] = useState(false);
  const [defaultValues, setDefaultValues] = useState<Record<string, any>>({});;
  const { dataset } = document.querySelector("body") || {
    dataset: { url: "/", query: "appno", init: "init" },
  };

  const { url, query, init } = dataset;

  function errors() {
    return JSON.parse(JSON.stringify(formErrors));
  }
  const post = async () => {
    const res = await postData(url || "/protool", formValues);
    if (res.errors) {
      return setFormErrors(res.errors);
    }
    if (res.data) {
      const content = {
        message: `Application <strong>${res.data.appNumber}</strong> was ${
          getState() === states.CREATE ? "created" : "updated"
        } successfully.`,
        type: "success",
      };
      setModalContent(content)
      resetForm();
    }
  };
  useEffect(() => {
    if (shouldValidate) {
      if (!Object.keys(errors()).length) {
        post();
      }

      setTimeout(() => {
        setShouldValidate(false);
      }, 500);
    }
  }, [shouldValidate]);
  const handleGet: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();

    const res = await getData(`${url}&${query}=${formValues.appNumberImport}`);
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
    setShouldValidate(true);
  };

  const loadData = async () => {
    const res = await getData(`${url}&${query}=${init}`);
    setFormValues((formValues: any) => {
      return { ...formValues, user: res.data.user, appCreator: res.data.user };
    });
    setUserCompanyCodes(res.config.companyCodes);

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
      !formValues.appNumberImport &&
      formValues.appNumber
    )
      return states.UPDATE;

    return states.GET;
  };

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

  async function postData(url: string, body: Record<string, any>) {
    setLoading(true);
    var formData = new FormData();
    formData.append("json", JSON.stringify(body));
    if(att) formData.append(att.fileName, att.fileData);
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
      setModalContent({
        message: "Ups something went wrong...",
        type: "error",
      });
      return { error };
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={className}>
      <button className="magic-btn" onClick={getState().onClick}>
        {getState().label}
      </button>
      <p className="error-message">{props.error}</p>
    </div>
  );
};
