const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const URL = "https://api.rawg.io/api/platforms";
const {Platforms} = require ('../db')

module.exports = async () => {
  try {
    const respose = await axios.get(`${URL}?key=${API_KEY}`);
    if (!respose) throw Error("no se cargaron las plataformas");
    const data = respose.data.results
    data.forEach( async plat => {
        return await Platforms.findOrCreate({
            where: {
              id: plat.id,
              name: plat.name,
            },
          });
    });
    return data;
  } catch (error) {
    throw Error(error.message);
  }
};
