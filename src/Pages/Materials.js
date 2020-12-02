import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import Image from "react-bootstrap/Image";
import Sliderbusiness from "../Components/sliderBusiness";
import "../Styles/_materials.css";
import Pagination from "../Components/gridListData/Pagination";
export default function Materials(props) {
  return (
    <React.Fragment>
      <div className="banner_portion">
        <Container>
          <Row>
            <Col md={12}>
              <div className="banner_inner">
                <h2>We’re offering Some useful Course Materials</h2>
                <p>
                  Vitae bibendum egestas magna sit elit non. Netus volutpat
                  dignissim pharetra felis. Orci commodo mauris adipiscing
                  semper amet.{" "}
                </p>
                <div className="search_bar">
                  <div className="input-group">
                    <input
                      type="text"
                      className="banner_searchform materials_input"
                      placeholder="Search for materials......"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-search material_btn"
                        type="button"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17 17L12.0962 12.0962M12.0962 12.0962C13.2725 10.9199 14 9.29493 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14C9.29493 14 10.9199 13.2725 12.0962 12.0962Z"
                            stroke="#FBF4F4"
                            stroke-width="1.7"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="card_portion">
        <Container>
          <Row>
            <Col md={12}>
              <div className="card_portion_header">
                <h4>Quis enim enim, massa nunc etiam Mattis sem euest.</h4>
                <p>
                  Vitae bibendum egestas magna sit elit non. Netus volutpat
                  dignissim pharetra felis. Orci commodo mauris adipiscing
                  semper amet.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="card_component">
            <Col md={4}>
              <div>
                <div className="slide_image">
                  <Image fluid src="/images/1.png" />
                </div>
                <div className="slide_content">
                  <div className="dialogue">
                    How to Improve Your Personal Skills
                  </div>
                  <div className="price">£20</div>

                  <Button className="Add_to_cart_button" variant="outlined">
                    ADD TO CART
                  </Button>
                  <p>PDF Format</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <div className="slide_image">
                  <Image fluid src="/images/2.png" />
                </div>
                <div className="slide_content">
                  <div className="dialogue">
                    How to Improve Your Personal Skills
                  </div>
                  <div className="price">£20</div>

                  <Button className="Add_to_cart_button" variant="outlined">
                    ADD TO CART
                  </Button>
                  <p>PDF Format</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <div className="slide_image">
                  <Image fluid src="/images/3.png" />
                </div>
                <div className="slide_content">
                  <div className="dialogue">
                    How to Improve Your Personal Skills
                  </div>
                  <div className="price">£20</div>

                  <Button className="Add_to_cart_button" variant="outlined">
                    ADD TO CART
                  </Button>
                  <p>PDF Format</p>
                </div>
              </div>
            </Col>
            {/* ////////////////////////// */}
            <Col md={4}>
              <div>
                <div className="slide_image">
                  <Image fluid src="/images/4.png" />
                </div>
                <div className="slide_content">
                  <div className="dialogue">
                    How to Improve Your Personal Skills
                  </div>
                  <div className="price">£20</div>

                  <Button className="Add_to_cart_button" variant="outlined">
                    ADD TO CART
                  </Button>
                  <p>PDF Format</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <div className="slide_image">
                  <Image fluid src="/images/5.png" />
                </div>
                <div className="slide_content">
                  <div className="dialogue">
                    How to Improve Your Personal Skills
                  </div>
                  <div className="price">£20</div>

                  <Button className="Add_to_cart_button" variant="outlined">
                    ADD TO CART
                  </Button>
                  <p>PDF Format</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <div className="slide_image">
                  <Image fluid src="/images/6.png" />
                </div>
                <div className="slide_content">
                  <div className="dialogue">
                    How to Improve Your Personal Skills
                  </div>
                  <div className="price">£20</div>

                  <Button className="Add_to_cart_button" variant="outlined">
                    ADD TO CART
                  </Button>
                  <p>PDF Format</p>
                </div>
              </div>
            </Col>
            {/* /////////////////////////// */}
            <Col md={4}>
              <div>
                <div className="slide_image">
                  <Image fluid src="/images/7.png" />
                </div>
                <div className="slide_content">
                  <div className="dialogue">
                    How to Improve Your Personal Skills
                  </div>
                  <div className="price">£20</div>

                  <Button className="Add_to_cart_button" variant="outlined">
                    ADD TO CART
                  </Button>
                  <p>PDF Format</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <div className="slide_image">
                  <Image fluid src="/images/8.png" />
                </div>
                <div className="slide_content">
                  <div className="dialogue">
                    How to Improve Your Personal Skills
                  </div>
                  <div className="price">£20</div>

                  <Button className="Add_to_cart_button" variant="outlined">
                    ADD TO CART
                  </Button>
                  <p>PDF Format</p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div>
                <div className="slide_image">
                  <Image fluid src="/images/9.png" />
                </div>
                <div className="slide_content">
                  <div className="dialogue">
                    How to Improve Your Personal Skills
                  </div>
                  <div className="price">£20</div>

                  <Button className="Add_to_cart_button" variant="outlined">
                    ADD TO CART
                  </Button>
                  <p>PDF Format</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <div className="pagination_portion">
              <Pagination />
            </div>
          </Row>
        </Container>
      </div>
      <div className="business_slider_portion">
        <Container>
          <Row>
            <Col md={12}>
              <div className="business_slider_inner">
                <h4>Business</h4>
                <div className="business_slider_stat">
                  <Sliderbusiness />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
