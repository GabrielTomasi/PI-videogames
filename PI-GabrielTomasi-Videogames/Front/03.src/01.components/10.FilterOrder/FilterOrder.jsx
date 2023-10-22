import { useSelector } from "react-redux/es/hooks/useSelector";
import style from "./FilterOrder.module.css";
const FilterOrder = ({ handleOrder, handlerFilter, handlerFilterOrg }) => {
  const genres = useSelector((state) => state.allGenres);

  return (
    <div className={style.filterOrder}>
<h2>ORDER</h2>
      <select onChange={handleOrder}>
        <option value="">order by Name</option>
        <option value="A">A-Z</option>
        <option value="D">Z-A</option>
      </select>

      <select onChange={handleOrder}>
        <option value="">order by Rating</option>
        <option value="ratingA">Highest first</option>
        <option value="ratingD">Lowest first </option>
      </select>
      <h2>FILTER</h2>
      <select onChange={handlerFilter}>
        <option value="All">Filter by Genres</option>
        {genres.map((gen, i) => {
          return <option key={i} value={gen.name}>{`${gen.name}`}</option>;
        })}
      </select>

      <select onChange={handlerFilterOrg}>
        <option value="All">Filter by Source</option>
        <option value="string">DataBase</option>
        <option value="number">API</option>
      </select>
    </div>
  );
};

export default FilterOrder;
