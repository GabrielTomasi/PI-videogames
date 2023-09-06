import { useSelector } from "react-redux/es/hooks/useSelector";

const FilterOrder = ({ handleOrder, handlerFilter, handlerFilterOrg }) => {
  const genres = useSelector((state) => state.allGenres);
  return (
    <div>
      <label>Ordenar por nombre</label>
      <select onChange={handleOrder} name="Ordenar" id="Ordenar">
        <option value="A">Ascendente A-Z</option>
        <option value="D">Desendente Z-A</option>
        <option value="">Deshacer</option>
      </select>
      <label>Ordenar por rating</label>
      <select onChange={handleOrder}>
        <option value="ratingA">Mayor a menor</option>
        <option value="ratingD">menor a mayor</option>
        <option value="">Deshacer</option>
      </select>
      <label>Filtrar por genero</label>
      <select onChange={handlerFilter}>
        <option value="All">Todos los juegos</option>
        {genres.map((gen, i) => {
          return <option key={i} value={gen.name}>{`${gen.name}`}</option>;
        })}
      </select>
      <label>Filtrar por origen</label>
      <select onChange={handlerFilterOrg}>
        <option value="All">Todos los juegos</option>
        <option value="string">Base de Datos</option>
        <option value="number">API</option>
      </select>
    </div>
  );
};

export default FilterOrder;
