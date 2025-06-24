import express from "express";
import fs from "fs";
import cors from "cors";
const data = () => {
  return {
    db: () => JSON.parse(fs.readFileSync("./db.json", "utf-8")),
    init: { data: getUser() },
  };
};
const app = express();
const port = 6060;
app.use(cors());
app.use(express.json());

app.get("/protool", (req, res) => {
  const { appno } = req.query;
  if (!appno) return res.json({ errors: { error: "Wrong query string!" } });

  if (appno === "init") return res.json(data()[appno]);

  const record = getRecordFor(appno);
  const response = record
    ? { data: record }
    : {
        error: {
          editableAppNumber: `Application number ${appno} does not exist!`,
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
    return data()[db]();
  } else {
    return [];
  }
}

// function getAppNumber() {
//   return readDb().length + 1;
// }

function getRecordFor(appNumber) {
  return readDb().find((r) => r.appNumber === appNumber);
}

function getRecordIndexFor(appNumber) {
  return readDb().indexOf((r) => r.appNumber === appNumber);
}

function addNewRecordToDb(record) {
  let db = readDb();

  db.push({ ...record, creatorUser: record.user, appNumber: db.length + 1 });

  try {
    fs.writeFileSync("./db.json", db);
  } catch (error) {
    console.error(error);
  }
}

// app.get("/gl", (req, res) => {
//   if (req.query.d) {
//     req.query.d === "perm"
//       ? handlePermissions(req, res)
//       : res.json(data()[req.query.d]);
//   } else res.json(glData);
// });
// app.post("/gl", (req, res) => {
//   const content = JSON.stringify(req.body);
//   try {
//     fs.writeFileSync("./changes.json", content);
//   } catch (error) {
//     console.error(error);
//   }
//   res.json(req.body);
// });

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

// const handlePermissions = (req, res) => {
//   if (!req.query.user) return res.json({ canEdit: false, editor: null });
//
//   const valid = JSON.parse(fs.readFileSync("./perm.json", "utf-8"));
//
//   const { user } = req.query;
//   const timestamp = Date.now();
//
//   const requesting = {
//     user,
//     timestamp,
//   };
//
//   if (requesting.timestamp - valid.timestamp < 10000) {
//     if (requesting.user !== valid.user)
//       return res.json({ canEdit: false, editor: valid.user });
//   }
//
//   try {
//     fs.writeFileSync("./perm.json", JSON.stringify(requesting));
//   } catch (error) {
//     console.error(error);
//   }
//   res.json({ canEdit: false, editor: requesting.user, message:"Turlaj pyzy Kmieciu!!!" });
// };
