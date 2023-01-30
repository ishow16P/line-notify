require("dotenv").config();
const clientId = process.env.CliENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const api_key = process.env.API_KEY;

const randomFood = async () => {
  try {
    const url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?' + new URLSearchParams({
        query: 'Traditional Thai food',
        region: 'Bangkok',
        key: api_key
    });
    console.log(url)
    const response = await fetch(url);
    console.log(response)
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = randomFood;
