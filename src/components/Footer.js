import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

/**
 * The Footer component.
 * This component renders a footer that contains links to social media platforms, copyright information, and the name of the author.
 * @returns {JSX.Element} The Footer component.
 */
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          {/* The copyright information. */}
          <h3>Designed and Developed by Lý Nhật Phương</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          {/* The copyright year. */}
          <h3>Copyright &copy; {year} PhuongLN</h3>
        </Col>
        <Col md="4" className="footer-body">
          {/* The list of social media links. */}
          <ul className="footer-icons">
            <li className="social-icons">
              {/* Link to GitHub. */}
              <a
                href="https://github.com/PhuongLN28"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              {/* Link to Facebook. */}
              <a
                href="https://www.facebook.com/lnpng"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineFacebook />
              </a>
            </li>
            <li className="social-icons">
              {/* Link to LinkedIn. */}
              <a
                href="https://www.linkedin.com/in/phuong-ly-b9b62519b/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              {/* Link to Instagram. */}
              <a
                href="https://www.instagram.com/phn0ug/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
