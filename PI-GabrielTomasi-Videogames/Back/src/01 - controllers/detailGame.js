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
            if(dbFind){
                const {name,description,released,rating, background_image,platforms} = dbFind
                return {
                    name,
                    description,
                    released,
                    rating,
                    background_image,
                    platforms
                }
            }

        }
// hola 
        const respose = await axios.get(`${URL}/${id}?key=${API_KEY}`)
        if(!respose) res.status(500).send('No se encuentra el juego en la API')
        if (respose){
            const {name,description,released,rating, background_image,platforms} = respose.data
            return {
                name,
                description,
                released,
                rating,
                background_image,
                platforms
            }
            
        }
        
    } catch (error) {
        return error.message;
    }
}