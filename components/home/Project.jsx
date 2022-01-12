import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import config from "../../config/config";

const Project = ({ heading }) => {
  const { projects } = config();
  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projects.content.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              value={project}
            />))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
