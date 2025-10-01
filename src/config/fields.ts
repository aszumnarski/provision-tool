import * as h from "./helpers";
import * as pTypes from "./provisionTypes";
import * as pSubTypes from "./provisionSubTypes";
import { type IField } from "../components/Field/Field";

export const mode: IField = {
  name: "mode",
  label: "Application mode",
  initValue: "create",
  type: "select",
  patterns: [h.required()],
  options: [
    {
      label: "Create",
      value: "create",
    },
    {
      label: "Modify",
      value: "modify",
    },
  ],
};

export const provisionType: IField = {
  name: "provisionType",
  label: "Prov. Type",
  initValue: "c83",
  type: "select",
  patterns: [h.required()],
  options: [
    pTypes.c83,
    pTypes.o70,
    pTypes.j51,
    pTypes.j55,
    pTypes.r10,
    pTypes.o25,
    pTypes.o30,
    pTypes.o71,
  ],
  conditionalDisabled: h.inModifyState,
};

export const subType: IField = {
  name: "subType",
  label: "Subtype",
  initValue: "y09",
  type: "select",
  conditionalDisabled: [...h.inGetState, ...h.inCreateState],
  dependentOptions: [
    {
      conditions: [
        { when: "mode", is: ["modify"] },
        {
          when: "provisionType",
          is: ["j51", "j55"],
        },
      ],
      options: [
        pSubTypes.y09,
        pSubTypes.y09c,
        pSubTypes.y097,
        pSubTypes.y097c,
        pSubTypes.y098,
        pSubTypes.y098c,
        pSubTypes.aed,
        pSubTypes.ccc,
        pSubTypes.con,
        pSubTypes.cwe,
      ],
    },
    {
      conditions: [{ when: "mode", is: ["create"] }],
      options: [pSubTypes.y09],
    },
    {
      conditions: [{ when: "mode", is: ["modify"] }],
      options: [
        pSubTypes.y09,
        pSubTypes.y09c,
        pSubTypes.y07,
        pSubTypes.y07c,
        pSubTypes.y08,
        pSubTypes.y08c,
        pSubTypes.y27,
        pSubTypes.y27c,
        pSubTypes.y28,
        pSubTypes.y28c,
        pSubTypes.aed,
        pSubTypes.ccc,
        pSubTypes.con,
        pSubTypes.cwe,
      ],
    },
  ],
};

export const appNumberImport: IField = {
  name: "appNumberImport",
  label: "Application Number to Import",
  type: "text",
  conditionalDisabled: h.inCreateState,
};

export const submitButton: IField = {
  name: "submitButton",
  type: "button",
};

export const attachment: IField = {
  name: "attachment",
  label: "Attachment",
  type: "file",
  conditionalDisabled: h.inGetState,
  patterns: [h.maxSize(10)],
};

export const appNumber: IField = {
  name: "appNumber",
  label: "Application Number",
  type: "text",
  disabled: true,
};

export const costCenter: IField = {
  name: "costCenter",
  label: "Cost Center",
  type: "text",
  patterns: [
    h.required(
      "This field is required when WBS Element or Sales Document or Sales Document Item are empty",
    ),
  ],
  conditionalDisabled: [
    ...h.inGetState,
    {
      conditions: [
        {
          when: "wbs",
          is: true,
        },
      ],
    },
    {
      conditions: [
        {
          when: "salesDocument",
          is: true,
        },
      ],
    },
    {
      conditions: [
        {
          when: "salesDocumentItem",
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
          when: "subType",
          is: "y07",
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
          when: "subType",
          is: "y07c",
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
          when: "subType",
          is: "y08",
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
          when: "subType",
          is: "y08c",
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
          when: "subType",
          is: "y09",
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
          when: "subType",
          is: "y09c",
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
          when: "subType",
          is: "y27",
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
          when: "subType",
          is: "y27c",
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
          when: "subType",
          is: "y28",
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
          when: "subType",
          is: "y28c",
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
          when: "subType",
          is: "aed",
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
          when: "subType",
          is: "con",
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
          when: "subType",
          is: "cwe",
        },
      ],
    },
  ],
};

export const wbs: IField = {
  name: "wbs",
  label: "Project Definition (WBS)",
  type: "text",
  patterns: [
    h.required(
      "This field is required when Cost Center or Sales Document or Sales Document Item are empty",
    ),
  ],
  conditionalDisabled: [
    ...h.inGetState,
    {
      conditions: [
        {
          when: "costCenter",
          is: true,
        },
      ],
    },
    {
      conditions: [
        {
          when: "salesDocument",
          is: true,
        },
      ],
    },
    {
      conditions: [
        {
          when: "salesDocumentItem",
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
          when: "subType",
          is: "y07",
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
          when: "subType",
          is: "y07c",
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
          when: "subType",
          is: "y08",
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
          when: "subType",
          is: "y08c",
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
          when: "subType",
          is: "y09",
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
          when: "subType",
          is: "y09c",
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
          when: "subType",
          is: "y27",
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
          when: "subType",
          is: "y27c",
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
          when: "subType",
          is: "y28",
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
          when: "subType",
          is: "y28c",
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
          when: "subType",
          is: "aed",
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
          when: "subType",
          is: "con",
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
          when: "subType",
          is: "ccc",
        },
      ],
    },
  ],
};

export const salesDocument: IField = {
  name: "salesDocument",
  label: "Sales Document",
  type: "text",
  patterns: [
    h.required(
      "This field is required when Cost Center or WBS Element are empty",
    ),
  ],
  conditionalDisabled: [
    ...h.inGetState,
    {
      conditions: [
        {
          when: "wbs",
          is: true,
        },
      ],
    },
    {
      conditions: [
        {
          when: "costCenter",
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
          when: "subType",
          is: "y07",
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
          when: "subType",
          is: "y07c",
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
          when: "subType",
          is: "y08",
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
          when: "subType",
          is: "y08c",
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
          when: "subType",
          is: "y09",
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
          when: "subType",
          is: "y09c",
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
          when: "subType",
          is: "y27",
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
          when: "subType",
          is: "y27c",
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
          when: "subType",
          is: "y28",
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
          when: "subType",
          is: "y28c",
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
          when: "subType",
          is: "aed",
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
          when: "subType",
          is: "ccc",
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
          when: "subType",
          is: "cwe",
        },
      ],
    },
  ],
};

