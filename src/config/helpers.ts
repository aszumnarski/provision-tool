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

export const empty = (fields: string, columnName: string) => {
  return {
    reg: `empty_${fields}`,
    message: `Remaining "Update" fields in column ${columnName} have to be empty.`,
  };
};

export const min = (minVal: number, optionalmessage?: string) => {
  return {
    reg: `min_${minVal}`,
    message:
      optionalmessage ||
      `The phrase is too short - minimum ${minVal} characters are required`,
  };
};

export const max = (maxVal: number, optionalmessage?: string) => {
  return {
    reg: `max_${maxVal}`,
    message:
      optionalmessage ||
      `The phrase is too long - maximum ${maxVal} characters are allowed`,
  };
};

export const maxSize = (maxVal: number, optionalmessage?: string) => {
  return {
    reg: `maxSize_${maxVal}`,
    message: optionalmessage || `File size cannot exceed ${maxVal} MB`,
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

//export const yyyyMMdd = (inDate : string) => {
//  const pattern = "yyyyMMdd";
//  return stringToDate(pattern,inDate);
//}

//const stringToDate = (inPattern:string,inDate:string) => {
  //const pattern = inPattern; 
//  return new Date(Number(inDate.substring(0,4)), Number(inDate.substring(4,6))-1, Number(inDate.substring(6,8)));
//}