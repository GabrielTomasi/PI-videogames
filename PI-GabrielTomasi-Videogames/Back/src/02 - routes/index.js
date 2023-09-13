const router = require("express").Router();
const getAllGames = require("../01 - controllers/getAllGames");
const detailGame = require("../01 - controllers/detailGame");
const getGenres = require("../01 - controllers/getGenres");
const { Genres, Platforms } = require("../db");
const postGames = require("../01 - controllers/postGames");
const findByName = require("../01 - controllers/findByName");
const getPlatforms = require("../01 - controllers/getPlatforms");


router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (!name) {
      const allGames = await getAllGames();
      if (!allGames) throw Error();
      res.status(200).json(allGames);
    } else {
      const gamesFounded = await findByName(name);
      if (!gamesFounded) throw Error("No se encontró ninguna coincidencia");

      return res.status(200).json(gamesFounded);
    }
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
});

router.get("/genres", async (req, res) => {
  try {
    const allGen = await getGenres();
    if (!allGen) throw Error("peticion fallida al buscar los generos");

    allGen.forEach(async (gen) => {
      return await Genres.findOrCreate({
        where: { id: gen.id, name: gen.name },
      });
    });

    return res.status(200).json(allGen);
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
});

router.get("/platforms", async (req, res) => {
  try {
    const allPlatforms = await getPlatforms();
    if(!allPlatforms) throw Error ("peticion fallida al buscar las plataformas")

    allPlatforms.forEach(async (plat)=>{
      return await Platforms.findOrCreate({
        where:{
          id:plat.id,
          name:plat.name
        }
      })
    })
    return res.status(200).json(allPlatforms)
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) throw Error();
    const getOneGame = await detailGame(id);
    if (!getOneGame) throw Error("peticion fallida al buscar por id");
    return res.status(200).json(getOneGame);
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
});

router.post("/", async (req, res) => {
  console.log(req)
  const {
    name,
    description,
    platforms,
    background_image,
    released,
    rating,
    genres,
  } = req.body;
  try {
    if (
      !name ||
      !description ||
      !platforms ||
      !background_image ||
      !released ||
      !rating
    )
      throw Error("informacion insuficiente");
    const newGame = await postGames(
      name,
      description,
      platforms,
      background_image,
      released,
      rating,
      genres
    );
    return res.status(200).json(newGame);
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
});

module.exports = router;
