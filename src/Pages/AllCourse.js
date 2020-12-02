import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Gridview from "../Components/gridView";
import Listview from "../Components/listView";
import "../Styles/_AllCourse.css";
import { data } from "../Components/gridListData/Data";
import Pagination from "../Components/gridListData/Pagination";
export default class Allcourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: data,
      DataList: data,
      checked: false,
      background: "#2E3440",
    };
    this.handleList = this.handleList.bind(this);
    this.handleGrid = this.handleGrid.bind(this);
  }
  handleList() {
    this.setState({
      ...this.state,
      checked: true,
      background: "#2E3440",
    });
  }
  handleGrid() {
    this.setState({
      ...this.state,
      checked: false,
      background: "#2E3440",
    });

    console.log("clicked false");
  }

  handleBtns = (e) => {
    console.log(e.target.value);
    let DataList;
    if (e.target.value === "all") {
      DataList = this.state.Data;
    } else {
      DataList = this.state.Data.filter((item) => item.cat === e.target.value);
    }

    this.setState({
      DataList: DataList,
    });
  };

  render() {
    return (
      <React.Fragment>
        <section className="header_allCourse">
          <Container>
            <Row>
              <Col>
                <div className="header_content">
                  <h2 className="">All Courses</h2>
                  <p>Navigate through courses of differesnt categories</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="Grid_or_list_view">
          <Container>
            <Row>
              <div className="col"></div>
              <div className="col align-self-end">
                <div className="list_grid_handler">
                  <div className="input-group">
                    <input
                      type="text"
                      className="search-form"
                      placeholder="Search Courses"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-search" type="button">
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
                  <div className="list_grid_icon">
                    <button
                      onClick={() => this.handleGrid()}
                      style={
                        !this.state.checked
                          ? { background: this.state.background }
                          : { background: "#21252D" }
                      }
                      className="gridView ml-2"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="2.5"
                          y="2.5"
                          width="8"
                          height="6"
                          rx="2"
                          stroke="#8E8D91"
                          stroke-width="1.7"
                        />
                        <rect
                          x="13.5"
                          y="2.5"
                          width="8"
                          height="10"
                          rx="2"
                          stroke="#8E8D91"
                          stroke-width="1.7"
                        />
                        <rect
                          x="2.5"
                          y="11.5"
                          width="8"
                          height="10"
                          rx="2"
                          stroke="#8E8D91"
                          stroke-width="1.7"
                        />
                        <rect
                          x="13.5"
                          y="15.5"
                          width="8"
                          height="6"
                          rx="2"
                          stroke="#8E8D91"
                          stroke-width="1.7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => this.handleList()}
                      style={
                        this.state.checked
                          ? { background: this.state.background }
                          : { background: "#21252D" }
                      }
                      className="listView ml-2"
                    >
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28 9.51602C28.4694 9.51602 28.85 9.13546 28.85 8.66602C28.85 8.19657 28.4694 7.81602 28 7.81602L28 9.51602ZM12 7.81602C11.5306 7.81602 11.15 8.19657 11.15 8.66602C11.15 9.13546 11.5306 9.51602 12 9.51602L12 7.81602ZM28 7.81602L12 7.81602L12 9.51602L28 9.51602L28 7.81602Z"
                          fill="#8E8D91"
                        />
                        <path
                          d="M28 16.85C28.4694 16.85 28.85 16.4694 28.85 16C28.85 15.5306 28.4694 15.15 28 15.15L28 16.85ZM12 15.15C11.5306 15.15 11.15 15.5306 11.15 16C11.15 16.4694 11.5306 16.85 12 16.85L12 15.15ZM28 15.15L12 15.15L12 16.85L28 16.85L28 15.15Z"
                          fill="#8E8D91"
                        />
                        <path
                          d="M28 24.184C28.4694 24.184 28.85 23.8034 28.85 23.334C28.85 22.8645 28.4694 22.484 28 22.484L28 24.184ZM12 22.484C11.5306 22.484 11.15 22.8645 11.15 23.334C11.15 23.8034 11.5306 24.184 12 24.184L12 22.484ZM28 22.484L12 22.484L12 24.184L28 24.184L28 22.484Z"
                          fill="#8E8D91"
                        />
                        <circle
                          cx="5.33333"
                          cy="8.66732"
                          r="1.33333"
                          stroke="#8E8D91"
                          stroke-width="2"
                        />
                        <ellipse
                          cx="5.33333"
                          cy="15.9993"
                          rx="1.33333"
                          ry="1.33333"
                          stroke="#8E8D91"
                          stroke-width="2"
                        />
                        <ellipse
                          cx="5.33333"
                          cy="23.3333"
                          rx="1.33333"
                          ry="1.33333"
                          stroke="#8E8D91"
                          stroke-width="2"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </section>

        <section className="GridOrList">
          {/*  */}

          {this.state.checked ? (
            <Listview data={this.state.DataList} handleBtns={this.handleBtns} />
          ) : (
            <Gridview data={this.state.DataList} handleBtns={this.handleBtns} />
          )}
        </section>

        <section className="pagination">
          <Pagination />
        </section>
      </React.Fragment>
    );
  }
}
