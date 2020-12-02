import React from "react";
import Button from "@material-ui/core/Button";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
export default function Thirdstep(props) {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md={12}>
            <div className="final_checkout_step">
              <div className="click_to_complete">
                <Image Fluid src="/images/Right1.png" />
              </div>
              <div className="order_notf">
                <h5>Your Order is Successful</h5>
                <p>
                  In purus donec ac in nulla lobortis. Lectus massa erat odio
                  turpis nulla sed.
                </p>
              </div>
              <Button variant="contained" className="view_now_check_btn">
                VIEW NOW
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
