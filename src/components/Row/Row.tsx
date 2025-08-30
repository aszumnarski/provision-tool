import "./Row.css";
import type { IColumn } from "../Column/Column";
import { Column } from "../Column/Column";

export interface IRow {
  columns: IColumn[];
  lastrow?: boolean;
}

export function Row(row: IRow) {
  const { columns, lastrow } = row;
  return (
    <div className="row">
      {columns.map((c, i) => (
        <Column
          key={"column_" + i}
          fields={c.fields}
          header={c.header}
          lastrow={!!lastrow}
          lastcolumn={columns.length === i + 1}
        />
      ))}
    </div>
  );
}
