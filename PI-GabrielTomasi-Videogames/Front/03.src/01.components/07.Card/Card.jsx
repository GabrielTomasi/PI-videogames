import style from './Card.module.css'


const Card = ({name, background_image, rating})=>{
return(
    <div className={style.div}>
        <img src={background_image} alt = {name} className={style.img}/>
        <h3>{name}</h3>
        <h4>rating: {rating}</h4>
    </div>
)
}

export default Card;