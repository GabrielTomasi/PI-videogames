const router = require("express").Router();
const getAllGames = require("../01 - controllers/getAllGames");
const detailGame = require("../01 - controllers/detailGame");
const getGenres = require("../01 - controllers/getGenres");
const { Genres, conn } = require("../db");
const postGames = require("../01 - controllers/postGames");
const findByName = require("../01 - controllers/findByName");

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (!name) {
      const allGames = await getAllGames();
      if (!allGames) throw Error("me rompi");
      res.status(200).json(allGames);
    } else {
      const gamesFounded = await findByName(name);
      if (!gamesFounded) throw Error("No se encontró ninguna coincidencia");

      res.status(200).json(gamesFounded);
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/genres", async (req, res) => {
  try {
    const allGen = await getGenres();
    if (!allGen) throw Error("peticion fallida al buscar los generos");

    allGen.forEach(async (gen) => {
      return await Genres.findOrCreate({ where: { id: gen.id, name: gen.name } });
    });

    res.status(200).json(allGen);
  } catch (error) {
    res.send(error.message);
  }
});


router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) throw Error("Game not found");
    const getOneGame = await detailGame(id);
    if (!getOneGame) throw Error("peticion fallida al buscar por id");
    res.json(getOneGame);
  } catch (error) {
    res.send(error.message);
  }
});

router.post("/", async (req, res) => {
  const {
    name,    description,    platforms,    background_image,    released,    rating,    genres,  } = req.body;
  try {
    if (      !name ||      !description ||      !platforms ||      !background_image ||      !released ||      !rating    )
      throw Error("informacion insuficiente");
    await postGames(
      name,
      description,
      platforms,
      background_image,
      released,
      rating,
      genres
    );
    res.status(200).send("Juego agregado con éxito");
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
