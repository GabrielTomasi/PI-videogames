import { NavLink } from "react-router-dom"
import SearchBar from "../04.SearchBar/SearchBar"
import { useLocation } from "react-router-dom";
import style from './Nav.module.css'
const Nav = ({onSearch})=>{
    const location = useLocation()
    return(
        <nav className={style.nav}>
            {location.pathname === '/home' && (<SearchBar onSearch={onSearch}/>)}
            <NavLink to='/home'><button>Home</button></NavLink>
            <NavLink to='/about'><button>About</button></NavLink>
            <NavLink to='/form'><button>Add your Game</button></NavLink>
        </nav>
    )
}

export default Nav