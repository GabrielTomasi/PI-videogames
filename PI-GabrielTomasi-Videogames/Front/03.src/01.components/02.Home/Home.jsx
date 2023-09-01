import Card from "../07.Card/Card";
import { useEffect } from "react";
import { gamesList } from "../../02.redux/actions";
import { useDispatch, useSelector } from "react-redux";

import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const allvideogames = useSelector((state) => state.allGames);

  useEffect(() => {
    dispatch(gamesList());
  }, []);

  return (
    <div className={style.div}>
      {allvideogames?.map((game, index) => {
        return (
          <Card
            key={index}
            name={game?.name}
            background_image={game?.background_image}
            rating={game?.rating}
          />
        );
      })}
    </div>
  );
};

export default Home;
