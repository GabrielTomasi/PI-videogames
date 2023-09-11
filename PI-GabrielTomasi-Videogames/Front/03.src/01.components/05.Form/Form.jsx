import { useState } from 'react';
import style from './Form.module.css'

const Form = () => {
const [defineGame, setDefineGame] = useState({
  name:"",
  description:'',
  released:'',
  platforms:[],
  genres:[]
})
const handleChange = (event)=>{
const name= event.target.value
const description= event.target.value
const released = event.target.value

}
const handlesubmit = (event)=>{
event.preventDefault()
}
  return (
    <form className={style.form} onSubmit={handlesubmit}>
      <label htmlFor="name" className={style.formLabel}>
        Nombre del juego: <input type="text" name="name" value={defineGame.name}/>
      </label>
    <br/>
      <label htmlFor="description" className={style.formLabel}>
        descripcion: <textarea name="description" className={style.formTextarea} value={defineGame.description}/>
      </label>
      <br/>
     
      <label htmlFor="released" className={style.formLabel}>
        Fecha de lanzamiento: <input type="date" name="released" className={style.formInput} value={defineGame.released}/>
      </label>
      <br/>
<p>
    Seleccionar plataformas:
      <label htmlFor="platforms" className={style.formLabel}>
        <input type="checkbox" name="platforms" value="steam" className={style.checkboxLabel}/>
        Steam
      </label>
      <label htmlFor="platforms" className={style.formLabel}>
        <input type="checkbox" name="platforms" value="pc" className={style.checkboxLabel}/>
        PC
      </label>
      <label htmlFor="platforms" className={style.formLabel}>
        <input type="checkbox" name="platforms" value="Consola" className={style.checkboxLabel}/>
        Consola
      </label>
</p>
<br/>
<p>
Seleccionar géneros:
      <label htmlFor="genres">
        <input type="checkbox" name="genres" value="Action" />
        Acción
      </label>
      <label htmlFor="genres">
        <input type="checkbox" name="genres" value="Adventure" />
        Aventura
      </label>
      <label htmlFor="genres">
        <input type="checkbox" name="genres" value="Indie" />
        Indie
      </label>

</p>
<button type="submit" className={style.formButton}>Submit</button>
    </form>
  );
};

export default Form
