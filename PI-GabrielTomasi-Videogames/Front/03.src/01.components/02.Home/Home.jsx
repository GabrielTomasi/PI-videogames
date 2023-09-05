import style from "./Home.module.css";
import Card from "../07.Card/Card";
import Pagination from "../09.Pagination/Pagination";
import FilterOrder from "../10.FilterOrder/FilterOrder";
const Home = ({currentGames, currentPage, totalPage, handlePageChange}) => {
  
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
      <FilterOrder />
    </div>
    <div className={style.div}>
      {renderCard}
    </div>
    </div>
  );
};

export default Home;
