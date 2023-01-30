const router = require("express").Router();
const { webhook, pushMessage } = require("../../controllers/line.controller");
const { lineConfig } = require("../../services/line.service");
const line = require("@line/bot-sdk");

// router.post("/webhook", line.middleware(lineConfig()), webhook);
router.post("/message", pushMessage);

module.exports = router;
