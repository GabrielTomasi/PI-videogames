import style from "./Home.module.css";
import Card from "../07.Card/Card";
import Nav from "../03.Nav/Nav";
import Pagination from "../09.Pagination/Pagination";
import FilterOrder from "../10.FilterOrder/FilterOrder";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  gamesList,
  orderGames,
  filterGames,
  filterGamesOrg,
  searchByName
} from "../../02.redux/actions";

const Home = ({ handlePageChange }) => {
  const dispatch = useDispatch();
  const [games, setGames] = useState([]);
  const allGames = useSelector((state) => state.allGames);
  useEffect(() => {
    axios
      .get("http://localhost:3001/videogames/")
      .then(({ data }) => {
        if (data.length) {
          setGames(data);
        } else {
          window.alert("No se cargaron los juegos");
        }
        dispatch(gamesList());
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const currentPage = useSelector((state) => state.currentPage);
  const gamesPerPage = 15;
  const totalPage = Math.ceil(allGames.length / gamesPerPage);
  const startIndex = (currentPage - 1) * gamesPerPage;
  const endIndex = startIndex + gamesPerPage;
  const currentGames = allGames.slice(startIndex, endIndex);
 
  console.log(currentGames);

  const renderCard = currentGames?.map((game, index) => {
    return (
      <Card
        key={index}
        id={game?.id}
        name={game?.name}
        background_image={game?.background_image}
        rating={game?.rating}
      />
    );
  });

  
  const handleOrder = (event) => {
    dispatch(orderGames(event.target.value));
  };
  const handlerFilter = (event) => {
    dispatch(filterGames(event.target.value));
  };
  const handlerFilterOrg = (event) => {
    dispatch(filterGamesOrg(event.target.value));
  };
  const onSearch = (name) => {
    name === "" ? dispatch(gamesList()) : dispatch(searchByName(name));
  };

  return (
    <div className={style.homecontainer}>
      <div className={style.navPag}>
        <Nav onSearch={onSearch} />
        <Pagination
          currentPage={currentPage}
          totalPage={totalPage}
          onPageChange={handlePageChange}
        />
      </div>
      <div className={style.filterCards}>

      <div className={style.filters}>
        <FilterOrder
          handleOrder={handleOrder}
          handlerFilter={handlerFilter}
          handlerFilterOrg={handlerFilterOrg}
        />
      </div>
        <div className={style.cardcontainer}>{renderCard} </div>
      </div>
    </div>
  );
};

export default Home;
