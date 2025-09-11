import "./Row.css";
import type { IColumn } from "../Column/Column";
import { Column } from "../Column/Column";

export interface IRow {
  columns: IColumn[];
}

export function Row({ columns }: IRow) {
  
  return (
    <div className="row">
      {columns.map((c, i) => (
        <Column key={i} fields={c.fields} header={c.header} />
      ))}
    </div>
  );
}

