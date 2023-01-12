const dotenv = require("dotenv");
const env = dotenv.config().parsed;
const line = require("@line/bot-sdk");

const lineConfig = () => {
  const config = {
    channelAccessToken: env.LINE_ACCESS_TOKEN,
    channelSecret: env.LINE_SECRET_TOKEN,
  };
  return config;
};

const replyMessage = async (event) => {
  const client = new line.Client(lineConfig());
  if (event.type === "message") {
    const message = [
      {
        type: "text",
        text: "Hi!!!",
      },
      {
        type: "text",
        text: "Welcome Back !!! $$$",
        emojis: [
          {
            index: 17,
            productId: "5ac21a8c040ab15980c9b43f",
            emojiId: "016",
          },
          {
            index: 18,
            productId: "5ac21a8c040ab15980c9b43f",
            emojiId: "031",
          },
          {
            index: 19,
            productId: "5ac21a8c040ab15980c9b43f",
            emojiId: "031",
          },
        ],
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
    return client.pushMessage(env.USER_ID, messageConfig);
  }
  return null;
};

module.exports = {
  lineConfig,
  replyMessage,
  pushMessge
};
