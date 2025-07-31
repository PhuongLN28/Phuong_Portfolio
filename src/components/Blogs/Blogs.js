import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Blogs() {
    return (
        <Container fluid className="blogs-section">
            <Particle/>
            <Container>
                <div>
                    <h1 className="project-heading">Blogs</h1>
                    <p style={{ color: "white" }}>
                        Here are a few blogs I've written recently.
                    </p>
                </div>
            </Container>
        </Container>
    );
}

export default Blogs;