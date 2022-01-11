import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  skills,
  getInTouch,
  projects
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import GetInTouch from "./components/home/GetInTouch.jsx";

const Home = () => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          messages={about.messages}
        />
      )}
      {projects.show && (
        <Project
          heading={projects.heading}
        />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}

    </>
  );
};

const App = () => {
  return (
    <>
      <Navbar/>
      <Home />
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            profileNameOfLinkedIn={getInTouch.profileNameOfLinkedIn}
            linkOfLinkedIn={getInTouch.linkOfLinkedIn}
          />
        )}
      </Footer>
    </>
  );
};

export default App;