export const salesDocumentItem: IField = {
  name: "salesDocumentItem",
  label: "Sales Document Item",
  type: "text",
  patterns: [
    h.required(
      "This field is required when Cost Center or WBS Element are empty",
    ),
  ],
  conditionalDisabled: [
    ...h.inGetState,
    {
      conditions: [
        {
          when: "wbs",
          is: true,
        },
      ],
    },
    {
      conditions: [
        {
          when: "costCenter",
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
          when: "subType",
          is: "y07",
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
          when: "subType",
          is: "y07c",
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
          when: "subType",
          is: "y08",
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
          when: "subType",
          is: "y08c",
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
          when: "subType",
          is: "y09",
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
          when: "subType",
          is: "y09c",
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
          when: "subType",
          is: "y27",
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
          when: "subType",
          is: "y27c",
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
          when: "subType",
          is: "y28",
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
          when: "subType",
          is: "y28c",
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
          when: "subType",
          is: "aed",
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
          when: "subType",
          is: "ccc",
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
          when: "subType",
          is: "cwe",
        },
      ],
    },
  ],
};

export const appCreator: IField = {
  name: "appCreator",
  label: "Appl Creator",
  type: "text",
  disabled: true,
};

export const tlClosingBalanceUpdate: IField = {
  name: "tlClosingBalanceUpdate",
  label: "TL-Closing Balance - Update",
  dependantValue: [
    {
      conditions: [{when: "subType",is:["aed","ccc","con","cwe"]}],
      valueFrom: "",
    },   
    {
      conditions: [{ when: "ledgerGroup", is: ["0l","2l","il"] }],
      valueFrom: "",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["al"] }],
      valueFrom: "0lClosingBalanceUpdate",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["0l,lt"] }],
      valueFrom: "2lClosingBalanceUpdate",
    },
  ],
  type: "number",
  patterns: [h.required()],
  disabled: true,
};

export const tlClosingBalance: IField = {
  name: "tlClosingBalance",
  label: "TL-Closing Balance - Posted & Booked",
  dependantValue: [
    {
      conditions: [{ when: "ledgerGroup", is: ["0l","2l","il"] }],
      valueFrom: "",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["al"] }],
      valueFrom: "0lClosingBalance",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["0l,lt"] }],
      valueFrom: "2lClosingBalance",
    },
  ],
  type: "number",
  patterns: [h.required()],
  disabled: true,
};

export const tlReleaseUpdate: IField = {
  name: "tlReleaseUpdate",
  label: "TL-Release - Update",
  dependantValue: [
    {
      conditions: [{when: "subType",is:["aed","ccc","con","cwe"]}],
      valueFrom: "",
    },   
    {
      conditions: [{ when: "ledgerGroup", is: ["0l","2l","il"] }],
      valueFrom: "",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["al"] }],
      valueFrom: "0lReleaseUpdate",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["0l,lt"] }],
      valueFrom: "2lReleaseUpdate",
    },
  ],
  type: "number",
  patterns: [h.required()],
  disabled: true,
};

export const tlRelease: IField = {
  name: "tlRelease",
  label: "TL-Release - Posted & Booked",
  dependantValue: [
    {
      conditions: [{ when: "ledgerGroup", is: ["0l","2l","il"] }],
      valueFrom: "",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["al"] }],
      valueFrom: "0lRelease",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["0l,lt"] }],
      valueFrom: "2lRelease",
    },
  ],
  type: "number",
  patterns: [h.required()],
  disabled: true,
};

export const tlUsageUpdate: IField = {
  name: "tlUsageUpdate",
  label: "TL-Usage - Update",
  dependantValue: [
    {
      conditions: [{when: "subType",is:["aed","ccc","con","cwe"]}],
      valueFrom: "",
    },   
    {
      conditions: [{ when: "ledgerGroup", is: ["0l","2l","il"] }],
      valueFrom: "",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["al"] }],
      valueFrom: "0lUsageUpdate",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["0l,lt"] }],
      valueFrom: "2lUsageUpdate",
    },
  ],
  type: "number",
  patterns: [h.required()],
  disabled: true,
};

export const tlUsage: IField = {
  name: "tlUsage",
  label: "TL-Usage - Posted & Booked",
  dependantValue: [
    {
      conditions: [{ when: "ledgerGroup", is: ["0l","2l","il"] }],
      valueFrom: "",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["al"] }],
      valueFrom: "0lUsage",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["0l,lt"] }],
      valueFrom: "2lUsage",
    },
  ],
  type: "number",
  patterns: [h.required()],
  disabled: true,
};

export const tlCreationAdditionUpdate: IField = {
  name: "tlCreationAdditionUpdate",
  label: "TL-Creation/Addition - Update",
  dependantValue: [
    {
      conditions: [{when: "subType",is:["aed","ccc","con","cwe"]}],
      valueFrom: "",
    },   
    {
      conditions: [{ when: "ledgerGroup", is: ["0l","2l","il"] }],
      valueFrom: "",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["al"] }],
      valueFrom: "0lCreationAdditionUpdate",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["0l,lt"] }],
      valueFrom: "2lCreationAdditionUpdate",
    },
  ],
  type: "number",
  patterns: [h.required()],
  disabled: true,
};

