import { useState, useEffect  } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import { config } from "./config";
import { Form } from "./components/Form/Form";
import { FormContext } from "./context";
import { Loader } from "./components/Loader/Loader";
import { Modal } from "./components/Modal/Modal";
import type { IOption, IPattern } from "./context/types";

function App() {

  const location = useLocation();
  
const [isEditingEnabled, setIsEditingEnabled] = useState(true);



useEffect(() => {
  const params = new URLSearchParams(location.search);
  const mode = params.get("mode");
  setIsEditingEnabled(mode !== "display");
}, [location.search]);



  
  const [formValues, setFormValues] = useState<Record<string, any>>({});
  const [formErrors, setFormErrors] = useState<Record<string, string> | {}>({});
  const [patterns, setPatterns] = useState<Record<string, IPattern[]> | {}>({});
  const [att, setAtt] = useState<any>({});
  const [userCompanyCodes, setUserCompanyCodes] = useState<IOption[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [modalContent, setModalContent] = useState<Record<
    string,
    string
  > | null>(null);
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
        isEditingEnabled,
        modalContent,
        setModalContent,
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
