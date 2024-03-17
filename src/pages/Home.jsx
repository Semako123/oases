import React from "react";
import { MdArrowDownward } from "react-icons/md";
import { Intro } from "../components";
import Projects from "../containers/Projects";

const Home = () => {
  return (
    <>
      <Intro />
      <MdArrowDownward className="text-5xl mb-16 mt-16" id="projects" />
      <Projects />
    </>
  );
};

export default Home;
