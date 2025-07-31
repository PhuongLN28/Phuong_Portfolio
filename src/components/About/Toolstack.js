import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiUbuntu,
  SiAmazon,
} from "react-icons/si";

/**
 * Toolstack component renders a grid of icons representing various development tools used.
 * Each icon is wrapped in a column and styled for consistent sizing and spacing.
 *
 * @returns {React.ReactElement} - A React element representing the Toolstack component.
 */
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Ubuntu */} 
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu />
      </Col>
      {/* Visual Studio Code */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      {/* Postman */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      {/* Slack */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      {/* AWS */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazon />
      </Col>
    </Row>
  );
}

export default Toolstack;
