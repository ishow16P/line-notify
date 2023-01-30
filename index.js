const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const line = require("@line/bot-sdk");
const { lineConfig } = require("./services/line.service");
const { webhook } = require("./controllers/line.controller");
app.use(cors());

app.post("/api/v1/line-notify/webhook", line.middleware(lineConfig()), webhook);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("./routes"));

const { PORT } = dotenv.config().parsed || 8000;
app.listen(PORT, () => {
  console.log(`server start port ${PORT}`);
});
