import { useState } from "react";
import "./App.css";
import { config } from "./config";
import { Form } from "./components/Form/Form";
import { FormContext } from "./context";
import { Loader } from "./components/Loader/Loader";
import { Modal } from "./components/Modal/Modal";
import type { IOption, TAttachment } from "./components/Field/Field";
import { useFormValues } from "./utils/session-storage";

function App() {
  const [formValues, _setFormValues] = useState<Record<string, string> | {}>(
    {}
  );
  const [formErrors, setFormErrors] = useState<Record<string, string> | {}>({});
  const [patterns, setPatterns] = useState<Record<string, string> | {}>({});
  const [att, setAtt] = useState<TAttachment[] | null>(null);
  const [userCompanyCodes, setUserCompanyCodes] = useState<IOption[]>([]);
  const [ledgerGroups, setLedgerGroups] = useState<Record<string, IOption[]>>(
    {}
  );
  const [currency, setCurrency] = useState<string>("");
  const [isLoading, setLoading] = useState(true);
  const [modalContent, setModalContent] = useState<Record<
    string,
    string
  > | null>(null);

  const setFormValues = async (values: any) => {
    const syncFormValues = useFormValues(values);
    //@ts-ignore
    await _setFormValues(syncFormValues);
  };

  const body = document.querySelector("body");
  const imgSource = body && body.dataset?.logo;
  return (
    <FormContext.Provider
      value={{
        formValues,
        setFormValues,
        formErrors,
        setFormErrors,
        patterns,
        setPatterns,
        att,
        setAtt,
        userCompanyCodes,
        setUserCompanyCodes,
        isLoading,
        setLoading,
        modalContent,
        setModalContent,
        ledgerGroups,
        setLedgerGroups,
        currency,
        setCurrency,
      }}
    >
      <div className="app" inert={isLoading || !!modalContent}>
        {imgSource ? (
          <div className="logo">
            <img className="logo__pic" src={imgSource || ""} alt="logo" />
          </div>
        ) : (
          ""
        )}
        <Form rows={config.rows} />
      </div>
      <Modal />
      {isLoading ? <Loader /> : ""}
    </FormContext.Provider>
  );
}

export default App;
