import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import Image from "react-bootstrap/Image";
import "../Styles/_Percentageslider.css";
import "swiper/swiper.scss"; // npm install node-sass@4.14.1
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import Percentageprogress from "./percentageProgress";

SwiperCore.use([Navigation]);

export default function Percentageslider(props) {
  return (
    <React.Fragment>
      <Container>
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="slide_single_content text-white">
              <div className="percentageslider_slider_image_portion">
                <Image fluid src="images/percentage_image.png" />
              </div>
              <div className="percentageslider_slider_info_portion">
                <h5>Payroll Structure & Management</h5>
                <div className="percentage_author">
                  <div className="auth_image">
                    <Image fluid src="images/logo.png" />
                  </div>
                  <div className="auth_name">
                    <h6>
                      <span>By</span> John Smith
                    </h6>
                  </div>
                </div>
                <div className="percentage_progress text-white">
                  <Percentageprogress completed="45%" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide_single_content text-white">
              <div className="percentageslider_slider_image_portion">
                <Image fluid src="images/percentage_image2.png" />
              </div>
              <div className="percentageslider_slider_info_portion">
                <h5>Payroll Structure & Management</h5>
                <div className="percentage_author">
                  <div className="auth_image">
                    <Image fluid src="images/logo.png" />
                  </div>
                  <div className="auth_name">
                    <h6>
                      <span>By</span> John Smith
                    </h6>
                  </div>
                </div>
                <div className="percentage_progress text-white">
                  <Percentageprogress completed="25%" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide_single_content text-white">
              <div className="percentageslider_slider_image_portion">
                <Image fluid src="images/percentage_image2.png" />
              </div>
              <div className="percentageslider_slider_info_portion">
                <h5>Payroll Structure & Management</h5>
                <div className="percentage_author">
                  <div className="auth_image">
                    <Image fluid src="images/logo.png" />
                  </div>
                  <div className="auth_name">
                    <h6>
                      <span>By</span> John Smith
                    </h6>
                  </div>
                </div>
                <div className="percentage_progress text-white">
                  <Percentageprogress completed="85%" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide_single_content text-white">
              <div className="percentageslider_slider_image_portion">
                <Image fluid src="images/percentage_image.png" />
              </div>
              <div className="percentageslider_slider_info_portion">
                <h5>Payroll Structure & Management</h5>
                <div className="percentage_author">
                  <div className="auth_image">
                    <Image fluid src="images/logo.png" />
                  </div>
                  <div className="auth_name">
                    <h6>
                      <span>By</span> John Smith
                    </h6>
                  </div>
                </div>
                <div className="percentage_progress text-white">
                  <Percentageprogress completed="45%" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </React.Fragment>
  );
}
