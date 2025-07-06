import * as h from "./helpers";
import { type IField } from "../components/Field/Field";

export const mode: IField = {
  name: "mode",
  label: "Application mode",
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
  conditionalDisabled: h.inGetState,
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
  label: "Application Number to Import",
  type: "text",
  conditionalDisabled: h.inCreateState,
};

export const submitButton: IField = {
  name: "submitButton",
  type: "button",
};

export const attachement: IField = {
  name: "attachement",
  label: "attachement",
  type: "file",
  conditionalDisabled: h.inGetState,
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
      "This field is required when WBS Element or Sales Order or Sales Order Item are empty",
    ),
  ],
  conditionalDisabled: [
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

export const wbs: IField = {
  name: "wbs",
  label: "Project Definition (WBS)",
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
  ],
};

export const appCreator: IField = {
  name: "appCreator",
  label: "Appl Creator",
  type: "text",
  disabled: true,
};

export const TlClosingBalanceUpdate: IField = {
  name: "TlClosingBalanceUpdate",
  label: "TL-Closing Balance - Update",
  initValue: "9.2",
  type: "number",
  patterns: [h.required()],
  conditionalDisabled: h.inGetState,
};

export const TlClosingBalance: IField = {
  name: "TlClosingBalance",
  label: "TL-Closing Balance - Posted & Booked",
  initValue: "9.2",
  type: "number",
  patterns: [h.required()],
  conditionalDisabled: h.inGetState,
};

export const TlReleaseUpdate: IField = {
  name: "TlReleaseUpdate",
  label: "TL-Release - Update",
  initValue: "9.2",
  type: "number",
  patterns: [h.required()],
  conditionalDisabled: h.inGetState,
};

export const TlRelease: IField = {
  name: "TlRelease",
  label: "TL-Release - Posted & Booked",
  initValue: "9.2",
  type: "number",
  patterns: [h.required()],
  conditionalDisabled: h.inGetState,
};

export const TlUsageUpdate: IField = {
  name: "TlUsageUpdate",
  label: "TL-Usage - Update",
  initValue: "9.2",
  type: "number",
  patterns: [h.required()],
  conditionalDisabled: h.inGetState,
};

export const TlUsage: IField = {
  name: "TlUsage",
  label: "TL-Usage - Posted & Booked",
  initValue: "9.2",
  type: "number",
  patterns: [h.required()],
  conditionalDisabled: h.inGetState,
};

export const TlCreationAdditionUpdate: IField = {
  name: "TlCreationAdditionUpdate",
  label: "TL-Creation/Addition - Update",
  initValue: "9.2",
  type: "number",
  patterns: [h.required()],
  conditionalDisabled: h.inGetState,
};

export const TlCreationAddition: IField = {
  name: "TlCreationAddition",
  label: "TL-Creation/Addition - Posted & Booked",
  initValue: "9.2",
  type: "number",
  patterns: [h.required()],
  conditionalDisabled: h.inGetState,
};

export const TlCarryFwd: IField = {
  name: "TlCarryFwd",
  label: "TL-Carry Fwd from Last Year",
  initValue: "9.2",
  type: "number",
  patterns: [h.required()],
  conditionalDisabled: h.inGetState,
};

export const _2lClosingBalanceUpdate: IField = {
  name: "2lClosingBalanceUpdate",
  label: "2L-Closing Balance - Update",
  initValue: "9.2",
  type: "number",
  patterns: [h.required()],
  conditionalDisabled: h.inGetState,
};

export const _2lClosingBalance: IField = {
  name: "2lClosingBalance",
  label: "2L-Closing Balance - Posted & Booked",
  initValue: "9.2",
  type: "number",
  patterns: [h.required()],
  conditionalDisabled: h.inGetState,
};

export const _2lReleaseUpdate: IField = {
  name: "2lReleaseUpdate",
  label: "2L-Release - Update",
  initValue: "9.2",
  type: "number",
  patterns: [h.required()],
  conditionalDisabled: h.inGetState,
};

