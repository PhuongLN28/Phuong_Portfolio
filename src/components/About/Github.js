import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

/**
 * The Github component renders a React-Github-Calendar element
 * which displays a chart of the user's GitHub contribution history.
 *
 * @returns {JSX.Element}
 */
function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        // The username of the GitHub user to display contributions for
        username="PhuongLN28"
        // The block size of the calendar element
        blockSize={15}
        // The margin between each block on the calendar
        blockMargin={5}
        // The color of the blocks
        color="#c084f5"
        // The font size of the calendar text
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
