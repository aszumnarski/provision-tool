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
          accept={props.type === "file" ? ".xlsx,.pdf" : undefined}
          name={props.name}
          onChange={props.onChange}
          disabled={props.disabled}
          onBlur={props.onBlur}
          onKeyDown={handleKeyDown}
          maxLength={
            props.type !== "file"
              ? Number(props.maxlength) || undefined
              : undefined
          }
          value={props.value || ""}
          multiple={props.type === "file"}
        />
      </label>
      <p className="error-message">{props.error}</p>
    </div>
  );
};
