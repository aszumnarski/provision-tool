import { useState } from "react";
import "./App.css";
import { data } from "./data";
import { data2 } from "./data2";
import { config } from "./config";
import { Form } from "./components/Form/Form";
import { FormContext } from "./context";

function App() {
  const [formValues, setFormValues] = useState<Record<string, string> | {}>({});
  const [formErrors, setFormErrors] = useState<Record<string, string> | {}>({});
  const [patterns, setPatterns] = useState<Record<string, string> | {}>({});

  return (
    <FormContext.Provider
      value={{
        formValues,
        setFormValues,
        formErrors,
        setFormErrors,
        patterns,
        setPatterns,
      }}
    >
      <div className="app">
        <Form rows={config.rows} />
      </div>
    </FormContext.Provider>
  );
}

export default App;
