import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/phuonglnavatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineFacebook
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

/**
 * A component that renders a section about the author.
 * It includes a brief bio, a profile picture, and a list of social media links.
 * @returns {React.Component} The About component.
 */
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming, especially in the field of Artificial Intelligence
              <br />
              <br />I am fluent
              <i>
                <b className="purple"> Python </b>
              </i>
              , and have hands-on experience with AI frameworks such as
              <i>
                <b className="purple"> PyTorch, OpenCV, LangChain, and OpenAI API. </b>
              </i>
              <br />
              <br />
              My main interests lie in building intelligent systems like &nbsp;
              <i>
                <b className="purple">Chatbots, OCR tools, and Computer Vision applications </b> particularly with real-world impact, such as {" "}
                <b className="purple">
                  sports content filtering and virtual try-on products.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing web and AI products using
              <i>
                <b className="purple">
                  {" "}
                  FlaskAPI, PostgreSQL, and modern tools like React and LangChain.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              {/* The profile picture. */}
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              {/* Social media links. */}
              <li className="social-icons">
                <a
                  href="https://github.com/PhuongLN28"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/lnpng"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/phuong-ly-b9b62519b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/phn0ug/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
