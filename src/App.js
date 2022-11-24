import About from "./components/about/about.component";
import Contact from "./components/contact/contact.component";
import Home from "./components/home/home.component";
import Projects from "./components/projects/projects.component";
import Footer from "./components/footer/footer.component";
import Services from "./components/services/services.component";
import Skills from "./components/skills/skills.component";
import Navbar from "./components/navbar/navbar.component";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default App;
