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
  fields: [
    f.costCenter,
    f.wbs,
    f.salesDocument,
    f.salesDocumentItem,
    f.postingDate,
    f.postingPeriod,
    f.documentDate,
    f.localCurrency,
  ],
};

export const right = {
  fields: [
    f.appNumber,
    f.description1,
    f.description2,
    f.appCreator,
    f.appCreationDate,
    f.changedOn,
    f.appNumberOld,
    f.user,
  ],
};

export const ifrs = {
  fields: [
    f._0lCarryFwd,
    f._0lCreationAddition,
    f._0lCreationAdditionUpdate,
    f._0lUsage,
    f._0lUsageUpdate,
    f._0lRelease,
    f._0lReleaseUpdate,
    f._0lClosingBalance,
    f._0lClosingBalanceUpdate,
  ],
  header: "IFRS",
};

export const localGaap = {
  fields: [
    f._2lCarryFwd,
    f._2lCreationAddition,
    f._2lCreationAdditionUpdate,
    f._2lUsage,
    f._2lUsageUpdate,
    f._2lRelease,
    f._2lReleaseUpdate,
    f._2lClosingBalance,
    f._2lClosingBalanceUpdate,
  ],
  header: "LOCAL GAAP",
};

export const tax = {
  fields: [
    f.TlCarryFwd,
    f.TlCreationAddition,
    f.TlCreationAdditionUpdate,
    f.TlUsage,
    f.TlUsageUpdate,
    f.TlRelease,
    f.TlReleaseUpdate,
    f.TlClosingBalance,
    f.TlClosingBalanceUpdate,
  ],
  header: "TAX",
};

export const attach = { fields: [f.attachement] };

export const empty = { fields: [] };
