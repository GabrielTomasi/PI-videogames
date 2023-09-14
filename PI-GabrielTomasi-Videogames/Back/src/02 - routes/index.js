const router = require("express").Router();
const getAllGames = require("../01 - controllers/getAllGames");
const detailGame = require("../01 - controllers/detailGame");
const getGenres = require("../01 - controllers/getGenres");
const { Genres, Platforms } = require("../db");
const postGames = require("../01 - controllers/postGames");
const findByName = require("../01 - controllers/findByName");
const getPlatforms = require("../01 - controllers/getPlatforms");
const deleteGame = require('../01 - controllers/deleteGame')

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (!name) {
      const allGames = await getAllGames();
      if (!allGames) res.status(500).send('no se cargaron los juegos');
      res.status(200).json(allGames);
    } else {
      const gamesFounded = await findByName(name);
      if (!gamesFounded) res.status(400).send("No se encontró ninguna coincidencia");

      return res.status(200).json(gamesFounded);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get("/genres", async (req, res) => {
  try {
    const allGen = await getGenres();
    if (!allGen) res.status(500).send("peticion fallida al buscar los generos");

    allGen.forEach(async (gen) => {
      return await Genres.findOrCreate({
        where: { id: gen.id, name: gen.name },
      });
    });

    return res.status(200).json(allGen);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get("/platforms", async (req, res) => {
  try {
    const allPlatforms = await getPlatforms();
    if (!allPlatforms) res.status(500).send("Peticion fallida al buscar las plataformas");
    // allPlatforms.forEach(async (plat) => {
    
    //   return await Platforms.findOrCreate({
    //     where: {
    //       id: plat.id,
    //       name: plat.name,
    //     },
    //   });
    // });
    res.status(200).json(allPlatforms);
  } catch (error) {
    res.status(500).send("Peticion fallida al buscar las plataformas");
  }
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  
  try {
    if (!id) res.status(400).send("información insuficiente");
    const getOneGame = await detailGame(id);
    if (!getOneGame) res.status(500).send("Peticion fallida al buscar por id");
    return res.status(200).json(getOneGame);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  console.log(req);
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
      res.status(400).send("informacion insuficiente");
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
    return res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  try {
    if (!id || typeof id !== "string") res.status(400).send("Game not found")

  const gameDeleted = [await deleteGame(id)];
  console.log(gameDeleted);
  res.status(200).json(gameDeleted)
  } catch (error) {
    res.status(500).json(error.message)
  }
  
  
});

module.exports = router;
