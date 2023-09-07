import style from "./Home.module.css";
import Card from "../07.Card/Card";
import Pagination from "../09.Pagination/Pagination";
import FilterOrder from "../10.FilterOrder/FilterOrder";
const Home = ({currentGames, currentPage, totalPage, handlePageChange, handleOrder, handlerFilter, handlerFilterOrg}) => {
  
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

  return (
    <div className={style.homecontainer}>
    <div className={style.homecontent}>
      <Pagination currentPage={currentPage} totalPage={totalPage} onPageChange={handlePageChange} />
      <FilterOrder handleOrder={handleOrder} handlerFilter={handlerFilter} handlerFilterOrg={handlerFilterOrg}/>
    </div>
    <div className={style.cardcontainer}>
      {renderCard}
    </div>
    </div>
  );
};

export default Home;
