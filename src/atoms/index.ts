import { atom, useAtom } from "jotai";
// import { useAtom } from "jotai/ts3.8/react";

export const formValues = atom<Record<string, string>>({});
export const [form, setForm] = useAtom(formValues);
