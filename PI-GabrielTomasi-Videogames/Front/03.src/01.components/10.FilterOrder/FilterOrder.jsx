import { useSelector } from "react-redux/es/hooks/useSelector";
import style from './FilterOrder.module.css'
const FilterOrder = ({ handleOrder, handlerFilter, handlerFilterOrg }) => {
  const genres = useSelector((state) => state.allGenres);

  return (
    <div className={style.filterOrder}>
      <details>
        <summary>Filters</summary>
        <summary>By name</summary>
      <select onChange={handleOrder}>
        <option value="">X</option>
        <option value="A" >A-Z</option>
        <option value="D">Z-A</option>
      </select>
      
      <summary>Rating</summary>
      <select onChange={handleOrder}>
        <option value="">X</option>
        <option value="ratingA">Highest first</option>
        <option value="ratingD">Lowest first </option>
      </select>
        
      <summary>Genres</summary>
        <select onChange={handlerFilter}>
        <option value="All">X</option>
        {genres.map((gen, i) => {
          return <option key={i} value={gen.name}>{`${gen.name}`}</option>;
        })}
      </select>
         
      <summary>Origin</summary>
      <select onChange={handlerFilterOrg}>
        <option value="All">X</option>
        <option value="string">DataBase</option>
        <option value="number">API</option>
      </select>
      </details>
      
      
      
    </div>
  );
};

export default FilterOrder;