export const _2lRelease: IField = {
  name: "2lRelease",
  label: "2L-Release - Posted & Booked",
  initValue: "9.2",
  type: "number",
  patterns: [h.required()],
  conditionalDisabled: h.inGetState,
};

export const _2lUsageUpdate: IField = {
  name: "2lUsageUpdate",
  label: "2L-Usage - Update",
  initValue: "9.2",
  type: "number",
  patterns: [h.required()],
  conditionalDisabled: h.inGetState,
};

export const _2lUsage: IField = {
  name: "2lUsage",
  label: "2L-Usage - Posted & Booked",
  initValue: "9.2",
  type: "number",
  patterns: [h.required()],
  conditionalDisabled: h.inGetState,
};

export const _2lCreationAdditionUpdate: IField = {
  name: "2lCreationAdditionUpdate",
  label: "2L-Creation/Addition - Update",
  initValue: "9.2",
  type: "number",
  patterns: [h.required()],
  conditionalDisabled: h.inGetState,
};

export const _2lCreationAddition: IField = {
  name: "2lCreationAddition",
  label: "2L-Creation/Addition - Posted & Booked",
  initValue: "9.2",
  type: "number",
  patterns: [h.required()],
  conditionalDisabled: h.inGetState,
};

export const _2lCarryFwd: IField = {
  name: "2lCarryFwd",
  label: "2L-Carry Fwd from Last Year",
  initValue: "9.2",
  type: "number",
  patterns: [h.required()],
  conditionalDisabled: h.inGetState,
};

export const _0lClosingBalanceUpdate: IField = {
  name: "0lClosingBalanceUpdate",
  label: "0L-Closing Balance - Update",
  initValue: "9.2",
  type: "number",
  patterns: [h.required()],
  conditionalDisabled: h.inGetState,
};

export const _0lClosingBalance: IField = {
  name: "0lClosingBalance",
  label: "0L-Closing Balance - Posted & Booked",
  initValue: "9.2",
  type: "number",
  patterns: [h.required()],
  conditionalDisabled: h.inGetState,
};

export const _0lReleaseUpdate: IField = {
  name: "0lReleaseUpdate",
  label: "0L-Release - Update",
  initValue: "9.2",
  type: "number",
  patterns: [h.required()],
  conditionalDisabled: h.inGetState,
};

export const _0lRelease: IField = {
  name: "0lRelease",
  label: "0L-Release - Posted & Booked",
  initValue: "9.2",
  type: "number",
  patterns: [h.required()],
  conditionalDisabled: h.inGetState,
};

export const _0lUsageUpdate: IField = {
  name: "0lUsageUpdate",
  label: "0L-Usage - Update",
  initValue: "9.2",
  type: "number",
  patterns: [h.required()],
  conditionalDisabled: h.inGetState,
};

export const _0lUsage: IField = {
  name: "0lUsage",
  label: "0L-Usage - Posted & Booked",
  initValue: "9.2",
  type: "number",
  patterns: [h.required()],
  conditionalDisabled: h.inGetState,
};

export const _0lCreationAdditionUpdate: IField = {
  name: "0lCreationAdditionUpdate",
  label: "0L-Creation/Addition - Update",
  initValue: "9.2",
  type: "number",
  patterns: [h.required()],
  conditionalDisabled: h.inGetState,
};

export const _0lCreationAddition: IField = {
  name: "0lCreationAddition",
  label: "0L-Creation/Addition - Posted & Booked",
  initValue: "9.2",
  type: "number",
  patterns: [h.required()],
  conditionalDisabled: h.inGetState,
};

export const _0lCarryFwd: IField = {
  name: "0lCarryFwd",
  label: "0L-Carry Fwd from Last Year",
  initValue: "9.2",
  type: "number",
  patterns: [h.required()],
  conditionalDisabled: h.inGetState,
};

export const user: IField = {
  name: "user",
  label: "User Name",
  type: "text",
  conditionalDisabled: h.inGetState,
};

