import React from "react";

const GetInTouch = ({ heading, message, profileNameOfLinkedIn, linkOfLinkedIn }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <div className="lead text-center pb-3">
        <p>{message}</p>
        <p>
        <a href={linkOfLinkedIn} style={{ color: "inherit"}}>
          <i className="fab fa-linkedin"></i>
          {" "}
          {profileNameOfLinkedIn}
        </a>
        </p>
      </div>
    </>
  );
};

export default GetInTouch;
