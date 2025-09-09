import "./Input.css";
import { type IField } from "../Field/Field";
import { preventEnterSubmit , preventArrowKeyIncrement } from "../../utils/keyboard-utils";
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
  
console.log("fileInputKey in Input:", props.fileInputKey);

  const isMultiFilesEnabled = window.location.search.includes("multi=true");
  return (
    <div className={className}>
      <label>
        <span>
          {props.label} {counter}
        </span>
        <input
          key={props.type === "file" ? props.fileInputKey : undefined}
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
          {...(props.type !== "file" ? { value: props.value || "" } : {})}
          multiple={props.type === "file" && isMultiFilesEnabled}
        />
      </label>
      <p className="error-message">{props.error}</p>
    </div>
  );
};
