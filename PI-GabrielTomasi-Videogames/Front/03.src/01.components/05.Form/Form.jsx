const Form = () => {
  return (
    <form>
      <label htmlFor="name">
        Nombre del juego: <input type="text" name="name" />
      </label>
    <br/>
      <label htmlFor="description">
        description: <textarea name="description" />
      </label>
      <br/>
     
      <label htmlFor="released">
        Fecha de lanzamiento: <input type="date" name="released" />
      </label>
      <br/>
<p>
    Seleccionar plataformas:
      <label htmlFor="platforms">
        <input type="checkbox" name="platforms" value="steam" />
        Steam
      </label>
      <label htmlFor="platforms">
        <input type="checkbox" name="platforms" value="pc" />
        PC
      </label>
      <label htmlFor="platforms">
        <input type="checkbox" name="platforms" value="Consola" />
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
<button type="submit">Submit</button>
    </form>
  );
};

export default Form
