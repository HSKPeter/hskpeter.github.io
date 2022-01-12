import React from "react";

const AboutMe = ({ heading, messages}) => {
  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-10">
            <h2 className="display-4 mb-5 text-center">{heading}</h2>
            {messages.map((message, index) => <p key={`about-me-${index}`}className="lead text-justify">{message}</p>)}
          </div>
        </div>
      </div>
    </div>
  );
};

// const AboutMeMessage = ({messageContent}) => {
//   return (<p key={`${}`}className="lead text-justify">{messageContent}</p>)
// }


export default AboutMe;
