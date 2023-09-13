const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const URL = "https://api.rawg.io/api/games";
const { Videogame, Genres, Platforms } = require("../db");

module.exports = async (id) => {
  try {
    if (isNaN(+id)) {
      const dbFind = await Videogame.findOne({
        where: { id: id },
        include: [
          {
            model: Genres,
            as: "genres",
            attributes: ["name"],
            through: { attributes: [] },
          },
          {
            model: Platforms,
            as: "platforms",
            attributes: ["name"],
            through: { attributes: [] },
          },
        ],
      });
      if (!dbFind) throw Error("No se encuentra el juego en la Base de datos");
      return dbFind;
    }
    else{

        const respose = await axios.get(`${URL}/${id}?key=${API_KEY}`);
        if (!respose) res.status(500).send("No se encuentra el juego en la API");
        return respose.data;
    }
  } catch (error) {
    throw Error (error.message)
  }
};
