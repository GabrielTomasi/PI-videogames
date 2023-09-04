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

  return(
    <div>
        <h2>name:{gameDetail.name}</h2>
        <img src={gameDetail.backgroundimage}/>
        <h3>description: {gameDetail.description}</h3>
        <h3>releaced: {gameDetail.releaced}</h3>
        <h3>platforms:{gameDetail.platforms.map(platform =>{
            return <div> 
                <h4>{platform.name}</h4>
            </div>
        })}</h3>
        <h3>genres:{gameDetail.platforms.map(genre =>{
            return <div> 
                <h4>{genre.name}</h4>
            </div>
        })}</h3>
        <h3>rating:{gameDetail.rating}</h3>
    </div>
  )
};

export default Detail;
