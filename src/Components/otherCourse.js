import React, { Component } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { data } from "../Components/gridListData/Data";
import "../Styles/_otherCourse.css";
export default class Othercourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: data,
      DataList: data,
    };
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
    const Information = this.state.DataList.map((cards) => {
      return (
        <>
          <Col md={4} className="gap">
            <div className="card" width="18rem">
              <div className="imgvideo">
                <img
                  className="card-img-top"
                  src={cards.image}
                  alt="Card image cap"
                  className="img-fluid"
                />
                <div className="overly">
                  <a href="#">
                    <i className="fas fa-play"></i>
                  </a>
                </div>
              </div>

              <div className="card-body">
                <p className="type">{cards.type}</p>
                <h5 className="card-title">{cards.title}</h5>
                <p className="card-text">{cards.desc}</p>
                <div className="d-flex">
                  <img
                    className="card-img-top"
                    src={cards.logo}
                    alt="Card image cap"
                    className="img-fluid"
                  />
                  <p className="ml-2 my-2">{cards.logoname}</p>
                  <a href="#" className=" ml-auto btn btn-outline-primary">
                    ADD TO CART
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </>
      );
    });

    return (
      <React.Fragment>
        <Container>
          <div className="btns">
            <button value="arts" className="active" onClick={this.handleBtns}>
              Culinary Arts
            </button>
            <button value="filmtv" onClick={this.handleBtns}>
              Film & TV
            </button>
            <button value="lifestyle" onClick={this.handleBtns}>
              Lifestyle
            </button>
            <button value="sports" onClick={this.handleBtns}>
              Sports & Games
            </button>
            <button value="games" onClick={this.handleBtns}>
              Sports & Games(n)
            </button>
          </div>
          <Row>{Information}</Row>
        </Container>
      </React.Fragment>
    );
  }
}
