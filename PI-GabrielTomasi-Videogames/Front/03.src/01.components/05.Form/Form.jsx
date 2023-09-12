import { useState } from "react";
import style from "./Form.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { addNewGame } from "../../02.redux/actions";
import { useDispatch } from "react-redux";


const Form = () => {
  const dispatch = useDispatch()
  const plats = useSelector((state) => state.allPlatforms);
  const gens = useSelector((state) => state.allGenres);

  console.log(plats);
  const [defineGame, setDefineGame] = useState({
    name: "",
    description: "",
    background_image: '',
    released: "",
    rating: 0,
    platforms: [],
    genres: [],
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
   
      name === "platforms"
      ? setDefineGame({
          ...defineGame,
          platforms: [...defineGame.platforms, value],
        })
      : name === 'genres' 
      ? setDefineGame({ ...defineGame, genres: [...defineGame.genres, value] })
      :setDefineGame({ ...defineGame, [name]: value })
  };
  console.log(defineGame)
  const handlesubmit = (event) => {
    event.preventDefault()
    dispatch(addNewGame(defineGame))
  };
  return (
    <form className={style.form} onSubmit={handlesubmit}>
      <label htmlFor="name" className={style.formLabel}>
        Nombre del juego
        <input
          type="text"
          name="name"
          value={defineGame.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor="description" className={style.formLabel}>
        Descripción
      </label>
      <textarea
        name="description"
        className={style.formTextarea}
        value={defineGame.description}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="background_image" className={style.formLabel}>
        Imagen
        <input
          type='url'
         
          name="background_image"
          value={defineGame.background_image}
          onChange={handleChange}
        />
      </label>

      <br />
      <label htmlFor="released" className={style.formLabel}>
        Fecha de lanzamiento
        <input
          type="date"
          name="released"
          className={style.formInput}
          value={defineGame.released}
          onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor="background_image" className={style.formLabel}>
        Rating
        <input
          type='number'
          min= '0'
          max='5'
          step='1'
          name="rating"
          value={defineGame.rating}
          onChange={handleChange}
        />
      </label>
      <details>
        <summary htmlFor="platforms">Seleccionar plataformas</summary>
        <div className={style.containerplats}>
          {plats?.map((p, i) => {
            console.log(p);
            return (
              <label key={i} className={style.formLabel}>
                {p.name}
                <input
                  className={style.formInput}
                  type="checkbox"
                  name="platforms"
                  value={p.name}
                  onChange={handleChange}
                />
              </label>
            );
          })}
        </div>
      </details>

      <br />

      <details>
        <summary htmlFor="platforms">Seleccionar géneros</summary>
        <div className={style.containerplats}>
          {gens?.map((p, i) => {
            console.log(p);
            return (
              <label key={i} className={style.formLabel}>
                {p.name}
                <input
                  className={style.formInput}
                  type="checkbox"
                  name="genres"
                  value={p.name}
                  onChange={handleChange}
                />
              </label>
            );
          })}
        </div>
      </details>

      <button type="submit" className={style.formButton}>
        Submit
      </button>
    </form>
  );
};

export default Form;
