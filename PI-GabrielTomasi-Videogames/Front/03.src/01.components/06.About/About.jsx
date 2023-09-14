import image from '../../assets/aboutimage.png'
import style from './About.module.css'
const About = () => {
    return (
      <div className={style.conteiner}>
        {/* <img className={style.img}src={image} alt="Mi Imagen" /> */}
        <div >
          <h2>ABOUT ME</h2>
          <div className={style.textconteiner}>

          <p>
            ¡Hola! Soy Gabriel Tomasi, un apasionado desarrollador de software
            freelance con un entusiasmo desbordante por la tecnología y la
            programación. Mi viaje en el mundo del desarrollo comenzó hace poco,
            pero estoy ansioso por enfrentar nuevos desafíos y aprender cada día.
          </p>
          <p>
            Mi enfoque principal es crear soluciones innovadoras y funcionales
            para mis clientes. Me esfuerzo por traducir ideas en código y
            transformar problemas en soluciones efectivas.
          </p>
          <p>
            Como freelancer, tengo la flexibilidad de trabajar en una variedad de
            proyectos y colaborar con personas de diferentes industrias. Mi
            objetivo es ayudarte a llevar a cabo tus proyectos tecnológicos de
            manera eficiente y con la mejor calidad posible.
          </p>
          <p>
            Si tienes una idea o un proyecto en mente, ¡estaré encantado de
            escucharte! No dudes en ponerse en contacto conmigo para discutir cómo
            puedo ayudarte a hacer que tus ideas cobren vida.
          </p>
          </div>
        </div>
      </div>
    );
  };
export default About