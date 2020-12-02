import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../Styles/_sliderBusiness.css";
import "swiper/swiper.scss"; // npm install node-sass@4.14.1
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import Button from "@material-ui/core/Button";
import Image from "react-bootstrap/Image";
import { Col, Container, Row } from "react-bootstrap";

SwiperCore.use([Navigation]);
export default function Sliderbusiness(props) {
  return (
    <React.Fragment>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div>
            <div className="card">
              <div className="imgvideo">
                <img
                  className="card-img-top"
                  src="/images/grid/four.png"
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
                <p className="type">Marketing</p>
                <h5 className="card-title">
                  The Complete Digital Marketing Guide Courses 2020
                </h5>
                <p className="card-text">
                  Aliquam magna aliquet sit quisque facilisis sociis dolor.
                  Aenean orci nec bibendum...
                </p>
                <div className="d-flex">
                  <img
                    className="card-img-top"
                    src="/images/logo.png"
                    alt="Card image cap"
                    className="img-fluid"
                  />
                  <p className="ml-2 my-2">John Smith</p>
                  <a href="#" className=" ml-auto btn btn-outline-primary">
                    ADD TO CART
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <div className="card">
              <div className="imgvideo">
                <img
                  className="card-img-top"
                  src="/images/grid/four.png"
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
                <p className="type">Marketing</p>
                <h5 className="card-title">
                  The Complete Digital Marketing Guide Courses 2020
                </h5>
                <p className="card-text">
                  Aliquam magna aliquet sit quisque facilisis sociis dolor.
                  Aenean orci nec bibendum...
                </p>
                <div className="d-flex">
                  <img
                    className="card-img-top"
                    src="/images/logo.png"
                    alt="Card image cap"
                    className="img-fluid"
                  />
                  <p className="ml-2 my-2">John Smith</p>
                  <a href="#" className=" ml-auto btn btn-outline-primary">
                    ADD TO CART
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <div className="card">
              <div className="imgvideo">
                <img
                  className="card-img-top"
                  src="/images/grid/four.png"
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
                <p className="type">Marketing</p>
                <h5 className="card-title">
                  The Complete Digital Marketing Guide Courses 2020
                </h5>
                <p className="card-text">
                  Aliquam magna aliquet sit quisque facilisis sociis dolor.
                  Aenean orci nec bibendum...
                </p>
                <div className="d-flex">
                  <img
                    className="card-img-top"
                    src="/images/logo.png"
                    alt="Card image cap"
                    className="img-fluid"
                  />
                  <p className="ml-2 my-2">John Smith</p>
                  <a href="#" className=" ml-auto btn btn-outline-primary">
                    ADD TO CART
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <div className="card">
              <div className="imgvideo">
                <img
                  className="card-img-top"
                  src="/images/grid/four.png"
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
                <p className="type">Marketing</p>
                <h5 className="card-title">
                  The Complete Digital Marketing Guide Courses 2020
                </h5>
                <p className="card-text">
                  Aliquam magna aliquet sit quisque facilisis sociis dolor.
                  Aenean orci nec bibendum...
                </p>
                <div className="d-flex">
                  <img
                    className="card-img-top"
                    src="/images/logo.png"
                    alt="Card image cap"
                    className="img-fluid"
                  />
                  <p className="ml-2 my-2">John Smith</p>
                  <a href="#" className=" ml-auto btn btn-outline-primary">
                    ADD TO CART
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="card">
              <div className="imgvideo">
                <img
                  className="card-img-top"
                  src="/images/grid/four.png"
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
                <p className="type">Marketing</p>
                <h5 className="card-title">
                  The Complete Digital Marketing Guide Courses 2020
                </h5>
                <p className="card-text">
                  Aliquam magna aliquet sit quisque facilisis sociis dolor.
                  Aenean orci nec bibendum...
                </p>
                <div className="d-flex">
                  <img
                    className="card-img-top"
                    src="/images/logo.png"
                    alt="Card image cap"
                    className="img-fluid"
                  />
                  <p className="ml-2 my-2">John Smith</p>
                  <a href="#" className=" ml-auto btn btn-outline-primary">
                    ADD TO CART
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="card">
              <div className="imgvideo">
                <img
                  className="card-img-top"
                  src="/images/grid/four.png"
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
                <p className="type">Marketing</p>
                <h5 className="card-title">
                  The Complete Digital Marketing Guide Courses 2020
                </h5>
                <p className="card-text">
                  Aliquam magna aliquet sit quisque facilisis sociis dolor.
                  Aenean orci nec bibendum...
                </p>
                <div className="d-flex">
                  <img
                    className="card-img-top"
                    src="/images/logo.png"
                    alt="Card image cap"
                    className="img-fluid"
                  />
                  <p className="ml-2 my-2">John Smith</p>
                  <a href="#" className=" ml-auto btn btn-outline-primary">
                    ADD TO CART
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </React.Fragment>
  );
}
