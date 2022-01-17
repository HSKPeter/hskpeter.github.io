import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <p>
          <small className="text-muted">
          <i className="fas fa-code" /> This page is built on the{" "}
          <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/hashirshoaeb/home"
        >
          open source template by hashirshoaeb
        </a>        
        {" "}using <i className="cib-next-js"></i>Next.js
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