export const tlCreationAddition: IField = {
  name: "tlCreationAddition",
  label: "TL-Creation/Addition - Posted & Booked",
  dependantValue: [
    {
      conditions: [{ when: "ledgerGroup", is: ["0l","2l","il"] }],
      valueFrom: "",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["al"] }],
      valueFrom: "0lCreationAddition",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["0l,lt"] }],
      valueFrom: "2lCreationAddition",
    },
  ],
  type: "number",
  patterns: [h.required()],
  disabled: true,
};

export const tlCarryFwd: IField = {
  name: "tlCarryFwd",
  label: "TL-Carry Fwd from Last Year",
  dependantValue: [
    {
      conditions: [{ when: "ledgerGroup", is: ["0l","2l","il"] }],
      valueFrom: "",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["al"] }],
      valueFrom: "0lCarryFwd",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["0l,lt"] }],
      valueFrom: "2lCarryFwd",
    },
  ],
  type: "number",
  patterns: [h.required()],
  disabled: true,
};

export const _2lClosingBalanceUpdate: IField = {
  name: "2lClosingBalanceUpdate",
  label: "2L-Closing Balance - Update",
  calculatedValue: {
    expression:
      "Number(formValues['2lCarryFwd'] ?? 0) + Number(formValues['2lCreationAddition'] ?? 0) + ((formValues['subType'] ?? '').includes('c') ? -Number(formValues['2lCreationAdditionUpdate'] ?? 0) : Number(formValues['2lCreationAdditionUpdate'] ?? 0)) - Number(formValues['2lUsage'] ?? 0) - ((formValues['subType'] ?? '').includes('c') ? -Number(formValues['2lUsageUpdate'] ?? 0) : Number(formValues['2lUsageUpdate'] ?? 0)) - Number(formValues['2lRelease'] ?? 0) - ((formValues['subType'] ?? '').includes('c') ? -Number(formValues['2lReleaseUpdate'] ?? 0) : Number(formValues['2lReleaseUpdate'] ?? 0))",
  },
  type: "number",
  patterns: [h.required()],
  disabled: true,
};

export const _2lClosingBalance: IField = {
  name: "2lClosingBalance",
  label: "2L-Closing Balance - Posted & Booked",
  calculatedValue: {
    expression:
      "Number(formValues['2lCarryFwd'] ?? 0) + Number(formValues['2lCreationAddition'] ?? 0) - Number(formValues['2lUsage'] ?? 0) - Number(formValues['2lRelease'] ?? 0)",
  },
  type: "number",
  patterns: [h.required()],
  disabled: true,
};

export const _2lReleaseUpdate: IField = {
  name: "2lReleaseUpdate",
  label: "2L-Release - Update",
  dependantValue: [
    {
      conditions: [{when: "subType",is:["aed","ccc","con","cwe","y07","y07c","y27","y27c","y09","y09c","y097","y097c","y098","y098c"]}],
      valueFrom: "",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["al", "il"] }],
      valueFrom: "0lReleaseUpdate",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["0l"] }],
      valueFrom: "",
    },
  ],
  type: "number",
  patterns: [
    h.required("Not a proper number!"),
    h.empty("2lUsageUpdate,2lCreationAdditionUpdate", "LOCAL GAAP"),
  ],
  conditionalDisabled: [
    ...h.inGetState,
    {
      conditions: [{ when: "ledgerGroup", is: "al" }],
    },
    {
      conditions: [{ when: "ledgerGroup", is: "0l" }],
    },
    {
      conditions: [{ when: "ledgerGroup", is: "il" }],
    },
    {
      conditions: [{ when: "subType", is: "y07" }],
    },
    {
      conditions: [{ when: "subType", is: "y27c" }],
    },
    {
      conditions: [{ when: "subType", is: "y07c" }],
    },
    {
      conditions: [{ when: "subType", is: "y097" }],
    },
    {
      conditions: [{ when: "subType", is: "y097c" }],
    },
    {
      conditions: [{ when: "subType", is: "y09" }],
    },
    {
      conditions: [{ when: "subType", is: "y09c" }],
    },
    {
      conditions: [{ when: "subType", is: "aed" }],
    },
    {
      conditions: [{ when: "subType", is: "ccc" }],
    },
    {
      conditions: [{ when: "subType", is: "con" }],
    },
    {
      conditions: [{ when: "subType", is: "cwe" }],
    },
  ],
};

export const _2lRelease: IField = {
  name: "2lRelease",
  label: "2L-Release - Posted & Booked",
  dependantValue: [
    {
      conditions: [{ when: "ledgerGroup", is: ["al", "il"] }],
      valueFrom: "0lRelease",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["0l"] }],
      valueFrom: "",
    },
  ],
  type: "number",
  patterns: [h.required()],
  disabled: true,
};

export const _2lUsageUpdate: IField = {
  name: "2lUsageUpdate",
  label: "2L-Usage - Update",
  dependantValue: [
    {
      conditions: [{when: "subType",is:["aed","ccc","con","cwe","y28","y28c","y08","y08c","y09","y09c","y097","y097c","y098","y098c"]}],
      valueFrom: "",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["al", "il"] }],
      valueFrom: "0lUsageUpdate",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["0l"] }],
      valueFrom: "",
    },
  ],
  type: "number",
  patterns: [
    h.required("Not a proper number!"),
    h.empty("2lCreationAdditionUpdate,2lReleaseUpdate", "LOCAL GAAP"),
  ],
  conditionalDisabled: [
    ...h.inGetState,
    {
      conditions: [{ when: "ledgerGroup", is: "al" }],
    },
    {
      conditions: [{ when: "ledgerGroup", is: "0l" }],
    },
    {
      conditions: [{ when: "ledgerGroup", is: "il" }],
    },
    {
      conditions: [{ when: "subType", is: "y09" }],
    },
    {
      conditions: [{ when: "subType", is: "y09c" }],
    },
    {
      conditions: [{ when: "subType", is: "y28" }],
    },
    {
      conditions: [{ when: "subType", is: "y08" }],
    },
    {
      conditions: [{ when: "subType", is: "y28c" }],
    },
    {
      conditions: [{ when: "subType", is: "y08c" }],
    },
    {
      conditions: [{ when: "subType", is: "y098" }],
    },
    {
      conditions: [{ when: "subType", is: "y098c" }],
    },
    {
      conditions: [{ when: "subType", is: "aed" }],
    },
    {
      conditions: [{ when: "subType", is: "ccc" }],
    },
    {
      conditions: [{ when: "subType", is: "con" }],
    },
    {
      conditions: [{ when: "subType", is: "cwe" }],
    },
  ],
};

