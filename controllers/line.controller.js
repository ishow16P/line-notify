const { replyMessage, pushMessge } = require("../services/line.service");

exports.webhook = async (req, res) => {
  try {
    const events = req.body.events;
    return events.length > 0
      ? await events.map((item) => replyMessage(item))
      : res.status(200).send("OK");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

exports.pushMessage = async (req, res) => {
  try {
    const { message } = req.body;
    await pushMessge(message);
    return res.status(200).send({ msg: "success" });
  } catch (error) {
    console.log(error);
    return res
      .status(error.statusCode || 500)
      .json({ error: error.statusMessage || error });
  }
};
