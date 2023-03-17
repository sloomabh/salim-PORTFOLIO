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
              "Hi there,I'm a frontend engineer with two years of experience at
              PASSIV ENERGIE JAPAN in Tokyo. I hold a master's degree in
              mechatronics engineering since 2020, which has given me a strong
              foundation in problem-solving, critical thinking, and attention to
              detail. I started my career at the current company as mechatronics
              engineer When the pandemic hit, I had to pivot from my role as a
              mechatronics engineer to frontend development.
              <br /> Despite having small experience in frontend development, I
              quickly picked up the necessary skills and demonstrated a strong
              aptitude for it. I was able to deliver high-quality code and
              design, collaborating effectively with our team of designers,
              product managers, and other developers. My experience in
              mechatronics engineering has been valuable in frontend
              development, as it has given me a holistic understanding of how
              technology can be applied to solve complex problems. I have a keen
              eye for design and am passionate about creating seamless user
              experiences that meet business objectives. Overall, my journey
              from mechatronics engineering to frontend development has been
              challenging, but it has also been rewarding. I am excited to
              continue honing my skills and contributing to the advancement of
              web technology."
            </p>
            <a
              href="https://drive.google.com/file/d/1ICx8T8HzcCzk2-4BKg8AaI7LDTQNxJtp/view?usp=share_link"
              target="_blank"
            >
              VIEW CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
