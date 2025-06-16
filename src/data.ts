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
              name: "appMode",
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
              type: "input",
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
              type: "input",
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
              type: "input",
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
              type: "input",
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
              type: "input",
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
              type: "input",
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
              type: "input",
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
              type: "input",
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
              type: "input",
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
              type: "input",
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
              initValue: "opt1",
              type: "input",
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
              initValue: "opt1",
              type: "input",
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
              label: "label",
              initValue: "opt1",
              type: "input",
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
          header: "druga kolumna",
          fields: [
            {
              name: "name4b",
              label: "label",
              initValue: "opt1",
              type: "input",
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
              name: "name5b",
              label: "label",
              initValue: "opt1",
              type: "input",
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
              name: "name6b",
              label: "label",
              initValue: "opt1",
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
                  label: "Opcja 1",
                  value: "opt1",
                },
                {
                  label: "Opcja 2",
                  value: "opt2",
                },
                {
                  label: "Opcja 3",
                  value: "opt3",
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
              type: "input",
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
              name: "name9b",
              label: "label",
              initValue: "opt1",
              type: "input",
              disabled: false,
              hidden: true,
              patterns: [
                {
                  reg: "required",
                  message: "This field is required",
                },
              ],
              /*
              dependentOptions:{
                dependency: "name2",
                values:[
                 { keys: ["fdsf", "df"], options:[{                
                  label: "Opcja 1",
                  value: "opt1",
                },{                
                  label: "Opcja 1",
                  value: "opt1",
                }]}

          ]
              },

              conditionalDisabled: {
              logic: "or",
              
              consirions:[{
              when: "name9",
              is: "ddddd"
              
              }]},
              
              
              
              */
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
