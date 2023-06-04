import "./skills.styles.scss";

import {
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiMaterialui,
  SiWebpack,
  SiKubernetes,
  SiTailwindcss,
} from "react-icons/si";
import { DiMongodb, DiReact, DiSass } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { GrDocker } from "react-icons/gr";

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
              As a <span className="keyword-red">frontend</span>engineer, I am
              passionate about building interactive and engaging user interfaces
              that provide a seamless user experience. With a strong foundation
              in
              <span className="keyword">HTML</span>,
              <span className="keyword">CSS</span> , and
              <span className="keyword">JavaScript</span>,
              <br />
              <br />I am well-versed in the latest
              <span className="keyword">frontend technologies </span> and
              <span className="keyword">frameworks </span> such as
              <span className="keyword">ReaxtJs</span> . I have a deep
              understanding of the fundamental concepts such as
              <span className="keyword">
                JSX, components, props, state, and lifecycle methods
              </span>
              . I have built several applications using modern tools and
              libraries such as<span className="keyword">Redux</span> ,
              <span className="keyword">React Router</span> , and
              <span className="keyword">Axios</span> . I have worked on
              designing and implementing complex UI components using React and
              integrating them seamlessly with other backend systems.
              <br />
              <br />
              My skills in React also include optimizing the performance of
              React applications by implementing best practices such as
              <span className="keyword">
                code splitting, lazy loading, and memoization.
              </span>
              <br />
              <br />I also have a hand on
              <span className="keyword-red"> backend development</span> tools
              that are essential to creating robust and scalable applications.
              My humble experience with{" "}
              <span className="keyword">MERN stack</span>
              tools like
              <span className="keyword">
                Node.js, NPM,parcel, Git, MongoDB, API, Postman, and Visual
                Studio Code
              </span>
              enables me to effortlessly develop, test, and deploy React
              applications. I have an in-depth understanding of the intricacies
              of these tools and can leverage them to create high-performance
              applications that meet the needs of my clients.
              <br />
              <br /> In addition,I have a basic understanding of
              <span className="keyword"> DevOps</span> tools such as
              <span className="keyword"> Docker</span> and
              <span className="keyword"> Kubernetes</span>, which enable me to
              containerize applications and streamline the
              <span className="keyword"> deployment</span>process. <br />
              <br />
              Overall, my vast experience and knowledge in these areas make me a
              valuable asset to any team seeking to develop cutting-edge
              applications that meet the evolving needs of today's businesses. I
              am committed to continuously learning and staying up-to-date with
              the latest trends and best practices in frontend development.
            </p>
            <a href="#projects">Read more</a>
          </div>
          <div className="column right">
            <AiFillHtml5 className="red" />
            <FaCss3Alt className="blue" />
            <SiJavascript className="yellow" />
            <SiTypescript className="blue" />
            <DiReact className="blue-f" />
            <SiRedux className="blue" />
            <DiSass className="pink" />
            <SiTailwindcss className="blue" />
            <SiMaterialui className="blue-f" />
            <SiWebpack />
            <DiMongodb className="green" />
            <FaNodeJs className="green" />
            <GrDocker className="blue" />
            <SiKubernetes className="blue" />
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
