import React, { useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "../Styles/_gridView.css";

export default function Gridview(props) {
  const Information = props.data.map((cards) => {
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

  useEffect(() => {
    let buttons = document.querySelectorAll("button");
    return buttons.forEach((button) => {
      button.addEventListener("click", function () {
        buttons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");
      });
    });
  }, []);

  return (
    <React.Fragment>
      <Container>
        <div className="btns">
          <button value="all" className="active" onClick={props.handleBtns}>
            All
          </button>
          <button value="arts" onClick={props.handleBtns}>
            Culinary Arts
          </button>
          <button value="filmtv" onClick={props.handleBtns}>
            Film & TV
          </button>
          <button value="lifestyle" onClick={props.handleBtns}>
            Lifestyle
          </button>
          <button value="sports" onClick={props.handleBtns}>
            Sports & Games
          </button>
          <button value="games" onClick={props.handleBtns}>
            Sports & Games(n)
          </button>
        </div>
        <Row>{Information}</Row>
      </Container>
    </React.Fragment>
  );
}
