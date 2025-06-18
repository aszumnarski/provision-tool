import "./Column.css";
import { Field, type IField } from "../Field/Field";

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
        <Field
          name={f.name}
          type={f.type}
          key={f.name}
          label={f.label}
          initValue={f.initValue}
          patterns={f.patterns}
          disabled={f.disabled}
          options={f.options}
          calculatedValue={f.calculatedValue}
          conditionalDisabled={f.conditionalDisabled}
        />
      ))}
    </div>
  );
};
