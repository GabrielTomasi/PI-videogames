import { NavLink } from "react-router-dom";
import style from "../01.LandingPage/LandingPage.module.css";
import image from "../01.LandingPage/WallpaperDog-20525189.jpg";
const LandingPage = () => {
  return (
    <div className={style.container}>
      <div className={style.firefly}></div>
      <div className={style.firefly}></div>
      <div className={style.firefly}></div>
      <div className={style.firefly}></div>
      <div className={style.firefly}></div>
      <div className={style.firefly}></div>
      <div className={style.firefly}></div>
      <div className={style.firefly}></div>
      <div className={style.firefly}></div>
      <div className={style.firefly}></div>
      <div className={style.firefly}></div>
      <div className={style.firefly}></div>
      <div className={style.firefly}></div>
      <div className={style.firefly}></div>
      <div className={style.firefly}></div>
      <div className={style.firefly}></div>
      <div className={style.firefly}></div>
      <div className={style.firefly}></div>
      <div className={style.firefly}></div>
      {/* <img className={style.image}src={image} alt="image"/> */}
      <NavLink to="/home" className={style.NavLink}>
        <button className={style.button}>
          <div className={style.neontext}>VIDEOGAMES</div>
        </button>
      </NavLink>
    </div>
  );
};

export default LandingPage;
