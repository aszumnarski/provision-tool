import "./Column.css";
import type { IField } from "../Input/Input";
import { Input } from "../Input/Input";

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
        <Input
          name={f.name}
          key={f.name}
          label={f.label}
          initValue={f.initValue}
          patterns={f.patterns}
        />
      ))}
    </div>
  );
};
