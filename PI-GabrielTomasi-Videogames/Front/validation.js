import {useSelector } from "react-redux/es/hooks/useSelector"

export const validation = ({name, description, background_image, released, rating, platforms, genres}, allGames)=>{
console.log(allGames);
const nameSome = allGames.find((game)=> name === game.name)
console.log(nameSome);
 let errors = {}
 const descripcionRegex = /^(.|\s)*[a-zA-Z]+(.|\s)*$/g
 const imageRegex = /(?:(?:https?)+\:\/\/+[a-zA-Z0-9\/\._-]{1,})+(?:(?:jpe?g|png|gif|bmp|webp|pna|tiff|svg))/gsim
//validaciones nombre
if(nameSome) errors.name = 'This game already exist'
if(!descripcionRegex.test(name)) errors.name = 'Cannot include only numbers or special characters'
if(name.length<5 || name.length>30) errors.name = "Must be less than 30 characters"
if(!name) errors.name = 'Must include the name of the game'
//validaciones descripcion
if(descripcionRegex.test(description)) errors.description = 'Cannot include only numbers or special characters'
if(description.length<20 || description.length>500) errors.description = 'The description must include between 20 and 500 characters'
if(!description) errors.description = 'Must include a description'
//validaciones imagen
if(!imageRegex.test(background_image)) errors.background_image = "Must include a valid address"
if(!background_image) errors.background_image = 'Must include an image url'
//validaciones fecha
if(!released) errors.released = 'Must include a release date'
if(rating<1 && rating > 5)errors.rating = 'The rating must be between 0 and 5'
if(!rating) errors.rating = 'Must include game rating'
if(!platforms.length) errors.platforms = "Must include at least one platform"
if(!genres.length) errors.genres = "Must include at least one genre"
 return errors
}

