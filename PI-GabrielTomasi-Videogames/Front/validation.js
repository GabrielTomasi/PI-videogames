export const validation = ({name, description, background_image, released, rating, platforms, genres})=>{
 let errors = {}
 const descripcionRegex = /^(.|\s)*[a-zA-Z]+(.|\s)*$/g
 const imageRegex = /(?:(?:https?)+\:\/\/+[a-zA-Z0-9\/\._-]{1,})+(?:(?:jpe?g|png|gif|bmp|webp|pna|tiff|svg))/gsim
//validaciones nombre
if(!descripcionRegex.test(name)) errors.name = 'no puede incluir solo numeros o caracteres especiales'
if(name.length<5 || name.length>30) errors.name = "Debe ser menor a 30 caracteres"
if(!name) errors.name = 'Debe incluir el nombre del juego'
//validaciones descripcion
if(!descripcionRegex.test(description)) errors.description = 'no puede incluir solo numeros o caracteres especiales'
if(description.length<20 || description.length>200) errors.description = 'La descripcion debe incluir entre 20 y 200 caracteres'
if(!description) errors.description = 'Debe incluir una descripcion'
//validaciones imagen
if(!imageRegex.test(background_image)) errors.background_image = "Debe incluir una direccion valida"
if(!background_image) errors.background_image = 'Debe incluir una url de una imagen'
//validaciones fecha
if(!released) errors.released = 'Debe incluir una fecha de lanzamiento'
if(rating<0 && rating > 5)errors.rating = 'el rating debe ser entre 0 y 5'
if(!rating) errors.rating = 'Debe incluir el rating del juego'
if(!platforms.length) errors.platforms = "Debe incluir al menos una plataforma"
if(!genres.length) errors.genres = "Debe incluir al menos un genero"
 return errors
}

