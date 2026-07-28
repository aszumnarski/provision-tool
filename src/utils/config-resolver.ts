import type { FormValues } from "../context";
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
  formValues: FormValues,
  appConfig: IAppConfig
): IOption[] | null => {
  switch (fieldName) {
    case "companyCode":
      return appConfig.companyCode;

    case "ledgerGroup":
      const companyCode =
        typeof formValues.companyCode === "string"
          ? formValues.companyCode
          : "";

      return appConfig.ledgerGroup[companyCode] || [];

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
      const provisionType =
        typeof formValues.provisionType === "string"
          ? formValues.provisionType
          : "";

      return getSubTypeOptions(provisionType, appConfig);

    default:
      return null;
  }
};

export const getFieldValue = (
  fieldName: string,
  formValues: FormValues,
  appConfig: IAppConfig
): string => {
  const companyCode =
    typeof formValues.companyCode === "string"
      ? formValues.companyCode
      : "";

  const provisionType =
    typeof formValues.provisionType === "string"
      ? formValues.provisionType
      : "";

  const subType =
    typeof formValues.subType === "string"
      ? formValues.subType
      : "";

  switch (fieldName) {
    case "localCurrency":
      return appConfig.localCurrency[companyCode] || "";

    case "fiscalYear":
      return appConfig.fiscalYear[companyCode] || "";

    case "glDebitAccount":
      return (
        getAccountingRule(
          provisionType,
          subType,
          appConfig
        )?.glDebit || ""
      );

    case "glCreditAccount":
      return (
        getAccountingRule(
          provisionType,
          subType,
          appConfig
        )?.glCredit || ""
      );

    default:
      return "";
  }
};
