const axios = require ('axios')
require("dotenv").config();
const {API_KEY} = process.env
const URL = "http://api.rawg.io/api/genres"

module.exports = async() =>{
    try {
        const respose = await axios.get(`${URL}?key=${API_KEY}`)
        if(!respose) throw Errror('status 500: la api no responde')
        console.log(respose);
        return respose.data.results
    } catch (error) {
       return error.message;
    }
}