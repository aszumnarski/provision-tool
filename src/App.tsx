import { useState } from "react";
import "./App.css";
import { config } from "./config";
import { Form } from "./components/Form/Form";
import { FormContext } from "./context";
import { Loader } from "./components/Loader/Loader";

function App() {
  const [formValues, setFormValues] = useState<Record<string, string> | {}>({});
  const [formErrors, setFormErrors] = useState<Record<string, string> | {}>({});
  const [patterns, setPatterns] = useState<Record<string, string> | {}>({});
  const [att, setAtt] = useState<Record<string, string> | {}>({});
  const [isLoading, setLoading] = useState(false);

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
        isLoading,
        setLoading,
      }}
    >
      <div className="app" inert={isLoading}>
        <Form rows={config.rows} />
      </div>
      {isLoading ? <Loader /> : ""}
    </FormContext.Provider>
  );
}

export default App;
