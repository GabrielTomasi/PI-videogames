import style from "./Card.module.css";
import { NavLink } from "react-router-dom";

const Card = ({ id, name, background_image, rating }) => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.imgconteiner}>
          <NavLink to={`/detail/${id}`}>
            <img src={background_image} alt={name} className={style.img}/>
          </NavLink>
        </div>
        <div className={style.textconteiner}>
          <h2>{name}</h2>
          <h4>rating: {rating}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
