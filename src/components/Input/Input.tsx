import "./Input.css";
import { type IField } from "../Field/Field";

export interface IOption {
  label: string;
  value: string;
}

export interface IPattern {
  reg: string;
  message: string;
}

export const Input = (props: IField) => {
  const className = `field ${props.error ? "field--error" : ""}`;

  return (
    <div className={className}>
      <label>
        <span>{props.label}</span>
        <input
          type="text"
          className="field-input"
          name={props.name}
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
        />
      </label>
      {props.error ? <p className="error-message">{props.error}</p> : ""}
    </div>
  );
};
