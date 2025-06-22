import "./Input.css";
import { type IField } from "../Field/Field";

export const Input = (props: IField) => {
  const className = `field ${props.error ? "field--error" : ""}`;

  return (
    <div className={className}>
      <label>
        <span>{props.label}</span>
        <input
          type={props.type}
          className="field-input"
          name={props.name}
          onChange={props.onChange}
          disabled={props.disabled}
          onBlur={props.onBlur}
          maxLength={Number(props.maxlength) || undefined}
          value={props.value || ""}
        />
      </label>
      <p className="error-message">{props.error}</p>
    </div>
  );
};
