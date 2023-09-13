const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const URL = "http://api.rawg.io/api/genres";

module.exports = async () => {
  try {
    const respose = await axios.get(`${URL}?key=${API_KEY}`);
    if (!respose) throw Error("la api no responde");
    console.log(respose.data.results);
    return respose.data.results;
  } catch (error) {
    throw Error(error.message);
  }
};
