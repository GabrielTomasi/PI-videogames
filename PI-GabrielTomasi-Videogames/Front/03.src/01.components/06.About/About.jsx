import image from "../../assets/aboutimage.png";
import linkdin from "./Linkedin-Logo.png";
import github from "./GitHub-Logo.png";
import gmail from "./Gmail_Logo.png";
import style from "./About.module.css";
import Nav from "../03.Nav/Nav";
const About = () => {
  return (
    <div className={style.aboutConteiner}>
      <nav>
        <div className={style.navConteiner}>
          <Nav />
        </div>
      </nav>
      <div className={style.cardAboutContainer}>
        <div className={style.wrapper}>
          <div className={style.imgconteiner}>
            <img src={image} alt="aboutImage" className={style.img} />
          </div>
          <div className={style.textconteiner}>
            <h2>ABOUT ME</h2>
            <div>
              <p>
                ¡Bienvenidos! 😊 Soy un Desarrollador Web Full Stack en búsqueda
                activa de emocionantes oportunidades laborales 💻.
                <br></br>
                Mi pasión por la tecnología me ha llevado a sumergirme en un
                mundo de aprendizaje constante, dominando tecnologías esenciales
                como JavaScript, HTML, CSS y NodeJS. Además, he ampliado mi
                conocimiento al trabajar con diversos marcos de desarrollo,
                tales como React y Express, y he desarrollado habilidades en la
                creación de bases de datos utilizando PostgreSQL.
                <br />
                <br />
                En este proyecto, me aventuré a utilizar la API de  <a
                  href="https://rawg.io/apidocs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Raw.io
                </a>para concebir un buscador de videojuegos, brindando a los usuarios la posibilidad de descubrir sus juegos favoritos, agregar nuevos a su lista, ordenarlos y filtrarlos según sus preferencias, y acceder a información detallada sobre cada título.
                
               
                
                <br />
                <br />
                Si deseas contactarme, aquí tienes mis datos:
                <br />
                <br />
                <a
                  href="https://www.linkedin.com/in/gabrieltomasi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkdin} alt="linkedin" />
                </a>
                <a
                  href="https://github.com/GabrielTomasi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="linkedin" />
                </a>
                <a
                  href="mailto:gabrieltomasi22@gmail.com?Subject=Agenda%20De%20Entrevista%20Para:"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className={style.gmaillogo} src={gmail} alt="linkedin" />
                </a>
                <br />
                <br />
                <br />
                gabrieltomasi22@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
