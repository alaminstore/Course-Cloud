import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import Image from "react-bootstrap/Image";
import "../Styles/_popularCourseSlider.css";
import "swiper/swiper.scss"; // npm install node-sass@4.14.1
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation]);

export default function Popularcourseslider(props) {
  return (
    <React.Fragment>
      <Container>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {/* popular_slider1.png */}
          <SwiperSlide>
            <div>
              <div className="popular_image_portion">
                <Image fluid src="/images/popular_slider1.png" />
              </div>
              <div className="image_overly">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="20.9693"
                    cy="20.6177"
                    rx="20.4439"
                    ry="20.6177"
                    fill="white"
                    fill-opacity="0.14"
                  />
                  <ellipse
                    cx="20.9005"
                    cy="20.5936"
                    rx="16.8498"
                    ry="16.993"
                    fill="white"
                    fill-opacity="0.35"
                  />
                  <path
                    d="M25.194 18.3815C26.8005 19.3545 26.8005 21.6852 25.194 22.6582L20.6822 25.3908C19.0161 26.3999 16.8871 25.2003 16.8871 23.2524L16.8871 17.7873C16.8871 15.8394 19.0161 14.6398 20.6822 15.6489L25.194 18.3815Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="popular_image_portion">
                <Image fluid src="/images/popular_slider2.png" />
              </div>
              <div className="image_overly">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="20.9693"
                    cy="20.6177"
                    rx="20.4439"
                    ry="20.6177"
                    fill="white"
                    fill-opacity="0.14"
                  />
                  <ellipse
                    cx="20.9005"
                    cy="20.5936"
                    rx="16.8498"
                    ry="16.993"
                    fill="white"
                    fill-opacity="0.35"
                  />
                  <path
                    d="M25.194 18.3815C26.8005 19.3545 26.8005 21.6852 25.194 22.6582L20.6822 25.3908C19.0161 26.3999 16.8871 25.2003 16.8871 23.2524L16.8871 17.7873C16.8871 15.8394 19.0161 14.6398 20.6822 15.6489L25.194 18.3815Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="popular_image_portion">
                <Image fluid src="/images/popular_slider3.png" />
              </div>
              <div className="image_overly">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="20.9693"
                    cy="20.6177"
                    rx="20.4439"
                    ry="20.6177"
                    fill="white"
                    fill-opacity="0.14"
                  />
                  <ellipse
                    cx="20.9005"
                    cy="20.5936"
                    rx="16.8498"
                    ry="16.993"
                    fill="white"
                    fill-opacity="0.35"
                  />
                  <path
                    d="M25.194 18.3815C26.8005 19.3545 26.8005 21.6852 25.194 22.6582L20.6822 25.3908C19.0161 26.3999 16.8871 25.2003 16.8871 23.2524L16.8871 17.7873C16.8871 15.8394 19.0161 14.6398 20.6822 15.6489L25.194 18.3815Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="popular_image_portion">
                <Image fluid src="/images/popular_slider3.png" />
              </div>
              <div className="image_overly">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="20.9693"
                    cy="20.6177"
                    rx="20.4439"
                    ry="20.6177"
                    fill="white"
                    fill-opacity="0.14"
                  />
                  <ellipse
                    cx="20.9005"
                    cy="20.5936"
                    rx="16.8498"
                    ry="16.993"
                    fill="white"
                    fill-opacity="0.35"
                  />
                  <path
                    d="M25.194 18.3815C26.8005 19.3545 26.8005 21.6852 25.194 22.6582L20.6822 25.3908C19.0161 26.3999 16.8871 25.2003 16.8871 23.2524L16.8871 17.7873C16.8871 15.8394 19.0161 14.6398 20.6822 15.6489L25.194 18.3815Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <div className="popular_image_portion">
                <Image fluid src="/images/popular_slider3.png" />
              </div>
              <div className="image_overly">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="20.9693"
                    cy="20.6177"
                    rx="20.4439"
                    ry="20.6177"
                    fill="white"
                    fill-opacity="0.14"
                  />
                  <ellipse
                    cx="20.9005"
                    cy="20.5936"
                    rx="16.8498"
                    ry="16.993"
                    fill="white"
                    fill-opacity="0.35"
                  />
                  <path
                    d="M25.194 18.3815C26.8005 19.3545 26.8005 21.6852 25.194 22.6582L20.6822 25.3908C19.0161 26.3999 16.8871 25.2003 16.8871 23.2524L16.8871 17.7873C16.8871 15.8394 19.0161 14.6398 20.6822 15.6489L25.194 18.3815Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </React.Fragment>
  );
}
