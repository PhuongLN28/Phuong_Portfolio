import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import AboutCerts from "./AboutCerts";
import fresherCert from "../../Assets/FSA_Fresher.jpg";

/**
 * About component renders the About section of the webpage.
 * This section includes personal information, certification details,
 * professional skills, tools used, and GitHub activity.
 */
function About() {
  return (
    <Container fluid className="about-section">
      {/* Particle effect in the background */}
      <Particle />

      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            {/* Section heading */}
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            {/* About card containing personal details */}
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            {/* Image representing the about section */}
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        {/* Certification section */}
        <h1 className="project-heading">
          <strong className="purple">Certificate</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "70px" }}>
          <Col md={4} className="project-card"></Col>
          <AboutCerts
            imgPath={fresherCert}
            title="Fresher Certificate"
            description="This certificate was awarded to me for completing the training program at FPT Software Academy, which covered Agile, OCR, LLM, Computer Vision, Docker, Kubernetes, BentoML, AWS, and other essential skills for AI Engineers. I also had the opportunity to participate in real-world projects, ranging from outsourced services to in-house product development."
          />
        </Row>

        {/* Professional skills section */}
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />

        {/* Tools section */}
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        {/* GitHub activity section */}
        <Github />
      </Container>
    </Container>
  );
}

export default About;
