import express from "express";
import multer from "multer";
import fs from "fs";
import cors from "cors";
const data = () => {
  return {
    init: {
      data: getUser(),
      config: {
        companyCodes: [
          { label: "DE10", value: "de10" },
          { label: "PWN10", value: "pl10" },
        ],
      },
    },
  };
};
const DELAY_IN_SECONDS = 0;
const RESPONSE_WITH_STATUS = {
  data: {
    status: "waiting for approval!",
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

  if (appno === "666") return res.json(RESPONSE_WITH_STATUS);

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
  const errors = validate(data);
  if (Object.keys(errors).length) return res.json({ errors });
  const response = mutateDb(data);
  res.json(response);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
