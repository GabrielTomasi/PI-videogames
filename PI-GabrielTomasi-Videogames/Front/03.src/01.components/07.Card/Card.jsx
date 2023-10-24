import style from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Detail from "../08.DetailPage/Detail";
const Card = ({ id, name, background_image, rating }) => {
  const [toggle, setToggle] = useState(false)

  const handlerclick = ()=>{
    setToggle(!toggle)
  }
  return (
    <>
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.imgconteiner}>
            <img src={background_image} alt={name} className={style.img}/>
        </div>
        <div className={style.textconteiner}>
          <h2>{name}</h2>
          <h4>rating: {rating}</h4>
        </div>
        <div className={style.buttonconteiner}>
          <button className={style.detailbutton} onClick={handlerclick}>Detail</button>
        </div>
      </div>
    </div>
    {toggle? <div className={style.modal}> {<Detail id={id} toggle={toggle} setToggle={setToggle}/>}</div> : ""}
    </>
  );
};

export default Card;
