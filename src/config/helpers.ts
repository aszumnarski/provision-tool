export const required = (message?: string) => {
  return {
    reg: "required",
    message: message || "This field is required",
  };
};

export const future = {
  reg: "future",
  message: "Dates in the past are not allowed",
};

export const min = (minVal: number, optionalmessage?: string) => {
  return {
    reg: `min_${minVal}`,
    message:
      optionalmessage ||
      `The phrase is too short - minimum ${minVal} characters are required`,
  };
};

export const inGetState = [
  {
    conditions: [
      {
        when: "mode",
        is: "modify",
      },
      {
        when: "appNumberImport",
        is: true,
      },
    ],
  },
  {
    conditions: [
      {
        when: "mode",
        is: "modify",
      },
      {
        when: "appNumber",
        is: "",
      },
    ],
  },
];

export const inUpdateState = [
  {
    conditions: [
      {
        when: "mode",
        is: "modify",
      },
      {
        when: "appNumberImport",
        is: "",
      },
      {
        when: "appNumber",
        is: true,
      },
    ],
  },
];

export const inCreateState = [
  {
    conditions: [
      {
        when: "mode",
        is: "create",
      },
    ],
  },
];

export const inModifyState = [
  {
    conditions: [
      {
        when: "mode",
        is: "modify",
      },
    ],
  },
];
