import { useContext } from "react";
import { FormContext } from ".";

export const useFormContext = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error(
      "useFormContext must be used within FormContext.Provider"
    );
  }

  return context;
};
