import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Modal } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import Image from "react-bootstrap/Image";
import Percentageslider from "../Components/percentageSlider";
import Certificateslider from "../Components/certificateSlider";
import "../Styles/_userProfile.css";

export default function Userprofile(props) {
  const [show, setShow] = useState(false);
  const [addText, setAddText] = useState({
    fname: "Micheal",
    lname: "Rodriguez",
    cposition: "Student",
    iposition: "Software Developer",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const selected = document.querySelector(".selected_option");
    const optionsContainer = document.querySelector(".options-container");
    const optionsList = document.querySelectorAll(".option");
    selected.addEventListener("click", () => {
      optionsContainer.classList.toggle("activeSelect");
    });
    optionsList.forEach((o) => {
      o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("activeSelect");
      });
    });
  }, []);

  const handleChange = (e) => {
    setAddText({ ...addText, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("test::::", addText);
  };
  return (
    <React.Fragment>
      <div className="edit_profile">
        <Container>
          <Row>
            <Col md={12}>
              <div className="edit_button">
                <Button onClick={handleShow} variant="contained">
                  Edit Profile
                </Button>
              </div>
              <Modal
                show={show}
                className="edit_profile_model"
                onHide={handleClose}
                animation={false}
                size="lg"
              >
                <Modal.Body>
                  <div className="model_close" onClick={handleClose}>
                    <span>x</span>
                  </div>
                  <div className="upload_profile_image">
                    <div className="profile_image_show">
                      <svg
                        viewBox="0 0 112 112"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="56" cy="56" r="56" fill="#343A45" />
                        <ellipse
                          cx="56.0016"
                          cy="37.7612"
                          rx="16.7594"
                          ry="18.6216"
                          fill="#6B6854"
                          fill-opacity="0.88"
                        />
                        <path
                          d="M89.5201 84.3148C89.5201 95.6276 72.4563 91.7634 56.0013 91.7634C39.5462 91.7634 22.4824 95.6276 22.4824 84.3148C22.4824 73.0019 39.5462 63.8311 56.0013 63.8311C72.4563 63.8311 89.5201 73.0019 89.5201 84.3148Z"
                          fill="#6B6854"
                          fill-opacity="0.88"
                        />
                      </svg>
                    </div>
                    <div className="upload_button">
                      <Button variant="outlined">Upload a photo</Button>
                    </div>

                    {/* form Start */}

                    <form onSubmit={handleSubmit}>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label htmlFor="input_box_size">First Name</label>
                          <input
                            type="text"
                            name="fname"
                            class="form-control"
                            id="input_box_size"
                            value={addText.fname}
                            onChange={handleChange}
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label htmlFor="inputPassword4">Last Name</label>
                          <input
                            type="text"
                            name="lname"
                            class="form-control"
                            id="input_box_size"
                            value={addText.lname}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label htmlFor="input_box_size">
                            Current Position
                          </label>
                          <input
                            type="text"
                            name="cposition"
                            class="form-control"
                            id="input_box_size"
                            // value={addText.cposition}
                            onChange={handleChange}
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label htmlFor="input_box_size">
                            Interestes Position
                          </label>
                          <input
                            type="text"
                            name="iposition"
                            class="form-control"
                            id="input_box_size"
                            //value={addText.iposition}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="button_div">
                        <button
                          type="submit"
                          onClick={handleClose}
                          class="btn btn-block save_button"
                        >
                          SAVE
                        </button>
                      </div>
                    </form>

                    {/* form End */}
                  </div>
                </Modal.Body>
              </Modal>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="profile_info">
                <div className="profile_image">
                  <Image fluid src="images/profile_img.png" />
                </div>
                <div className="user_name">
                  <h5>
                    {addText.fname} {addText.lname}
                  </h5>
                </div>
                <div className="user_status">
                  <div className="current_position">
                    <h6>
                      <span>Current Position</span> {addText.cposition}
                    </h6>
                  </div>
                  <div className="inerested_position">
                    <h6>
                      <span>Interested Position</span> {addText.iposition}
                    </h6>
                  </div>
                </div>
                <div className="user_link">
                  <div className="linkedin">
                    <a href="#">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 0H2C0.895 0 0 0.895 0 2V16C0 17.105 0.895 18 2 18H16C17.105 18 18 17.105 18 16V2C18 0.895 17.105 0 16 0ZM6 14H3.477V7H6V14ZM4.694 5.717C3.923 5.717 3.408 5.203 3.408 4.517C3.408 3.831 3.922 3.317 4.779 3.317C5.55 3.317 6.065 3.831 6.065 4.517C6.065 5.203 5.551 5.717 4.694 5.717ZM15 14H12.558V10.174C12.558 9.116 11.907 8.872 11.663 8.872C11.419 8.872 10.605 9.035 10.605 10.174C10.605 10.337 10.605 14 10.605 14H8.082V7H10.605V7.977C10.93 7.407 11.581 7 12.802 7C14.023 7 15 7.977 15 10.174V14Z"
                          fill="#FBF4F4"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="facebook">
                    <a href="#">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 0H2C0.895 0 0 0.895 0 2V16C0 17.105 0.895 18 2 18H9.621V11.039H7.278V8.314H9.621V6.309C9.621 3.985 11.042 2.718 13.116 2.718C13.815 2.716 14.513 2.752 15.208 2.823V5.253H13.78C12.65 5.253 12.43 5.787 12.43 6.575V8.31H15.13L14.779 11.035H12.414V18H16C17.105 18 18 17.105 18 16V2C18 0.895 17.105 0 16 0Z"
                          fill="#FBF4F4"
                        />
                      </svg>
                    </a>
                  </div>
                  <div className="twitter">
                    <a href="#">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 0H4C1.791 0 0 1.791 0 4V14C0 16.209 1.791 18 4 18H14C16.209 18 18 16.209 18 14V4C18 1.791 16.209 0 14 0ZM14.05 6.514C14.05 6.6 14.05 6.685 14.05 6.857C14.05 10.114 11.564 13.886 7.021 13.886C5.65 13.886 4.364 13.457 3.25 12.772C3.421 12.772 3.679 12.772 3.85 12.772C4.964 12.772 6.079 12.343 6.936 11.743C5.822 11.743 4.965 10.972 4.622 10.029C4.793 10.029 4.965 10.115 5.051 10.115C5.308 10.115 5.48 10.115 5.737 10.029C4.623 9.772 3.766 8.829 3.766 7.629C4.109 7.8 4.452 7.886 4.88 7.972C4.194 7.372 3.766 6.686 3.766 5.829C3.766 5.4 3.852 4.972 4.109 4.629C5.309 6.086 7.109 7.115 9.166 7.2C9.166 7.029 9.08 6.857 9.08 6.6C9.08 5.229 10.194 4.114 11.566 4.114C12.252 4.114 12.937 4.371 13.366 4.885C13.966 4.799 14.48 4.542 14.909 4.285C14.738 4.885 14.309 5.314 13.795 5.656C14.309 5.57 14.738 5.485 15.252 5.227C14.907 5.743 14.479 6.171 14.05 6.514Z"
                          fill="#FBF4F4"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="percentage_slider">
        <Container>
          <Row>
            <Col md={12}>
              <div className="percentage_slider_header">
                <h5>Continue Watching > </h5>
              </div>
              <div className="percentage_slider_start">
                <Percentageslider />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="certificate_slider">
        <Container>
          <Row>
            <Col md={12}>
              <div className="certificate_slider_header">
                <h5>My Certificates</h5>
              </div>
              <div className="certificate_slider_start">
                <Certificateslider />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="leaderboard">
        <Container>
          <Row>
            <Col md={12}>
              <div className="leaderboard_header">
                <h5>Leaderboard</h5>
                <div className="selection_bar">
                  <div className="">
                    <div className="select-box">
                      <div className="options-container">
                        <div className="option">
                          <input
                            type="radio"
                            className="radio"
                            id="automobiles"
                            name="category"
                          />
                          <label for="automobiles">
                            Sort by Same Different Job
                          </label>
                        </div>

                        <div className="option">
                          <input
                            type="radio"
                            className="radio"
                            id="news"
                            name="category"
                          />
                          <label for="news">Last 10 Jobs</label>
                        </div>
                        <div className="option">
                          <input
                            type="radio"
                            className="radio"
                            id="tutorials"
                            name="category"
                          />
                          <label for="tutorials">All Job List</label>
                        </div>
                      </div>
                      <div class="selected_option">Sort by Same Job</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table_lead_content">
                <Col md={12}>
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">RANK</th>
                        <th scope="col">NAME</th>
                        <th scope="col">NO. OF COURSE COMPLETED</th>
                        <th scope="col">TAKEN HOURS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>MICHEAL KLIGGER</td>
                        <td>8</td>
                        <td>54.25 HRS</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>JONATHAN ARCHER</td>
                        <td>5</td>
                        <td>55.00 HRS</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>STEVE WAUGH</td>
                        <td>7</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>MICHEAL RODRIGUEZ</td>
                        <td>6</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>STEVE WAUGH</td>
                        <td>2</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td>MICHEAL KLIGGER</td>
                        <td>8</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <th scope="row">7</th>
                        <td>STEVE WAUGH</td>
                        <td>6</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <th scope="row">8</th>
                        <td>JONATHAN ARCHER</td>
                        <td>7</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <th scope="row">9</th>
                        <td>STEVE WAUGH</td>
                        <td>2</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <th scope="row">10</th>
                        <td>MICHEAL KLIGGER</td>
                        <td>8</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </Col>
              </div>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
