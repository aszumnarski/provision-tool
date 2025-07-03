import type { IRow } from "./components/Row/Row";

export interface IData {
  rows: IRow[];
}

export const data2 = {
  rows: [
    {
      columns: [
        {
          fields: [
            {
              name: "mode",
              label: "Application mode",
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
            },
          ],
        },
        {
          fields: [
            {
              name: "appNumberImport",
              label: "Application Number to Import",
              initValue: "",
              type: "text",
              disabled: false,
              hidden: true,
              patterns: [],
              conditionalDisabled: [
                {
                  conditions: [
                    {
                      when: "mode",
                      is: "create",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          fields: [
            {
              name: "submitButton",
              label: "Create",
              initValue: "create",
              type: "button",
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
                  label: "Create",
                  value: "create",
                },
                {
                  label: "Import",
                  value: "import",
                },
                {
                  label: "Update",
                  value: "update",
                },
              ],
            },
          ],
        },
      ],
    },

    {
      columns: [
        {
          fields: [
            {
              name: "companyCode",
              label: "Company Code",
              initValue: "",
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
              dependentOptions: {
                dependencies: ["mode"],
                values: [
                  {
                    keys: ["modify"],
                    options: [
                      {
                        label: "",
                        value: "",
                      },
                    ],
                  },
                ],
              },
              conditionalDisabled: [
                {
                  conditions: [
                    {
                      when: "mode",
                      is: "modify",
                    },
                  ],
                },
              ],
            },
            {
              name: "provisionType",
              label: "Prov. Type",
              initValue: "c83",
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
                  label:
                    "J55 Refund liabilities for price and quantity discounts",
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
              conditionalDisabled: [
                {
                  conditions: [
                    {
                      when: "mode",
                      is: "modify",
                    },
                  ],
                },
              ],
            },
            {
              name: "subType",
              label: "Subtype",
              initValue: "09",
              type: "select",
              disabled: false,
              hidden: true,
              patterns: [],
              dependentOptions: {
                dependencies: ["provisionType", "mode"],
                values: [
                  {
                    keys: ["j50|modify", "j55|modify"],
                    options: [
                      {
                        label:
                          "Creation/Addition of other provisions/accruals (09)",
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
                    keys: [
                      "c83|create",
                      "c84|create",
                      "j50|create",
                      "j55|create",
                      "o25|create",
                      "o30|create",
                      "o70|create",
                      "o71|create",
                      "r10|create",
                    ],
                    options: [
                      {
                        label:
                          "Creation/Addition of other provisions/accruals (09)",
                        value: "09",
                      },
                    ],
                  },
                ],
              },
              options: [
                {
                  label:
                    "Usage of other provisions/accruals - previous year (07)",
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
                  label:
                    "Correction - Creation/Addition of other provisions/accruals (09)",
                  value: "09c",
                },
                {
                  label:
                    "Usage of other provisions/accruals - current year (27)",
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
            },
            {
              name: "ledgerGroup",
              label: "Redwood Ledger Group",
              initValue: "",
              type: "select",
              disabled: false,
              hidden: true,
              patterns: [],
              dependentOptions: {
                dependencies: ["companyCode"],
                values: [
                  {
                    keys: ["pl10"],
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
              },
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
            },
            {
              name: "glDebitAccount",
              label: "GL-Debit Account",
              initValue: "",
              type: "text",
              disabled: false,
              hidden: true,
              patterns: [],
              options: [],
              dependentOptions: {
                dependencies: ["provisionType", "subtype"],
                values: [
                  {
                    keys: [
                      "c83|07",
                      "c83|08",
                      "c83|09c",
                      "c83|27",
                      "c83|28",
                      "c84|07",
                      "c84|08",
                      "c84|09c",
                      "c84|27",
                      "c84|28",
                    ],
                    options: [
                      {
                        label: "38610000",
                        value: "38610000",
                      },
                    ],
                  },
                  {
                    keys: ["c83|07c", "c84|07c"],
                    options: [
                      {
                        label: "60900007",
                        value: "60900007",
                      },
                    ],
                  },
                  {
                    keys: ["c83|08c", "c84|08c"],
                    options: [
                      {
                        label: "60900008",
                        value: "60900008",
                      },
                    ],
                  },
                  {
                    keys: ["c83|09", "c84|09"],
                    options: [
                      {
                        label: "60900009",
                        value: "60900009",
                      },
                    ],
                  },
                  {
                    keys: ["c83|27c", "c84|27c"],
                    options: [
                      {
                        label: "60900027",
                        value: "60900027",
                      },
                    ],
                  },
                  {
                    keys: ["c83|28c", "c84|28c"],
                    options: [
                      {
                        label: "60900028",
                        value: "60900028",
                      },
                    ],
                  },
                  {
                    keys: [
                      "c83|aed",
                      "c83|ccc",
                      "c83|con",
                      "c83|cwe",
                      "c84|aed",
                      "c84|ccc",
                      "c84|con",
                      "c84|cwe",
                      "o25|aed",
                      "o25|ccc",
                      "o25|con",
                      "o25|cwe",
                      "o30|aed",
                      "o30|ccc",
                      "o30|con",
                      "o30|cwe",
                      "o70|aed",
                      "o70|ccc",
                      "o70|con",
                      "o70|cwe",
                      "o71|aed",
                      "o71|ccc",
                      "o71|con",
                      "o71|cwe",
                      "r10|aed",
                      "r10|ccc",
                      "r10|con",
                      "r10|cwe",
                    ],
                    options: [
                      {
                        label: "n/a",
                        value: "n/a",
                      },
                    ],
                  },
                  {
                    keys: ["j50|09"],
                    options: [
                      {
                        label: "54890000",
                        value: "54890000",
                      },
                    ],
                  },
                  {
                    keys: ["j50|09c"],
                    options: [
                      {
                        label: "24189100",
                        value: "24189100",
                      },
                    ],
                  },
                  {
                    keys: ["j55|09"],
                    options: [
                      {
                        label: "54100000",
                        value: "54100000",
                      },
                    ],
                  },
                  {
                    keys: ["j55|09c"],
                    options: [
                      {
                        label: "24182000",
                        value: "24182000",
                      },
                    ],
                  },
                  {
                    keys: ["o25|07", "o25|08", "o25|09c", "o25|27", "o25|28"],
                    options: [
                      {
                        label: "24182000",
                        value: "24182000",
                      },
                    ],
                  },
                  {
                    keys: ["o25|07c"],
                    options: [
                      {
                        label: "68930007",
                        value: "68930007",
                      },
                    ],
                  },
                  {
                    keys: ["o25|08c"],
                    options: [
                      {
                        label: "68930008",
                        value: "68930008",
                      },
                    ],
                  },
                  {
                    keys: ["o25|09"],
                    options: [
                      {
                        label: "68930009",
                        value: "68930009",
                      },
                    ],
                  },
                  {
                    keys: ["o25|27c"],
                    options: [
                      {
                        label: "68930027",
                        value: "68930027",
                      },
                    ],
                  },
                  {
                    keys: ["o25|28c"],
                    options: [
                      {
                        label: "68930028",
                        value: "68930028",
                      },
                    ],
                  },
                  {
                    keys: ["o30|07", "o30|08", "o30|09c", "o30|27", "o30|28"],
                    options: [
                      {
                        label: "39410000",
                        value: "39410000",
                      },
                    ],
                  },
                  {
                    keys: ["o30|07c"],
                    options: [
                      {
                        label: "68810007",
                        value: "68810007",
                      },
                    ],
                  },
                  {
                    keys: ["o30|08c"],
                    options: [
                      {
                        label: "68810008",
                        value: "68810008",
                      },
                    ],
                  },
                  {
                    keys: ["o30|09"],
                    options: [
                      {
                        label: "68810009",
                        value: "68810009",
                      },
                    ],
                  },
                  {
                    keys: ["o30|27c"],
                    options: [
                      {
                        label: "68810027",
                        value: "68810027",
                      },
                    ],
                  },
                  {
                    keys: ["o30|28c"],
                    options: [
                      {
                        label: "68810028",
                        value: "68810028",
                      },
                    ],
                  },
                  {
                    keys: [
                      "o70|07",
                      "o70|08",
                      "o70|09c",
                      "o70|27",
                      "o70|28",
                      "o71|07",
                      "o71|08",
                      "o71|09c",
                      "o71|27",
                      "o71|28",
                    ],
                    options: [
                      {
                        label: "39710000",
                        value: "39710000",
                      },
                    ],
                  },
                  {
                    keys: ["o70|07c"],
                    options: [
                      {
                        label: "68890007",
                        value: "68890007",
                      },
                    ],
                  },
                  {
                    keys: ["o70|08c"],
                    options: [
                      {
                        label: "68890008",
                        value: "68890008",
                      },
                    ],
                  },
                  {
                    keys: ["o70|09"],
                    options: [
                      {
                        label: "68890009",
                        value: "68890009",
                      },
                    ],
                  },
                  {
                    keys: ["o70|27c"],
                    options: [
                      {
                        label: "68890027",
                        value: "68890027",
                      },
                    ],
                  },
                  {
                    keys: ["o70|28"],
                    options: [
                      {
                        label: "68890028",
                        value: "68890028",
                      },
                    ],
                  },
                  {
                    keys: ["o71|07c"],
                    options: [
                      {
                        label: "68990007",
                        value: "68990007",
                      },
                    ],
                  },
                ],
              },
            },
            {
              name: "glCreditAccount",
              label: "GL-Credit Account",
              initValue: "",
              type: "text",
              disabled: false,
              hidden: true,
              patterns: [],
              options: [
                {
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "appStartDate",
              label: "Appl. Start Date",
              initValue: "",
              type: "date",
              disabled: false,
              hidden: true,
              patterns: [],
              options: [
                {
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "appEndDate",
              label: "Appl. End Date",
              initValue: "",
              type: "date",
              disabled: false,
              hidden: true,
              patterns: [],
              options: [
                {
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
          ],
        },
        {
          fields: [
            {
              name: "costCenter",
              label: "Cost Center",
              initValue: "",
              type: "text",
              disabled: false,
              hidden: true,
              patterns: [],
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
              ],
            },
            {
              name: "wbs",
              label: "Project Definition (WBS)",
              initValue: "",
              type: "text",
              disabled: false,
              hidden: true,
              patterns: [],
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
              ],
            },
            {
              name: "salesDocument",
              label: "Sales Document",
              initValue: "",
              type: "text",
              disabled: false,
              hidden: true,
              patterns: [],
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
            },
            {
              name: "salesDocumentItem",
              label: "Sales Document Item",
              initValue: "",
              type: "text",
              disabled: false,
              hidden: true,
              patterns: [],
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
            },
            {
              name: "postingDate",
              label: "Posting Date",
              initValue: "",
              type: "date",
              disabled: false,
              hidden: true,
              patterns: [],
              options: [
                {
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "postingPeriod",
              label: "Posting Period",
              initValue: "opt1",
              type: "text",
              disabled: false,
              hidden: true,
              patterns: [
                {
                  reg: "required",
                  message: "This field is required",
                },
                {
                  reg: "min_6",
                  message:
                    "The phrase is too short - minimum 6 characters are required",
                },
              ],
              options: [
                {
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "documentDate",
              label: "Document Date",
              initValue: "",
              type: "date",
              disabled: false,
              hidden: true,
              patterns: [],
              options: [
                {
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "localCurrency",
              label: "Local Currency",
              initValue: "",
              type: "text",
              disabled: false,
              hidden: true,
              patterns: [
                {
                  reg: "required",
                  message: "This field is required",
                },
                {
                  reg: "min_6",
                  message:
                    "The phrase is too short - minimum 6 characters are required",
                },
              ],
              options: [
                {
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
          ],
        },
        {
          fields: [
            {
              name: "appNumber",
              label: "Application Number",
              initValue: "",
              type: "text",
              disabled: false,
              hidden: true,
              patterns: [
                {
                  reg: "required",
                  message: "This field is required",
                },
                {
                  reg: "min_6",
                  message:
                    "The phrase is too short - minimum 6 characters are required",
                },
              ],
              options: [
                {
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "description1",
              label: "Description 1 (Fixed Text)",
              initValue: "",
              type: "text",
              disabled: false,
              hidden: true,
              patterns: [
                {
                  reg: "min_6",
                  message:
                    "The phrase is too short - minimum 6 characters are required",
                },
              ],
              options: [
                {
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "description2",
              label: "Description 2 (Free Text)",
              initValue: "opt1",
              type: "text",
              disabled: false,
              hidden: true,
              patterns: [
                {
                  reg: "min_6",
                  message:
                    "The phrase is too short - minimum 6 characters are required",
                },
              ],
              options: [
                {
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "appCreator",
              label: "Appl Creator",
              initValue: "opt1",
              type: "text",
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
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "appCreationDate",
              label: "Appl Creation Date",
              initValue: "",
              type: "date",
              disabled: false,
              hidden: true,
              patterns: [],
              options: [
                {
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "changedOn",
              label: "Changed On",
              initValue: "",
              type: "date",
              disabled: false,
              hidden: true,
              patterns: [],
              options: [
                {
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "appNumberOld",
              label: "Application Number (Old System)",
              initValue: "",
              type: "text",
              disabled: false,
              hidden: true,
              patterns: [
                {
                  reg: "required",
                  message: "This field is required",
                },
                {
                  reg: "min_6",
                  message:
                    "The phrase is too short - minimum 6 characters are required",
                },
              ],
              options: [
                {
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "username",
              label: "User Name",
              initValue: "opt1",
              type: "text",
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
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      columns: [
        {
          header: "IFRS",
          fields: [
            {
              name: "0lCarryFwd",
              label: "0L-Carry Fwd from Last Year",
              initValue: "9.2",
              type: "number",
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
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "0lCreationAddition",
              label: "0L-Creation/Addition - Posted & Booked",
              initValue: "9.2",
              type: "number",
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
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "0lCreationAdditionUpdate",
              label: "0L-Creation/Addition - Update",
              initValue: "9.2",
              type: "number",
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
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "0lUsage",
              label: "0L-Usage - Posted & Booked",
              initValue: "9.2",
              type: "number",
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
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "0lUsageUpdate",
              label: "0L-Usage - Update",
              initValue: "9.2",
              type: "number",
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
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "0lRelease",
              label: "0L-Release - Posted & Booked",
              initValue: "9.2",
              type: "number",
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
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "0lReleaseUpdate",
              label: "0L-Release - Update",
              initValue: "9.2",
              type: "number",
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
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "0lClosingBalance",
              label: "0L-Closing Balance - Posted & Booked",
              initValue: "9.2",
              type: "number",
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
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "0lClosingBalanceUpdate",
              label: "0L-Closing Balance - Update",
              initValue: "9.2",
              type: "number",
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
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
          ],
        },
        {
          header: "LOCAL GAAP",
          fields: [
            {
              name: "2lCarryFwd",
              label: "2L-Carry Fwd from Last Year",
              initValue: "9.2",
              type: "number",
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
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "2lCreationAddition",
              label: "2L-Creation/Addition - Posted & Booked",
              initValue: "9.2",
              type: "number",
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
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "2lCreationAdditionUpdate",
              label: "2L-Creation/Addition - Update",
              initValue: "9.2",
              type: "number",
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
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "2lUsage",
              label: "2L-Usage - Posted & Booked",
              initValue: "9.2",
              type: "number",
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
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "2lUsageUpdate",
              label: "2L-Usage - Update",
              initValue: "9.2",
              type: "number",
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
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "2lRelease",
              label: "2L-Release - Posted & Booked",
              initValue: "9.2",
              type: "number",
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
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "2lReleaseUpdate",
              label: "2L-Release - Update",
              initValue: "9.2",
              type: "number",
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
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "2lClosingBalance",
              label: "2L-Closing Balance - Posted & Booked",
              initValue: "9.2",
              type: "number",
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
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "2lClosingBalanceUpdate",
              label: "2L-Closing Balance - Update",
              initValue: "9.2",
              type: "number",
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
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
          ],
        },
        {
          header: "TAX",
          fields: [
            {
              name: "TlCarryFwd",
              label: "TL-Carry Fwd from Last Year",
              initValue: "9.2",
              type: "number",
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
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "TlCreationAddition",
              label: "TL-Creation/Addition - Posted & Booked",
              initValue: "9.2",
              type: "number",
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
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "TlCreationAdditionUpdate",
              label: "TL-Creation/Addition - Update",
              initValue: "9.2",
              type: "number",
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
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "TlUsage",
              label: "TL-Usage - Posted & Booked",
              initValue: "9.2",
              type: "number",
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
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "TlUsageUpdate",
              label: "TL-Usage - Update",
              initValue: "9.2",
              type: "number",
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
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "TlRelease",
              label: "TL-Release - Posted & Booked",
              initValue: "9.2",
              type: "number",
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
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "TlReleaseUpdate",
              label: "TL-Release - Update",
              initValue: "9.2",
              type: "number",
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
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "TlClosingBalance",
              label: "TL-Closing Balance - Posted & Booked",
              initValue: "9.2",
              type: "number",
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
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
            {
              name: "TlClosingBalanceUpdate",
              label: "TL-Closing Balance - Update",
              initValue: "9.2",
              type: "number",
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
                  label: "Opcja 1",
                  value: "opt1",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
