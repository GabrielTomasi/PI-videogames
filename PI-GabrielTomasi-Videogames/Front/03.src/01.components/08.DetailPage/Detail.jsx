import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { detailPage } from "../../02.redux/actions";
import style from "./Detail.module.css";
const Detail = ({id, toggle, setToggle}) => {
  //const { id } = useParams();
  const dispatch = useDispatch();
  const regexReplace = /<\/?[^>]+(>|$)/g;
  useEffect(() => {
    dispatch(detailPage(id));
  }, []);
  const gameDetail = useSelector((state) => state.detail);
  const detailDesciption = gameDetail?.description?.replace(regexReplace, "");
  const gen = gameDetail?.genres?.map((genre, i) => {
    return <h5 key={i}>{genre?.name}</h5>;
  });
  const plat = gameDetail?.platforms?.map((platform, i) => {
    let name = "";
    if (platform.platform) name = platform.platform.name;
    else {
      name = platform.name;
    }
    console.log(gameDetail);
    return <h5 key={i}>{name}</h5>;
  });
  const handlerclick = ()=>{
    setToggle(!toggle)
  }
  return (
    <div className={style.detailContainer}>
      <button className={style.closebutton} onClick={handlerclick}>X</button>
      <div className={style.wrapper}>
        <div className={style.imgconteiner}>
          <h2>{gameDetail.name}</h2>
          <img src={gameDetail.background_image}/>
          <p>{detailDesciption}</p>
        </div>
        <div className={style.textconteiner}>
          <div className={style.platGenContainer}>

          <div className={style.platforms}>
            <h3>Platforms</h3>
            <div className={style.plat}>{plat}</div>
            
          </div>
          <div className={style.genres}>
            <h3>Genres</h3>
            <div className={style.genr}>{gen}</div>
          </div>
          </div>
          <div className={style.ratingReleaseContainer}>

          <div className={style.rating}>
            <h3>Rating</h3>
            <div className={style.rat}>{gameDetail.rating}</div>
          </div>
          <div className={style.released}>
            <h3>Realease </h3>
            <div className={style.rel}>{gameDetail.released}</div>
          </div>
          </div>
        </div>
      </div>
    </div>
    // <div className={style.detailContainer}>
    //   <div className={style.wrapper}>
    //     <div className={style.imgconteiner}>
    //       <h2>{gameDetail?.name}</h2>
    //       <img src={gameDetail?.background_image} alt={gameDetail?.name} />
    //       <div>
    //         <h3>DESCRIPTION</h3>
    //         <p>{detailDesciption}</p>
    //         <h3>RELEASE DATE</h3>
    //         <p>{gameDetail?.released}</p>
    //       </div>
    //     </div>
    //     <div className={style.textconteiner}>
    //       <h3>PLATAFORMS</h3>
    //       {plat}
    //     <div className={style.genresconteiner}>
    //       <h3>GENERES</h3>
    //       {gen}
    //     </div>
    //     <div>
    //       <h3>RATING</h3>
    //       <p>{gameDetail?.rating}</p>
    //     </div>
    //     </div>
    //   </div>

    //   {/* </div>
    //     <div className={style.rightSection}>
    //        */}
    // </div>
  );
};

export default Detail;
