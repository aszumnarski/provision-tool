import * as f from "./fields";

export const modes = { fields: [f.mode] };

export const appNumbers = { fields: [f.appNumberImport] };

export const stateControllerButton = { fields: [f.submitButton] };

export const one = { fields: [f.name1, f.name2, f.name3] };

export const two = {
  fields: [f.appCreator, f.name5, f.name6, f.provisionType, f.subType],
};

export const three = {
  fields: [
    f.name7,
    f.name8,
    f.user,
    f.costCenter,
    f.WBS,
    f.salesOrder,
    f.salesOrderItem,
  ],
};

export const four = {
  fields: [f.name1b, f.name2b, f.name3b],
  header: "pierwsza kolumna",
};

export const five = {
  fields: [f.name4b, f.wrestler, f.machineActor],
  header: "druga kolumna",
};

export const six = {
  fields: [f.name7b, f.appNumber, f.details],
  header: "trzecia kolumna",
};

export const attach = { fields: [f.attachement] };

export const empty = { fields: [] };
