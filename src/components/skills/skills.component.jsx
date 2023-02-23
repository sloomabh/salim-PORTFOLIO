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
              I use HTML to lay out a document’s general structure and content,
              CSS for styling and JavaScript for situations that require
              advanced interactivity. Additionally, I might use AJAX (a
              combination of JavaScript and XML) to update specific areas of a
              website without having to refresh the entire page. as a Front end
              developer I also use the libraries built on these programming
              languages like AngularJS, jQuery and React; and design frameworks
              including Foundation and Bootstrap. CSS extensions, such as SASS,
              provide improved modularity and power.
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
