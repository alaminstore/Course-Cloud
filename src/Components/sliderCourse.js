import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import Image from "react-bootstrap/Image";
import "../Styles/_sliderCourse.css";
import "swiper/swiper.scss"; // npm install node-sass@4.14.1
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation]);

export default function SliderCourse(props) {
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
          <SwiperSlide>
            <div>
              <div className="slide_image">
                <Image fluid src="/images/1.png" />
              </div>
              <div className="slide_content">
                <div className="dialogue">
                  How to Improve Your Personal Skills
                </div>
                <div className="price">£20</div>

                <Button className="Add_to_cart_button" variant="outlined">
                  ADD TO CART
                </Button>
                <p>PDF Format</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="slide_image">
                <Image fluid src="/images/2.png" />
              </div>
              <div className="slide_content">
                <div className="dialogue">
                  How to Improve Your Personal Skills
                </div>
                <div className="price">£20</div>

                <Button className="Add_to_cart_button" variant="outlined">
                  ADD TO CART
                </Button>
                <p>PDF Format</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="slide_image">
                <Image fluid src="/images/3.png" />
              </div>
              <div className="slide_content">
                <div className="dialogue">
                  How to Improve Your Personal Skills
                </div>
                <div className="price">£20</div>

                <Button className="Add_to_cart_button" variant="outlined">
                  ADD TO CART
                </Button>
                <p>PDF Format</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="slide_image">
                <Image fluid src="/images/1.png" />
              </div>
              <div className="slide_content">
                <div className="dialogue">
                  How to Improve Your Personal Skills
                </div>
                <div className="price">£20</div>

                <Button className="Add_to_cart_button" variant="outlined">
                  ADD TO CART
                </Button>
                <p>PDF Format</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="slide_image">
                <Image fluid src="/images/2.png" />
              </div>
              <div className="slide_content">
                <div className="dialogue">
                  How to Improve Your Personal Skills
                </div>
                <div className="price">£20</div>

                <Button className="Add_to_cart_button" variant="outlined">
                  ADD TO CART
                </Button>
                <p>PDF Format</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </React.Fragment>
  );
}
