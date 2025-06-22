import express from "express";
import fs from "fs";
import cors from "cors";
const data = () => {
  return {
    config: JSON.parse(fs.readFileSync("./config.json", "utf-8")),
    db: JSON.parse(fs.readFileSync("./db.json", "utf-8")),
  };
};
const app = express();
const port = 6060;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  if (req.query.q) {
    res.json(data()[req.query.q]);
  } else if (req.query.appno) {
    res.json({
      data: {
        appNumber: req.query.appno,
      },
    });
  } else {
    console.log({ req });
    res.json({
      data: {
        name1: "aaaaa",
        name2: "bbbbbb",
      },
    });
  }
});

function readDb() {
  if (fs.existsSync("./db.json")) {
    return data()[db];
  } else {
    return [];
  }
}
function getAppNumber() {
  return readDb().length + 1;
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
