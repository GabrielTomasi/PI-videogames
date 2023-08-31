import { NavLink } from "react-router-dom"
import SearchBar from "../04.SearchBar/SearchBar"
import { useLocation } from "react-router-dom";
const Nav = ()=>{
    const location = useLocation()
    return(
        <nav>
            {location.pathname === '/home' && (<SearchBar />)}
            <NavLink to='/'><button>Landing Page</button></NavLink>
            <NavLink to='/home'><button>Home</button></NavLink>
            <NavLink to='/about'><button>About</button></NavLink>
            <NavLink to='/fav'><button>My Favorites</button></NavLink>
            <NavLink to='/form'><button>Add your Game</button></NavLink>
        </nav>
    )
}

export default Nav