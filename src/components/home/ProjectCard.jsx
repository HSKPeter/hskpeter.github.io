import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Grid } from '@material-ui/core';

const ProjectCard = ({ value}) => {
  const {
    title,
    description,
    referenceLinks,
    imageConfig
  } = value;

  const {image, imageStyle} = imageConfig;

  // const imgStyle = {
  //   border: "1px solid rgba(0, 0, 0, 0.125)",
  //   borderRadius: "0.125rem",
  //   width: "100%"
  // }

  // imgStyle["borderRadius"] = (imageConfig["borderRadius"]) ? imageConfig["borderRadius"] : "0.125rem";


  return (
    <Col sm={12}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{title}</Card.Title>
          {(image)
            ?

            <Grid container>
              <Grid item sm={12} md={9}>
                <Card.Text className="text-justify" dangerouslySetInnerHTML={{ __html: description }}></Card.Text>
                <CardButtons links={referenceLinks} />
              </Grid>
              <Grid item sm={12} md={1} className="my-2"/>
              <Grid item sm={12} md={2}>
                <div className="w-100 d-flex justify-content-center">
                  <img src={image} style={imageStyle} className="" alt={title}/>
                </div>
              </Grid>
            </Grid>
            :
            <div>
              <Card.Text className="text-justify" dangerouslySetInnerHTML={{ __html: description }}></Card.Text>
              <CardButtons links={referenceLinks} />
            </div>}

        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({ links }) => {
  const {
    api,
    link,
    video,
    details,
    npm,
    repo
  } = links
  return (
    <>
      {(api) ?
        <a
          href={api} target="_blank" rel="noopener noreferrer"
          className="btn btn-outline-secondary mr-3 my-1"
        >
          <i className="fas fa-brackets-curly"></i> JSON Data
        </a>
        : ""}
      {(link) ?
        <a
          href={link} target="_blank" rel="noopener noreferrer"
          className="btn btn-outline-secondary mr-3 my-1"
        >
          <i className="fas fa-link"></i> Link
        </a>
        : ""}
      {(video) ?
        <a
          href={video} target="_blank" rel="noopener noreferrer"
          className="btn btn-outline-secondary mr-3 my-1"
        >
          <i className="fab fa-youtube"></i> Demo
        </a>
        : ""}
      {(details) ?
        <a
          href={details} target="_blank" rel="noopener noreferrer"
          className="btn btn-outline-secondary mr-3 my-1"
        >
          <i className="fas fa-info-circle"></i> Details
        </a>
        : ""}
      {(npm) ?
        <a
          href={npm} target="_blank" rel="noopener noreferrer"
          className="btn btn-outline-secondary mr-3 my-1"
        >
          <i className="fab fa-npm"></i> Package
        </a>
        : ""}          
      {(repo) ?
        <a
          href={repo} target="_blank" rel="noopener noreferrer"
          className="btn btn-outline-secondary mr-3 my-1"
        >
          <i className="fab fa-github"></i> Repo
        </a>
        : ""}
    </>
  );
};

export default ProjectCard;
