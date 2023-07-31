const express = require("express");
const cors = require("cors");
const PORT = 5000 || process.env.PORT;
require("dotenv").config();
// midleware
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running on port", PORT);
});

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
