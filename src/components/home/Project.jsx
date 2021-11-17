import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Object Detection Model of Chinese Mahjong tiles",
    description: `
      Python and OpenCV were used to create an image dataset with over 6,000 annotations.  
      Google Cloud AutoML tool was then adopted to build an Object Detection Model that could identify and locate 34 kinds of mahjong tile patterns within a live streaming video.  
      `,
    referenceLinks: {
      repo: "https://github.com/HSKPeter/mahjong-dataset-augmentation"
    },
    image: require("../../assets/gif/object-detection.gif")
  },
  {
    title: "FocusHacks",
    description: `
    This project was awarded "the Most Creative Use of Twilio" in NewHacks 2021.  
    Machine Learning technology was used to visually track users' activity and productivity.
    Twilio SendGrid was adopted to send alert emails to users, motivating them to get back on track when they lost focus or got distracted by cellphones.`,
    referenceLinks: {
      video: "https://www.youtube.com/watch?v=47IIFHay_I8&t=114s",
      details: "https://devpost.com/software/your-virtual-teacher",
      repo: "https://github.com/NEWHACKS-TEAM/FocusHacks"
    },
    image: require("../../assets/gif/focus-hacks.gif")
  },
  {
    title: "Read For You",
    description: `
    It is a web application developed within 24 hours in HackDuke2021.  
    This application provides image description and text to speech services, with an aim to make images and texts more accessible for visually impaired users.  
    Express.js and the Google Cloud Vision API were used to build the application.  
    Compute Engine of Google Cloud Platform and Nginx were used to deploy the website with an SSL certificate.
    `,
    referenceLinks: {
      link: "https://readforyou.tech/",
      video: "https://youtu.be/id-LY-jOshM",
      details: "https://devpost.com/software/read-for-you",
      repo: "https://github.com/HSKPeter/HackDuke2021"
    },
    image: require("../../assets/img/read-for-you.png")
  },
  {
    title: "Open API of Hong Kong’s Public Facilities Data",
    description: "This project provides comprehensive data of public toilets to supplement the government’s official open API.  Playwright and Node.js were used for web scrapping and data processing.  AWS Lambda and AWS API Gateway were used to build the open API.",
    referenceLinks: {
      api: "https://m152g1r8v9.execute-api.ap-southeast-1.amazonaws.com/live/toilets"
    }
  },
  {
    title: "Info Digest Portal",
    description: `
    It is a web application that helps users to digest news in today's information overloaded era, by organizing latest news feeds from various information sources and presenting them in an unified layout.  
    TypeScript was used to retrieve information from 6 open REST APIs, including CBC and CTV.  
    Bootstrap, Express.js and PostgreSQL were used to build the application.  
    AWS EC2 and Nginx were adopted to deploy the web application with SSL certificate.
    `,
    referenceLinks: {
      link: "https://infodigestportal.com/",
    },
    image: require("../../assets/img/info-digest-portal.png")
  },
  {
    title: "Daily YouTube Digest",
    description: `
    This project helps active YouTube users to overcome the echo-chamber effects.  
    This project used Node.js to fetch data from YouTube REST APIs of over 140 channels and playlists, and used AWS Lambda to send daily email digest to users.
    `,
    referenceLinks: {},
    image: require("../../assets/img/youtube-digest.png")
  }
];

const Project = ({ heading }) => {
  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projects.map((project, index) => (
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
