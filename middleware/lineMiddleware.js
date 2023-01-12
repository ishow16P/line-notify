const dotenv = require('dotenv');
const env = dotenv.config().parsed;
const line = require('@line/bot-sdk');

const lineMiddleware = async(req,res,next) => {
    const lineConfig = {
        channelAccessToken: env.LINE_ACCESS_TOKEN,
        channelSecret: env.LINE_SECRET_TOKEN
    }
    try {
        const client = new line.Client(lineConfig)
        line.middleware(lineConfig);
        next(client);
    } catch (error) {
        console.log(error)
        return res.status(500).send({error})
    }
}

module.exports = {
    lineMiddleware
}