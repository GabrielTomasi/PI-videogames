const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const URL = "http://api.rawg.io/api/games";
const { Videogame, Genres, Platforms } = require("../db");
const { Op } = require("sequelize");

module.exports = async (name) => {
  try {
    
    const gamesInDB = await Videogame.findAll({
      where: {name: { [Op.iLike]: `%${name}%` }},
        attributes: [
          "id",
          "name",
          "background_image",
          "released",
          "rating",
        ],
        include:
          {model: Genres,
          as: "genres",
          attributes: ["name"],
          through: { attributes: [] }
        },
        include:{
          model: Platforms,
          as: 'platforms',
          attributes: ['name'],
          through: {attributes:[]}
        }
    });

    const response = await axios.get(
      `${URL}?key=${API_KEY}&search=${name}&page_size=15`
    );

    const allGamesFound = response.data.results.concat(gamesInDB);
      
    if (allGamesFound > 15) {
      allGamesFound.slice(0, 15);
    }

    //console.log(gamesInDB);

    return allGamesFound;
  } catch (error) {
    console.log(error.message);
    throw Error("game not found");
  }
};

