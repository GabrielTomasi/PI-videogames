const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const URL = "https://api.rawg.io/api/games?key=";
const { Videogame, Genres, Platforms } = require("../db");

// module.exports = async () => {
//   try {
//     const response = await axios.get(`${URL}${API_KEY}&page_size=100&page=1`);
//     const result1 = response.data.results;
//     const response2 = await axios.get(`${URL}${API_KEY}&page_size=100&page=2`);
//     const result2 = response2.data.results;
//     const response3 = await axios.get(`${URL}${API_KEY}&page_size=100&page=3`);
//     const result3 = response3.data.results;
//     const resutlDB = await Videogame.findAll({include:[{model: Genres,
//       as: "genres",
//       attributes: ["name"],
//       through: { attributes: [] }
//     },
//     {model: Platforms,
//       as: "platforms",
//       attributes: ["name"],
//       through: { attributes: [] }
//     }]
//   });
//     if (!response || !response2 || !response3) throw Error("No se obtuvo respuesta");
//     const allGames = result1.concat(result2).concat(result3).concat(resutlDB);
//     const allGamesEstructured = allGames.map(game =>{ 
//       return {
//         id: game.id,
//         name: game.name,
//         released: game.released,
//         background_image: game.background_image,
//         rating: game.rating,
//         platforms: game.platforms.map(p => {
//           if (p.platform) {return p.platform.name}
//           return p.name
//         }),
//         genres: game.genres.map(g => g.name)
//       }
//     })
//     return allGamesEstructured;
//   } catch (error) {
//     throw Error (error.message)
//   }
// };

module.exports = async () => {
  try {
    // Usar Promise.all para hacer múltiples solicitudes a la API en paralelo
    const [response1, response2, response3, dbData] = await Promise.all([
      axios.get(`${URL}${API_KEY}&page_size=100&page=1`),
      axios.get(`${URL}${API_KEY}&page_size=100&page=2`),
      axios.get(`${URL}${API_KEY}&page_size=100&page=3`),
      Videogame.findAll({
        include: [
          {
            model: Genres,
            as: 'genres',
            attributes: ['name'],
            through: { attributes: [] },
          },
          {
            model: Platforms,
            as: 'platforms',
            attributes: ['name'],
            through: { attributes: [] },
          },
        ],
      }),
    ]);

    if (!response1 || !response2 || !response3) {
      throw new Error('No se obtuvo respuesta de la API externa');
    }

    const [result1, result2, result3] = [
      response1.data.results,
      response2.data.results,
      response3.data.results,
    ];

    const allGames = result1.concat(result2, result3, dbData);

    // Usar map para estructurar los datos
    const allGamesEstructured = allGames.map((game) => {
      return {
        id: game.id,
        name: game.name,
        released: game.released,
        background_image: game.background_image,
        rating: game.rating,
        platforms: game.platforms.map((p) =>
          p.platform ? p.platform.name : p.name
        ),
        genres: game.genres.map((g) => g.name),
      };
    });

    return allGamesEstructured;
  } catch (error) {
    throw new Error(error.message);
  }
};