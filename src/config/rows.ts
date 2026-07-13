import * as c from "./columns";

export const general = { title: "GENERAL INFORMATION", columns: [c.generalLeft,c.generalMiddle,c.generalRight] };

export const datesAndPeriod = {
  title: "POSTING DATES & VALIDITY PERIOD",
  columns: [c.dpLeft,c.dpMiddle,c.dpRight],
};

export const classification = {
  title: "ACCOUNTING CLASSIFICATION",
  columns: [c.classificationLeft,c.classificationMiddle,c.classificationRight],
};

export const costObjects = {
  title: "PROJECT & DOCUMENT REFERENCE",
  columns: [c.coLeft,c.coMiddle,c.coRight],
};

export const values = {
  title: "VALUATION MATRIX",
  columns: [c.ifrs, c.localGaap, c.tax],
  isMatrix: true
};

export const controls = {
  columns: [c.attach, c.stateControllerButton, c.empty],
};
