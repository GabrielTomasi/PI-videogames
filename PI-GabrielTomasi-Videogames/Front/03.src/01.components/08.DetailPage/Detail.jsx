import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { detailPage } from "../../02.redux/actions";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailPage(id));
  }, []);
  const gameDetail = useSelector((state) => state.detail);
  const gen = gameDetail?.genres?.map((genre) => {
    return (
      <div>
        <h5>{genre?.name}</h5>
      </div>
    );
  });
  const plat = gameDetail?.platforms?.map((platform) => {
    console.log(platform);
    const name = platform.platform.name;
    const requirements = platform.requirements;
    console.log(requirements);
    return (
      <div>
        <h5>{name}</h5>
        {name==='PC' && (
          <div>
            <h5>requirement:</h5>
            minimum: {requirements.minimum}
            recomended: {requirements.recommended}
          </div>
        )}
      </div>
    );
  });
  return (
    <div>
      <h2>name:{gameDetail?.name}</h2>
      <img src={gameDetail?.background_image} alt={gameDetail?.name} />
      <h3>description: </h3>
      {gameDetail?.description}
      <h3>released: {gameDetail?.released}</h3>
      <h3>platforms: {plat}</h3>
      <h3>genres:{gen}</h3>
      <h3>rating:{gameDetail?.rating}</h3>
    </div>
  );
};

export default Detail;
