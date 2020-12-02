import { Container } from "@material-ui/core";
import React, { useState } from "react";
import { Row, Modal, Button, Form } from "react-bootstrap";
import "../Styles/_modal.css";

export default function Login(props) {
  const [login, setLogin] = useState(false);

  function handleToggle() {
    setLogin(!login);
  }

  return (
    <>
      {/* <Container> */}
      <Modal
        {...props}
        // size="md"
        className="model_size"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="model_inner">
            <h6 onClick={props.onHide} className=" close_btn ml-auto">
              x
            </h6>
            {!login && (
              <div>
                <h4 className="text-center">Log In</h4>
                <div className="login_buttons">
                  <button className="btn  btn-block btn_google_bg">
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.686 15.5C18.686 16.881 17.567 18 16.186 18H3.18604C1.80554 18 0.686035 16.881 0.686035 15.5V2.5C0.686035 1.119 1.80554 0 3.18604 0H16.186C17.567 0 18.686 1.119 18.686 2.5V15.5Z"
                        fill="white"
                      />
                      <path
                        d="M14.7282 7.9911H14.3139V7.96975H9.68534V10.0269H12.5918C12.1678 11.2244 11.0284 12.084 9.68534 12.084C7.98125 12.084 6.59962 10.7024 6.59962 8.99833C6.59962 7.29424 7.98125 5.91261 9.68534 5.91261C10.4719 5.91261 11.1876 6.20935 11.7325 6.69407L13.1871 5.23941C12.2686 4.38338 11.04 3.85547 9.68534 3.85547C6.84519 3.85547 4.54248 6.15818 4.54248 8.99833C4.54248 11.8385 6.84519 14.1412 9.68534 14.1412C12.5255 14.1412 14.8282 11.8385 14.8282 8.99833C14.8282 8.6535 14.7927 8.3169 14.7282 7.9911Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M5.14844 6.77485L6.79907 8.09076C7.2457 6.88872 8.32736 6.04002 9.59316 6.04002C10.3616 6.04002 11.0607 6.35514 11.593 6.86987L13.014 5.32512C12.1167 4.41608 10.9165 3.85547 9.59316 3.85547C7.66344 3.85547 5.98995 5.03977 5.14844 6.77485Z"
                        fill="#FF3D00"
                      />
                      <path
                        d="M9.63508 14.1415C10.9368 14.1415 12.1197 13.6164 13.014 12.7625L11.4542 11.3713C10.9482 11.7753 10.3192 12.0167 9.63508 12.0167C8.32424 12.0167 7.21121 11.1357 6.7919 9.90625L5.14844 11.2409C5.98252 12.9612 7.67638 14.1415 9.63508 14.1415Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M14.7223 8.11313H14.2837V8.0918H9.38281V10.1484H12.4603C12.2446 10.7235 11.8528 11.2194 11.3475 11.5806C11.3478 11.5804 11.348 11.5804 11.3483 11.5801L13.0337 12.9267C12.9144 13.029 14.8282 11.6909 14.8282 9.12011C14.8282 8.77537 14.7906 8.43885 14.7223 8.11313Z"
                        fill="#1976D2"
                      />
                    </svg>{" "}
                    &nbsp; Log In With Google
                  </button>

                  <button className="btn  btn-block btn_apple_bg ">
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 13.2064C15.5636 14.1434 15.3533 14.5622 14.792 15.3891C14.0061 16.5447 12.8977 17.9876 11.5284 17.9968C10.3093 18.0075 9.99462 17.228 8.33911 17.2417C6.68518 17.2494 6.34048 18.0121 5.1198 17.9999C3.74891 17.9876 2.70057 16.6884 1.91472 15.5344C-0.283141 12.2985 -0.515576 8.50469 0.84267 6.48704C1.80404 5.05635 3.32356 4.21566 4.75138 4.21566C6.20608 4.21566 7.12001 4.98756 8.32172 4.98756C9.48864 4.98756 10.1986 4.21413 11.881 4.21413C13.1523 4.21413 14.4963 4.88362 15.4577 6.03918C12.3142 7.70527 12.825 12.0447 16 13.2064ZM10.6034 2.92253C11.2153 2.16286 11.6802 1.09136 11.511 0C10.5133 0.0657265 9.34633 0.68172 8.66484 1.47961C8.04659 2.20718 7.53429 3.28632 7.73352 4.3303C8.82296 4.36393 9.95035 3.7357 10.6034 2.92253Z"
                        fill="white"
                      />
                    </svg>{" "}
                    &nbsp; Log In With apple
                  </button>
                </div>

                <div className="after_before">
                  <p>OR</p>
                </div>
                <div className="login_form">
                  <form method="POST">
                    <div class="form-group">
                      <label for="formGroupExampleInput">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="formGroupExampleInput"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="formGroupExampleInput2">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="formGroupExampleInput2"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn  btn-block btn_login_bg"
                    >
                      LOG IN
                    </button>
                  </form>
                </div>
              </div>
            )}
            {login && (
              <div>
                <h4 className="text-center">Create Account</h4>
                <div className="login_buttons">
                  <button className="btn  btn-block btn_google_bg">
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.686 15.5C18.686 16.881 17.567 18 16.186 18H3.18604C1.80554 18 0.686035 16.881 0.686035 15.5V2.5C0.686035 1.119 1.80554 0 3.18604 0H16.186C17.567 0 18.686 1.119 18.686 2.5V15.5Z"
                        fill="white"
                      />
                      <path
                        d="M14.7282 7.9911H14.3139V7.96975H9.68534V10.0269H12.5918C12.1678 11.2244 11.0284 12.084 9.68534 12.084C7.98125 12.084 6.59962 10.7024 6.59962 8.99833C6.59962 7.29424 7.98125 5.91261 9.68534 5.91261C10.4719 5.91261 11.1876 6.20935 11.7325 6.69407L13.1871 5.23941C12.2686 4.38338 11.04 3.85547 9.68534 3.85547C6.84519 3.85547 4.54248 6.15818 4.54248 8.99833C4.54248 11.8385 6.84519 14.1412 9.68534 14.1412C12.5255 14.1412 14.8282 11.8385 14.8282 8.99833C14.8282 8.6535 14.7927 8.3169 14.7282 7.9911Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M5.14844 6.77485L6.79907 8.09076C7.2457 6.88872 8.32736 6.04002 9.59316 6.04002C10.3616 6.04002 11.0607 6.35514 11.593 6.86987L13.014 5.32512C12.1167 4.41608 10.9165 3.85547 9.59316 3.85547C7.66344 3.85547 5.98995 5.03977 5.14844 6.77485Z"
                        fill="#FF3D00"
                      />
                      <path
                        d="M9.63508 14.1415C10.9368 14.1415 12.1197 13.6164 13.014 12.7625L11.4542 11.3713C10.9482 11.7753 10.3192 12.0167 9.63508 12.0167C8.32424 12.0167 7.21121 11.1357 6.7919 9.90625L5.14844 11.2409C5.98252 12.9612 7.67638 14.1415 9.63508 14.1415Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M14.7223 8.11313H14.2837V8.0918H9.38281V10.1484H12.4603C12.2446 10.7235 11.8528 11.2194 11.3475 11.5806C11.3478 11.5804 11.348 11.5804 11.3483 11.5801L13.0337 12.9267C12.9144 13.029 14.8282 11.6909 14.8282 9.12011C14.8282 8.77537 14.7906 8.43885 14.7223 8.11313Z"
                        fill="#1976D2"
                      />
                    </svg>{" "}
                    &nbsp; Log In With Google
                  </button>
                </div>
                <div className="after_before">
                  <p>OR</p>
                </div>
                <div className="login_form">
                  <form method="POST">
                    <div class="form-group">
                      <label for="formGroupExampleInput">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="formGroupExampleInput"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label for="formGroupExampleInput2">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="formGroupExampleInput2"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn  btn-block btn_login_bg"
                    >
                      CREATE ACCOUNT
                    </button>
                  </form>
                </div>
              </div>
            )}
            <div className="not_account">
              <h5>
                {!login ? "Need an account?" : "Already have an account?"}
                <span onClick={handleToggle} class="span_underline">
                  {!login ? " Sign up" : " Log In"}.
                </span>
              </h5>
              <a href="#">Forgot your password?</a>
              <p>By logging in, you agree to our</p>
              <div className="terms_policy d-flex">
                <a href="#">Privacy Policy </a> and
                <a href="#">Terms od Service.</a>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* </Container> */}
    </>
  );
}

{
  /* <Modal.Footer>
  <Button onClick={props.onHide}>Close</Button>
</Modal.Footer>; */
}
