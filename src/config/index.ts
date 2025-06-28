export const mode = {
  name: "mode",
  label: "Mode",
  initValue: "create",
  type: "select",
  disabled: false,
  hidden: true,
  patterns: [
    {
      reg: "required",
      message: "This field is required",
    },
  ],
  options: [
    {
      label: "create",
      value: "create",
    },
    {
      label: "modify",
      value: "modify",
    },
  ],
};

export const modes = { fields: [mode] };

export const controls = { columns: [modes] };

export const config = { rows: [controls] };
