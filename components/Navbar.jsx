// import React, { useState } from "react";
import React from "react";
// import { useScrollPosition } from "../hooks/useScrollPosition";
// import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import config from "../config/config.js";

const Navigation = () => {
  const {
    mainBody, projects, about, skills
  } = config()
  // const [isTop, setIsTop] = useState(true);
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const navbarMenuRef = React.useRef();
  // const navbarDimensions = useResizeObserver(navbarMenuRef);
  // const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  // useScrollPosition(
  //   ({ prevPos, currPos }) => {
  //     if (!navbarDimensions) return;
  //     currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
  //       ? setIsTop(true)
  //       : setIsTop(false);
  //     setScrollPosition(currPos.y);
  //   },
  //   [navBottom]
  // );

  // React.useEffect(() => {
  //   if (!navbarDimensions) return;
  //   navBottom - scrollPosition >= ref.current.offsetTop
  //     ? setIsTop(false)
  //     : setIsTop(true);
  // }, [navBottom, navbarDimensions, ref, scrollPosition]);
  // window.scrollY !== 0 
  return (
    <Navbar

      className={` fixed-top navbar-white`}
      expand="lg"
    >
      <Navbar.Brand className="brand" href="/#home">
        {`<${mainBody.firstName} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            className="nav-link lead"
            href="/#aboutme"
          >
            About
          </Nav.Link>


          <Nav.Link
            className="nav-link lead"
            href="/#projects"
          >
            Projects
          </Nav.Link>


          <Nav.Link
            className="nav-link lead"
            href="/#skills"
          >
            Skills
          </Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
