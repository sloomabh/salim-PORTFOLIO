import "./certificates.styles.scss";
import web_design from "../../assets/responsive web design.png";
import javascript from "../../assets/javascript algorithms and Data structures.png";
import javascript_course from "../../assets/javascript course.png";
import Fundamentals_of_Kubernetes from "../../assets/Fundamentals of Kubernetes Deployment.png";
import Introduction_to_container from "../../assets/Introduction to Containers , Docker and Kubernetes.png";

const Certificates = () => {
  return (
    <section className="certificates" id="certificates">
      <div className="max-width">
        <h2 className="title">My certificates</h2>
        <div className="container portfolio__container">
          <article className="portfolio__item">
            <h3>Responsive Web Design</h3>
            <div className="portfolio__item-image">
              <img src={web_design} alt="" />
            </div>
            <a href={web_design} download className="btn" target="_blank">
              DOWNLOAD
            </a>
          </article>
          <article className="portfolio__item">
            <h3>JavaScript Algorithms and Data Structures</h3>
            <div className="portfolio__item-image">
              <img src={javascript} alt="" />
            </div>
            <a href={javascript} download className="btn" target="_blank">
              DOWNLOAD
            </a>
          </article>
          <article className="portfolio__item">
            <h3>JavaScript Course</h3>
            <div className="portfolio__item-image">
              <img src={javascript_course} alt="" />
            </div>
            <a
              href={javascript_course}
              download
              className="btn"
              target="_blank"
            >
              DOWNLOAD
            </a>
          </article>
          <article className="portfolio__item">
            <h3>Introduction to Containers , Docker and Kubernetes</h3>
            <div className="portfolio__item-image">
              <img src={Introduction_to_container} alt="" />
            </div>
            <a
              href={Introduction_to_container}
              download
              className="btn"
              target="_blank"
            >
              DOWNLOAD
            </a>
          </article>
          <article className="portfolio__item">
            <h3>Fundamentals of Kubernetes Deployment</h3>
            <div className="portfolio__item-image">
              <img src={Fundamentals_of_Kubernetes} alt="" />
            </div>
            <a
              href={Fundamentals_of_Kubernetes}
              download
              className="btn"
              target="_blank"
            >
              DOWNLOAD
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
