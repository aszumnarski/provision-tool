import "./Form.css";
import type { IRow } from "../Row/Row";
import { Row } from "../Row/Row";

export interface IForm {
    rows: IRow[]
}

export function Form({rows}: IForm) {
  return (
    <form className="form">
      <button type="submit">Submit</button>

      <div className="row-wrapper">{rows.map((r,i) => <Row key={i} columns={r.columns}/>)}</div>
    </form>
  );
}
