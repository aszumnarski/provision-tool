import "./Select.css";
import { type IField } from "../Field/Field";

export const Select = (props: IField) => {
  const className = `field ${props.error ? "field--error" : ""}`;

  const renderOptions = () => {
    return !props.options
      ? ""
      : props.options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ));
  };

  return (
    <div className={className}>
      <label>
        <span>{props.label}</span>
        <select
          className="field-input"
          name={props.name}
          onChange={props.onChange}
          onBlur={props.onBlur}
        >
          {renderOptions()}
        </select>
      </label>
      <p className="error-message">{props.error}</p>
    </div>
  );
};
