import * as h from "./helpers";
import { type IField } from "../components/Field/Field";

export const mode: IField = {
  name: "mode",
  label: "Mode",
  initValue: "create",
  type: "select",
  patterns: [h.required()],
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

export const provisionType: IField = {
  name: "provisionType",
  label: "Prov. Type",
  initValue: "c83",
  type: "select",
  patterns: [h.required()],
  options: [
    {
      label: "C83 Accrual for outstanding expenses",
      value: "c83",
    },
    {
      label: "C84 OUTST. EXPENSES TRADE ACC., AUTOM. REV.-BASED",
      value: "c84",
    },
    {
      label:
        "J50 Adjustments on trade accounts receivable for other unearned revenue",
      value: "j50",
    },
    {
      label: "J55 Refund liabilities for price and quantity discounts",
      value: "j55",
    },
    {
      label: "O25 Warranty provisions",
      value: "o25",
    },
    {
      label: "O30 Provisions for losses on onerous sales contracts",
      value: "o30",
    },
    {
      label:
        "O70 Other miscellaneous accruals for operating expenses of account class 6",
      value: "o70",
    },
    {
      label:
        "O71 Other miscellaneous provisions for related to operating expenses of account class 6",
      value: "o71",
    },
    {
      label:
        "R10 Refund liabilities for penalties for default or delay (cost side)",
      value: "r10",
    },
  ],
  conditionalDisabled: h.inModifyState,
};

export const subType: IField = {
  name: "subType",
  label: "Subtype",
  initValue: "09",
  type: "select",
  dependentOptions: [
    {
      conditions: [
        { when: "mode", is: ["modify"] },
        {
          when: "provisionType",
          is: ["j50", "j55"],
        },
      ],
      options: [
        {
          label: "Creation/Addition of other provisions/accruals (09)",
          value: "09",
        },
        {
          label:
            "Correction - Creation/Addition of other provisions/accruals (09)",
          value: "09c",
        },
      ],
    },
    {
      conditions: [
        { when: "mode", is: ["create"] },
        {
          when: "provisionType",
          is: ["c83", "c84", "j50", "j55", "o25", "o30", "o70", "o71", "r10"],
        },
      ],
      options: [
        {
          label: "Creation/Addition of other provisions/accruals (09)",
          value: "09",
        },
      ],
    },
  ],
  options: [
    {
      label: "Usage of other provisions/accruals - previous year (07)",
      value: "07",
    },
    {
      label:
        "Correction - Usage of other provisions/accruals - previous year (07)",
      value: "07c",
    },
    {
      label:
        "Release, no longer needed of other provisions/accruals - previous year (08)",
      value: "08",
    },
    {
      label:
        "Correction - Release, no longer needed of other provisions/accruals - previous year (08)	",
      value: "08c",
    },
    {
      label: "Creation/Addition of other provisions/accruals (09)",
      value: "09",
    },
    {
      label: "Correction - Creation/Addition of other provisions/accruals (09)",
      value: "09c",
    },
    {
      label: "Usage of other provisions/accruals - current year (27)",
      value: "27",
    },
    {
      label:
        "Correction - Usage of other provisions/accruals - current year (27)",
      value: "27c",
    },
    {
      label:
        "Release, no longer needed of other provisions/accruals - current year (28)",
      value: "28",
    },
    {
      label:
        "Correction - Release, no longer needed of other provisions/accruals - current year (28)",
      value: "28c",
    },
    {
      label: "Change in Application End Date",
      value: "aed",
    },
    {
      label: "Change in Cost Center",
      value: "ccc",
    },
    {
      label: "Change in Order Number",
      value: "con",
    },
    {
      label: "Change in WBS Element",
      value: "cwe",
    },
  ],
};

export const appNumberImport: IField = {
  name: "appNumberImport",
  label: "Editable App Number",
  type: "text",
  conditionalDisabled: h.inCreateState,
};

export const magicButton: IField = {
  name: "magicButton",
  type: "button",
};

export const name1: IField = {
  name: "name1",
  label: "data and required",
  maxlength: "5",
  initValue: "opt1",
  type: "text",
  conditionalDisabled: h.inGetState,
  patterns: [h.required()],
};

export const name2: IField = {
  name: "name2",
  label: "no data and required",
  type: "text",
  patterns: [h.required()],
  conditionalDisabled: h.inGetState,
};

export const name3: IField = {
  name: "name3",
  label: "no data and no required",
  type: "text",
  conditionalDisabled: h.inGetState,
};

export const attachement: IField = {
  name: "attachement",
  label: "attachement",
  type: "file",
  conditionalDisabled: h.inGetState,
};

export const name7b: IField = {
  name: "name7b",
  label: "label data",
  type: "date",
  patterns: [h.required(), h.future],
  conditionalDisabled: h.inGetState,
};

export const appNumber: IField = {
  name: "appNumber",
  label: "Application Number",
  type: "text",
  disabled: true,
};

export const details: IField = {
  name: "details",
  label: "Dependent Options",
  type: "select",
  conditionalDisabled: h.inGetState,
  patterns: [h.required()],
  dependentOptions: [
    {
      conditions: [{ when: "machineActor", is: ["car", "bike"] }],
      options: [
        {
          label: "Honda",
          value: "honda",
        },
        {
          label: "Dalsim",
          value: "dalsim",
        },
      ],
    },
    {
      conditions: [{ when: "machineActor", is: ["schwarzenegger"] }],
      options: [
        {
          label: "Terminator",
          value: "t800",
        },
        {
          label: "Predator",
          value: "józek",
        },
      ],
    },
  ],
  options: [
    {
      label: "Film",
      value: "film",
    },
    {
      label: "Komiks",
      value: "kokosz",
    },
  ],
};

export const name4b: IField = {
  name: "name4b",
  label: "Conditional Disabled if modify and wrestler",
  initValue: "opt1",
  type: "text",
  conditionalDisabled: [
    ...h.inGetState,
    {
      conditions: [
        {
          when: "mode",
          is: "modify",
        },
        {
          when: "wrestler",
          is: true,
        },
      ],
    },
  ],
  patterns: [h.required()],
};

export const wrestler: IField = {
  name: "wrestler",
  label: "Wrestler",
  type: "text",
  patterns: [h.required()],
  conditionalDisabled: h.inGetState,
};

export const machineActor: IField = {
  name: "machineActor",
  label: "Actor or Machine",
  type: "select",
  patterns: [h.required()],
  conditionalDisabled: h.inGetState,
  options: [
    {
      label: "Samochód",
      value: "car",
    },
    {
      label: "Motór",
      value: "bike",
    },
    {
      label: "Schwarzenegger",
      value: "schwarzenegger",
    },
    {
      label: "Stallone",
      value: "sly",
    },
  ],
};

export const name1b: IField = {
  name: "name1b",
  label: "label",
  initValue: "9.2",
  type: "number",
  conditionalDisabled: h.inGetState,
  patterns: [h.required()],
};

export const name2b: IField = {
  name: "name2b",
  label: "label",
  initValue: "15.1",
  type: "number",
  patterns: [h.required()],
};

export const name3b: IField = {
  name: "name3b",
  label: "Calculated Value",
  calculatedValue: ["name1b", "name2b"],
  type: "text",
  disabled: true,
  patterns: [h.required()],
};

export const name7: IField = {
  name: "name7",
  label: "no data no required min_6",
  type: "text",
  patterns: [h.min(6)],
};

export const name8: IField = {
  name: "name8",
  label: "data no required min_6",
  initValue: "opt1",
  type: "text",
  patterns: [h.min(6)],
};

export const user: IField = {
  name: "user",
  label: "Current User",
  type: "text",
  disabled: true,
  patterns: [h.required()],
};

export const costCenter: IField = {
  name: "costCenter",
  label: "Cost Center",
  type: "text",
  patterns: [
    h.required(
      "This field is required when WBS Element or Sales Order or Sales Order Item are empty",
    ),
  ],
  conditionalDisabled: [
    {
      conditions: [
        {
          when: "WBS",
          is: true,
        },
      ],
    },
    {
      conditions: [
        {
          when: "salesOrder",
          is: true,
        },
      ],
    },
    {
      conditions: [
        {
          when: "salesOrderItem",
          is: true,
        },
      ],
    },
  ],
};

export const WBS: IField = {
  name: "WBS",
  label: "WBS Element",
  type: "text",
  patterns: [
    h.required(
      "This field is required when Cost Center or Sales Order or Sales Order Item are empty",
    ),
  ],
  conditionalDisabled: [
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
          when: "salesOrder",
          is: true,
        },
      ],
    },
    {
      conditions: [
        {
          when: "salesOrderItem",
          is: true,
        },
      ],
    },
  ],
};

export const salesOrder: IField = {
  name: "salesOrder",
  label: "Sales Order",
  type: "text",
  patterns: [
    h.required(
      "This field is required when Cost Center or WBS Element are empty",
    ),
  ],
  conditionalDisabled: [
    {
      conditions: [
        {
          when: "WBS",
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
  ],
};

export const salesOrderItem: IField = {
  name: "salesOrderItem",
  label: "Sales Order Item",
  type: "text",
  patterns: [
    h.required(
      "This field is required when Cost Center or WBS Element are empty",
    ),
  ],
  conditionalDisabled: [
    {
      conditions: [
        {
          when: "WBS",
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
  ],
};

export const appCreator: IField = {
  name: "appCreator",
  label: "Creator User",
  type: "text",
  disabled: true,
};

export const name5: IField = {
  name: "name5",
  label: "data required min_6",
  initValue: "opt1",
  type: "text",
  patterns: [h.required(), h.min(6)],
};

export const name6: IField = {
  name: "name6",
  label: "no data required min_6",
  type: "text",
  patterns: [h.required(), h.min(6)],
};
