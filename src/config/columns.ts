import * as f from "./fields";

export const modes = { fields: [f.mode] };

export const appNumbers = { fields: [f.appNumberImport] };

export const stateControllerButton = { fields: [f.submitButton] };

export const left = {
  fields: [
    f.companyCode,
    f.provisionType,
    f.subType,
    f.ledgerGroup,
    f.glDebitAccount,
    f.glCreditAccount,
    f.appStartDate,
    f.appEndDate,
  ],
};

export const middle = {
  fields: [f.appCreator, f.provisionType, f.subType],
};

export const right = {
  fields: [f.user, f.costCenter, f.wbs, f.salesDocument, f.salesDocumentItem],
};

export const ifrs = {
  fields: [],
  header: "IFRS",
};

export const localGaap = {
  fields: [],
  header: "LOCAL GAAP",
};

export const tax = {
  fields: [f.appNumber],
  header: "TAX",
};

export const attach = { fields: [f.attachement] };

export const empty = { fields: [] };
