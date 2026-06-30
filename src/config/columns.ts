import * as f from "./fields";

export const generalLeft = {fields: [f.mode,f.companyCode,f.appCreator]};

export const generalMiddle = {fields: [f.appNumberImport,f.localCurrency]};

export const generalRight = {fields: [f.appNumber,f.appNumberOld]};

export const dpLeft= {fields: [f.appStartDate,f.appEndDate,f.changedOn]};

export const dpMiddle= {fields: [f.postingDate,f.postingPeriod,f.fiscalYear]};

export const dpRight= {fields: [f.documentDate,f.appCreationDate]};

export const classificationLeft= {fields: [f.provisionType,f.subType,f.ledgerGroup]};

export const classificationMiddle= {fields: [f.glDebitAccount,f.glCreditAccount]};

export const classificationRight= {fields: [f.description1,f.description2]};

export const coLeft= {fields: [f.costCenter,f.salesDocumentItem]};

export const coMiddle= {fields: [f.wbs,f.internalOrder]};

export const coRight= {fields: [f.salesDocument]};

export const stateControllerButton = { fields: [f.submitButton] };

export const ifrs = {
  fields: [
    f._0lCarryFwd,
    f._0lCreationAddition,
    f._0lCreationAdditionUpdate,
    f._0lUsagePY,
    f._0lUsageUpdatePY,
    f._0lUsageCY,
    f._0lUsageUpdateCY,
    f._0lReleasePY,
    f._0lReleaseUpdatePY,
    f._0lReleaseCY,
    f._0lReleaseUpdateCY,
    f._0lClosingBalance,
    f._0lClosingBalanceUpdate,
  ],
  header: "IFRS (0L)",
};

export const localGaap = {
  fields: [
    f._2lCarryFwd,
    f._2lCreationAddition,
    f._2lCreationAdditionUpdate,
    f._2lUsagePY,
    f._2lUsageUpdatePY,
    f._2lUsageCY,
    f._2lUsageUpdateCY,
    f._2lReleasePY,
    f._2lReleaseUpdatePY,
    f._2lReleaseCY,
    f._2lReleaseUpdateCY,
    f._2lClosingBalance,
    f._2lClosingBalanceUpdate,
  ],
  header: "LOCAL GAAP (2L)",
};

export const tax = {
  fields: [
    f.tlCarryFwd,
    f.tlCreationAddition,
    f.tlCreationAdditionUpdate,
    f.tlUsagePY,
    f.tlUsageUpdatePY,
    f.tlUsageCY,
    f.tlUsageUpdateCY,
    f.tlReleasePY,
    f.tlReleaseUpdatePY,
    f.tlReleaseCY,
    f.tlReleaseUpdateCY,
    f.tlClosingBalance,
    f.tlClosingBalanceUpdate,
  ],
  header: "TAX (TL)",
};

export const attach = { fields: [f.attachment] };

export const empty = { fields: [] };
