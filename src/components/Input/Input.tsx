import "./Input.css";
import { type IField } from "../Field/Field";
import { preventEnterSubmit } from "../../utils/keyboard-utils";
import { preventArrowKeyIncrement } from "../../utils/keyboard-utils";
import { handleWheel } from "../../utils/keyboard-utils";
export const Input = (props: IField) => {
  const className = `input ${props.error ? "input--error" : ""}`;
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
    <div className="input-wrapper">
      <input
        type={props.type}
        className={className}
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
        onWheel={handleWheel}
        value={props.value || ""}
        multiple={props.type === "file"}
      />
      {counter && <span className="input-counter">{counter}</span>}
    </div>
  );
};
