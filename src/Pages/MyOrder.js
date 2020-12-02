import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Button from "@material-ui/core/Button";
import Starrating from "../Components/starRating";
import "../Styles/_myOrder.css";

export default function Myorder(props) {
  return (
    <React.Fragment>
      <div className="header_order_portion">
        <Container>
          <Row>
            <Col md={12}>
              <div className="line_identify">
                <div className="link_line">
                  <h6>
                    Home / <span>My Orders</span>
                  </h6>
                </div>
                <div className="order_line">
                  <h3>My Orders</h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="order_portion_start">
        <Container>
          <Row>
            <Col md={12} sm={12} lg={12} xs={12}>
              <div className="single_order_item text-white">
                <Col md={4} sm={12}>
                  <div className="order_image_portion">
                    <Image fluid src="images/order1.png" />
                  </div>
                </Col>
                <Col md={8} sm={12}>
                  <div className="order_desc_portion">
                    <div className="order_title">
                      <h4>
                        Certificate in British Sign Language (BSL) Level 1 & 2
                      </h4>
                    </div>
                    <div className="order_desc_portion">
                      <p>
                        Certificate in British Sign Language Course Overview If
                        you want to broad up your experiences and development in
                        communication throug, If you want to broad up your
                        experiences and development in communication through…
                      </p>
                    </div>

                    <div className="order_author_rating_price_view">
                      <div className="order_author">
                        <Image fluid src="/images/author2.png" />
                        <p className="ml-2">Jude Matthews</p>
                      </div>
                      <div className="start_order_portion">
                        <Starrating />
                      </div>
                      <div className="mid_space"></div>
                      <div className="price_order_portion">
                        <h3>$ 10.00</h3>
                      </div>
                      <div className="order_view_button">
                        <Button variant="contained" className="order_view_btnn">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </div>

              <div className="single_order_item text-white">
                <Col md={4} sm={12}>
                  <div className="order_image_portion">
                    <Image fluid src="images/order3.png" />
                  </div>
                </Col>
                <Col md={8} sm={12}>
                  <div className="order_desc_portion">
                    <div className="order_title">
                      <h4>
                        Certificate in British Sign Language (BSL) Level 1 & 2
                      </h4>
                    </div>
                    <div className="order_desc_portion">
                      <p>
                        Certificate in British Sign Language Course Overview If
                        you want to broad up your experiences and development in
                        communication throug, If you want to broad up your
                        experiences and development in communication through…
                      </p>
                    </div>

                    <div className="order_author_rating_price_view">
                      <div className="order_author">
                        <Image fluid src="/images/author2.png" />
                        <p className="ml-2">Jude Matthews</p>
                      </div>
                      <div className="start_order_portion">
                        <Starrating />
                      </div>
                      <div className="mid_space"></div>
                      <div className="price_order_portion">
                        <h3>$ 10.00</h3>
                      </div>
                      <div className="order_view_button">
                        <Button variant="contained" className="order_view_btnn">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </div>

              <div className="single_order_item text-white">
                <Col md={4} sm={12}>
                  <div className="order_image_portion">
                    <Image fluid src="images/order2.png" />
                  </div>
                </Col>
                <Col md={8} sm={12}>
                  <div className="order_desc_portion">
                    <div className="order_title">
                      <h4>
                        Certificate in British Sign Language (BSL) Level 1 & 2
                      </h4>
                    </div>
                    <div className="order_desc_portion">
                      <p>
                        Certificate in British Sign Language Course Overview If
                        you want to broad up your experiences and development in
                        communication throug, If you want to broad up your
                        experiences and development in communication through…
                      </p>
                    </div>

                    <div className="order_author_rating_price_view">
                      <div className="order_author">
                        <Image fluid src="/images/author2.png" />
                        <p className="ml-2">Jude Matthews</p>
                      </div>
                      <div className="start_order_portion">
                        <Starrating />
                      </div>
                      <div className="mid_space"></div>
                      <div className="price_order_portion">
                        <h3>$ 10.00</h3>
                      </div>
                      <div className="order_view_button">
                        <Button variant="contained" className="order_view_btnn">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </div>

              <div className="single_order_item text-white">
                <Col md={4} sm={12}>
                  <div className="order_image_portion">
                    <Image fluid src="images/order4.png" />
                  </div>
                </Col>
                <Col md={8} sm={12}>
                  <div className="order_desc_portion">
                    <div className="order_title">
                      <h4>
                        Certificate in British Sign Language (BSL) Level 1 & 2
                      </h4>
                    </div>
                    <div className="order_desc_portion">
                      <p>
                        Certificate in British Sign Language Course Overview If
                        you want to broad up your experiences and development in
                        communication throug, If you want to broad up your
                        experiences and development in communication through…
                      </p>
                    </div>

                    <div className="order_author_rating_price_view">
                      <div className="order_author">
                        <Image fluid src="/images/author2.png" />
                        <p className="ml-2">Jude Matthews</p>
                      </div>
                      <div className="start_order_portion">
                        <Starrating />
                      </div>
                      <div className="mid_space"></div>
                      <div className="price_order_portion">
                        <h3>$ 10.00</h3>
                      </div>
                      <div className="order_view_button">
                        <Button variant="contained" className="order_view_btnn">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
