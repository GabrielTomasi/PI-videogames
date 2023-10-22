const { Videogame, Genres, Platforms } = require("../db");

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
      background_image,
      released,
      rating,
    });
    if (!newGame) throw Error("no se hizo el jueguito");

    const newGameGen = genres.map(async (gen) => {
      const genDB = await Genres.findOne({where:{name:gen}})
        await newGame.addGenres(genDB);  
    });

    const newGamePlat = platforms.map(async(plat)=>{
      const platDB = await Platforms.findOne({where:{name:plat}})
      await newGame.addPlatforms(platDB)
    })
    if (!newGameGen || !newGamePlat) throw Error("no se hizo el jueguito")
    console.log(newGame);
    return newGame;
  } catch (error) {
    throw Error (error.message)
  }
};



