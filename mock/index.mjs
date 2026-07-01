import express from "express";
import multer from "multer";
import fs from "fs";
import cors from "cors";
const data = () => {
  return {
    init: {
      data: {
        user: "ADSZU",
        mode: "create",
        provisionType: "c83",
        subType: "y09",
      },
      config: {
        ledgerGroup: {
          pl10: [
            {
              label: "0L = IFRS",
              value: "0l",
            },
            {
              label: "2L = Local",
              value: "2l",
            },
            {
              label: "IL = IFRS + Local",
              value: "il",
            },
          ],
          de10: [
            {
              label: "AL = IFRS + Local + Tax",
              value: "al",
            },
            {
              label: "0L = IFRS",
              value: "0l",
            },
            {
              label: "2L = Local",
              value: "2l",
            },
            {
              label: "IL = IFRS + Local",
              value: "il",
            },
            {
              label: "0L, LT = Diff. values IFRS + Local/Tax",
              value: "0l,lt",
            },
          ],
        },
        companyCode: [
          {
            label: "PL10",
            value: "pl10",
          },
          {
            label: "DE10",
            value: "de10",
          },
        ],
        mode: [
          {
            label: "Create",
            value: "create",
          },
          {
            label: "Modify",
            value: "modify",
          },
        ],
        localCurrency: {
          pl10: "PLN",
          de10: "EUR",
        },

        provisionType: [
          {
            code: "c83",
            description: "C83 Accrual for outstanding expenses",
            createAllowed: true,
            modifyAllowed: true,
            subTypes: [
              "y09",
              "y27",
              "y28",
              "y07",
              "y08",
              "y09c",
              "y27c",
              "y28c",
              "y07c",
              "y08c",
              "aed",
              "cc",
              "on",
              "wbs",
            ],
          },
          {
            code: "c84",
            description: "C84 OUTST. EXPENSES TRADE ACC., AUTOM. REV.-BASED",
            createAllowed: false,
            modifyAllowed: false,
            subTypes: [
              "y09",
              "y27",
              "y28",
              "y07",
              "y08",
              "y09c",
              "y27c",
              "y28c",
              "y07c",
              "y08c",
              "aed",
              "cc",
              "on",
              "wbs",
            ],
          },
          {
            code: "j51",
            description:
              "J51 Adjustments on trade accounts receivable for other unearned revenue",
            createAllowed: true,
            modifyAllowed: true,
            subTypes: ["y09", "y098", "y097", "y09c", "y098c", "y097c"],
          },
          {
            code: "j55",
            description:
              "J55 Refund liabilities for price and quantity discounts",
            createAllowed: true,
            modifyAllowed: true,
            subTypes: ["y09", "y098", "y097", "y09c", "y098c", "y097c"],
          },
          {
            code: "o25",
            description: "O25 Warranty provisions",
            createAllowed: true,
            modifyAllowed: true,
            subTypes: [
              "y09",
              "y27",
              "y28",
              "y07",
              "y08",
              "y09c",
              "y27c",
              "y28c",
              "y07c",
              "y08c",
              "aed",
              "cc",
              "on",
              "wbs",
            ],
          },
          {
            code: "o30",
            description: "O30 Provisions for losses on onerous sales contracts",
            createAllowed: true,
            modifyAllowed: true,
            subTypes: [
              "y09",
              "y27",
              "y28",
              "y07",
              "y08",
              "y09c",
              "y27c",
              "y28c",
              "y07c",
              "y08c",
              "aed",
              "cc",
              "on",
              "wbs",
            ],
          },
          {
            code: "o70",
            description:
              "O70 Other miscellaneous accruals for operating expenses of account class 6",
            createAllowed: true,
            modifyAllowed: true,
            subTypes: [
              "y09",
              "y27",
              "y28",
              "y07",
              "y08",
              "y09c",
              "y27c",
              "y28c",
              "y07c",
              "y08c",
              "aed",
              "cc",
              "on",
              "wbs",
            ],
          },
          {
            code: "o71",
            description:
              "O71 Other miscellaneous provisions for related to operating expenses of account class 6",
            createAllowed: true,
            modifyAllowed: true,
            subTypes: [
              "y09",
              "y27",
              "y28",
              "y07",
              "y08",
              "y09c",
              "y27c",
              "y28c",
              "y07c",
              "y08c",
              "aed",
              "cc",
              "on",
              "wbs",
            ],
          },
          {
            code: "op",
            description: "OTHER POST-EMPLOYMENT BENEFITS",
            createAllowed: false,
            modifyAllowed: false,
            subTypes: ["y09"],
          },
          {
            code: "owa",
            description: "OTHER WAGES AND SALARIES (accrual)",
            createAllowed: false,
            modifyAllowed: false,
            subTypes: ["y09"],
          },
          {
            code: "owl",
            description: "OTHER WAGES AND SALARIES (liability)",
            createAllowed: false,
            modifyAllowed: false,
            subTypes: ["y09"],
          },
          {
            code: "r10",
            description:
              "R10 Refund liabilities for penalties for default or delay (cost side)",
            createAllowed: true,
            modifyAllowed: true,
            subTypes: [
              "y09",
              "y27",
              "y28",
              "y07",
              "y08",
              "y09c",
              "y27c",
              "y28c",
              "y07c",
              "y08c",
              "aed",
              "cc",
              "on",
              "wbs",
            ],
          },
          {
            code: "sp",
            description: "SEVERANCE PAY (DISMISSALS)",
            createAllowed: false,
            modifyAllowed: false,
            subTypes: ["y09"],
          },
          {
            code: "vp",
            description: "VACATION PAY",
            createAllowed: false,
            modifyAllowed: false,
            subTypes: ["y09"],
          },
        ],
        subType: {
          y09: {
            label: "Creation/Addition of other provisions/accruals/adjustments",
          },
          y097: {
            label: "Usage of other provisions/accruals/adjustments",
          },
          y098: {
            label:
              "Release, no longer needed of other provisions/accruals/adjustments",
          },
          y27: {
            label:
              "Usage of other provisions/accruals/adjustments - Current Yr",
          },
          y28: {
            label:
              "Release, no longer needed of other provisions/accruals/adjustments - Current Yr",
          },
          y07: {
            label:
              "Usage of other provisions/accruals/adjustments - Previous Yr",
          },
          y08: {
            label:
              "Release, no longer needed of other provisions/accruals/adjustments - Previous Yr",
          },
          y09c: {
            label:
              "Correction - Creation/Addition of other provisions/accruals/adjustments",
          },
          y27c: {
            label:
              "Correction - Usage of other provisions/accruals/adjustments - Current Yr",
          },
          y28c: {
            label:
              "Correction - Release, no longer needed of other provisions/accruals/adjustments - Current Yr",
          },
          y07c: {
            label:
              "Correction - Usage of other provisions/accruals/adjustments - Previous Yr",
          },
          y08c: {
            label:
              "Correction - Release, no longer needed of other provisions/accruals/adjustments - Previous Yr",
          },
          y097c: {
            label:
              "Correction - Usage of other provisions/accruals/adjustments",
          },
          y098c: {
            label:
              "Correction - Release, no longer needed of other provisions/accruals/adjustments",
          },
          aed: {
            label: "Change in Application End Date",
          },
          ccc: {
            label: "Change in Cost Center",
          },
          con: {
            label: "Change in Sales Document",
          },
          cwe: {
            label: "Change in WBS Element",
          },
          cio: {
            label: "Change in Order",
          },
        },

        accountingRule: {
          c83_aed: {
            sign: null,
            reference: "C83/Appl No.",
            headerText: "Change Appl End Date",
            postingKeyDebit: null,
            glDebit: null,
            postingKeyCredit: null,
            glCredit: null,
            developmentCode: null,
            docType: null,
          },

          c83_ccc: {
            sign: null,
            reference: "C83/Appl No.",
            headerText: "Change in Cost Center",
            postingKeyDebit: null,
            glDebit: null,
            postingKeyCredit: null,
            glCredit: null,
            developmentCode: null,
            docType: null,
          },

          c83_y07: {
            sign: -1,
            reference: "C83/Appl No.",
            headerText: "Usage PY DC-Y07",
            postingKeyDebit: "40",
            glDebit: "38610000",
            postingKeyCredit: "50",
            glCredit: "60900007",
            developmentCode: "Y07",
            docType: "SA",
          },

          c83_y07c: {
            sign: 1,
            reference: "C83/Appl No.",
            headerText: "Corr Usage PY DC-Y07",
            postingKeyDebit: "40",
            glDebit: "60900007",
            postingKeyCredit: "50",
            glCredit: "38610000",
            developmentCode: "Y07",
            docType: "SA",
          },

          c83_y08: {
            sign: -1,
            reference: "C83/Appl No.",
            headerText: "Release PY DC-Y08",
            postingKeyDebit: "40",
            glDebit: "38610000",
            postingKeyCredit: "50",
            glCredit: "60900008",
            developmentCode: "Y08",
            docType: "SA",
          },

          c83_y09: {
            sign: 1,
            reference: "C83/Appl No.",
            headerText: "Creation/Add DC-Y09",
            postingKeyDebit: "40",
            glDebit: "60900009",
            postingKeyCredit: "50",
            glCredit: "38610000",
            developmentCode: "Y09",
            docType: "SA",
          },

          j51_y09: {
            sign: 1,
            reference: "J51/Appl No.",
            headerText: "Creation/Add DC-Y09",
            postingKeyDebit: "40",
            glDebit: "54890000",
            postingKeyCredit: "50",
            glCredit: "24189100",
            developmentCode: "Y09",
            docType: "SA",
          },

          j51_y097: {
            sign: -1,
            reference: "J51/Appl No.",
            headerText: "Usage-Y09",
            postingKeyDebit: "40",
            glDebit: "24189100",
            postingKeyCredit: "50",
            glCredit: "54890000",
            developmentCode: "Y09",
            docType: "SA",
          },

          j55_y09: {
            sign: 1,
            reference: "J55/Appl No.",
            headerText: "Creation/Add DC-Y09",
            postingKeyDebit: "40",
            glDebit: "54100000",
            postingKeyCredit: "50",
            glCredit: "24182100",
            developmentCode: "Y09",
            docType: "SA",
          },

          o70_y09: {
            sign: 1,
            reference: "O70/Appl No.",
            headerText: "Creation/Add DC-Y09",
            postingKeyDebit: "40",
            glDebit: "68890009",
            postingKeyCredit: "50",
            glCredit: "38710000",
            developmentCode: "Y09",
            docType: "SA",
          },

          o70_y27: {
            sign: -1,
            reference: "O70/Appl No.",
            headerText: "Usage CY DC-Y27",
            postingKeyDebit: "40",
            glDebit: "38710000",
            postingKeyCredit: "50",
            glCredit: "68890007",
            developmentCode: "Y07",
            docType: "SA",
          },

          o70_y28: {
            sign: -1,
            reference: "O70/Appl No.",
            headerText: "Release CY DC-Y28",
            postingKeyDebit: "40",
            glDebit: "38710000",
            postingKeyCredit: "50",
            glCredit: "68890008",
            developmentCode: "Y08",
            docType: "SA",
          },

          o71_y09: {
            sign: 1,
            reference: "O71/Appl No.",
            headerText: "Creation/Add DC-Y09",
            postingKeyDebit: "40",
            glDebit: "68990009",
            postingKeyCredit: "50",
            glCredit: "39710000",
            developmentCode: "Y09",
            docType: "SA",
          },

          r10_y09: {
            sign: 1,
            reference: "R10/Appl No.",
            headerText: "Creation/Add DC-Y09",
            postingKeyDebit: "40",
            glDebit: "68920009",
            postingKeyCredit: "50",
            glCredit: "47521110",
            developmentCode: "Y09",
            docType: "SA",
          },
        },
      },
    },
  };
};
const DELAY_IN_SECONDS = 0;
const LOCKED_GET_RESPONSE = {
  data: {
    locked: true,
    message: "Application 666 is waiting for approval!!!",
    mode: "modify",
    appNumberImport: "",
    submitButton: "",
    companyCode: "de10",
    provisionType: "c83",
    subType: "y09",
    ledgerGroup: "al",
    glDebitAccount: "60900009",
    glCreditAccount: "38610000",
    appStartDate: "20250831",
    appEndDate: "20250831",
    costCenter: "pupa",
    wbs: "",
    salesDocument: "",
    salesDocumentItem: "",
    postingDate: "20250831",
    postingPeriod: "11",
    documentDate: "20250831",
    localCurrency: "EUR",
    appNumber: "666",
    description1: "pupka",
    description2: "",
    appCreator: "123456",
    appCreationDate: "20250831",
    changedOn: "20250831",
    appNumberOld: "",
    user: "123456",
    "0lCarryFwd": "",
    "0lCreationAddition": "",
    "0lCreationAdditionUpdate": "12334",
    "0lUsage": "",
    "0lUsageUpdate": "",
    "0lRelease": "",
    "0lReleaseUpdate": "",
    "0lClosingBalance": "",
    "0lClosingBalanceUpdate": "12334",
    "2lCarryFwd": "",
    "2lCreationAddition": "",
    "2lCreationAdditionUpdate": "12334",
    "2lUsage": "",
    "2lUsageUpdate": "",
    "2lRelease": "",
    "2lReleaseUpdate": "",
    "2lClosingBalance": "",
    "2lClosingBalanceUpdate": "12334",
    tlCarryFwd: "",
    tlCreationAddition: "",
    tlCreationAdditionUpdate: "12334",
    tlUsage: "",
    tlUsageUpdate: "",
    tlRelease: "",
    tlReleaseUpdate: "",
    tlClosingBalance: "",
    tlClosingBalanceUpdate: "12334",
    attachment: "",
  },
};

