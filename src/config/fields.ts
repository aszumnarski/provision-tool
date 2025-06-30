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

export const editableAppNumber: IField = {
  name: "editableAppNumber",
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
  dependentOptions: {
    dependency: "machineActor",
    values: [
      {
        keys: ["car", "bike"],
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
        keys: ["schwarzenegger"],
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
  },
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

export const creatorUser: IField = {
  name: "creatorUser",
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
