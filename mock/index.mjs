import express from "express";
import fs from "fs";
import cors from "cors";
// const glData = JSON.parse(fs.readFileSync("./demo_v2.json", "utf-8"));
// const data = () => {
//   return {
//     changes: JSON.parse(fs.readFileSync("./changes.json", "utf-8")),
//     lookup: JSON.parse(fs.readFileSync("./lookup.json", "utf-8")),
//     tabs: JSON.parse(fs.readFileSync("./tabs.json", "utf-8")),
//     types: JSON.parse(fs.readFileSync("./types.json", "utf-8")),
//   };
// };
const app = express();
const port = 6060;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log({ req });
  res.json({
    data: {
      name1: "aaaaa",
      name2: "bbbbbb",
    },
  });
});

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
