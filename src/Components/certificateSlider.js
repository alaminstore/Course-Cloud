import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import Image from "react-bootstrap/Image";
import "../Styles/_certificateSlider.css";
import "swiper/swiper.scss"; // npm install node-sass@4.14.1
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation]);

export default function Certificateslider(props) {
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
            <div>
              <div className="certificate_slider_single_portion">
                <div className="certificate_image_portion">
                  <Image fluid src="images/certificate_slider.png" />
                </div>
                <div className="certificate_info_portion">
                  <div className="course_title_name">
                    <h5>Payroll Structure & Management Advanced Diploma</h5>
                  </div>
                  <div className="download_completed_date">
                    <Button className="" variant="outlined">
                      DOWNLOAD
                    </Button>
                    <p>Completed on 30 Jul, 20</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <div className="certificate_slider_single_portion">
                <div className="certificate_image_portion">
                  <Image fluid src="images/certificate_slider.png" />
                </div>
                <div className="certificate_info_portion">
                  <div className="course_title_name">
                    <h5>Payroll Structure & Management Advanced Diploma</h5>
                  </div>
                  <div className="download_completed_date">
                    <Button className="" variant="outlined">
                      DOWNLOAD
                    </Button>
                    <p>Completed on 30 Jul, 20</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="certificate_slider_single_portion">
                <div className="certificate_image_portion">
                  <Image fluid src="images/certificate_slider.png" />
                </div>
                <div className="certificate_info_portion">
                  <div className="course_title_name">
                    <h5>Payroll Structure & Management Advanced Diploma</h5>
                  </div>
                  <div className="download_completed_date">
                    <Button className="" variant="outlined">
                      DOWNLOAD
                    </Button>
                    <p>Completed on 30 Jul, 20</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="certificate_slider_single_portion">
                <div className="certificate_image_portion">
                  <Image fluid src="images/certificate_slider.png" />
                </div>
                <div className="certificate_info_portion">
                  <div className="course_title_name">
                    <h5>Payroll Structure & Management Advanced Diploma</h5>
                  </div>
                  <div className="download_completed_date">
                    <Button className="" variant="outlined">
                      DOWNLOAD
                    </Button>
                    <p>Completed on 30 Jul, 20</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </React.Fragment>
  );
}
