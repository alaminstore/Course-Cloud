import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuid } from "uuid";
import { config } from "react-spring";
import "../Styles/_recordedClassSlider.css";
export default class Recordedclassslider extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    config: config.gentle,
  };
  slides = [
    {
      key: uuid(),
      content: <img src="/images/record_video1.png" alt="1" />,
    },
    {
      key: uuid(),
      content: <img src="/images/record_video2.png" alt="2" />,
    },
    {
      key: uuid(),
      content: <img src="/images/record_video3.png" alt="3" />,
    },
    {
      key: uuid(),
      content: <img src="/images/record_video1.png" alt="4" />,
    },
    {
      key: uuid(),
      content: <img src="/images/record_video2.png" alt="5" />,
    },
    {
      key: uuid(),
      content: <img src="/images/record_video3.png" alt="6" />,
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  render() {
    return (
      <div
        style={{
          width: "537.52px",
          height: "388px",
          margin: " 15% auto",
        }}
      >
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          // animationConfig={this.state.config}
        />
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        ></div>
      </div>
    );
  }
}
