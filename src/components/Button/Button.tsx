import "./Button.css";
import { useContext, useEffect } from "react";
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
    defaultValues,
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
    setAtt,
    //@ts-ignore
    setLoading,
    //@ts-ignore
    setUserCompanyCodes,
    //@ts-ignore
    setModalContent,
  } = useContext(FormContext);
  const className = `field ${props.error ? "field--error" : ""}`;
  const { dataset } = document.querySelector("body") || {
    dataset: { url: "/", query: "appno", init: "init" },
  };

  const isDebug = window.location.search.includes("debug=true");

  const { url, query } = dataset;

  const post = async () => {
    const res = await postData(url || "/protool", formValues);
    if (res.errors) {
      return setFormErrors(res.errors);
    }
    const defaultMessage = `Application <strong>${res.data.appNumber}</strong> is waiting for approval`;
    const message = res.data.message || defaultMessage;
    if (res.data.locked) {
      const content = {
        message,
        type: "error",
      };
      setModalContent(content);
      await resetForm();
      return;
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

  const handleGet = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const appNumberImport = formValues.appNumberImport;
    const res = await getData(`${url}&${query}=${appNumberImport}`);

    if (res.data) {
      await resetForm();

      const { locked } = res.data;

      await setFormValues({
        ...res.data,
        appNumberImport: `${locked ? appNumberImport : ""}`,
      });
      if (res.errors && isDebug) {
        return setFormErrors(res.errors);
      } else {
        setFormErrors({});
      }
    } else {
      setFormErrors((formErrors: any) => {
        return { ...formErrors, ...res.errors };
      });
    }
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
    await setFormValues(defaultValues, true);
    setAtt(null);
    setFormErrors({});
  };

  useEffect(() => {
    if (formValues.mode === "create") resetForm();
  }, [formValues.mode]);

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
        throw new Error(`Response failed`);
      }

      const data = await response.json();
      return {
        ...data,
      };
    } catch (error: any) {
      console.error(error.message);
      setModalContent({
        message: "Ups something went wrong...",
        type: "error",
      });
      await resetForm();
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
        formData.append(file.fileName, file.fileData);
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
      await resetForm();
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
