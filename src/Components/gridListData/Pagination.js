import React from "react";
import { Container, Row } from "react-bootstrap";
import "../../Styles/_pagination.css";
export default function Pagination(props) {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <div className="pagination_inner">
            <div>
              <h3>Viewing Page 1 </h3>
            </div>
            <nav
              aria-label="Page navigation example"
              className="main_pagination ml-4"
            >
              <ul>
                <li>
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 13L1 7L7 1"
                      stroke="#666666"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>...</li>
                <li>11</li>
                <li>
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 13L7 7L1 1"
                      stroke="#DCDCDC"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </li>
              </ul>
            </nav>
          </div>
        </Row>
      </Container>
    </React.Fragment>
  );
}
