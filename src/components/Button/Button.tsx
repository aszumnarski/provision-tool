import "./Button.css";
import { useContext, useEffect, useState } from "react";
import { FormContext } from "../../context";
import { type IField } from "../Field/Field";
import type { MouseEventHandler } from "react";
import { validateAll } from "../../utils/validation";

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
    //@ts-ignore
    att,
    //@ts-ignore
    setLoading,
    //@ts-ignore
    setUserCompanyCodes,
    //@ts-ignore
    setModalContent,
  } = useContext(FormContext);
  const className = `field ${props.error ? "field--error" : ""}`;
  const [defaultValues, setDefaultValues] = useState(null);
  const { dataset } = document.querySelector("body") || {
    dataset: { url: "/", query: "appno", init: "init" },
  };

  const { url, query } = dataset;

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
      setModalContent(content);
      await resetForm();
    }
  };

  const handleGet = async (
    e: React.MouseEvent<HTMLButtonElement>,
    appNumberOverride?: string,
  ) => {
    e.preventDefault();

    const appNumber = appNumberOverride ?? formValues.appNumberImport;
    const res = await getData(`${url}&${query}=${appNumber}`);

    if (res.data) {
      await setFormValues({ ...res.data });
      setFormErrors({});
      if (res.data.status) {
        const content = {
          message: `Application <strong>${res.data.appNumber}</strong> is ${res.data.status}`,
          type: "info",
        };
        setModalContent(content);
        await resetForm();
      }
    } else {
      setFormErrors((formErrors: any) => {
        return { ...formErrors, ...res.errors };
      });
    }
  };

  const handleRefresh: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();

    handleGet(e, formValues.appNumber.split("-")[0]);
  };

  const handlePost: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    const isAllOk = validateAll({
      patterns,
      setFormErrors,
      formValues,
      att,
    });

    if (isAllOk) {
      await post();
    }
  };

  const resetForm = async () => {
    await setFormValues(defaultValues);
    setFormErrors({});
  };

  useEffect(() => {
    if (formValues.mode === "create") resetForm();
  }, [formValues.mode]);

  useEffect(() => {
    if (formValues.user && !defaultValues) {
      setDefaultValues(formValues);
    }
  }, [formValues.user]);

  const states = {
    CREATE: { label: "CREATE", onClick: handlePost },
    UPDATE: { label: "UPDATE", onClick: handlePost },
    GET: { label: "GET", onClick: handleGet },
    REFRESH: { label: "REFRESH", onClick: handleRefresh },
  };

  const getState = () => {
    if (formValues.mode === "create") return states.CREATE;

    if (
      formValues.mode === "modify" &&
      !formValues.appNumberImport &&
      formValues.appNumber &&
      !formValues.appNumber.includes("-")
    )
      return states.UPDATE;
    if (
      formValues.mode === "modify" &&
      !formValues.appNumberImport &&
      formValues.appNumber &&
      formValues.appNumber.includes("-")
    )
      return states.REFRESH;
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
    if (att && Array.isArray(att)) {
      att.forEach((file) => {
        formData.append(file.fileData, file.fileName);
      });
    }
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
