const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
require("dotenv").config();
// midleware
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Success!");
});
app.use("/public/images", express.static("public/images"));
async function run() {
  try {
    // app.use(express.static("public"));
  } finally {
    // app.use(express.static("public"));
  }
}
run().catch(console.dir);
app.listen(PORT, () => {
  console.log("console log");
});