export const appNumberOld: IField = {
  name: "appNumberOld",
  label: "Application Number (Old System)",
  type: "text",
  patterns: [h.required(), h.min(6)],
  conditionalDisabled: h.inGetState,
};

export const changedOn: IField = {
  name: "changedOn",
  label: "Changed On",
  type: "date",
  conditionalDisabled: h.inGetState,
};

export const appCreationDate: IField = {
  name: "appCreationDate",
  label: "Appl Creation Date",
  type: "date",
  conditionalDisabled: h.inGetState,
};

export const description2: IField = {
  name: "description2",
  label: "Description 2 (Free Text)",
  type: "text",
  patterns: [h.required(), h.min(6)],
  conditionalDisabled: h.inGetState,
};

export const description1: IField = {
  name: "description1",
  label: "Description 1 (Fixed Text)",
  type: "text",
  patterns: [h.required(), h.min(6)],
  conditionalDisabled: h.inGetState,
};

export const localCurrency: IField = {
  name: "localCurrency",
  label: "Local Currency",
  type: "text",
  patterns: [h.required(), h.min(6)],
  conditionalDisabled: h.inGetState,
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
  patterns: [h.required(), h.min(6)],
  conditionalDisabled: h.inGetState,
};

export const postingDate: IField = {
  name: "postingDate",
  label: "Posting Date",
  type: "date",
  conditionalDisabled: h.inGetState,
};

// export const salesDocumentItem: IField = {
//   name: "salesDocumentItem",
//   label: "Sales Document Item",
//   type: "text",
//   disabled: false,
//   hidden: true,
//   patterns: [],
//   conditionalDisabled: [
//     {
//       conditions: [
//         {
//           when: "wbs",
//           is: true,
//         },
//       ],
//     },
//     {
//       conditions: [
//         {
//           when: "costCenter",
//           is: true,
//         },
//       ],
//     },
//   ],
// };
//
// export const salesDocument: IField = {
//   name: "salesDocument",
//   label: "Sales Document",
//   type: "text",
//   disabled: false,
//   hidden: true,
//   patterns: [],
//   conditionalDisabled: [
//     {
//       conditions: [
//         {
//           when: "wbs",
//           is: true,
//         },
//       ],
//     },
//     {
//       conditions: [
//         {
//           when: "costCenter",
//           is: true,
//         },
//       ],
//     },
//   ],
// };

// export const wbs: IField = {
//   name: "wbs",
//   label: "Project Definition (WBS)",
//   type: "text",
//   patterns: [
//     h.required(
//       "This field is required when Cost Center or Sales Order or Sales Order Item are empty",
//     ),
//   ],
//   conditionalDisabled: [
//     {
//       conditions: [
//         {
//           when: "costCenter",
//           is: true,
//         },
//       ],
//     },
//     {
//       conditions: [
//         {
//           when: "salesDocument",
//           is: true,
//         },
//       ],
//     },
//     {
//       conditions: [
//         {
//           when: "salesDocumentItem",
//           is: true,
//         },
//       ],
//     },
//   ],
// };

export const appEndDate: IField = {
  name: "appEndDate",
  label: "Appl. End Date",
  type: "date",
  conditionalDisabled: h.inGetState,
};

export const appStartDate: IField = {
  name: "appStartDate",
  label: "Appl. Start Date",
  type: "date",
  conditionalDisabled: h.inGetState,
};

export const glCreditAccount: IField = {
  name: "glCreditAccount",
  label: "GL-Credit Account",
  type: "text",
  conditionalDisabled: h.inGetState,
};

