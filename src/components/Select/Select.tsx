import "./Select.css";
import { type IField } from "../../types";

export const Select = (props: IField) => {
  const selectClass = `input ${props.error ? "input--error" : ""}`;

  const renderOptions = () => {
    return (
      props.options?.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      )) ?? null
    );
  };

  return (
    <div className="select-wrapper">
      <select
        className={selectClass}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
        onBlur={props.onBlur}
      >
        {renderOptions()}
      </select>
    </div>
  );
};
