require("dotenv").config();
const { LINE_ACCESS_TOKEN, LINE_SECRET_TOKEN, USER_ID } = process.env;
const line = require("@line/bot-sdk");
const { chatMessageOpenAi } = require('../services/openai.service') 

const lineConfig = () => {
  const config = {
    channelAccessToken: LINE_ACCESS_TOKEN,
    channelSecret: LINE_SECRET_TOKEN,
  };
  return config;
};

const replyMessage = async (event) => {
  const client = new line.Client(lineConfig());
  console.log(event.message.text)
  if (event.type === "message") {
    console.log(event.message.text)
    const answer = await chatMessageOpenAi(event.message.text)
    const message = [
      {
        type: "text",
        text: answer,
      },
    ];
    return client.replyMessage(event.replyToken, message);
  }
  return null;
};

const pushMessge = async (message) => {
  const client = new line.Client(lineConfig());
  if (typeof message === "string") {
    const messageConfig = {
      type: "text",
      text: message,
    };
    return client.pushMessage(USER_ID, messageConfig);
  }
  return null;
};

module.exports = {
  lineConfig,
  replyMessage,
  pushMessge
};
