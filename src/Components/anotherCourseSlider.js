import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss"; // npm install node-sass@4.14.1
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import Button from "@material-ui/core/Button";
import Image from "react-bootstrap/Image";
import { Col, Container, Row } from "react-bootstrap";
import SingleCourse from "../Components/singleCourse";

import "../Styles/_anotherCourseSlider.css";

SwiperCore.use([Navigation]);

export default function Anothercourseslider(props) {
  return (
    <React.Fragment>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        navigation
        spaceBetween={15}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div>
            <SingleCourse discount="true" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <SingleCourse discount="true" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <SingleCourse discount="true" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <SingleCourse discount="true" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <SingleCourse discount="true" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <SingleCourse discount="true" />
          </div>
        </SwiperSlide>
      </Swiper>
    </React.Fragment>
  );
}
