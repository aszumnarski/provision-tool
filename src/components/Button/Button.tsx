import "./Button.css";
import { useEffect } from "react";
import {
  type IApplicationResponse,
  type IField,
  type IPostResponse,
} from "../../types";
import type { MouseEventHandler } from "react";
import { validateAll } from "../../utils/validation";
import { useFormContext } from "../../context/useFormContext";

export const Button = (props: IField) => {
  const {
    formValues,
    defaultValues,
    setFormValues,
    formErrors,
    setFormErrors,
    patterns,
    att,
    setAtt,
    setLoading,
    setModalContent,
  } = useFormContext();

  const { dataset } = document.querySelector("body") || {
    dataset: { url: "/", query: "appno", init: "init" },
  };

  const isDebug = window.location.search.includes("debug=true");
  const { url, query } = dataset;

  const resetForm = async () => {
    setFormValues(defaultValues, true);
    setAtt(null);
    setFormErrors({});
  };

  const post = async () => {
    const res = await postData(url || "/protool", formValues);

    if (!res) {
      return;
    }

    if (res.errors) {
      return setFormErrors(res.errors);
    }

    if (!res.data) {
      return;
    }

    const content = {
      message: `Application <strong>${res.data.appNumber}</strong> was ${
        getState().label === "CREATE" ? "created" : "updated"
      } successfully.`,
      type: "success",
    };

    setModalContent(content);
    await resetForm();
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

  const handleGet: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();

    const appNumberImport = formValues.appNumberImport;
    const res = await getApplicationData(`${url}&${query}=${appNumberImport}`);

    if (!res) {
      return;
    }

    if (res.data) {
      await resetForm();

      await setFormValues({
        ...res.data,
        appNumberImport: res.data.locked ? appNumberImport : "",
      });

      setFormErrors(res.errors || {});
    } else {
      setFormErrors((prev: any) => ({
        ...prev,
        ...res.errors,
      }));
    }
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

  async function getApplicationData(
    url: string
  ): Promise<IApplicationResponse | undefined> {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Response failed");
      return await response.json();
    } catch (error: any) {
      setModalContent({
        message: "Ups something went wrong...",
        type: "error",
      });
      await resetForm();
    } finally {
      setLoading(false);
    }
  }

  async function postData(
    url: string,
    body: Record<string, any>
  ): Promise<IPostResponse | undefined> {
    setLoading(true);
    const formData = new FormData();
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

      if (!response.ok) throw new Error("Failed");

      return await response.json();
    } catch (error: any) {
      setModalContent({
        message: "Ups something went wrong...",
        type: "error",
      });
      await resetForm();
      //return { error };
      return undefined;
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="button-wrapper">
      <button className="magic-btn" onClick={getState().onClick}>
        {getState().label}
      </button>
    </div>
  );
};
