import { orderGames, filterGames } from "../../02.redux/actions";
import { useDispatch } from "react-redux";

const FilterOrder = () => {
  const dispatch = useDispatch();
  const handleOrder = (event) => {
    dispatch(orderGames(event.target.value));
  };
  const handlerFilter = (event) => {
    dispatch(filterGames(event.target.value));
  };
  return (
    <div>
        <label>Ordenar</label>
      <select onChange={handleOrder} name="Ordenar" id="Ordenar">
      <option value="Selecciona" >Ordenar</option>
        <option value="A">Ascendente</option>
        <option value="D">Desendente</option>
        <option value="ratingA">Mejor valuados</option>
        <option value="ratingD">Peor valuados</option>
      </select>
      <select onChange={handlerFilter}>
        <option value="Action">Action</option>
        <option value="RPG">RPG</option>
        <option value="Indie">Indie</option>
        <option value="Strategy">Strategy</option>
        <option value="Adventure">Adventure</option>
        <option value="Shooter">Shooter</option>
        <option value="Casual">Casual</option>
        <option value="Simulation">Simulation</option>
        <option value="Puzzle">Puzzle</option>
        <option value="Arcade">Arcade</option>
        <option value="Platformer">Platformer</option>
        <option value="Massively Multiplayer">Massively Multiplayer</option>
        <option value="Racing">Racing</option>
        <option value="Fighting">Fighting</option>
        <option value="Sports">Sports</option>
        <option value="Family">Family</option>
        <option value="Board Games">Board Games</option>
        <option value="Educational">Educational</option>
        <option value="Card">Card</option>
        <option value="All">All</option>
      </select>
    </div>
  );
};

export default FilterOrder;
