import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../Styles/_individualBlogSlider.css";
import "swiper/swiper.scss"; // npm install node-sass@4.14.1
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import BlogBox from "../Components/blogBox";

SwiperCore.use([Navigation]);

export default function Individualblogslider(props) {
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
            <BlogBox />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <BlogBox />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <BlogBox />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <BlogBox />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <BlogBox />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <BlogBox />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <BlogBox />
          </div>
        </SwiperSlide>
      </Swiper>
    </React.Fragment>
  );
}
