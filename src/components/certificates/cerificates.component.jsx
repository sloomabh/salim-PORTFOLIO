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
            <a
              href="https://drive.google.com/file/d/10SMYipHcoZt3fQFErTsU9UpYjydJxXqB/view?usp=share_link"
              className="btn"
              target="_blank"
            >
              VIEW
            </a>
          </article>
          <article className="portfolio__item">
            <h3>JavaScript Algorithms and Data Structures</h3>
            <div className="portfolio__item-image">
              <img src={javascript} alt="" />
            </div>
            <a
              href="https://drive.google.com/file/d/1UNgR5wpYXfheH0M4zaqNs0fiLAqEzDta/view?usp=share_link"
              className="btn"
              target="_blank"
            >
              VIEW
            </a>
          </article>
          <article className="portfolio__item">
            <h3>JavaScript Course</h3>
            <div className="portfolio__item-image">
              <img src={javascript_course} alt="" />
            </div>
            <a
              href="https://drive.google.com/file/d/1ZBpAMFYWGDCzNrrCkDUjfXaOP33B6D01/view?usp=share_link"
              className="btn"
              target="_blank"
            >
              VIEW
            </a>
          </article>
          <article className="portfolio__item">
            <h3>Introduction to Containers , Docker and Kubernetes</h3>
            <div className="portfolio__item-image">
              <img src={Introduction_to_container} alt="" />
            </div>
            <a
              href="https://drive.google.com/file/d/1XynGnxIcvdw2E537HvoVjzhBhdIoYPuD/view?usp=share_link"
              className="btn"
              target="_blank"
            >
              VIEW
            </a>
          </article>
          <article className="portfolio__item">
            <h3>Fundamentals of Kubernetes Deployment</h3>
            <div className="portfolio__item-image">
              <img src={Fundamentals_of_Kubernetes} alt="" />
            </div>
            <a
              href="https://drive.google.com/file/d/1auFTB7ySr3y07z1gSNcl2VzL2Uy4ew6U/view?usp=share_link"
              className="btn"
              target="_blank"
            >
              VIEW
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Certificates;

/***************download files */
/*  
 <article className="portfolio__item">
            <h3>Fundamentals of Kubernetes Deployment</h3>
            <div className="portfolio__item-image">
              <img src={Fundamentals_of_Kubernetes} alt="" />
            </div>
            <a
              href="https://drive.google.com/file/d/1auFTB7ySr3y07z1gSNcl2VzL2Uy4ew6U/view?usp=share_link"
              className="btn"
              target="_blank"
            >
              DOWNLOAD
            </a>
          </article>
*/
