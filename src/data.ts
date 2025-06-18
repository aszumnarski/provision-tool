import type { IRow } from "./components/Row/Row";

export interface IData {
  rows: IRow[];
}

export const data: IData = {
  rows: [
    {
      columns: [
        {
          fields: [
            {
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
            },
          ],
        },
        {
          fields: [
            {
              name: "costamId",
              label: "Cośtam ID",
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
        {
          fields: [
            {
              name: "magicButton",
              label: "DYNAMIC",
              initValue: "opt1",
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
          fields: [
            {
              name: "name1",
              label: "data and required",
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
              name: "name2",
              label: "no data and required",
              initValue: "",
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
              name: "name3",
              label: "no data and no required",
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
          ],
        },
        {
          fields: [
            {
              name: "name4",
              label: "data no required",
              initValue: "opt1",
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
              name: "name5",
              label: "data required min_6",
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
              name: "name6",
              label: "no data required min_6",
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
              name: "name7",
              label: "no data no required min_6",
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
              name: "name8",
              label: "data no required min_6",
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
              name: "name9",
              label: "label",
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
          header: "pierwsza kolumna",
          fields: [
            {
              name: "name1b",
              label: "label",
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
              name: "name2b",
              label: "label",
              initValue: "15.1",
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
              name: "name3b",
              label: "Calculated Value",
              initValue: "",
              calculatedValue: ["name1b", "name2b"],
              type: "text",
              disabled: true,
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
          header: "druga kolumna",
          fields: [
            {
              name: "name4b",
              label: "Conditional Disabled if modify and wrestler",
              initValue: "opt1",
              type: "text",
              disabled: false,
              conditionalDisabled: {
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
              name: "wrestler",
              label: "Wrestler",
              initValue: "",
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
              name: "machineActor",
              label: "Actor or Machine",
              initValue: "car",
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
            },
          ],
        },
        {
          header: "trzecia kolumna",
          fields: [
            {
              name: "name7b",
              label: "label data",
              initValue: "",
              type: "date",
              disabled: false,
              hidden: true,
              patterns: [
                {
                  reg: "required",
                  message: "This field is required",
                },
                {
                  reg: "future",
                  message: "Dates in the past are not allowed",
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
              name: "name8b",
              label: "label",
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
              name: "details",
              label: "Dependent Options",
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
              dependentOptions: {
                dependency: "name2",
                values: [
                  {
                    keys: ["fdsf", "df"],
                    options: [
                      {
                        label: "Opcja 1",
                        value: "opt1",
                      },
                      {
                        label: "Opcja 1",
                        value: "opt1",
                      },
                    ],
                  },
                  {
                    keys: ["fdsf", "df"],
                    options: [
                      {
                        label: "Opcja 1",
                        value: "opt1",
                      },
                      {
                        label: "Opcja 1",
                        value: "józek",
                      },
                    ],
                  },
                  {
                    keys: true,
                    options: [
                      {
                        label: "Opcja 1",
                        value: "opt1",
                      },
                      {
                        label: "Opcja 1",
                        value: "opt1",
                      },
                    ],
                  },
                ],
              },



              options: [
                {
                  label: "Opcja 1",
                  value: "opt1",
                },
                {
                  label: "Opcja 2",
                  value: "rpt2",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
