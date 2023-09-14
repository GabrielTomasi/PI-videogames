import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { detailPage } from "../../02.redux/actions";
import style from "./Detail.module.css";
const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const regexReplace = /<\/?[^>]+(>|$)/g;
  useEffect(() => {
    dispatch(detailPage(id));
  }, []);
  const gameDetail = useSelector((state) => state.detail);
  const detailDesciption = gameDetail?.description?.replace(regexReplace, '')
  const gen = gameDetail?.genres?.map((genre, i) => {
    return (
      <div key={i} className={style.platformGenreItem}>
        <h5>{genre?.name}</h5>
      </div>
    );
  });
  const plat = gameDetail?.platforms?.map((platform, i) => {
    let name = "";
    if (platform.platform) name = platform.platform.name;
    else {
      name = platform.name;
    }

    return (
      <div key={i} className={style.platformGenreItem}>
        <h5>{name}</h5>
      </div>
    );
  });
  return (
    <div className={style.detailContainer}>
      <div className={style.leftSection}>
      <h2>{gameDetail?.name}</h2>
        <div>
          <img src={gameDetail?.background_image} alt={gameDetail?.name} />
        </div>
        <div>
          <h3>DESCRIPTION</h3>
          <p>{detailDesciption}</p>
          <h3>RELEASE DATE</h3>
          <p>{gameDetail?.released}</p>
        </div>
      </div>
      <div className={style.rightSection}>
        <div>
          <h3>PLATAFORMS</h3>
          <div className={style.platformGenreList}>{plat}</div>
        </div>
        <div>
          <h3>GENERES</h3>
          <div className={style.platformGenreList}>{gen}</div>
        </div>
        <div >
          <h3>RATING</h3>
          <p >{gameDetail?.rating}</p>
        </div>
      </div>
    </div>

    
  );
};

export default Detail;


// <div className={style.detailcontainer}>
    //   <h2>{gameDetail?.name}</h2>
    //   <div className={style.imgcontainer}>
    //     <img src={gameDetail?.background_image} alt={gameDetail?.name} />
    //   </div>
    //   <div className={style.infocontainer}>
    //     <h3>DESCRIPCION</h3>
    //     <p>{`${gameDetail?.description}`}</p>
    //     <h3>FECHA DE LANZAMIENTO</h3>
    //     <p>{gameDetail?.released}</p>
    //   </div>
    //   <div className={style.labelcontainer}>
    //     <div className={style.platformscontainer}>
    //       <h3>PLATAFORMAS</h3>
    //       <div className={style.platformgenreitem}>{plat}</div>
    //     </div>
    //     <div className={style.genrescontainer}>
    //       <h3>GENEROS</h3>
    //       <div className={style.platformgenreitem}>{gen}</div>
    //     </div>
    //   </div>
    //   <div className={style.ratingcontainer}>
    //     <h3>RATING</h3>
    //     <p>{gameDetail?.rating}</p>
    //   </div>
    // </div>