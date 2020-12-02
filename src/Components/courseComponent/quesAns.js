import React, { useEffect } from "react";
import "../../Styles/_quesAns.css";
import { Col, Container, Row } from "react-bootstrap";
import Button from "@material-ui/core/Button";
export default function Quesans(props) {
  // window.onload = function () {};

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
  return (
    <>
      <div className="quesAns_header">
        <Row>
          <Col md={8}>
            <div className="search_bar">
              <div className="input-group">
                <input
                  type="text"
                  className="searchform"
                  placeholder="Search Courses"
                />
                <div className="input-group-append">
                  <button className="btn btn-search bg_btn" type="button">
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
          </Col>
          <Col md={4}>
            <div className="selection_bar ml-auto">
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
                      <label for="automobiles">Sort by most Lastest</label>
                    </div>

                    <div className="option">
                      <input
                        type="radio"
                        className="radio"
                        id="news"
                        name="category"
                      />
                      <label for="news">Last 10 Comments</label>
                    </div>
                    <div className="option">
                      <input
                        type="radio"
                        className="radio"
                        id="tutorials"
                        name="category"
                      />
                      <label for="tutorials">All Comment List</label>
                    </div>
                  </div>
                  <div class="selected_option">Sort by most recent</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <Container>
        <Row>
          <div className="ques_info">
            <div className="ques_list_button">
              <h4>62 questions in this course</h4>
              <Button variant="outlined">Ask Question</Button>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}
