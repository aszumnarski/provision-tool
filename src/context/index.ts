import { createContext } from "react";
import type { TFormContext } from "./types";

export const FormContext = createContext<TFormContext | null>(null);
