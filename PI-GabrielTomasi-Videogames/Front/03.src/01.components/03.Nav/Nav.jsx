import { NavLink } from "react-router-dom";
import SearchBar from "../04.SearchBar/SearchBar";
import { useLocation } from "react-router-dom";
import style from "./Nav.module.css";
const Nav = ({ onSearch }) => {
  const location = useLocation();
  return (
    <nav className={style.nav}>
      <div className={style.navconteiner}>
        {location.pathname === "/home" && (
          <div className={style.SearchBar}>
            <SearchBar onSearch={onSearch} />
          </div>
        )}

        <div className={style.buttonconteiner}>
          <NavLink to="/home">
            <button className={`${style.linkbutton} ${location.pathname === "/home" ? style.active : ""}`}>Home</button>
          </NavLink>
          <NavLink to="/about">
            <button  className={`${style.linkbutton} ${location.pathname === "/about" ? style.active : ""}`}>About</button>
          </NavLink>
          <NavLink to="/form">
            <button  className={`${style.linkbutton} ${location.pathname === "/form" ? style.active : ""}`}>Add your Game</button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