export const glDebitAccount: IField = {
  name: "glDebitAccount",
  label: "GL-Debit Account",
  type: "select",
  conditionalDisabled: h.inGetState,
  dependentOptions: [
    {
      conditions: [
        { when: "provisionType", is: ["c83", "c84"] },
        { when: "subType", is: ["07", "08", "09c", "27", "28"] },
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
        { when: "provisionType", is: ["c83", "c84"] },
        { when: "subType", is: ["07c"] },
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
        { when: "subType", is: ["08c", "08c"] },
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
        { when: "subType", is: ["09"] },
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
        { when: "provisionType", is: ["c83", "c84"] },
        { when: "subType", is: ["27c"] },
      ],
      options: [
        {
          label: "60900027",
          value: "60900027",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["c83", "c84"] },
        { when: "subType", is: ["28c"] },
      ],
      options: [
        {
          label: "60900028",
          value: "60900028",
        },
      ],
    },
    {
      conditions: [
        {
          when: "provisionType",
          is: ["c83", "c84", "o25", "o30", "o70", "o71", "r10"],
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
    {
      conditions: [
        { when: "provisionType", is: ["j50"] },
        { when: "subType", is: ["09"] },
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
        { when: "provisionType", is: ["j50"] },
        { when: "subType", is: ["09c"] },
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
        { when: "provisionType", is: ["j55"] },
        { when: "subType", is: ["09"] },
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
        { when: "provisionType", is: ["j55"] },
        { when: "subType", is: ["09c"] },
      ],
      options: [
        {
          label: "24182000",
          value: "24182000",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o25"] },
        { when: "subType", is: ["07", "08", "09c", "27", "28"] },
      ],
      options: [
        {
          label: "24182000",
          value: "24182000",
        },
      ],
    },
    {
      conditions: [
        { when: "provisionType", is: ["o25"] },
        { when: "subType", is: ["07c"] },
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
        { when: "subType", is: ["08c"] },
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
        { when: "subType", is: ["09"] },
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
        { when: "subType", is: ["27c"] },
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
        { when: "subType", is: ["28c"] },
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
        { when: "provisionType", is: ["o30"] },
        { when: "subType", is: ["07", "08", "09c", "27", "28"] },
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
        { when: "provisionType", is: ["o30"] },
        { when: "subType", is: ["07c"] },
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
        { when: "subType", is: ["08c"] },
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
        { when: "subType", is: ["09"] },
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
        { when: "subType", is: ["27c"] },
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
        { when: "subType", is: ["28c"] },
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
        { when: "provisionType", is: ["o70", "o71"] },
        { when: "subType", is: ["07", "08", "09c", "27", "28"] },
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
        { when: "provisionType", is: ["o70"] },
        { when: "subType", is: ["07c"] },
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
        { when: "subType", is: ["08c"] },
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
        { when: "subType", is: ["09"] },
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
        { when: "subType", is: ["27c"] },
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
        { when: "subType", is: ["28"] },
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
        { when: "provisionType", is: ["o71"] },
        { when: "subType", is: ["07c"] },
      ],
      options: [
        {
          label: "68990007",
          value: "68990007",
        },
      ],
    },
  ],
};

export const ledgerGroup: IField = {
  name: "ledgerGroup",
  label: "Redwood Ledger Group",
  type: "select",
  conditionalDisabled: h.inGetState,
  dependentOptions: [
    {
      conditions: [{ when: "companyCode", is: ["pl10"] }],
      options: [
        {
          label: "0L",
          value: "0l",
        },
        {
          label: "2L",
          value: "2l",
        },
        {
          label: "IL",
          value: "il",
        },
      ],
    },
  ],
  options: [
    {
      label: "AL",
      value: "al",
    },
    {
      label: "0L",
      value: "0l",
    },
    {
      label: "2L",
      value: "2l",
    },
    {
      label: "IL",
      value: "il",
    },
    {
      label: "0L,LT",
      value: "0llt",
    },
  ],
};

export const companyCode: IField = {
  name: "companyCode",
  label: "Company Code",
  type: "select",
  patterns: [h.required()],
  options: [
    {
      label: "DE10",
      value: "de10",
    },
    {
      label: "PL10",
      value: "pl10",
    },
    {
      label: "UK10",
      value: "uk10",
    },
    {
      label: "NL10",
      value: "nl10",
    },
  ],
  conditionalDisabled: h.inModifyState,
};
