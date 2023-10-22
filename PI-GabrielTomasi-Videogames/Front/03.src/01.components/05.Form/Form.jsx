import { useState, useEffect } from "react";
import style from "./Form.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { addNewGame } from "../../02.redux/actions";
import { useDispatch } from "react-redux";
import { validation } from "../../../validation";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const navigate = useNavigate()
 
  const dispatch = useDispatch()
  const plats = useSelector((state) => state.allPlatforms);
  const gens = useSelector((state) => state.allGenres);
  const allGames = useSelector((state)=>state.allGames)
  console.log(allGames);
  const [defineGame, setDefineGame] = useState({
    name: "",
    description: "",
    background_image: '',
    released: "",
    rating: 0,
    platforms: [],
    genres: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    background_image: '',
    released: "",
    rating: 0,
    platforms: [],
    genres: [],
  })

  useEffect(()=>{
    setErrors(validation(defineGame, allGames))
   
  },[defineGame])


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
   
      if (name === "platforms"){
        setDefineGame({
          ...defineGame,
          platforms: [...defineGame.platforms, value],
        }) 
        setErrors(validation({
          ...defineGame,
          platforms: [...defineGame.platforms, value],
        }))
      }
      
      else if (name === 'genres') {
        setDefineGame({ ...defineGame, genres: [...defineGame.genres, value]})
        setErrors(validation({ ...defineGame, genres: [...defineGame.genres, value]}))
      }
      else{
        setDefineGame({ ...defineGame, [name]: value })
        setErrors(validation({ ...defineGame, [name]: value }))

      }
  };
  console.log(defineGame)

  const handlesubmit = (event) => {
      
    dispatch(addNewGame(defineGame))
    // navigate('/home')

  };
  console.log(errors);
  return (
    <form className={style.form} onSubmit={handlesubmit}>
      <label htmlFor="name" className={style.formLabel}>
        Game Name
        <input
          type="text"
          name="name"
          value={defineGame.name}
          onChange={handleChange}
        />
      </label>
    
      {errors.name && <span className={style.validation}>{errors.name}</span>}
      <br />
      <label htmlFor="description" className={style.formLabel}>
        Description
      </label>
      <textarea
        name="description"
        className={style.formTextarea}
        value={defineGame.description}
        onChange={handleChange}
      />
      
      {errors.description && <span className={style.validation}>{errors.description}</span>}
      <br />
      <label htmlFor="background_image" className={style.formLabel}>
        Image
        <input
          type='url'
          name="background_image"
          value={defineGame.background_image}
          onChange={handleChange}
        />
      </label>
    
      {errors.background_image && <span className={style.validation}>{errors.background_image}</span>}
      <br />
      <label htmlFor="released" className={style.formLabel}>
        Release Date
        <input
          type="date"
          name="released"
          className={style.formInput}
          value={defineGame.released}
          onChange={handleChange}
        />
      </label>
     
      {errors.released && <span className={style.validation}>{errors.released}</span>}
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
        <summary htmlFor="platforms">Platforms</summary>
        <div className={style.containerplats}>
          {plats?.map((p, i) => {
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

      
      {errors.platforms && <span className={style.validation}>{errors.platforms}</span>}
      <br />
      <details>
        <summary htmlFor="platforms">Genres</summary>
        <div className={style.containerplats}>
          {gens?.map((p, i) => {
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
      {errors.genres && <span className={style.validation}>{errors.genres}</span>}
     {
      
      <button type="submit" className={style.formButton}>
        Submit
      </button>
     }
    </form>
  );
};

export default Form;