export const _2lUsage: IField = {
  name: "2lUsage",
  label: "2L-Usage - Posted & Booked",
  dependantValue: [
    {
      conditions: [{ when: "ledgerGroup", is: ["al", "il"] }],
      valueFrom: "0lUsage",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["0l"] }],
      valueFrom: "",
    },
  ],
  type: "number",
  patterns: [h.required()],
  disabled: true,
};

export const _2lCreationAdditionUpdate: IField = {
  name: "2lCreationAdditionUpdate",
  label: "2L-Creation/Addition - Update",
  dependantValue: [
    {
      conditions: [{when: "subType",is:["aed","ccc","con","cwe","y07","y07c","y08","y08c","y27","y27c","y28","y28c"]}],
      valueFrom: "",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["al","il"] }],
      valueFrom: "0lCreationAdditionUpdate",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["0l"] }],
      valueFrom: "",
    },
  ],
  type: "number",
  patterns: [
    h.required("Not a proper number!"),
    h.empty("2lUsageUpdate,2lReleaseUpdate", "LOCAL GAAP"),
  ],
  conditionalDisabled: [
    ...h.inGetState,
    {
      conditions: [{ when: "ledgerGroup", is: "al" }],
    },
    {
      conditions: [{ when: "ledgerGroup", is: "0l" }],
    },
    {
      conditions: [{ when: "ledgerGroup", is: "il" }],
    },
    {
      conditions: [{ when: "subType", is: "y07" }],
    },
    {
      conditions: [{ when: "subType", is: "y27c" }],
    },
    {
      conditions: [{ when: "subType", is: "y07c" }],
    },
    {
      conditions: [{ when: "subType", is: "y097" }],
    },
    {
      conditions: [{ when: "subType", is: "y097c" }],
    },
    {
      conditions: [{ when: "subType", is: "y28" }],
    },
    {
      conditions: [{ when: "subType", is: "y08" }],
    },
    {
      conditions: [{ when: "subType", is: "y28c" }],
    },
    {
      conditions: [{ when: "subType", is: "y08c" }],
    },
    {
      conditions: [{ when: "subType", is: "y098" }],
    },
    {
      conditions: [{ when: "subType", is: "y098c" }],
    },
    {
      conditions: [{ when: "subType", is: "aed" }],
    },
    {
      conditions: [{ when: "subType", is: "ccc" }],
    },
    {
      conditions: [{ when: "subType", is: "con" }],
    },
    {
      conditions: [{ when: "subType", is: "cwe" }],
    },
  ],
};

export const _2lCreationAddition: IField = {
  name: "2lCreationAddition",
  label: "2L-Creation/Addition - Posted & Booked",
  dependantValue: [
    {
      conditions: [{ when: "ledgerGroup", is: ["al","il"] }],
      valueFrom: "0lCreationAddition",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["0l"] }],
      valueFrom: "",
    },
  ],
  type: "number",
  patterns: [h.required()],
  disabled: true,
};

export const _2lCarryFwd: IField = {
  name: "2lCarryFwd",
  label: "2L-Carry Fwd from Last Year",
  dependantValue: [
    {
      conditions: [{ when: "ledgerGroup", is: ["al","il"] }],
      valueFrom: "0lCarryFwd",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["0l"] }],
      valueFrom: "",
    },
  ],
  type: "number",
  patterns: [h.required()],
  disabled: true,
};

export const _0lClosingBalanceUpdate: IField = {
  name: "0lClosingBalanceUpdate",
  label: "0L-Closing Balance - Update",
  calculatedValue: {
    expression:
      "Number(formValues['0lCarryFwd'] ?? 0) + Number(formValues['0lCreationAddition'] ?? 0) + ((formValues['subType'] ?? '').includes('c') ? -Number(formValues['0lCreationAdditionUpdate'] ?? 0) : Number(formValues['0lCreationAdditionUpdate'] ?? 0)) - Number(formValues['0lUsage'] ?? 0) - ((formValues['subType'] ?? '').includes('c') ? -Number(formValues['0lUsageUpdate'] ?? 0) : Number(formValues['0lUsageUpdate'] ?? 0)) - Number(formValues['0lRelease'] ?? 0) - ((formValues['subType'] ?? '').includes('c') ? -Number(formValues['0lReleaseUpdate'] ?? 0) : Number(formValues['0lReleaseUpdate'] ?? 0))",
  },
  type: "number",
  patterns: [h.required()],
  disabled: true,
};

export const _0lClosingBalance: IField = {
  name: "0lClosingBalance",
  label: "0L-Closing Balance - Posted & Booked",
  calculatedValue: {
    expression:
      "Number(formValues['0lCarryFwd'] ?? 0) + Number(formValues['0lCreationAddition'] ?? 0) - Number(formValues['0lUsage'] ?? 0) - Number(formValues['0lRelease'] ?? 0)",
  },
  type: "number",
  patterns: [h.required()],
  disabled: true,
};

