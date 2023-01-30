require("dotenv").config();
const { OPENAI_KEY } = process.env;
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

const getImageFromOpenAi = async (message) => {
  try {
    const response = await openai.createImage({
      prompt: message,
      n: 3,
      size: "1024x1024",
    });
    return response.data.data.map((data) => data.url);
  } catch (error) {
    console.log(error.data);
  }
};

const chatMessageOpenAi = async (message) => {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: message,
      max_tokens: 60,
      temperature: 0,
    });
    console.log(completion.data.choices)
    return completion.data.choices[0].text
  } catch (error) {
    console.log(error)
    console.log(error.message)
  }
}

module.exports = {
  getImageFromOpenAi,
  chatMessageOpenAi
};
