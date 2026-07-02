import "./Column.css";
import { Field } from "../Field/Field";
import { type IField } from "../../types";

export interface IColumn {
  fields: IField[];
  header?: string;
}

export const Column = (column: IColumn) => {
  const { fields, header } = column;
  return (
    <div className="column">
      {header ? <h3 className="column-header">{header}</h3> : ""}

      {fields.map((f) => (
        <Field key={f.name} {...f} />))} 
    </div>
  );
};
