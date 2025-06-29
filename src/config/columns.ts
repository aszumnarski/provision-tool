import * as f from "./fields";

export const modes = { fields: [f.mode] };

export const appNumber = { fields: [f.appNumber] };

export const stateControllerButton = { fields: [f.magicButton] };

export const one = { fields: [f.name1, f.name2, f.name3, f.attachement] };

export const two = { fields: [f.creatorUser, f.name5, f.name6] };

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
