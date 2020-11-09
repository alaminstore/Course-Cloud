import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "../Styles/_discussionForum.css";

export default function Discussionforum(props) {
  return (
    <React.Fragment>
      <section className="discussion_header">
        <Container>
          <Row>
            <Col md={3}>
              <div className="forum_image">
                <div className="f_img text-center">
                  <Image
                    fluid
                    src="/images/instractor.jpg"
                    className="img-fluid"
                  />
                </div>
                <div className="placeholder_part">
                  <div className="header">Connor Francis</div>
                  <div className="desc">Teaches Writing for Television</div>
                  <Button>View Details</Button>
                </div>
              </div>
            </Col>
            <Col md={9}>
              <div className="forum_intro"></div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}
