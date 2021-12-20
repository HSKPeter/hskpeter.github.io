import React from "react";
import Row from "react-bootstrap/Row";
import { Jumbotron, Container } from "react-bootstrap";
import TechStackCard from "./TechStackCard";

const techStacks = [
  {
    name: "Git",
    imgFilename: "git-icon"
  },
  {
    name: "Linux",
    imgFilename: "linux-tux"
  },
  {
    name: "Java",
    imgFilename: "java"
  },
  {
    name: "C",
    imgFilename: "c"
  },
  {
    name: "C++",
    imgFilename: "c-plusplus"
  },
  {
    name: "Python",
    imgFilename: "python"
  },
  {
    name: "HTML 5",
    imgFilename: "html-5"
  },
  {
    name: "CSS 3",
    imgFilename: "css-3"
  },
  {
    name: "Bootstrap",
    imgFilename: "bootstrap"
  },
  {
    name: "JavaScript",
    imgFilename: "javascript"
  },
  {
    name: "Node.js",
    imgFilename: "nodejs"
  },
  {
    name: "TypeScript",
    imgFilename: "typescript-icon"
  },
  {
    name: "React",
    imgFilename: "react"
  },
  {
    name: "Redux",
    imgFilename: "redux"
  },
  {
    name: "Express",
    imgFilename: "express"
  },
  {
    name: "Flask",
    imgFilename: "flask"
  },
  {
    name: "Insomnia",
    imgFilename: "insomnia"
  },
  {
    name: "Jest",
    imgFilename: "jest"
  },
  {
    name: "Puppeteer",
    imgFilename: "puppeteer"
  },
  {
    name: "Playwright",
    imgFilename: "playwright-logo"
  },
  {
    name: "MySQL",
    imgFilename: "mysql"
  },
  {
    name: "PostgreSQL",
    imgFilename: "postgresql"
  },
  {
    name: "Firebase",
    imgFilename: "firebase"
  },
  {
    name: "Twilio SendGrid API",
    imgFilename: "twilio"
  },
  {
    name: "Auth0",
    imgFilename: "auth0"
  },
  {
    name: "OpenCV",
    imgFilename: "opencv"
  },
  {
    name: "Nginx",
    imgFilename: "nginx"
  },
  {
    name: "AWS EC2",
    imgFilename: "aws-ec2"
  },

  {
    name: "AWS API Gateway",
    imgFilename: "aws-api-gateway"
  },
  {
    name: "AWS Lambda",
    imgFilename: "aws-lambda"
  },
  {
    name: "AWS Cloudwatch",
    imgFilename: "aws-cloudwatch"
  },
  {
    name: "Google Cloud Platform",
    imgFilename: "google-cloud-platform"
  },
  {
    name: "Visual Studio Code",
    imgFilename: "visual-studio-code"
  },
  {
    name: "Eclipse",
    imgFilename: "eclipse"
  }
]

function Skills({heading}) {
  return (
    <Jumbotron fluid id="skills" className="bg-white m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {techStacks.map((techStack, index) => <TechStackCard value={techStack} key={`tech-stack-${index}`}/>)}
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Skills;
