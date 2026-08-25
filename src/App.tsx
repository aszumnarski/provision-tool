import { useState } from "react";
import "./App.css";
import { config } from "./config";
import { Form } from "./components/Form/Form";
import { FormContext, type FormValues, type ValidationPatterns } from "./context";
import { Loader } from "./components/Loader/Loader";
import { Modal } from "./components/Modal/Modal";
import type { IAppConfig, IApplicationData, IAttachment } from "./types";
import { useFormValues } from "./utils/session-storage";

declare const APP_VERSION: string;

function App() {
  const [formValues, _setFormValues] = useState<Record<string, string>>({});
  const [applicationData, setApplicationData] =useState<IApplicationData | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string> | {}>({});
  const [patterns, setPatterns] = useState<ValidationPatterns>({});
  const [att, setAtt] = useState<IAttachment[] | null>(null);
  const [appConfig, setAppConfig] =useState<IAppConfig | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [defaultValues, setDefaultValues] = useState<FormValues | null>(null);
  const [modalContent, setModalContent] = useState<Record<
    string,
    string
  > | null>(null);

  const setFormValues = async (values: any, shouldOverwrite?: boolean) => {
    const syncFormValues = useFormValues(values, shouldOverwrite);
    _setFormValues(syncFormValues);
  };

  const body = document.querySelector("body");
  const imgSource = body && body.dataset?.logo;
  const { appNumber, message, locked } = formValues;
  const defaultMessage = `Application ${appNumber} is waiting for approval.`;
  const headerMessage = message || defaultMessage;
  return (
    <FormContext.Provider
      value={{
        formValues,
        setFormValues,
        applicationData,
        setApplicationData,
        defaultValues,
        setDefaultValues,
        formErrors,
        setFormErrors,
        patterns,
        setPatterns,
        att,
        setAtt,
        appConfig,
        setAppConfig,
        isLoading,
        setLoading,
        modalContent,
        setModalContent,
      }}
    >
      <div className="app" inert={isLoading || !!modalContent}>
        <div className="app-header">
          {imgSource ? (
            <div className="logo">
              <img className="logo__pic" src={imgSource || ""} alt="logo" />
            </div>
          ) : (
            ""
          )}
          <div className="header-alert">{locked ? headerMessage : ""}</div>
        </div>
        <Form />
        <footer>Client version: {APP_VERSION}</footer>
      </div>
      <Modal />
      {isLoading ? <Loader /> : ""}
    </FormContext.Provider>
  );
}

export default App;
