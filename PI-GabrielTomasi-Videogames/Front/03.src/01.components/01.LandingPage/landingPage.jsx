import { NavLink } from "react-router-dom"
import style from '../01.LandingPage/LandingPage.module.css'
import image from '../01.LandingPage/WallpaperDog-20525189.jpg'
const LandingPage = ()=>{
    return(
        <div className={style.conteiner}>
            <img className={style.image}src={image} alt="image"/>
            <NavLink to='/home' className={style.NavLink}><button className={style.button}>Home</button></NavLink>
        </div>
    )
}

export default LandingPage