export const _0lReleaseUpdate: IField = {
  name: "0lReleaseUpdate",
  label: "0L-Release - Update",
  dependantValue: [
    {
      conditions: [{when: "subType",is:["aed","ccc","con","cwe","y07","y07c","y27","y27c","y09","y09c","y097","y097c","y098","y098c"]}],
      valueFrom: "",
    }, 
    {
      conditions: [{ when: "ledgerGroup", is: ["2l"] }],
      valueFrom: "",
    },
  ],
  type: "number",
  patterns: [
    h.required("Not a proper number!"),
    h.empty("0lUsageUpdate,0lCreationAdditionUpdate", "IFRS"),
  ],
  conditionalDisabled: [
    ...h.inGetState,
    {
      conditions: [{ when: "subType", is: "y09" }],
    },
    {
      conditions: [{ when: "subType", is: "y09c" }],
    },
    {
      conditions: [{ when: "subType", is: "y27" }],
    },
    {
      conditions: [{ when: "subType", is: "y07" }],
    },
    {
      conditions: [{ when: "subType", is: "y27c" }],
    },
    {
      conditions: [{ when: "subType", is: "y07c" }],
    },
    {
      conditions: [{ when: "subType", is: "y097" }],
    },
    {
      conditions: [{ when: "subType", is: "y097c" }],
    },
    {
      conditions: [{ when: "ledgerGroup", is: "2l" }],
    },
    {
      conditions: [{ when: "subType", is: "aed" }],
    },
    {
      conditions: [{ when: "subType", is: "ccc" }],
    },
    {
      conditions: [{ when: "subType", is: "con" }],
    },
    {
      conditions: [{ when: "subType", is: "cwe" }],
    },
  ],
};

export const _0lRelease: IField = {
  name: "0lRelease",
  label: "0L-Release - Posted & Booked",
  dependantValue: [
    {
      conditions: [{ when: "ledgerGroup", is: ["2l"] }],
      valueFrom: "",
    },
  ],
  type: "number",
  patterns: [h.required()],
  disabled: true,
};

export const _0lUsageUpdate: IField = {
  name: "0lUsageUpdate",
  label: "0L-Usage - Update",
  dependantValue: [
    {
      conditions: [{when: "subType",is:["aed","ccc","con","cwe","y28","y28c","y08","y08c","y09","y09c","y097","y097c","y098","y098c"]}],
      valueFrom: "",
    }, 
    {
      conditions: [{ when: "ledgerGroup", is: ["2l"] }],
      valueFrom: "",
    },
  ],
  type: "number",
  patterns: [
    h.required("Not a proper number!"),
    h.empty("0lCreationAdditionUpdate,0lReleaseUpdate", "IFRS"),
  ],
  conditionalDisabled: [
    ...h.inGetState,
    {
      conditions: [{ when: "subType", is: "y09" }],
    },
    {
      conditions: [{ when: "subType", is: "y09c" }],
    },
    {
      conditions: [{ when: "ledgerGroup", is: "2l" }],
    },
    {
      conditions: [{ when: "subType", is: "y28" }],
    },
    {
      conditions: [{ when: "subType", is: "y08" }],
    },
    {
      conditions: [{ when: "subType", is: "y28c" }],
    },
    {
      conditions: [{ when: "subType", is: "y08c" }],
    },
    {
      conditions: [{ when: "subType", is: "y098" }],
    },
    {
      conditions: [{ when: "subType", is: "y098c" }],
    },
    {
      conditions: [{ when: "subType", is: "aed" }],
    },
    {
      conditions: [{ when: "subType", is: "ccc" }],
    },
    {
      conditions: [{ when: "subType", is: "con" }],
    },
    {
      conditions: [{ when: "subType", is: "cwe" }],
    },
  ],
};

export const _0lUsage: IField = {
  name: "0lUsage",
  label: "0L-Usage - Posted & Booked",
  dependantValue: [
    {
      conditions: [{ when: "ledgerGroup", is: ["2l"] }],
      valueFrom: "",
    },
  ],
  type: "number",
  patterns: [h.required()],
  disabled: true,
};

export const _0lCreationAdditionUpdate: IField = {
  name: "0lCreationAdditionUpdate",
  label: "0L-Creation/Addition - Update",
  dependantValue: [
    {
      conditions: [{when: "subType",is:["aed","ccc","con","cwe","y07","y07c","y08","y08c","y27","y27c","y28","y28c"]}],
      valueFrom: "",
    }, 
    {
      conditions: [{ when: "ledgerGroup", is: ["2l"] }],
      valueFrom: "",
    },
  ],
  type: "number",
  patterns: [
    h.required("Not a proper number!"),
    h.empty("0lUsageUpdate,0lReleaseUpdate", "IFRS"),
  ],
  conditionalDisabled: [
    ...h.inGetState,
    {
      conditions: [{ when: "ledgerGroup", is: "2l" }],
    },
    {
      conditions: [{ when: "subType", is: "y27" }],
    },
    {
      conditions: [{ when: "subType", is: "y07" }],
    },
    {
      conditions: [{ when: "subType", is: "y27c" }],
    },
    {
      conditions: [{ when: "subType", is: "y07c" }],
    },
    {
      conditions: [{ when: "subType", is: "y097" }],
    },
    {
      conditions: [{ when: "subType", is: "y097c" }],
    },
    {
      conditions: [{ when: "subType", is: "y28" }],
    },
    {
      conditions: [{ when: "subType", is: "y08" }],
    },
    {
      conditions: [{ when: "subType", is: "y28c" }],
    },
    {
      conditions: [{ when: "subType", is: "y08c" }],
    },
    {
      conditions: [{ when: "subType", is: "y098" }],
    },
    {
      conditions: [{ when: "subType", is: "y098c" }],
    },
    {
      conditions: [{ when: "subType", is: "aed" }],
    },
    {
      conditions: [{ when: "subType", is: "ccc" }],
    },
    {
      conditions: [{ when: "subType", is: "con" }],
    },
    {
      conditions: [{ when: "subType", is: "cwe" }],
    },
  ],
};

export const _0lCreationAddition: IField = {
  name: "0lCreationAddition",
  label: "0L-Creation/Addition - Posted & Booked",
  dependantValue: [
    {
      conditions: [{ when: "ledgerGroup", is: ["2l"] }],
      valueFrom: "",
    },
  ],
  type: "number",
  patterns: [h.required()],
  disabled: true,
};

