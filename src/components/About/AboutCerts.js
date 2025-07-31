import React from "react";
import Card from "react-bootstrap/Card";

/**
 * AboutCerts component
 * @param {Object} props component props
 * @returns {React.Component} AboutCerts component
 */
function AboutCerts(props) {
    return (
        <Card className="project-card-view">
            {/* Certificate image */}
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body>
                {/* Certificate title */}
                <Card.Title>{props.title}</Card.Title>
                {/* Certificate description */}
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default AboutCerts;