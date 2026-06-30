import "./Row.css";
import type { IColumn } from "../Column/Column";
import { Column } from "../Column/Column";

export interface IRow {
  title?: string;
  columns: IColumn[];
}

export function Row(row: IRow) {
  const { title, columns } = row;
  return (
    <div className="row">
      {title && <div className="row-title">{title}</div>}
      <div className="row-columns">
        {columns.map((c, i) => (
          <Column key={i} fields={c.fields} header={c.header} />
        ))}
      </div>
    </div>
  );
}