export const _0lCarryFwd: IField = {
  name: "0lCarryFwd",
  label: "0L-Carry Fwd from Last Year",
  type: "number",
  patterns: [h.required()],
  disabled: true,
};

export const user: IField = {
  name: "user",
  label: "User",
  type: "text",
  disabled: true,
};

export const appNumberOld: IField = {
  name: "appNumberOld",
  label: "Application Number (Old System)",
  type: "text",
  disabled: true,
};

export const changedOn: IField = {
  name: "changedOn",
  label: "Changed On",
  type: "date",
  disabled: true,
};

export const appCreationDate: IField = {
  name: "appCreationDate",
  label: "Appl Creation Date",
  type: "date",
  disabled: true,
};

export const description2: IField = {
  name: "description2",
  label: "JV Text (Free Text)",
  type: "text",
  maxlength: "40",
  conditionalDisabled: h.inGetState,
};

export const description1: IField = {
  name: "description1",
  label: "Description 1 (Fixed Text)",
  type: "text",
  maxlength: "45",
  patterns: [h.required()],
  conditionalDisabled: h.inModifyState,
};

export const localCurrency: IField = {
  name: "localCurrency",
  label: "Local Currency",
  type: "select",
  disabled: true,
  dependentOptions: [
    {
      conditions: [
        {
          when: "companyCode",
          is: ["de10", "nl10", "be10", "lx10", "pt10", "gr10"],
        },
      ],
      options: [{ label: "EUR", value: "EUR" }],
    },
    {
      conditions: [{ when: "companyCode", is: ["pl10"] }],
      options: [{ label: "PLN", value: "PLN" }],
    },
    {
      conditions: [{ when: "companyCode", is: ["uk10"] }],
      options: [{ label: "GBP", value: "GBP" }],
    },
    {
      conditions: [{ when: "companyCode", is: ["tr10"] }],
      options: [{ label: "TRY", value: "TRY" }],
    },
    {
      conditions: [{ when: "companyCode", is: ["us10"] }],
      options: [{ label: "USD", value: "USD" }],
    },
  ],
};

export const documentDate: IField = {
  name: "documentDate",
  label: "Document Date",
  type: "date",
  conditionalDisabled: h.inGetState,
};

export const postingPeriod: IField = {
  name: "postingPeriod",
  label: "Posting Period",
  type: "text",
  //@ts-ignore
  calculatedValue: { date: "postingDate", month: 3 },
  disabled: true,
};

export const postingDate: IField = {
  initValue:"00010101",
  name: "postingDate",
  label: "Posting Date",
  type: "date",
  conditionalDisabled: h.inGetState,
};

export const appEndDate: IField = {
  name: "appEndDate",
  label: "Appl. End Date",
  type: "date",
  patterns: [
    h.future,
    { reg: "lt_appStartDate", message: "Cannot be before App Start Date." },
  ],
  conditionalDisabled: [
    ...h.inGetState,
    {
      conditions: [
        {
          when: "mode",
          is: "modify",
        },
        {
          when: "subType",
          is: "y07",
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
          when: "subType",
          is: "y07c",
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
          when: "subType",
          is: "y08",
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
          when: "subType",
          is: "y08c",
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
          when: "subType",
          is: "y09",
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
          when: "subType",
          is: "y098",
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
          when: "subType",
          is: "y09c",
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
          when: "subType",
          is: "y27",
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
          when: "subType",
          is: "y27c",
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
          when: "subType",
          is: "y28",
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
          when: "subType",
          is: "y28c",
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
          when: "subType",
          is: "ccc",
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
          when: "subType",
          is: "con",
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
          when: "subType",
          is: "cwe",
        },
      ],
    },
  ],
};

export const appStartDate: IField = {
  name: "appStartDate",
  label: "Appl. Start Date",
  type: "date",
  patterns: [
    h.future,
    { reg: "gt_appEndDate", message: "Cannot be after App End Date." },
  ],
  conditionalDisabled: h.inModifyState,
};

