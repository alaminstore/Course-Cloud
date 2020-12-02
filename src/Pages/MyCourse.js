import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Styles/_mycourse.css";
export default function Mycourse(props) {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md={12}>
            <div className="mycourse_headline">
              <h1>My Courses</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
