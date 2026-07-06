import * as h from "./helpers";
import { type IField } from "../types";
import * as expressions from "../utils/calculations";
import { AmountCategory } from "../types";

export const mode: IField = {
  name: "mode",
  label: "Application mode",
  type: "select",
  patterns: [h.required()],
};

export const provisionType: IField = {
  name: "provisionType",
  label: "Prov. Type",
  type: "select",
  patterns: [h.required()],
  conditionalDisabled: h.inModifyState,
};

export const subType: IField = {
  name: "subType",
  label: "Subtype",
  type: "select",
  conditionalDisabled: [...h.inGetState, ...h.inCreateState],
};

export const appNumberImport: IField = {
  name: "appNumberImport",
  label: "Application Number to Import",
  type: "text",
  patterns: [h.required()],
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

export const fiscalYear: IField = {
  name: "fiscalYear",
  label: "Fiscal Year",
  type: "text",
  disabled: true,
};

export const costCenter: IField = {
  name: "costCenter",
  label: "Cost Center",
  type: "text",
  patterns: [
    h.required(
      "This field is required when WBS Element or Sales Document or Sales Document Item or Internal Order are empty"
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
          when: "internalOrder",
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
    {
      conditions: [
        {
          when: "mode",
          is: "modify",
        },
        {
          when: "subType",
          is: "cio",
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
      "This field is required when Cost Center or Sales Document or Sales Document Item or Internal Order are empty"
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
          when: "internalOrder",
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
    {
      conditions: [
        {
          when: "mode",
          is: "modify",
        },
        {
          when: "subType",
          is: "cio",
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
      "This field is required when Cost Center or WBS Element or Internal Order are empty"
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
          when: "internalOrder",
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
    {
      conditions: [
        {
          when: "mode",
          is: "modify",
        },
        {
          when: "subType",
          is: "cio",
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
      "This field is required when Cost Center or WBS Element or Internal Order are empty"
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
          when: "internalOrder",
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
    {
      conditions: [
        {
          when: "mode",
          is: "modify",
        },
        {
          when: "subType",
          is: "cio",
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
  dependentValue: [
    {
      conditions: [{ when: "subType", is: ["aed", "ccc", "con", "cwe"] }],
      valueFrom: "",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["0l", "2l", "il"] }],
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
  showLabel: false,
};

export const tlClosingBalance: IField = {
  name: "tlClosingBalance",
  label: "TL-Closing Balance - Posted & Booked",
  dependentValue: [
    {
      conditions: [{ when: "ledgerGroup", is: ["0l", "2l", "il"] }],
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
  showLabel: false,
};

export const tlReleaseUpdatePY: IField = {
  name: "tlReleaseUpdatePY",
  label: "TL-Release PY - Update",
  dependentValue: [
    {
      conditions: [
        { when: "subType", is: ["aed", "ccc", "con", "cwe", "cio"] },
      ],
      valueFrom: "",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["0l", "2l", "il"] }],
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
  showLabel: false,
};

export const tlReleasePY: IField = {
  name: "tlReleasePY",
  label: "TL-Release PY - Posted & Booked",
  dependentValue: [
    {
      conditions: [{ when: "ledgerGroup", is: ["0l", "2l", "il"] }],
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
  showLabel: false,
};

export const tlUsageUpdatePY: IField = {
  name: "tlUsageUpdatePY",
  label: "TL-Usage PY - Update",
  dependentValue: [
    {
      conditions: [
        { when: "subType", is: ["aed", "ccc", "con", "cwe", "cio"] },
      ],
      valueFrom: "",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["0l", "2l", "il"] }],
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
  showLabel: false,
};

export const tlUsagePY: IField = {
  name: "tlUsagePY",
  label: "TL-Usage PY - Posted & Booked",
  dependentValue: [
    {
      conditions: [{ when: "ledgerGroup", is: ["0l", "2l", "il"] }],
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
  showLabel: false,
};

export const tlReleaseUpdateCY: IField = {
  name: "tlReleaseUpdateCY",
  label: "TL-Release CY - Update",
  dependentValue: [
    {
      conditions: [
        { when: "subType", is: ["aed", "ccc", "con", "cwe", "cio"] },
      ],
      valueFrom: "",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["0l", "2l", "il"] }],
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
  showLabel: false,
};

export const tlReleaseCY: IField = {
  name: "tlReleaseCY",
  label: "TL-Release CY - Posted & Booked",
  dependentValue: [
    {
      conditions: [{ when: "ledgerGroup", is: ["0l", "2l", "il"] }],
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
  showLabel: false,
};

export const tlUsageUpdateCY: IField = {
  name: "tlUsageUpdateCY",
  label: "TL-Usage CY - Update",
  dependentValue: [
    {
      conditions: [
        { when: "subType", is: ["aed", "ccc", "con", "cwe", "cio"] },
      ],
      valueFrom: "",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["0l", "2l", "il"] }],
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
  showLabel: false,
};

export const tlUsageCY: IField = {
  name: "tlUsageCY",
  label: "TL-Usage CY - Posted & Booked",
  dependentValue: [
    {
      conditions: [{ when: "ledgerGroup", is: ["0l", "2l", "il"] }],
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
  showLabel: false,
};

export const tlCreationAdditionUpdate: IField = {
  name: "tlCreationAdditionUpdate",
  label: "TL-Creation/Addition - Update",
  dependentValue: [
    {
      conditions: [
        { when: "subType", is: ["aed", "ccc", "con", "cwe", "cio"] },
      ],
      valueFrom: "",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["0l", "2l", "il"] }],
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
  showLabel: false,
};

export const tlCreationAddition: IField = {
  name: "tlCreationAddition",
  label: "TL-Creation/Addition - Posted & Booked",
  dependentValue: [
    {
      conditions: [{ when: "ledgerGroup", is: ["0l", "2l", "il"] }],
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
  showLabel: false,
};

export const tlCarryFwd: IField = {
  name: "tlCarryFwd",
  label: "TL-Carry Fwd from Last Year",
  dependentValue: [
    {
      conditions: [{ when: "ledgerGroup", is: ["0l", "2l", "il"] }],
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
  showLabel: false,
};

export const _2lClosingBalanceUpdate: IField = {
  name: "2lClosingBalanceUpdate",
  label: "2L-Closing Balance - Update",
  calculatedValue: {
    calculator: expressions.calculate2lClosingBalanceUpdate,
  },
  type: "number",
  patterns: [h.required()],
  disabled: true,
  showLabel: false,
};

export const _2lClosingBalance: IField = {
  name: "2lClosingBalance",
  label: "2L-Closing Balance - Posted & Booked",
  calculatedValue: {
    calculator: expressions.calculate2lClosingBalanceTotal,
  },
  type: "number",
  patterns: [h.required()],
  disabled: true,
  showLabel: false,
};

export const _2lReleaseUpdatePY: IField = {
  name: "2lReleaseUpdatePY",
  label: "2L-Release PY - Update",
  dependentValue: [
    ...h.clearValueForOtherCategories(AmountCategory.RELEASE_PY),
    {
      conditions: [{ when: "ledgerGroup", is: ["al", "il"] }],
      valueFrom: "0lReleaseUpdatePY",
    },
    {
      conditions: [{ when: "ledgerGroup", is: ["0l"] }],
      valueFrom: "",
    },
  ],
  type: "number",
  patterns: [
    h.required("Not a proper number!"),
    h.empty("2lUsageUpdatePY,2lCreationAdditionUpdate", "LOCAL GAAP"),
    h.decimals(2),
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

    ...h.editableOnlyForCategory(AmountCategory.RELEASE_PY),
  ],
  showLabel: false,
};

export const _2lReleasePY: IField = {
  name: "2lReleasePY",
  label: "2L-Release PY - Posted & Booked",
  dependentValue: [
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
  showLabel: false,
};

export const _2lReleaseUpdateCY: IField = {
  name: "2lReleaseUpdateCY",
  label: "2L-Release CY - Update",
  dependentValue: [
    ...h.clearValueForOtherCategories(AmountCategory.RELEASE_CY),
    {
      conditions: [{ when: "ledgerGroup", is: ["al", "il"] }],
      valueFrom: "0lReleaseUpdateCY",
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
    h.decimals(2),
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
    ...h.editableOnlyForCategory(AmountCategory.RELEASE_CY),
  ],
  showLabel: false,
};

export const _2lReleaseCY: IField = {
  name: "2lReleaseCY",
  label: "2L-Release CY - Posted & Booked",
  dependentValue: [
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
  showLabel: false,
};

export const _2lUsageUpdatePY: IField = {
  name: "2lUsageUpdatePY",
  label: "2L-Usage PY - Update",
  dependentValue: [
    ...h.clearValueForOtherCategories(AmountCategory.USAGE_PY),
    {
      conditions: [{ when: "ledgerGroup", is: ["al", "il"] }],
      valueFrom: "0lUsageUpdatePY",
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
    h.decimals(2),
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
    ...h.editableOnlyForCategory(AmountCategory.USAGE_PY),
  ],
  showLabel: false,
};

export const _2lUsagePY: IField = {
  name: "2lUsagePY",
  label: "2L-Usage PY - Posted & Booked",
  dependentValue: [
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
  showLabel: false,
};

export const _2lUsageUpdateCY: IField = {
  name: "2lUsageUpdateCY",
  label: "2L-Usage CY - Update",
  dependentValue: [
    ...h.clearValueForOtherCategories(AmountCategory.USAGE_CY),
    {
      conditions: [{ when: "ledgerGroup", is: ["al", "il"] }],
      valueFrom: "0lUsageUpdateCY",
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
    h.decimals(2),
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
    ...h.editableOnlyForCategory(AmountCategory.USAGE_CY),
  ],
  showLabel: false,
};

export const _2lUsageCY: IField = {
  name: "2lUsageCY",
  label: "2L-Usage CY - Posted & Booked",
  dependentValue: [
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
  showLabel: false,
};

export const _2lCreationAdditionUpdate: IField = {
  name: "2lCreationAdditionUpdate",
  label: "2L-Creation/Addition - Update",
  dependentValue: [
    ...h.clearValueForOtherCategories(AmountCategory.CREATION_ADDITION),
    {
      conditions: [{ when: "ledgerGroup", is: ["al", "il"] }],
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
    h.decimals(2),
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
    ...h.editableOnlyForCategory(AmountCategory.CREATION_ADDITION),
  ],
  showLabel: false,
};

export const _2lCreationAddition: IField = {
  name: "2lCreationAddition",
  label: "2L-Creation/Addition - Posted & Booked",
  dependentValue: [
    {
      conditions: [{ when: "ledgerGroup", is: ["al", "il"] }],
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
  showLabel: false,
};

export const _2lCarryFwd: IField = {
  name: "2lCarryFwd",
  label: "2L-Carry Fwd from Last Year",
  dependentValue: [
    {
      conditions: [{ when: "ledgerGroup", is: ["al", "il"] }],
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
  showLabel: false,
};

export const _0lClosingBalanceUpdate: IField = {
  name: "0lClosingBalanceUpdate",
  label: "Closing Balance - Update",
  calculatedValue: {
    calculator: expressions.calculate0lClosingBalanceUpdate,
  },
  type: "number",
  patterns: [h.required()],
  disabled: true,
};

export const _0lClosingBalance: IField = {
  name: "0lClosingBalance",
  label: "Closing Balance - Posted & Booked",
  calculatedValue: {
    calculator: expressions.calculate0lClosingBalanceTotal,
  },
  type: "number",
  patterns: [h.required()],
  disabled: true,
};

export const _0lReleaseUpdatePY: IField = {
  name: "0lReleaseUpdatePY",
  label: "Release PY - Update",
  dependentValue: [
    ...h.clearValueForOtherCategories(AmountCategory.RELEASE_PY),
    {
      conditions: [{ when: "ledgerGroup", is: ["2l"] }],
      valueFrom: "",
    },
  ],
  type: "number",
  patterns: [
    h.required("Not a proper number!"),
    h.empty("0lUsageUpdate,0lCreationAdditionUpdate", "IFRS"),
    h.decimals(2),
  ],
  conditionalDisabled: [
    ...h.inGetState,
    {
      conditions: [{ when: "ledgerGroup", is: "2l" }],
    },
    ...h.editableOnlyForCategory(AmountCategory.RELEASE_PY),
  ],
};

export const _0lReleasePY: IField = {
  name: "0lReleasePY",
  label: "Release PY - Posted & Booked",
  dependentValue: [
    {
      conditions: [{ when: "ledgerGroup", is: ["2l"] }],
      valueFrom: "",
    },
  ],
  type: "number",
  patterns: [h.required()],
  disabled: true,
};

export const _0lReleaseUpdateCY: IField = {
  name: "0lReleaseUpdateCY",
  label: "Release CY - Update",
  dependentValue: [
    ...h.clearValueForOtherCategories(AmountCategory.RELEASE_CY),
    {
      conditions: [{ when: "ledgerGroup", is: ["2l"] }],
      valueFrom: "",
    },
  ],
  type: "number",
  patterns: [
    h.required("Not a proper number!"),
    h.empty("0lUsageUpdate,0lCreationAdditionUpdate", "IFRS"),
    h.decimals(2),
  ],
  conditionalDisabled: [
    ...h.inGetState,
    {
      conditions: [{ when: "ledgerGroup", is: "2l" }],
    },
    ...h.editableOnlyForCategory(AmountCategory.RELEASE_CY),
  ],
};

export const _0lReleaseCY: IField = {
  name: "0lReleaseCY",
  label: "Release CY - Posted & Booked",
  dependentValue: [
    {
      conditions: [{ when: "ledgerGroup", is: ["2l"] }],
      valueFrom: "",
    },
  ],
  type: "number",
  patterns: [h.required()],
  disabled: true,
};

export const _0lUsageUpdatePY: IField = {
  name: "0lUsageUpdatePY",
  label: "Usage PY - Update",
  dependentValue: [
    ...h.clearValueForOtherCategories(AmountCategory.USAGE_PY),
    {
      conditions: [{ when: "ledgerGroup", is: ["2l"] }],
      valueFrom: "",
    },
  ],
  type: "number",
  patterns: [
    h.required("Not a proper number!"),
    h.empty("0lCreationAdditionUpdate,0lReleaseUpdate", "IFRS"),
    h.decimals(2),
  ],
  conditionalDisabled: [
    ...h.inGetState,
    {
      conditions: [{ when: "ledgerGroup", is: "2l" }],
    },
    ...h.editableOnlyForCategory(AmountCategory.USAGE_PY),
  ],
};

export const _0lUsagePY: IField = {
  name: "0lUsagePY",
  label: "Usage PY - Posted & Booked",
  dependentValue: [
    {
      conditions: [{ when: "ledgerGroup", is: ["2l"] }],
      valueFrom: "",
    },
  ],
  type: "number",
  patterns: [h.required()],
  disabled: true,
};

export const _0lUsageUpdateCY: IField = {
  name: "0lUsageUpdateCY",
  label: "Usage CY - Update",
  dependentValue: [
    ...h.clearValueForOtherCategories(AmountCategory.USAGE_CY),
    {
      conditions: [{ when: "ledgerGroup", is: ["2l"] }],
      valueFrom: "",
    },
  ],
  type: "number",
  patterns: [
    h.required("Not a proper number!"),
    h.empty("0lCreationAdditionUpdate,0lReleaseUpdate", "IFRS"),
    h.decimals(2),
  ],
  conditionalDisabled: [
    ...h.inGetState,
    {
      conditions: [{ when: "ledgerGroup", is: "2l" }],
    },
    ...h.editableOnlyForCategory(AmountCategory.USAGE_CY),
  ],
};

export const _0lUsageCY: IField = {
  name: "0lUsageCY",
  label: "Usage CY - Posted & Booked",
  dependentValue: [
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
  label: "Creation/Addition - Update",
  dependentValue: [
    ...h.clearValueForOtherCategories(AmountCategory.CREATION_ADDITION),
    {
      conditions: [{ when: "ledgerGroup", is: ["2l"] }],
      valueFrom: "",
    },
  ],
  type: "number",
  patterns: [
    h.required("Not a proper number!"),
    h.empty("0lUsageUpdate,0lReleaseUpdate", "IFRS"),
    h.decimals(2),
  ],
  conditionalDisabled: [
    ...h.inGetState,
    {
      conditions: [{ when: "ledgerGroup", is: "2l" }],
    },
    ...h.editableOnlyForCategory(AmountCategory.CREATION_ADDITION),
  ],
};

export const _0lCreationAddition: IField = {
  name: "0lCreationAddition",
  label: "Creation/Addition - Posted & Booked",
  dependentValue: [
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
  label: "Carry Fwd from Last Year",
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
  maxlength: "25",
  patterns: [h.required()],
  conditionalDisabled: h.inModifyState,
};

export const internalOrder: IField = {
  name: "internalOrder",
  label: "Order",
  type: "text",
  patterns: [
    h.required(
      "This field is required when Cost Center or WBS Element or Sales Document or Sales Document Item are empty"
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
          is: "y097",
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
          is: "y097c",
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
          is: "y098c",
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

export const localCurrency: IField = {
  name: "localCurrency",
  label: "Local Currency",
  type: "text",
  disabled: true,
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
  calculatedValue: { date: "postingDate", month: 3 },
  disabled: true,
};

export const postingDate: IField = {
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
          is: "y097",
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
          is: "y097c",
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
          is: "y098c",
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
    {
      conditions: [
        {
          when: "mode",
          is: "modify",
        },
        {
          when: "subType",
          is: "cio",
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
  type: "text",
  disabled: true,
};

export const glDebitAccount: IField = {
  name: "glDebitAccount",
  label: "GL-Debit Account",
  type: "text",
  disabled: true,
};

export const ledgerGroup: IField = {
  name: "ledgerGroup",
  label: "Redwood Ledger Group",
  type: "select",
  conditionalDisabled: h.inModifyState,
};

export const companyCode: IField = {
  name: "companyCode",
  label: "Company Code",
  type: "select",
  patterns: [h.required()],
  conditionalDisabled: h.inModifyState,
};
