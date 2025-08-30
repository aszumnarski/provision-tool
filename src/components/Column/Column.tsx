import "./Column.css";
import { Field, type IField } from "../Field/Field";

export interface IColumn {
  fields: IField[];
  header?: string;
  lastrow?: boolean;
  lastcolumn?: boolean;
}

export const Column = (column: IColumn) => {
  const { fields, header, lastrow, lastcolumn } = column;

  return (
    <div className="column">
      {header ? <h3 className="column-header">{header}</h3> : ""}
      {fields.map((f, i) => {
        return (
          <Field
            lastrow={!!lastrow}
            lastcolumn={!!lastcolumn}
            lastfield={fields.length === i + 1}
            name={f.name}
            type={f.type}
            key={f.name}
            label={f.label}
            maxlength={f.maxlength}
            initValue={f.initValue}
            patterns={f.patterns}
            disabled={f.disabled}
            options={f.options}
            calculatedValue={f.calculatedValue}
            conditionalDisabled={f.conditionalDisabled}
            dependentOptions={f.dependentOptions}
            dependantValue={f.dependantValue}
          />
        );
      })}
    </div>
  );
};
