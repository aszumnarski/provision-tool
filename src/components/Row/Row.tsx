import "./Row.css";
import type { IColumn } from "../Column/Column";
import { Column } from "../Column/Column";

export interface IRow {
  title?: string;
  columns: IColumn[];
  isMatrix?: boolean;
}

export function Row(row: IRow) {
  const { title, columns, isMatrix } = row;
  console.log({title,isMatrix});
  return (
    <div className={`row ${isMatrix ? "matrix" : ""}`}>
      {title && <div className="row-title">{title}</div>}
      <div className="row-columns">
        {columns.map((c, i) => (
          <Column key={i} fields={c.fields} header={c.header} />
        ))}
      </div>
    </div>
  );
}
