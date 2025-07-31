import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logone.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

/**
 * The main navigation bar component.
 *
 * This component is responsible for rendering the navigation bar at the top
 * of the page. It includes links to the home page, about page, projects page,
 * resume page, and blogs page. It also includes a link to the GitHub repository
 * and a star button to indicate the number of stars on the repository.
 *
 * @returns {JSX.Element} The JSX element representing the navigation bar.
 */
function NavBar() {
  /**
   * Whether the navigation bar is expanded or not.
   */
  const [expand, updateExpanded] = useState(false);

  /**
   * Whether the navigation bar should have a dark background or not.
   */
  const [navColour, updateNavbar] = useState(false);

  /**
   * Handles the scroll event by updating the state of the navigation bar.
   */
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  // Add a scroll event listener to the window to update the state of the
  // navigation bar when the user scrolls.
  window.addEventListener("scroll", scrollHandler);

  return (
    // The navigation bar component.
    <Navbar
      // Whether the navigation bar is expanded or not.
      expanded={expand}
      // Whether the navigation bar is fixed to the top of the page or not.
      fixed="top"
      // The breakpoint at which the navigation bar should expand.
      expand="md"
      // The class name of the navigation bar.
      // If the navigation bar should have a dark background, this will be "sticky".
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        {/* The brand logo of the navigation bar. */}
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>

        {/* The toggle button to expand or collapse the navigation bar. */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          // The function to call when the toggle button is clicked.
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        {/* The items in the navigation bar. */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {/* The home page link. */}
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            {/* The about page link. */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            {/* The projects page link. */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            {/* The resume page link. */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            {/* The blogs page link. */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/blogs"
                onClick={() => updateExpanded(false)}
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item>

            {/* The fork button. */}
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/PhuongLN28"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
