import "./Row.css";
import type { IColumn } from "../Column/Column";
import { Column } from "../Column/Column";

export interface IRow {
  columns: IColumn[];
  fileInputKey?: number;
}

export function Row({ columns, fileInputKey }: IRow) {
  
console.log("Row.tsx → fileInputKey received:", fileInputKey);

  return (
    <div className="row">
      {columns.map((c, i) => (
        <Column key={i} fields={c.fields} header={c.header} fileInputKey={fileInputKey} />
      ))}
    </div>
  );
}

