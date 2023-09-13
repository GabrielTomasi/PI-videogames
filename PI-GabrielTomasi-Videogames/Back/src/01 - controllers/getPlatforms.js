const axios = require ('axios')
require("dotenv").config();
const {API_KEY} = process.env
const URL = "https://api.rawg.io/api/platforms"
const {Platforms} = require("../db");

module.exports = async() =>{
    try {
        const respose = await axios.get(`${URL}?key=${API_KEY}`)
        if(!respose) throw Error ("no se cargaron las plataformas")
        console.log(respose.data.results);
        return respose.data.results
      
    } catch (error) {
        throw Error (error.message)
    }
}