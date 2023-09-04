import style from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {setcurrentPage, gamesList} from '../../02.redux/actions'
import Card from "../07.Card/Card";
import Pagination from "../../08.Pagination/Pagination";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch (gamesList())},[])
    
  const allvideogames = useSelector((state) => state.allGames);
  console.log(allvideogames);
  const currentPage = useSelector((state) => state.currentPage);
  console.log(currentPage);
  const gamesPerPage = 15;
  const totalPage = Math.ceil(allvideogames.length / gamesPerPage)
  console.log(totalPage);

  const startIndex = (currentPage - 1) * gamesPerPage;
  const endIndex = startIndex + gamesPerPage;

  const currentGames = allvideogames.slice(startIndex, endIndex);

  const handlePageChange = (numPage)=>{
    dispatch(setcurrentPage(numPage))
  }
  const renderCard = currentGames.map((game, index) => {
    return (
      <Card
        key={index}
        name={game?.name}
        background_image={game?.background_image}
        rating={game?.rating}
      />
    );
  });

  return (
    <div >
    <div>
      <Pagination currentPage={currentPage} totalPage={totalPage} onPageChange={handlePageChange} />
    </div>
    <div className={style.div}>
      {renderCard}
    </div>
    </div>
  );
};

export default Home;
