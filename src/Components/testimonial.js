import React from "react";
import "../Styles/_testimonial.css";
import Image from "react-bootstrap/Image";
import Slider from "react-slick";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

function SampleNextArrow(props) {
  let { className, onClick } = props;
  className = " slick-custom-nav slick-custom-next";
  return (
    <div className={className} onClick={onClick}>
      <KeyboardArrowRightIcon />
    </div>
  );
}

function SamplePrevArrow(props) {
  let { className, onClick } = props;
  className = " slick-custom-nav slick-custom-prev";
  return (
    <div className={className} onClick={onClick}>
      <KeyboardArrowLeftIcon />
    </div>
  );
}

export default function Testimonial() {
  const testi_settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",

          bottom: "-34px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => <span></span>,
  };
  return (
    <React.Fragment>
      <div className="testimonials">
        <Slider {...testi_settings}>
          <div className="testimonial-box">
            <div className="testi_profile">
              <Image
                fluid
                src="images/testimonial/profile.png"
                className="profile"
              />
              <div className="testi_content">
                <div className="inner_content">
                  <p>
                    I've learned a positively immeasurable amount of things from
                    Georgina Sims and Holly Tyler. It gave me this sense of
                    possibility. Like I can actually do it.
                  </p>
                  <p className="testi_author">
                    -John Coates, Content Writer, UK
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-box">
            <div className="testi_profile">
              <Image
                fluid
                src="images/testimonial/profile.png"
                className="profile"
              />
              <div className="testi_content">
                <div className="inner_content">
                  <p>
                    I've learned a positively immeasurable amount of things from
                    Georgina Sims and Holly Tyler. It gave me this sense of
                    possibility. Like I can actually do it.
                  </p>
                  <p className="testi_author">
                    -John Coates, Content Writer, UK
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-box">
            <div className="testi_profile">
              <Image
                fluid
                src="images/testimonial/profile.png"
                className="profile"
              />
              <div className="testi_content">
                <div className="inner_content">
                  <p>
                    I've learned a positively immeasurable amount of things from
                    Georgina Sims and Holly Tyler. It gave me this sense of
                    possibility. Like I can actually do it.
                  </p>
                  <p className="testi_author">
                    -John Coates, Content Writer, UK
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-box">
            <div className="testi_profile">
              <Image
                fluid
                src="images/testimonial/profile.png"
                className="profile"
              />
              <div className="testi_content">
                <div className="inner_content">
                  <p>
                    I've learned a positively immeasurable amount of things from
                    Georgina Sims and Holly Tyler. It gave me this sense of
                    possibility. Like I can actually do it.
                  </p>
                  <p className="testi_author">
                    -John Coates, Content Writer, UK
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-box">
            <div className="testi_profile">
              <Image
                fluid
                src="images/testimonial/profile.png"
                className="profile"
              />
              <div className="testi_content">
                <div className="inner_content">
                  <p>
                    I've learned a positively immeasurable amount of things from
                    Georgina Sims and Holly Tyler. It gave me this sense of
                    possibility. Like I can actually do it.
                  </p>
                  <p className="testi_author">
                    -John Coates, Content Writer, UK
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-box">
            <div className="testi_profile">
              <Image
                fluid
                src="images/testimonial/profile.png"
                className="profile"
              />
              <div className="testi_content">
                <div className="inner_content">
                  <p>
                    I've learned a positively immeasurable amount of things from
                    Georgina Sims and Holly Tyler. It gave me this sense of
                    possibility. Like I can actually do it.
                  </p>
                  <p className="testi_author">
                    -John Coates, Content Writer, UK
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-box">
            <div className="testi_profile">
              <Image
                fluid
                src="images/testimonial/profile.png"
                className="profile"
              />
              <div className="testi_content">
                <div className="inner_content">
                  <p>
                    I've learned a positively immeasurable amount of things from
                    Georgina Sims and Holly Tyler. It gave me this sense of
                    possibility. Like I can actually do it.
                  </p>
                  <p className="testi_author">
                    -John Coates, Content Writer, UK
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-box">
            <div className="testi_profile">
              <Image
                fluid
                src="images/testimonial/profile.png"
                className="profile"
              />
              <div className="testi_content">
                <div className="inner_content">
                  <p>
                    I've learned a positively immeasurable amount of things from
                    Georgina Sims and Holly Tyler. It gave me this sense of
                    possibility. Like I can actually do it.
                  </p>
                  <p className="testi_author">
                    -John Coates, Content Writer, UK
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-box">
            <div className="testi_profile">
              <Image
                fluid
                src="images/testimonial/profile.png"
                className="profile"
              />
              <div className="testi_content">
                <div className="inner_content">
                  <p>
                    I've learned a positively immeasurable amount of things from
                    Georgina Sims and Holly Tyler. It gave me this sense of
                    possibility. Like I can actually do it.
                  </p>
                  <p className="testi_author">
                    -John Coates, Content Writer, UK
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </React.Fragment>
  );
}
