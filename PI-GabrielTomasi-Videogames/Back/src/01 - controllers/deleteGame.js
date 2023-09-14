const {Videogame}  = require ('../db') 

module.exports = deleteGame = async (id)=>{
    console.log(typeof id);
    try {
       const destroy=  await Videogame.destroy({where:{id:id}})
       
        const allGames = [await Videogame.findAll()]
        return allGames
    } catch (error) {
        throw Error ({error: error.message})
    }
}