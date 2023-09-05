import { NavLink } from "react-router-dom"
import style from '../01.LandingPage/LandingPage.module.css'

const LandingPage = ()=>{
    return(
        <div className={style.lp}>
            <h1>PI VIDEOGAMES</h1>
            <NavLink to='/home' className={style.button}><button >Home</button></NavLink>
        </div>
    )
}

export default LandingPage