const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const URL = "https://api.rawg.io/api/games?key=";
const { Videogame, Genres } = require("../db");

module.exports = async () => {
  try {
    const response = await axios.get(`${URL}${API_KEY}&page_size=100&page=1`);
    const result1 = response.data.results;
    const response2 = await axios.get(`${URL}${API_KEY}&page_size=100&page=2`);
    const result2 = response2.data.results;
    const response3 = await axios.get(`${URL}${API_KEY}&page_size=100&page=3`);
    const result3 = response3.data.results;
    const resutlDB = await Videogame.findAll({include:
      {model: Genres,
      as: "genres",
      attributes: ["name"],
      through: { attributes: [] }
    }});
    if (!response || !response2 || !response3) throw Error();
    const allGames = result1.concat(result2).concat(result3).concat(resutlDB);
    const allGamesEstructured = allGames.map(game =>{ 
      return {
        id: game.id,
        name: game.name,
        released: game.released,
        background_image: game.background_image,
        rating: game.rating,
        platforms: game.platforms.map(p => {
          const name = p.platform.name;
          const requirements = p.requirements;
          console.log(requirements);
          if (requirements) return {name:name, requirements: requirements}
          return {name:name}
        }),
        genres: game.genres.map(g => g.name)
      }
    })
    return allGamesEstructured;
  } catch (error) {
    throw Error (error.message)
  }
};
