import React from "react";
import Row from "react-bootstrap/Row";
import { Jumbotron, Container } from "react-bootstrap";
import TechStackCard from "./TechStackCard";
import config from "../../config/config";


function Skills({heading}) {
  const {skills} = config();
  return (
    <Jumbotron fluid id="skills" className="bg-white m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {skills.techStacks.map((techStack, index) => <TechStackCard value={techStack} key={`tech-stack-${index}`}/>)}
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Skills;
