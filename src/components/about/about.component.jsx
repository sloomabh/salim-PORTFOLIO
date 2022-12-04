import React from "react";
import "./about.styles.scss";
import CV from "../../assets/CV Salim Benhalima 2022.pdf";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
          <div className="column left">
            <img
              src="http://drive.google.com/uc?export=view&id=14O3VjrGqJZRJog18yEoBY_oAgk0MlooL"
              alt=""
            />
          </div>
          <div className="column right">
            <div className="text">
              I'm SALIM BEN HALIMA and I'm a
              <span className="typing-2"> Developer</span>
              <span className="typed-cursor">|</span>
            </div>
            <p>
              As a Front end engineer mu main task is to design, build, and
              implement the user interface systems of websites, software
              programs, and web-based applications. my primary goal is to
              provide a satisfactory user experience with no issues, errors, or
              downtime. I create and optimize systems, play an active role in
              testing and troubleshooting, and resolve issues such as those
              related to accessibility and browser compatibility. I often serve
              as an intermediary bridging the gap between the user and the
              backend developers, and tweak tools and platforms to adapt to
              real-world use situations.
            </p>
            <a href={CV} download>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