export const glCreditAccount: IField = {
  name: "glCreditAccount",
  label: "GL-Credit Account",
  initValue: "",
  type: "select",
  disabled: true,
  dependentOptions: [
    {
      conditions: [
        { when: "provisionType", is: ["j55"] },
        { when: "subType", is: ["y09", "y097c", "y098c"] },
      ],
      options: [
        {
          label: "24182100",
          value: "24182100",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["j51"] },
        { when: "subType", is: ["y09", "y097c", "y098c"] },
      ],
      options: [
        {
          label: "24189100",
          value: "24189100",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["c83", "c84"] },
        { when: "subType", is: ["y07c", "y08c", "y09", "y27c", "y28c"] },
      ],
      options: [
        {
          label: "38610000",
          value: "38610000",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o25"] },
        { when: "subType", is: ["y07c", "y08c", "y09", "y27c", "y28c"] },
      ],
      options: [
        {
          label: "39310000",
          value: "39310000",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o30"] },
        { when: "subType", is: ["y07c", "y08c", "y09", "y27c", "y28c"] },
      ],
      options: [
        {
          label: "39410000",
          value: "39410000",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o70"] },
        { when: "subType", is: ["y07c", "y08c", "y09", "y27c", "y28c"] },
      ],
      options: [
        {
          label: "38710000",
          value: "38710000",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o71"] },
        { when: "subType", is: ["y07c", "y08c", "y09", "y27c", "y28c"] },
      ],
      options: [
        {
          label: "39710000",
          value: "39710000",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["r10"] },
        { when: "subType", is: ["y07c", "y08c", "y09", "y27c", "y28c"] },
      ],
      options: [
        {
          label: "47521110",
          value: "47521110",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["j55"] },
        { when: "subType", is: ["y09c", "y097", "y098"] },
      ],
      options: [
        {
          label: "54100000",
          value: "54100000",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["j51"] },
        { when: "subType", is: ["y09c", "y097", "y098"] },
      ],
      options: [
        {
          label: "54890000",
          value: "54890000",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["c83", "c84"] },
        { when: "subType", is: ["y07", "y27"] },
      ],
      options: [
        {
          label: "60900007",
          value: "60900007",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["c83", "c84"] },
        { when: "subType", is: ["y08", "y28"] },
      ],
      options: [
        {
          label: "60900008",
          value: "60900008",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["c83", "c84"] },
        { when: "subType", is: ["y09c"] },
      ],
      options: [
        {
          label: "60900009",
          value: "60900009",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o30"] },
        { when: "subType", is: ["y07"] },
      ],
      options: [
        {
          label: "68810007",
          value: "68810007",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o30"] },
        { when: "subType", is: ["y08"] },
      ],
      options: [
        {
          label: "68810008",
          value: "68810008",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o30"] },
        { when: "subType", is: ["y09c"] },
      ],
      options: [
        {
          label: "68810009",
          value: "68810009",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o30"] },
        { when: "subType", is: ["y27"] },
      ],
      options: [
        {
          label: "68810027",
          value: "68810027",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o30"] },
        { when: "subType", is: ["y28"] },
      ],
      options: [
        {
          label: "68810028",
          value: "68810028",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o70"] },
        { when: "subType", is: ["y07"] },
      ],
      options: [
        {
          label: "68890007",
          value: "68890007",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o70"] },
        { when: "subType", is: ["y08"] },
      ],
      options: [
        {
          label: "68890008",
          value: "68890008",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o70"] },
        { when: "subType", is: ["y09c"] },
      ],
      options: [
        {
          label: "68890009",
          value: "68890009",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o70"] },
        { when: "subType", is: ["y27"] },
      ],
      options: [
        {
          label: "68890027",
          value: "68890027",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o70"] },
        { when: "subType", is: ["y28"] },
      ],
      options: [
        {
          label: "68890028",
          value: "68890028",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["r10"] },
        { when: "subType", is: ["y07"] },
      ],
      options: [
        {
          label: "68920007",
          value: "68920007",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["r10"] },
        { when: "subType", is: ["y08"] },
      ],
      options: [
        {
          label: "68920008",
          value: "68920008",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["r10"] },
        { when: "subType", is: ["y09c"] },
      ],
      options: [
        {
          label: "68920009",
          value: "68920009",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["r10"] },
        { when: "subType", is: ["y27"] },
      ],
      options: [
        {
          label: "68920027",
          value: "68920027",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["r10"] },
        { when: "subType", is: ["y28"] },
      ],
      options: [
        {
          label: "68920028",
          value: "68920028",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o25"] },
        { when: "subType", is: ["y07"] },
      ],
      options: [
        {
          label: "68930007",
          value: "68930007",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o25"] },
        { when: "subType", is: ["y08"] },
      ],
      options: [
        {
          label: "68930008",
          value: "68930008",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o25"] },
        { when: "subType", is: ["y09c"] },
      ],
      options: [
        {
          label: "68930009",
          value: "68930009",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o25"] },
        { when: "subType", is: ["y27"] },
      ],
      options: [
        {
          label: "68930027",
          value: "68930027",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o25"] },
        { when: "subType", is: ["y28"] },
      ],
      options: [
        {
          label: "68930028",
          value: "68930028",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o71"] },
        { when: "subType", is: ["y07"] },
      ],
      options: [
        {
          label: "68990007",
          value: "68990007",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o71"] },
        { when: "subType", is: ["y08"] },
      ],
      options: [
        {
          label: "68990008",
          value: "68990008",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o71"] },
        { when: "subType", is: ["y09c"] },
      ],
      options: [
        {
          label: "68990009",
          value: "68990009",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o71"] },
        { when: "subType", is: ["27"] },
      ],
      options: [
        {
          label: "68990027",
          value: "68990027",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o71"] },
        { when: "subType", is: ["28"] },
      ],
      options: [
        {
          label: "68990028",
          value: "68990028",
        },
      ],
    },

    {
      conditions: [
        {
          when: "provisionType",
          is: ["c83", "c84", "o25", "o30", "o70", "o71", "r10", "j51", "j55"],
        },
        { when: "subType", is: ["aed", "ccc", "con", "cwe"] },
      ],
      options: [
        {
          label: "n/a",
          value: "n/a",
        },
      ],
    },
  ],
};

export const glDebitAccount: IField = {
  name: "glDebitAccount",
  label: "GL-Debit Account",
  initValue: "",
  type: "select",
  disabled: true,
  dependentOptions: [
    {
      conditions: [
        { when: "provisionType", is: ["j55"] },
        { when: "subType", is: ["y09c", "y097", "y098"] },
      ],
      options: [
        {
          label: "24182100",
          value: "24182100",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["j51"] },
        { when: "subType", is: ["y09c", "y097", "y098"] },
      ],
      options: [
        {
          label: "24189100",
          value: "24189100",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["c83", "c84"] },
        { when: "subType", is: ["y07", "y08", "y09c", "y27", "y28"] },
      ],
      options: [
        {
          label: "38610000",
          value: "38610000",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o25"] },
        { when: "subType", is: ["y07", "y08", "y09c", "y27", "y28"] },
      ],
      options: [
        {
          label: "39310000",
          value: "39310000",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o30"] },
        { when: "subType", is: ["y07", "y08", "y09c", "y27", "y28"] },
      ],
      options: [
        {
          label: "39410000",
          value: "39410000",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o70"] },
        { when: "subType", is: ["y07", "y08", "y09c", "y27", "y28"] },
      ],
      options: [
        {
          label: "38710000",
          value: "38710000",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o71"] },
        { when: "subType", is: ["y07", "y08", "y09c", "y27", "y28"] },
      ],
      options: [
        {
          label: "39710000",
          value: "39710000",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["r10"] },
        { when: "subType", is: ["y07", "y08", "y09c", "y27", "y28"] },
      ],
      options: [
        {
          label: "47521110",
          value: "47521110",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["j55"] },
        { when: "subType", is: ["y09", "y097c", "y098c"] },
      ],
      options: [
        {
          label: "54100000",
          value: "54100000",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["j51"] },
        { when: "subType", is: ["y09", "y097c", "y098c"] },
      ],
      options: [
        {
          label: "54890000",
          value: "54890000",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["c83", "c84"] },
        { when: "subType", is: ["y07c", "y27c"] },
      ],
      options: [
        {
          label: "60900007",
          value: "60900007",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["c83", "c84"] },
        { when: "subType", is: ["y08c", "y28c"] },
      ],
      options: [
        {
          label: "60900008",
          value: "60900008",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["c83", "c84"] },
        { when: "subType", is: ["y09"] },
      ],
      options: [
        {
          label: "60900009",
          value: "60900009",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o30"] },
        { when: "subType", is: ["y07c"] },
      ],
      options: [
        {
          label: "68810007",
          value: "68810007",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o30"] },
        { when: "subType", is: ["y08c"] },
      ],
      options: [
        {
          label: "68810008",
          value: "68810008",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o30"] },
        { when: "subType", is: ["y09"] },
      ],
      options: [
        {
          label: "68810009",
          value: "68810009",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o30"] },
        { when: "subType", is: ["y27c"] },
      ],
      options: [
        {
          label: "68810027",
          value: "68810027",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o30"] },
        { when: "subType", is: ["y28c"] },
      ],
      options: [
        {
          label: "68810028",
          value: "68810028",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o70"] },
        { when: "subType", is: ["y07c"] },
      ],
      options: [
        {
          label: "68890007",
          value: "68890007",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o70"] },
        { when: "subType", is: ["y08c"] },
      ],
      options: [
        {
          label: "68890008",
          value: "68890008",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o70"] },
        { when: "subType", is: ["y09"] },
      ],
      options: [
        {
          label: "68890009",
          value: "68890009",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o70"] },
        { when: "subType", is: ["y27c"] },
      ],
      options: [
        {
          label: "68890027",
          value: "68890027",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o70"] },
        { when: "subType", is: ["y28c"] },
      ],
      options: [
        {
          label: "68890028",
          value: "68890028",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["r10"] },
        { when: "subType", is: ["y07c"] },
      ],
      options: [
        {
          label: "68920007",
          value: "68920007",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["r10"] },
        { when: "subType", is: ["y08c"] },
      ],
      options: [
        {
          label: "68920008",
          value: "68920008",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["r10"] },
        { when: "subType", is: ["y09"] },
      ],
      options: [
        {
          label: "68920009",
          value: "68920009",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["r10"] },
        { when: "subType", is: ["y27c"] },
      ],
      options: [
        {
          label: "68920027",
          value: "68920027",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["r10"] },
        { when: "subType", is: ["y28c"] },
      ],
      options: [
        {
          label: "68920028",
          value: "68920028",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o25"] },
        { when: "subType", is: ["y07c"] },
      ],
      options: [
        {
          label: "68930007",
          value: "68930007",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o25"] },
        { when: "subType", is: ["y08c"] },
      ],
      options: [
        {
          label: "68930008",
          value: "68930008",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o25"] },
        { when: "subType", is: ["y09"] },
      ],
      options: [
        {
          label: "68930009",
          value: "68930009",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o25"] },
        { when: "subType", is: ["y27c"] },
      ],
      options: [
        {
          label: "68930027",
          value: "68930027",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o25"] },
        { when: "subType", is: ["y28c"] },
      ],
      options: [
        {
          label: "68930028",
          value: "68930028",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o71"] },
        { when: "subType", is: ["y07c"] },
      ],
      options: [
        {
          label: "68990007",
          value: "68990007",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o71"] },
        { when: "subType", is: ["y08c"] },
      ],
      options: [
        {
          label: "68990008",
          value: "68990008",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o71"] },
        { when: "subType", is: ["y09"] },
      ],
      options: [
        {
          label: "68990009",
          value: "68990009",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o71"] },
        { when: "subType", is: ["27c"] },
      ],
      options: [
        {
          label: "68990027",
          value: "68990027",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o71"] },
        { when: "subType", is: ["28c"] },
      ],
      options: [
        {
          label: "68990028",
          value: "68990028",
        },
      ],
    },

    {
      conditions: [
        {
          when: "provisionType",
          is: ["c83", "c84", "o25", "o30", "o70", "o71", "r10", "j51", "j55"],
        },
        { when: "subType", is: ["aed", "ccc", "con", "cwe"] },
      ],
      options: [
        {
          label: "n/a",
          value: "n/a",
        },
      ],
    },
  ],
};

export const ledgerGroup: IField = {
  name: "ledgerGroup",
  label: "Redwood Ledger Group",
  type: "select",
  conditionalDisabled: h.inModifyState,
  dependentOptions: [
    {
      conditions: [{ when: "companyCode", is: ["pl10"] }],
      options: [
        {
          label: "0L = IFRS",
          value: "0l",
        },
        {
          label: "2L = Local",
          value: "2l",
        },
        {
          label: "IL = IFRS + Local",
          value: "il",
        },
      ],
    },
    {
      conditions: [{ when: "companyCode", is: ["de10"] }],
      options: [
        {
          label: "AL = IFRS + Local + Tax",
          value: "al",
        },
        {
          label: "0L = IFRS",
          value: "0l",
        },
        {
          label: "2L = Local",
          value: "2l",
        },
        {
          label: "IL = IFRS + Local",
          value: "il",
        },
        {
          label: "0L, LT = Diff. values IFRS + Local/Tax",
          value: "0l,lt",
        },
      ],
    },
  ],
};

export const companyCode: IField = {
  name: "companyCode",
  label: "Company Code",
  type: "select",
  patterns: [h.required()],
  initValue: "",
  conditionalDisabled: h.inModifyState,
};
