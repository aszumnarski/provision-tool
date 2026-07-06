import type { IAppConfig, IOption, IAccountingRule } from "../types";

export const getSubTypeOptions = (
  provisionTypeCode: string,
  appConfig: IAppConfig
): IOption[] => {
  const provisionType = appConfig.provisionType.find(
    (p) => p.code.toLowerCase() === provisionTypeCode.toLowerCase()
  );

  if (!provisionType) {
    return [];
  }

  return provisionType.subTypes.map((code) => ({
    value: code.toLowerCase(),
    label: appConfig.subType[code.toLowerCase()]?.label || code,
  }));
};

export const getAccountingRule = (
  provisionType: string,
  subType: string,
  config: IAppConfig
): IAccountingRule | undefined => {
  const key = `${provisionType}_${subType}`.toLowerCase();

  return config.accountingRule[key];
};

export const getOptions = (
  fieldName: string,
  formValues: Record<string, string>,
  appConfig: IAppConfig
): IOption[] | null => {
  switch (fieldName) {
    case "companyCode":
      return appConfig.companyCode;

    case "ledgerGroup":
      return appConfig.ledgerGroup[formValues.companyCode] || [];

    case "mode":
      return appConfig.mode;

    case "provisionType":
      return appConfig.provisionType
        .filter((pt) =>
          formValues.mode === "create" ? pt.createAllowed : pt.modifyAllowed
        )
        .map((pt) => ({
          label: pt.description,
          value: pt.code.toLowerCase(),
        }));

    case "subType":
      return getSubTypeOptions(formValues.provisionType, appConfig);

    default:
      return null;
  }
};

export const getFieldValue = (
  fieldName: string,
  formValues: Record<string, string>,
  appConfig: IAppConfig
): string => {
  switch (fieldName) {
    case "localCurrency":
      return appConfig.localCurrency[formValues.companyCode] || "";

    case "fiscalYear":
      return appConfig.fiscalYear[formValues.companyCode] || "";

    case "glDebitAccount":
      return (
        getAccountingRule(
          formValues.provisionType,
          formValues.subType,
          appConfig
        )?.glDebit || ""
      );

    case "glCreditAccount":
      return (
        getAccountingRule(
          formValues.provisionType,
          formValues.subType,
          appConfig
        )?.glCredit || ""
      );

    default:
      return "";
  }
};
