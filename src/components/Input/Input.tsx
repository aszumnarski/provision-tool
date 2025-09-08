import "./Input.css";
import { type IField } from "../Field/Field";
import { preventEnterSubmit } from "../../utils/keyboard-utils";
import { preventArrowKeyIncrement } from "../../utils/keyboard-utils";
export const Input = (props: IField) => {
  const className = `field ${props.error ? "field--error" : ""}`;
  const counter =
    props.maxlength && props.value?.length
      ? `(Characters left: ${Number(props.maxlength) - props.value?.length})`
      : "";

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    preventEnterSubmit(e);
    if (props.type === "number") {
      preventArrowKeyIncrement(e);
    }
  };

  return (
    <div className={className}>
      <label>
        <span>
          {props.label} {counter}
        </span>
        <input
          type={props.type}
          className="field-input"
          accept=".xlsx,.pdf"
          name={props.name}
          onChange={props.onChange}
          disabled={props.disabled}
          onBlur={props.onBlur}
          onKeyDown={handleKeyDown}
          maxLength={Number(props.maxlength) || undefined}
          value={props.value || ""}
          autoComplete={props.type === "file" ? "new-password" : "off"}
        />
      </label>
      <p className="error-message">{props.error}</p>
    </div>
  );
};
