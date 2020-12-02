import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Button from "@material-ui/core/Button";
import "../Styles/_setting.css";

export default function Setting(props) {
  const [showpayment, setShowPayment] = useState(true);
  return (
    <React.Fragment>
      <div className="setting_page_header_portion">
        <Container>
          <Row>
            <Col md={12}>
              <h2>Settings</h2>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="connect_form_portion">
        <Container>
          <Row>
            <Col md={8}>
              <div className="connect_form_start text-white">
                <form>
                  <div class="form-group spPlace">
                    <label
                      for="exampleInputEmail1"
                      className=" color_form_connect d-flex"
                    >
                      Email address <span className="ml-auto">Edit</span>
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter your Mail"
                    />
                  </div>
                  <div class="form-group">
                    <label
                      for="exampleInputPassword1"
                      className=" color_form_connect d-flex"
                    >
                      Password <span className="ml-auto">Change Password</span>
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Enter your password"
                    />
                  </div>

                  <button type="submit" class="btn btn-block">
                    <svg
                      width="12"
                      height="24"
                      viewBox="0 0 12 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.97778 24V12.7385H0V8.68382H2.97778V5.2206C2.97778 2.49917 4.73676 0 8.78983 0C10.4309 0 11.6443 0.15732 11.6443 0.15732L11.5487 3.9437C11.5487 3.9437 10.3112 3.93166 8.96071 3.93166C7.49911 3.93166 7.26494 4.60522 7.26494 5.72316V8.68382H11.6649L11.4734 12.7385H7.26494V24H2.97778Z"
                        fill="white"
                      />
                    </svg>
                    &nbsp;&nbsp; Connect To Facebook
                  </button>
                </form>
              </div>
            </Col>
            <Col md={4}>
              <div className="manage_device_portion">
                <div className="logo_portion_s">
                  <svg
                    width="116"
                    height="100"
                    viewBox="0 0 116 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M108.001 32.1426H79.43C77.5356 32.1426 75.7188 32.8951 74.3792 34.2347C73.0397 35.5742 72.2871 37.391 72.2871 39.2854V92.8569C72.2871 94.7513 73.0397 96.5681 74.3792 97.9076C75.7188 99.2472 77.5356 99.9997 79.43 99.9997H108.001C109.896 99.9997 111.713 99.2472 113.052 97.9076C114.392 96.5681 115.144 94.7513 115.144 92.8569V39.2854C115.144 37.391 114.392 35.5742 113.052 34.2347C111.713 32.8951 109.896 32.1426 108.001 32.1426ZM108.001 39.2854V78.5711H79.43V39.2854H108.001ZM79.43 92.8569V84.2854H108.001V92.8569H79.43Z"
                      fill="white"
                      fill-opacity="0.5"
                    />
                    <path
                      d="M65.1431 64.2857H8.00028V7.14286H93.7146V25H100.857V7.14286C100.857 5.24845 100.105 3.43164 98.7653 2.09209C97.4258 0.752549 95.609 0 93.7146 0H8.00028C6.10588 0 4.28906 0.752549 2.94952 2.09209C1.60997 3.43164 0.857422 5.24845 0.857422 7.14286V64.2857C0.857422 66.1801 1.60997 67.9969 2.94952 69.3365C4.28906 70.676 6.10588 71.4286 8.00028 71.4286H65.1431V64.2857Z"
                      fill="white"
                      fill-opacity="0.5"
                    />
                    <path
                      d="M65.1443 78.5713H25.8585C24.9113 78.5713 24.0029 78.9476 23.3332 79.6173C22.6634 80.2871 22.2871 81.1955 22.2871 82.1427C22.2871 83.0899 22.6634 83.9983 23.3332 84.6681C24.0029 85.3379 24.9113 85.7141 25.8585 85.7141H65.1443V78.5713Z"
                      fill="white"
                      fill-opacity="0.5"
                    />
                  </svg>
                </div>
                <div className="logo_desc_portion_s">
                  <p>
                    Make the most out of your learning experience by setting up
                    MasterClass on any of the following devices.
                  </p>
                </div>
                <div className="some_ind_setting">
                  <h4>Manage Your Devices</h4>
                  <h4>Supported Device List</h4>
                  <h4>Remove A Device</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="payment_subs_portion">
        <Container>
          <Row>
            <Col md={6}>
              <div className="payment_method_portion">
                <div className="payment_add_part">
                  <h5>Payment Method</h5>
                  <p>Add</p>
                </div>
                <div className="payment_inp_box">
                  <div className="icon_port">
                    <Image Fluid src="/images/mastercard_logo.png" />
                    <p className="card_test">{showpayment ? "4075" : ""}</p>
                  </div>

                  <div className="inputbox_port pss">
                    <input
                      onClick={() => setShowPayment(false)}
                      type="text"
                      id="payment_portion_input"
                      class="form-control psss"
                      placeholder=".........."
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="subs_method_portion">
                <div className="subs_add_part">
                  <h5>My Subscription</h5>
                  <p>View</p>
                </div>
                <div className="subs_inp_box">
                  <div className="subs_header">
                    <h6>All Access </h6>
                    <Button variant="contained" className="active_subs">
                      Active
                    </Button>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lectus venenatis massa ac sit ornare proin. Aliquam sit
                    tempor vel egestas in.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
