import { useSelector } from "react-redux/es/hooks/useSelector";
import style from './FilterOrder.module.css'
const FilterOrder = ({ handleOrder, handlerFilter, handlerFilterOrg }) => {
  const genres = useSelector((state) => state.allGenres);

  return (
    <div className={style.filterOrder}>
      <details>
        <summary>Filtros</summary>
        <summary>Alfabetico</summary>
      <select onChange={handleOrder}>
        <option value="">Deshacer</option>
        <option value="A" >Ascendente A-Z</option>
        <option value="D">Desendente Z-A</option>
      </select>
      
      <summary>Rating</summary>
      <select onChange={handleOrder}>
        <option value="">Deshacer</option>
        <option value="ratingA">Mayor a menor</option>
        <option value="ratingD">menor a mayor</option>
      </select>
        
      <summary>Genero</summary>
        <select onChange={handlerFilter}>
        <option value="All">Todos los juegos</option>
        {genres.map((gen, i) => {
          return <option key={i} value={gen.name}>{`${gen.name}`}</option>;
        })}
      </select>
         
      <summary>Origen</summary>
      <select onChange={handlerFilterOrg}>
        <option value="All">Todos los juegos</option>
        <option value="string">Base de Datos</option>
        <option value="number">API</option>
      </select>
      </details>
      
      
      
    </div>
  );
};

export default FilterOrder;
