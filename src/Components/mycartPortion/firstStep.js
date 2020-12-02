import React from "react";
import Button from "@material-ui/core/Button";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "../../Styles/_cartStep.css";

export default function Firststep(props) {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md={6}>
            <div className="cart_checkput_portion">
              <div className="single_cart_checkout">
                <Col md={4}>
                  <div className="cart_image_cart">
                    <Image fluid src="images/order1.png" />
                  </div>
                </Col>
                <Col md={8}>
                  <div className="cart_desc_cart">
                    <div className="cart_title_cart">
                      <h5>
                        Certificate in British Sign Language (BSL) Level 1 & 2
                      </h5>
                      <div className="cart_price_cart">
                        <p>$ 15.00</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </div>

              <div className="single_cart_checkout">
                <Col md={4}>
                  <div className="cart_image_cart">
                    <Image fluid src="images/1.png" />
                  </div>
                </Col>
                <Col md={8}>
                  <div className="cart_desc_cart">
                    <div className="cart_title_cart">
                      <h5>How to Improve Your Personal Skills (PDF)</h5>
                      <div className="cart_price_cart">
                        <p>$ 20.00</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="checkout_order_portion">
              <div className="checkout_title_order">
                <h3>Your Order</h3>
              </div>
              <div className="chekout_list">
                <div className="checkout_header_part">
                  <h5>Product</h5>
                  <h5>Subtotal</h5>
                </div>
                <div className="single_checkout_product_price">
                  <h5 className="chekout_title_width">
                    Certificate in British Sign Language (BSL) Level 1 & 2
                  </h5>
                  <h5> £15.00</h5>
                </div>
                <div className="single_checkout_product_price">
                  <h5 className="chekout_title_width">
                    How to Improve Your Personal Skills (PDF)
                  </h5>
                  <h5> £20.00</h5>
                </div>
                <div className="single_checkout_product_price">
                  <h5 className="chekout_title_width">Subtotal</h5>
                  <h5> £35.00</h5>
                </div>
                <div className="single_checkout_product_price">
                  <h5 className="chekout_title_width">Total</h5>
                  <h5> £35.00</h5>
                </div>
              </div>

              <div className="apply_cupon_portion">
                <div className="apply_part_checkout">
                  <input
                    type="text"
                    name="textfield"
                    id="applycupon"
                    placeholder="Enter Coupon"
                  />
                  <input
                    name=""
                    id="applyCuponButton"
                    type="submit"
                    value="Apply"
                  />
                </div>
                <Button variant="contained" className="processed_checkout">
                  Proceed To Checkout
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
