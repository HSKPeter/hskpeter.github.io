import React from "react";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

const TechStackCard = ({ value, index }) => {
  const {
    name,
    imgFilename
  } = value;
  const cardStyle = {
    minHeight: "280px",
    display: "grid",
    gridTemplateRows: "85% 15%",
    gridTemplateColumns: "100%",    
  }
  const imgStyle = {
    maxWidth: "120px",
    margin: "0 auto",
  };
  const imgFilePath = require(`../../assets/svg/${imgFilename}.svg`)
  return (
    <Col md={4} lg={3} xs={8} className="mx-md-0 mx-auto">
      <Card style={cardStyle} className="card shadow-lg p-3 mb-5 bg-white rounded">
        <div className="d-flex justify-content align-item-center h-100">
          <img style={imgStyle} src={imgFilePath} alt="" />
        </div>
        <Card.Title as="h5" className="text-center">{name || <Skeleton />} </Card.Title>
      </Card>
    </Col>
  );
};

export default TechStackCard;