const LOCKED_POST_RESPONSE = {
  data: {
    locked: true,
    message: "Application <strong>10</strong> is waiting for approval!!!",
    appNumber: "10",
  },
};

const app = express();
const port = 6060;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  const delay = DELAY_IN_SECONDS * 1000;
  setTimeout(() => next(), delay);
});

app.get("/protool", (req, res) => {
  const { appno } = req.query;
  if (!appno) return res.json({ errors: { error: "Wrong query string!" } });

  if (appno === "init") return res.json(data()[appno]);

  if (appno === "666") return res.json(LOCKED_GET_RESPONSE);

  const record = getRecordFor(appno);
  const response = record
    ? { data: { ...record, attachement: undefined } }
    : {
        errors: {
          appNumberImport: `Application number ${appno} does not exist!`,
        },
      };
  res.json(response);
});

function getUser() {
  const user = Math.random() < 0.5 ? "123456" : "987654";
  return { user };
}

function readDb() {
  if (fs.existsSync("./db.json")) {
    const db = fs.readFileSync("./db.json", "utf-8");
    return JSON.parse(db);
  } else {
    return [];
  }
}

function getRecordFor(appNumber) {
  return readDb().find((r) => r.appNumber === appNumber);
}

function addNewRecordToDb(db, data) {
  const appNumber = `${db.length + 1}`;
  db.push({ ...data, appCreator: data.user, appNumber, mode: "modify" });
  return appNumber;
}

function updateRecordInDb(db, data) {
  const idx = db.findIndex((r) => r.appNumber === data.appNumber);
  if (idx < 0) return null;
  db[idx] = data;
  return data.appNumber;
}

function mutateDb(data) {
  let db = readDb();
  const appNumber = !!data.appNumber
    ? updateRecordInDb(db, data)
    : addNewRecordToDb(db, data);
  const e = { errors: { error: "Database error!" } };
  if (!appNumber) return e;

  try {
    fs.writeFileSync("./db.json", JSON.stringify(db, null, 2));
    return { data: { appNumber } };
  } catch (error) {
    console.error(error);
    return e;
  }
}

function validate(data) {
  const copy = { ...data };
  Object.keys(copy).forEach((k) => {
    copy[k] = copy[k] === "bird" ? "Bird is a word!" : undefined;
  });
  return JSON.parse(JSON.stringify(copy));
}

app.post("/protool", multer().none(), (req, res) => {
  const data = JSON.parse(req.body.json);
  const { appNumber } = data;
  if (appNumber === "10") return res.json(LOCKED_POST_RESPONSE);
  const errors = validate(data);
  if (Object.keys(errors).length) return res.json({ errors });
  const response = mutateDb(data);
  res.json(response);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
