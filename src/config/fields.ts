import * as h from "./helpers";

export const mode = {
  name: "mode",
  label: "Mode",
  initValue: "create",
  type: "select",
  disabled: false,
  ...h.required(),
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

//
//             {
//               name: "magicButton",
//               label: "DYNAMIC",
//               initValue: "opt1",
//               type: "button",
//               disabled: false,
//               hidden: true,
//               patterns: [],
//               options: [
//                 {
//                   label: "Opcja 1",
//                   value: "opt1",
//                 },
//               ],
//             },
//             {
//               name: "editableAppNumber",
//               label: "Editable App Number",
//               initValue: "",
//               type: "text",
//               disabled: false,
//               hidden: true,
//               patterns: [],
//               conditionalDisabled: [
//                 {
//                   conditions: [
//                     {
//                       when: "mode",
//                       is: "create",
//                     },
//                   ],
//                 },
//               ],
//             },
//
//             {
//               name: "name1",
//               label: "data and required",
//               maxlength: "5",
//               initValue: "opt1",
//               type: "text",
//               disabled: false,
//               hidden: true,
//               patterns: [
//                 {
//                   reg: "required",
//                   message: "This field is required",
//                 },
//               ],
//               options: [
//                 {
//                   label: "Opcja 1",
//                   value: "opt1",
//                 },
//               ],
//             },
//             {
//               name: "name2",
//               label: "no data and required",
//               initValue: "",
//               type: "text",
//               disabled: false,
//               hidden: true,
//               patterns: [
//                 {
//                   reg: "required",
//                   message: "This field is required",
//                 },
//               ],
//               options: [
//                 {
//                   label: "Opcja 1",
//                   value: "opt1",
//                 },
//               ],
//             },
//             {
//               name: "name3",
//               label: "no data and no required",
//               initValue: "",
//               type: "text",
//               disabled: false,
//               hidden: true,
//               patterns: [],
//               options: [
//                 {
//                   label: "Opcja 1",
//                   value: "opt1",
//                 },
//               ],
//             },
//
//
// {
//               name: "attachement",
//               label: "attachement",
//               initValue: "",
//               type: "file",
//               disabled: false,
//               hidden: true,
//               patterns: [],
//               options: [
//                 {
//                   label: "Opcja 1",
//                   value: "opt1",
//                 },
//               ],
//             }
//
//
// [
//             {
//               name: "name7b",
//               label: "label data",
//               initValue: "",
//               type: "date",
//               disabled: false,
//               hidden: true,
//               patterns: [
//                 {
//                   reg: "required",
//                   message: "This field is required",
//                 },
//                 {
//                   reg: "future",
//                   message: "Dates in the past are not allowed",
//                 },
//               ],
//               options: [
//                 {
//                   label: "Opcja 1",
//                   value: "opt1",
//                 },
//               ],
//             },
//             {
//               name: "appNumber",
//               label: "Application Number",
//               initValue: "",
//               type: "text",
//               disabled: true,
//               hidden: true,
//               patterns: [
//                 {
//                   reg: "required",
//                   message: "This field is required",
//                 },
//               ],
//               options: [
//                 {
//                   label: "Opcja 1",
//                   value: "opt1",
//                 },
//               ],
//             },
//             {
//               name: "details",
//               label: "Dependent Options",
//               initValue: "",
//               type: "select",
//               disabled: false,
//               hidden: true,
//               patterns: [
//                 {
//                   reg: "required",
//                   message: "This field is required",
//                 },
//               ],
//               dependentOptions: {
//                 dependency: "machineActor",
//                 values: [
//                   {
//                     keys: ["car", "bike"],
//                     options: [
//                       {
//                         label: "Honda",
//                         value: "honda",
//                       },
//                       {
//                         label: "Dalsim",
//                         value: "dalsim",
//                       },
//                     ],
//                   },
//                   {
//                     keys: ["schwarzenegger"],
//                     options: [
//                       {
//                         label: "Terminator",
//                         value: "t800",
//                       },
//                       {
//                         label: "Predator",
//                         value: "józek",
//                       },
//                     ],
//                   },
//                 ],
//               },
//
//               options: [
//                 {
//                   label: "Film",
//                   value: "film",
//                 },
//                 {
//                   label: "Komiks",
//                   value: "kokosz",
//                 },
//               ],
//             },
//           ]
//
//
//
// [
//             {
//               name: "name4b",
//               label: "Conditional Disabled if modify and wrestler",
//               initValue: "opt1",
//               type: "text",
//               disabled: false,
//               conditionalDisabled: [
//                 {
//                   conditions: [
//                     {
//                       when: "mode",
//                       is: "modify",
//                     },
//                     {
//                       when: "wrestler",
//                       is: true,
//                     },
//                   ],
//                 },
//               ],
//               hidden: true,
//               patterns: [
//                 {
//                   reg: "required",
//                   message: "This field is required",
//                 },
//               ],
//               options: [
//                 {
//                   label: "Opcja 1",
//                   value: "opt1",
//                 },
//               ],
//             },
//             {
//               name: "wrestler",
//               label: "Wrestler",
//               initValue: "",
//               type: "text",
//               disabled: false,
//               hidden: true,
//               patterns: [
//                 {
//                   reg: "required",
//                   message: "This field is required",
//                 },
//               ],
//               options: [
//                 {
//                   label: "Opcja 1",
//                   value: "opt1",
//                 },
//               ],
//             },
//             {
//               name: "machineActor",
//               label: "Actor or Machine",
//               initValue: "car",
//               type: "select",
//               disabled: false,
//               hidden: true,
//               patterns: [
//                 {
//                   reg: "required",
//                   message: "This field is required",
//                 },
//               ],
//               options: [
//                 {
//                   label: "Samochód",
//                   value: "car",
//                 },
//                 {
//                   label: "Motór",
//                   value: "bike",
//                 },
//                 {
//                   label: "Schwarzenegger",
//                   value: "schwarzenegger",
//                 },
//                 {
//                   label: "Stallone",
//                   value: "sly",
//                 },
//               ],
//             },
//           ]
//
// [
//             {
//               name: "name1b",
//               label: "label",
//               initValue: "9.2",
//               type: "number",
//               disabled: false,
//               hidden: true,
//               patterns: [
//                 {
//                   reg: "required",
//                   message: "This field is required",
//                 },
//               ],
//               options: [
//                 {
//                   label: "Opcja 1",
//                   value: "opt1",
//                 },
//               ],
//             },
//             {
//               name: "name2b",
//               label: "label",
//               initValue: "15.1",
//               type: "number",
//               disabled: false,
//               hidden: true,
//               patterns: [
//                 {
//                   reg: "required",
//                   message: "This field is required",
//                 },
//               ],
//               options: [
//                 {
//                   label: "Opcja 1",
//                   value: "opt1",
//                 },
//               ],
//             },
//             {
//               name: "name3b",
//               label: "Calculated Value",
//               initValue: "",
//               calculatedValue: ["name1b", "name2b"],
//               type: "text",
//               disabled: true,
//               hidden: true,
//               patterns: [
//                 {
//                   reg: "required",
//                   message: "This field is required",
//                 },
//               ],
//               options: [
//                 {
//                   label: "Opcja 1",
//                   value: "opt1",
//                 },
//               ],
//             },
//           ]
// [
//             {
//               name: "name7",
//               label: "no data no required min_6",
//               initValue: "",
//               type: "text",
//               disabled: false,
//               hidden: true,
//               patterns: [
//                 {
//                   reg: "min_6",
//                   message:
//                     "The phrase is too short - minimum 6 characters are required",
//                 },
//               ],
//               options: [
//                 {
//                   label: "Opcja 1",
//                   value: "opt1",
//                 },
//               ],
//             },
//             {
//               name: "name8",
//               label: "data no required min_6",
//               initValue: "opt1",
//               type: "text",
//               disabled: false,
//               hidden: true,
//               patterns: [
//                 {
//                   reg: "min_6",
//                   message:
//                     "The phrase is too short - minimum 6 characters are required",
//                 },
//               ],
//               options: [
//                 {
//                   label: "Opcja 1",
//                   value: "opt1",
//                 },
//               ],
//             },
//             {
//               name: "user",
//               label: "Current User",
//               initValue: "",
//               type: "text",
//               disabled: true,
//               hidden: true,
//               patterns: [
//                 {
//                   reg: "required",
//                   message: "This field is required",
//                 },
//               ],
//               options: [
//                 {
//                   label: "Opcja 1",
//                   value: "opt1",
//                 },
//               ],
//             },
//             {
//               name: "costCenter",
//               label: "Cost Center",
//               initValue: "",
//               type: "text",
//               disabled: false,
//               hidden: true,
//               patterns: [
//                 {
//                   reg: "required",
//                   message: "This field is required when WBS Element or Sales Order or Sales Order Item are empty",
//                 },
//               ],
//               conditionalDisabled: [
//                 {
//                   conditions: [
//                     {
//                       when: "WBS",
//                       is: true,
//                     },
//                   ],
//                 },
//                 {
//                   conditions: [
//                     {
//                       when: "salesOrder",
//                       is: true,
//                     },
//                   ],
//                 },
//                 {
//                   conditions: [
//                     {
//                       when: "salesOrderItem",
//                       is: true,
//                     },
//                   ],
//                 },
//               ],
//             },
//             {
//               name: "WBS",
//               label: "WBS Element",
//               initValue: "",
//               type: "text",
//               disabled: false,
//               hidden: true,
//               patterns: [
//                 {
//                   reg: "required",
//                   message: "This field is required when Cost Center or Sales Order or Sales Order Item are empty",
//                 },
//               ],
//               conditionalDisabled: [
//                 {
//                   conditions: [
//                     {
//                       when: "costCenter",
//                       is: true,
//                     },
//                   ],
//                 },
//                 {
//                   conditions: [
//                     {
//                       when: "salesOrder",
//                       is: true,
//                     },
//                   ],
//                 },
//                 {
//                   conditions: [
//                     {
//                       when: "salesOrderItem",
//                       is: true,
//                     },
//                   ],
//                 },
//               ],
//             },
//             {
//               name: "salesOrder",
//               label: "Sales Order",
//               initValue: "",
//               type: "text",
//               disabled: false,
//               hidden: true,
//               patterns: [
//                 {
//                   reg: "required",
//                   message: "This field is required when Cost Center or WBS Element are empty",
//                 },
//               ],
//               conditionalDisabled: [
//                 {
//                   conditions: [
//                     {
//                       when: "WBS",
//                       is: true,
//                     },
//                   ],
//                 },
//                 {
//                   conditions: [
//                     {
//                       when: "costCenter",
//                       is: true,
//                     },
//                   ],
//                 },
//               ],
//             },
//             {
//               name: "salesOrderItem",
//               label: "Sales Order Item",
//               initValue: "",
//               type: "text",
//               disabled: false,
//               hidden: true,
//               patterns: [
//                 {
//                   reg: "required",
//                   message: "This field is required when Cost Center or WBS Element are empty",
//                 },
//               ],
//               conditionalDisabled: [
//                 {
//                   conditions: [
//                     {
//                       when: "WBS",
//                       is: true,
//                     },
//                   ],
//                 },
//                 {
//                   conditions: [
//                     {
//                       when: "costCenter",
//                       is: true,
//                     },
//                   ],
//                 },
//               ],
//             },
//           ]
// [
//             {
//               name: "creatorUser",
//               label: "Creator User",
//               initValue: "",
//               type: "text",
//               disabled: true,
//               hidden: true,
//               patterns: [],
//               options: [
//                 {
//                   label: "Opcja 1",
//                   value: "opt1",
//                 },
//               ],
//             },
//             {
//               name: "name5",
//               label: "data required min_6",
//               initValue: "opt1",
//               type: "text",
//               disabled: false,
//               hidden: true,
//               patterns: [
//                 {
//                   reg: "required",
//                   message: "This field is required",
//                 },
//                 {
//                   reg: "min_6",
//                   message:
//                     "The phrase is too short - minimum 6 characters are required",
//                 },
//               ],
//               options: [
//                 {
//                   label: "Opcja 1",
//                   value: "opt1",
//                 },
//               ],
//             },
//             {
//               name: "name6",
//               label: "no data required min_6",
//               initValue: "",
//               type: "text",
//               disabled: false,
//               hidden: true,
//               patterns: [
//                 {
//                   reg: "required",
//                   message: "This field is required",
//                 },
//                 {
//                   reg: "min_6",
//                   message:
//                     "The phrase is too short - minimum 6 characters are required",
//                 },
//               ],
//               options: [
//                 {
//                   label: "Opcja 1",
//                   value: "opt1",
//                 },
//               ],
//             },
