const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const URL = "https://api.rawg.io/api/games?key=";
const { Videogame, conn } = require("../db");

module.exports = async () => {
  try {
    const response = await axios.get(`${URL}${API_KEY}&page_size=100&page=1`);
    const result1 = response.data.results;
    const response2 = await axios.get(`${URL}${API_KEY}&page_size=100&page=2`);
    const result2 = response2.data.results;
    const response3 = await axios.get(`${URL}${API_KEY}&page_size=100&page=3`);
    const result3 = response3.data.results;
    const resutlDB = await Videogame.findAll();
    if (!response || !response2 || !response3)
      throw Error("la api no responde");
    const allGames = result1.concat(result2).concat(result3).concat(resutlDB);

    return allGames;
  } catch (error) {
    res.send(error.message);
  }
};
