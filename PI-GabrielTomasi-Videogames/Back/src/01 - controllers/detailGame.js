const axios = require ('axios')
require("dotenv").config();
const {API_KEY} = process.env
const URL = "https://api.rawg.io/api/games"
const {Videogame, conn} = require ('../db')

module.exports = async(id) =>{
    try {
        if(isNaN(+id)){
            const dbFind = await Videogame.findOne({where:{id:id}})
            if(!dbFind) throw Error ('No se encuentra el juego en la Base de datos')
            return dbFind
            

        }

        const respose = await axios.get(`${URL}/${id}?key=${API_KEY}`)
        if(!respose) res.status(500).send('No se encuentra el juego en la API')
        return respose.data
        
    } catch (error) {
        return error.message;
    }
}