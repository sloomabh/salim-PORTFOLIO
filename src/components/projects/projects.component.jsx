import "./projects.styles.scss";
import forkify from "../../assets/forkify.png";
import bankist_app from "../../assets/bankist-app.png";
import bankist_web from "../../assets/bankist-web.png";
import e_commerse from "../../assets/e-commerse.png";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="max-width">
        <h2 className="title">My projects</h2>
        <div className="container portfolio__container">
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={forkify} alt="" />
            </div>
            <h3>Forkify application</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/sloomabh/Forkify-app"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://forkify-salim.netlify.app"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={bankist_app} alt="" />
            </div>
            <h3>Bankist-App</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/sloomabh/Bankist-App"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://bank-app-salim.netlify.app"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={e_commerse} alt="" />
            </div>
            <h3>E-commerse-Web-Shop</h3>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/sloomabh/E-commerse-Web-Shop"
                className="btn"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://salim-clothing.netlify.app/shop"
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects;
