import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

/**
 * This component renders a quote card with a quote about me.
 */
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          {/* Intro */}
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Lý Nhật Phương </span>
            from <span className="purple"> Huế, Việt Nam.</span>
            <br />
            {/* Current job */}
            I am currently employed as a AI Researcher at XinkGroup.
            <br />
            {/* Education */}
            I graduated from University of Science, Hue University and completed the FPT Software Fresher [AI] Training Program.
            <br />
            <br />
            {/* Hobbies */}
            Apart from coding, some other activities that I love to do!
          </p>
          {/* List of hobbies */}
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
          </ul>

          {/* Quote */}
          <p style={{ color: "rgb(155 126 172)" }}>
            "dek biết gì cũng tiến"{" "}
          </p>
          {/* Author */}
          <footer className="blockquote-footer">FPT</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
