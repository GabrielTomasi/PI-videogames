import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { detailPage } from "../../02.redux/actions";
import style from "./Detail.module.css"
const Detail = () => {
  
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailPage(id));
  }, []);
  const gameDetail = useSelector((state) => state.detail);
  const gen = gameDetail?.genres?.map((genre) => {
    return (
      <div className={style.gameDetail}>
        <h5 className={style.listPlatAndGen}>{genre?.name.toUpperCase()}</h5>
      </div>
    );
  });
  const plat = gameDetail?.platforms?.map((platform) => {
   
    const name = platform.platform.name;
    const requirements = platform.requirements;
   
    return (
      <div className={style.gameDetail}>
        <h5 className={style.listPlatAndGen}>{name.toUpperCase()}</h5>        
      </div>
    );
  });
  return (
    <div className={style.gameDetail}>
      <h2 className={style.gameName}>{gameDetail?.name}</h2>
      <img className={style.gameImage} src={gameDetail?.background_image} alt={gameDetail?.name} />
      <h3 className={style.gameDescription}>DESCRIPCION </h3>
      <p className={style.gameDescriptionText}>{gameDetail?.description}</p>
      <h3 className={style.gameReleased}>FECHA DE LANZAMIENTO </h3>
      <p className={style.gameDescriptionText}>{gameDetail?.released}</p>
      <h3 className={style.gamePlatforms}>PLATAFORMAS</h3>
      <p className={style.gameDescriptionText}>{plat}</p>
      <h3 className={style.gameGenres}>GENEROS</h3>
      <p className={style.gameDescriptionText}>{gen}</p>
      <h3 className={style.gameRating}>RATING</h3>
      <p className={style.gameDescriptionText}>{gameDetail?.rating}</p>
    </div>
  );
};

export default Detail;
