import "./Input.css";
import { type IField } from "../Field/Field";

export const Input = (props: IField) => {
  const className = `field ${props.error ? "field--error" : ""}`;
  const counter =
    props.maxlength && props.value?.length
      ? `(Characters left: ${Number(props.maxlength) - props.value?.length})`
      : "";

  return (
    <div className={className}>
      <label>
        <span>
          {props.label} {counter}
        </span>
        <input
          type={"text"}
          className="field-input"
          name={props.name}
          onChange={props.onChange}
          readOnly={true}
          defaultValue={`{${props.name}}`}
        />
      </label>
      <p className="error-message">{props.error}</p>
    </div>
  );
};
