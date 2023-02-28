import React from "react";
import "./home.styles.scss";
import logo from "../../assets/IMG-20211231-WA0090.png";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">Salim Ben Halima</div>
          <div className="text-3">
            And I'm a <span>Frontend Engineer</span>
          </div>
          <a href="#contact">Contact me</a>
        </div>
        <div className="image-container">
          <img className="imagee" src={logo} />
        </div>
      </div>
    </section>
  );
};

export default Home;
