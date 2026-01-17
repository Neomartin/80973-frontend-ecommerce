import OurServices from "./our-services/OurServices";

function Home() {
  return (
    <>
      <h1> Cursos asincrónicos </h1>
      <section className="cursos-cards">
        {/* Card section */}
        <div className="card-container">
          <div className="card-wrapper">
            <article className="card">
              <div className="card-header">
                {/* Imagen e iconos */}
                <img
                  className="card-img card-image-1"
                  src="/assets/images/card_scratch.png"
                  alt="scratch principal"
                />
                <div className="actions">
                  <i className=" fa-regular fa-heart" />
                  <i className=" fa-regular fa-eye" />
                </div>
              </div>
              <div className="card-main">
                {/* Descripcion del producto/servicio */}
                <div className="card-top">
                  <h4 className="card-category">Programación</h4>
                  <span className="card-date">01/03/2024</span>
                </div>
                <h3 className="card-title">Scratch para Docentes</h3>
                <p className="card-description">
                  Llevá a tus estudiantes el pensamiento lógico y creativo a
                  través de este curso de Scratch para docentes de todas las
                  áreas.{" "}
                </p>
                <div className="card-price">
                  <span className="price">
                    <small>$</small>17300
                  </span>
                  <span className="normal-price">
                    <small>$</small>21625
                  </span>
                </div>
              </div>
              <div className="card-footer">
                <button className="add-to-cart">
                  Añadir <i className="fa-solid fa-cart-shopping" />
                </button>
                <a href="/pages/product-detail.html">
                  <button className="more-info">
                    Más info
                    <i className="fa-solid fa-circle-info" />
                  </button>
                </a>
              </div>
            </article>
          </div>
          <div className="card-wrapper">
            <article className="card">
              <div className="card-header">
                {/* Imagen e iconos */}
                <img
                  className="card-img card-image-1"
                  src="/assets/images/card_hd.png"
                  alt="scratch principal"
                />
                <div className="actions">
                  <i className=" fa-regular fa-heart" />
                  <i className=" fa-regular fa-eye" />
                </div>
              </div>
              <div className="card-main">
                {/* Descripcion del producto/servicio */}
                <div className="card-top">
                  <h4 className="card-category">Educación</h4>
                  <span className="card-date">01/03/2024</span>
                </div>
                <h3 className="card-title">
                  Herramientas digitales para docentes
                </h3>
                <p className="card-description">
                  {" "}
                  Podrán, desde cualquier área, aprender herramientas digitales
                  para desarrollar contenido, planificar y trabajar de manera
                  colaborativa.{" "}
                </p>
                <div className="card-price">
                  <span className="price">
                    <small>$</small>13000
                  </span>
                  <span className="normal-price">
                    <small>$</small>16250
                  </span>
                </div>
              </div>
              <div className="card-footer">
                <button className="add-to-cart">
                  Añadir <i className="fa-solid fa-cart-shopping" />
                </button>
                <a href="/pages/product-detail.html">
                  <button className="more-info">
                    Más info
                    <i className="fa-solid fa-circle-info" />
                  </button>
                </a>
              </div>
            </article>
          </div>
          <div className="card-wrapper">
            <article className="card">
              <div className="card-header">
                {/* Imagen e iconos */}
                <img
                  className="card-img card-image-1"
                  src="/assets/images/card_ai.png"
                  alt="scratch principal"
                />
                <div className="actions">
                  <i className=" fa-regular fa-heart" />
                  <i className=" fa-regular fa-eye" />
                </div>
              </div>
              <div className="card-main">
                {/* Descripcion del producto/servicio */}
                <div className="card-top">
                  <h4 className="card-category">Diseño gráfico</h4>
                  <span className="card-date">01/03/2024</span>
                </div>
                <h3 className="card-title">Estampados en Adobe Illustrator</h3>
                <p className="card-description">
                  Destinado a emprendedores, diseñadores gráficos, diseñadores
                  textiles, ilustradores y todo aquel que quiera aprender sobre
                  las estampas, patrones y sus diversas aplicaciones en el mundo
                  de la papelería y las telas.{" "}
                </p>
                <div className="card-price">
                  <span className="price">
                    <small>$</small>13000
                  </span>
                  <span className="normal-price">
                    <small>$</small>16250
                  </span>
                </div>
              </div>
              <div className="card-footer">
                <button className="add-to-cart">
                  Añadir <i className="fa-solid fa-cart-shopping" />
                </button>
                <a href="/pages/product-detail.html">
                  <button className="more-info">
                    Más info
                    <i className="fa-solid fa-circle-info" />
                  </button>
                </a>
              </div>
            </article>
          </div>
          <div className="card-wrapper">
            <article className="card">
              <div className="card-header">
                {/* Imagen e iconos */}
                <img
                  className="card-img card-image-1"
                  src="/assets/images/card_ia.png"
                  alt="scratch principal"
                />
                <div className="actions">
                  <i className=" fa-regular fa-heart" />
                  <i className=" fa-regular fa-eye" />
                </div>
              </div>
              <div className="card-main">
                {/* Descripcion del producto/servicio */}
                <div className="card-top">
                  <h4 className="card-category">Diseño Gráfico</h4>
                  <span className="card-date">01/03/2024</span>
                </div>
                <h3 className="card-title">I.A. en el diseño de contenido</h3>
                <p className="card-description">
                  En este webinar aprenderás a utilizar distintas herramientas
                  de IA para texto, creación y modificación de imágenes, videos,
                  animaciones y diseño.
                </p>
                <div className="card-price">
                  <span className="price">
                    <small>$</small>8500
                  </span>
                  <span className="normal-price">
                    <small>$</small>10625
                  </span>
                </div>
              </div>
              <div className="card-footer">
                <button className="add-to-cart">
                  Añadir <i className="fa-solid fa-cart-shopping" />
                </button>
                <a href="/pages/product-detail.html">
                  <button className="more-info">
                    Más info
                    <i className="fa-solid fa-circle-info" />
                  </button>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
      <h1>Cursos Sincrónicos </h1>
      <section className="cursos-cards">
        {/* Card section */}
        <div className="card-container">
          <div className="card-wrapper">
            <article className="card">
              <div className="card-header">
                {/* Imagen e iconos */}
                <img
                  className="card-img card-image-1"
                  src="/assets/images/card_powerbi.png"
                  alt="scratch principal"
                />
                <div className="actions">
                  <i className=" fa-regular fa-heart" />
                  <i className=" fa-regular fa-eye" />
                </div>
              </div>
              <div className="card-main">
                {/* Descripcion del producto/servicio */}
                <div className="card-top">
                  <h4 className="card-category">Análisis de datos</h4>
                  <span className="card-date">11/03/2024</span>
                </div>
                <h3 className="card-title">SQL + Power BI</h3>
                <p className="card-description">
                  En nuestro curso “SQL &amp; Power BI Para Análisis de Datos”,
                  de la mano de la Lic. en Sistemas Forgit te ofrecemos la
                  oportunidad de adentrarte en las herramientas más avanzadas en
                  el campo del análisis de datos.
                </p>
                <div className="card-price">
                  <span className="price">
                    <small>$</small>45000
                  </span>
                  <span className="normal-price">
                    <small>$</small>62000
                  </span>
                </div>
              </div>
              <div className="card-footer">
                <button className="add-to-cart">
                  Añadir <i className="fa-solid fa-cart-shopping" />
                </button>
                <a href="/pages/product-detail.html">
                  <button className="more-info">
                    Más info
                    <i className="fa-solid fa-circle-info" />
                  </button>
                </a>
              </div>
            </article>
          </div>
          <div className="card-wrapper">
            <article className="card">
              <div className="card-header">
                {/* Imagen e iconos */}
                <img
                  className="card-img card-image-1"
                  src="/assets/images/card_cm.png"
                  alt="scratch principal"
                />
                <div className="actions">
                  <i className=" fa-regular fa-heart" />
                  <i className=" fa-regular fa-eye" />
                </div>
              </div>
              <div className="card-main">
                {/* Descripcion del producto/servicio */}
                <div className="card-top">
                  <h4 className="card-category">Marketing Digital</h4>
                  <span className="card-date">15/04/2024</span>
                </div>
                <h3 className="card-title">Community Manager</h3>
                <p className="card-description">
                  Llevarás adelante las redes de tu negocio o potenciarás el de
                  alguien más con una rápida salida laboral.Además, incorporarás
                  las mejores herramientas para generar estrategias de contenido
                  para cada público y red social.{" "}
                </p>
                <div className="card-price">
                  <span className="price">
                    <small>$</small>35000
                  </span>
                  <span className="normal-price">
                    <small>$</small>48000
                  </span>
                </div>
              </div>
              <div className="card-footer">
                <button className="add-to-cart">
                  Añadir <i className="fa-solid fa-cart-shopping" />
                </button>
                <a href="/pages/product-detail.html">
                  <button className="more-info">
                    Más info
                    <i className="fa-solid fa-circle-info" />
                  </button>
                </a>
              </div>
            </article>
          </div>
          <div className="card-wrapper">
            <article className="card">
              <div className="card-header">
                {/* Imagen e iconos */}
                <img
                  className="card-img card-image-1"
                  src="/assets/images/card_front.png"
                  alt="scratch principal"
                />
                <div className="actions">
                  <i className=" fa-regular fa-heart" />
                  <i className=" fa-regular fa-eye" />
                </div>
              </div>
              <div className="card-main">
                {/* Descripcion del producto/servicio */}
                <div className="card-top">
                  <h4 className="card-category">Programación</h4>
                  <span className="card-date">10/04/2024</span>
                </div>
                <h3 className="card-title">Desarrollador Frontend</h3>
                <p className="card-description">
                  Descubre un nuevo mundo de posibilidades con nuestro curso de
                  desarrollador frontend. Aprende las habilidades más demandadas
                  en la industria, desde HTML y CSS hasta JavaScript y
                  frameworks modernos como React y Angular.{" "}
                </p>
                <div className="card-price">
                  <span className="price">
                    <small>$</small>40000
                  </span>
                  <span className="normal-price">
                    <small>$</small>65000
                  </span>
                </div>
              </div>
              <div className="card-footer">
                <button className="add-to-cart">
                  Añadir <i className="fa-solid fa-cart-shopping" />
                </button>
                <a href="/pages/product-detail.html">
                  <button className="more-info">
                    Más info
                    <i className="fa-solid fa-circle-info" />
                  </button>
                </a>
              </div>
            </article>
          </div>
          <div className="card-wrapper">
            <article className="card">
              <div className="card-header">
                {/* Imagen e iconos */}
                <img
                  className="card-img card-image-1"
                  src="/assets/images/card_back.png"
                  alt="scratch principal"
                />
                <div className="actions">
                  <i className=" fa-regular fa-heart" />
                  <i className=" fa-regular fa-eye" />
                </div>
              </div>
              <div className="card-main">
                {/* Descripcion del producto/servicio */}
                <div className="card-top">
                  <h4 className="card-category">Programación</h4>
                  <span className="card-date">10/07/2024</span>
                </div>
                <h3 className="card-title">Desarrollador Backend</h3>
                <p className="card-description">
                  Potencia tu carrera en tecnología con nuestro curso de
                  desarrollador backend! Domina los fundamentos de programación
                  en el lado del servidor, bases de datos, APIs y más.
                  Conviértete en un experto en la creación de sistemas robustos
                  y escalables.{" "}
                </p>
                <div className="card-price">
                  <span className="price">
                    <small>$</small>47000
                  </span>
                  <span className="normal-price">
                    <small>$</small>72000
                  </span>
                </div>
              </div>
              <div className="card-footer">
                <button className="add-to-cart">
                  Añadir <i className="fa-solid fa-cart-shopping" />
                </button>
                <a href="/pages/product-detail.html">
                  <button className="more-info">
                    Más info
                    <i className="fa-solid fa-circle-info" />
                  </button>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
      <OurServices />
    </>
  );
}

export default Home;
