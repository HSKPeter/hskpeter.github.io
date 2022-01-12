import React from "react";
// import {
//   mainBody,
//   about,
//   skills,
//   projects
// } from "../config/config.js";
import config from "../config/config.js";
import MainBody from "./home/MainBody";
import AboutMe from "./home/AboutMe";
import Project from "./home/Project";
import Skills from "./home/Skills";

const Home = () => {
  const {
    mainBody,
    about,
    skills,
    projects
  } = config()
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
      />

      <AboutMe
        heading={about.heading}
        messages={about.messages}
      />


      <Project
        heading={projects.heading}
      />


      <Skills
        heading={skills.heading}
        hardSkills={skills.hardSkills}
        softSkills={skills.softSkills}
      />
    </>
  );
};

export default Home;