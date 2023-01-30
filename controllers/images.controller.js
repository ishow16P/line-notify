const { getImageFromOpenAi } = require('../services/openai.service')

const getImage = async (req, res) => {
  try {
    const { body } = req
    const response = await getImageFromOpenAi(body.message);

    return res.status(200).send(response)
  } catch (error) {}
};

module.exports = {
  getImage,
};
