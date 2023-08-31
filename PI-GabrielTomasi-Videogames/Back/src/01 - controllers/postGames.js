const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const URL = "http://api.rawg.io/api/genres";
const { Videogame, conn, Genres } = require("../db");

module.exports = async (
  name,
  description,
  platforms,
  background_image,
  released,
  rating,
  genres
) => {
  try {
    const newGame = await Videogame.create({
      name,
      description,
      platforms,
      background_image,
      released,
      rating,
    });
    if (!newGame) throw Error("no se hizo el jueguito");
    const newVideoGame = genres.map(async (gen) => {
      const genDB = await Genres.findOne({where:{name:gen}})
        await newGame.addGenres(genDB);  
    });
    if (!newVideoGame) throw Error ('no se agrega el gen')
    console.log(newVideoGame);
    return newGame;
  } catch (error) {
    throw Error("no se agrego el juego a la lista");
  }
};
