import { useState } from "react";
import "./App.css";
import { config } from "./config";
import { Form } from "./components/Form/Form";
import { FormContext } from "./context";

function App() {
  const [formValues, setFormValues] = useState<Record<string, string> | {}>({});
  const [formErrors, setFormErrors] = useState<Record<string, string> | {}>({});
  const [patterns, setPatterns] = useState<Record<string, string> | {}>({});
  const [att, setAtt] = useState<Record<string, string> | {}>({});

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
      }}
    >
      <div className="app">
        <div className="logo">
          <img
            src="https://www.svgrepo.com/download/303547/siemens-logo.svg"
            alt="logo"
          />
        </div>
        <Form rows={config.rows} />
      </div>
    </FormContext.Provider>
  );
}

export default App;
