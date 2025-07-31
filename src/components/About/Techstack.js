import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiDocker,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

/**
 * Techstack component renders a grid of icons representing various technologies used.
 * Each icon is wrapped in a column and styled for consistent sizing and spacing.
 */
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Node.js icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      {/* React icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      {/* Next.js icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      {/* Git icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      {/* Firebase icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      {/* PostgreSQL icon */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      {/* Python icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      {/* Docker icon */}
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
    </Row>
  );
}

export default Techstack;
