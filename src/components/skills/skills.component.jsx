import "./skills.styles.scss";

import {
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiMaterialui,
  SiWebpack,
} from "react-icons/si";
import { DiMongodb, DiReact, DiSass } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaNodeJs } from "react-icons/fa";
//import { SiJavascript } from "react-icons/fa";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">My skills</h2>
        <div className="skills-content">
          <div className="column left">
            <div className="text">My creative skills &amp; experiences.</div>
            <p>
              As a frontend engineer, I am passionate about building interactive
              and engaging user interfaces that provide a seamless user
              experience. With a strong foundation in HTML, CSS, and JavaScript,
              I am well-versed in the latest frontend technologies and
              frameworks such as ReaxtJs. I believe in the importance of
              creating accessible and responsive designs that can be used by
              people of all abilities and on all devices. Collaborating with
              designers, developers, and stakeholders, I am dedicated to
              delivering high-quality, scalable solutions that meet the unique
              needs of each project. Whether I am creating a new website from
              scratch or optimizing an existing one, I am committed to
              continuously learning and staying up-to-date with the latest
              trends and best practices in frontend development.
            </p>
            <a href="#projects">Read more</a>
          </div>
          <div className="column right">
            <AiFillHtml5 />
            <FaCss3Alt />
            <SiJavascript />
            <SiTypescript />
            <DiReact />
            <SiRedux />
            <DiSass />
            <SiMaterialui />
            <SiWebpack />
            <DiMongodb />
            <FaNodeJs />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
/*
 <i className="fa-brands fa-css3-alt"></i>
            <i className="fa-brands fa-html5"></i>
            <i className="fa-brands fa-js"></i>
            <i className="fa-brands fa-react"></i>

            <i className="fa-brands fa-sass"></i>
            <i className="fa-brands fa-node"></i>
            <i className="fa-solid fa-database"></i>*/
