import React from "react";
import Header from "../component/header/Header";
import HomeSec from "../component/home/HomeSec";
import About from "../component/about/About";
import Projects from "../component/projects/Projects";
import Contact from "../component/contact/Contact";
import Service from "../component/service/Service";

const Home = () => {
  return (
    <div>
      <Header />
      <HomeSec />
      <About />
      <Service />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
