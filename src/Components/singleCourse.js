import React from "react";
import "../Styles/_singlecourse.css";
import Image from "react-bootstrap/Image";
import Button from "@material-ui/core/Button";

export default function SingleCourse(props) {
  const { discountpercent, discount } = props;

  return (
    <React.Fragment>
      <div className="single-course">
        <div className="img-sec">
          <Image fluid src="/images/blog/1.jpg" className="course-img" />
          <div className="image_overly_course">
            <svg
              width="65"
              height="66"
              viewBox="0 0 65 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="32.4523"
                cy="32.8863"
                rx="32.4523"
                ry="32.7281"
                fill="white"
                fill-opacity="0.14"
              />
              <ellipse
                cx="32.3427"
                cy="32.8473"
                rx="26.747"
                ry="26.9743"
                fill="white"
                fill-opacity="0.35"
              />
              <path
                d="M41.2308 30.5928C42.8373 31.5658 42.8373 33.8965 41.2308 34.8695L29.766 41.8133C28.0999 42.8224 25.9709 41.6228 25.9709 39.6749L25.9709 25.7874C25.9709 23.8395 28.0999 22.6399 29.766 23.649L41.2308 30.5928Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <div className="content-sec">
          {discount && (
            <div
              className="discountbox"
              style={{ backgroundImage: "url(/images/course_star.png)" }}
            >
              <div>
                <p>$500</p>
                <p>$800</p>
              </div>
            </div>
          )}
          {discountpercent && (
            <div
              className="discountparcent"
              style={{ backgroundImage: "url(/images/discount_star.png)" }}
            >
              <div>
                <p>20%</p>
                <p>off</p>
              </div>
            </div>
          )}
          <p className="course-cat">Marketing</p>
          <h1 className="course-title">
            How to Pitch a Video Game: 7 Tips for Pitching Games
          </h1>
          <p className="course-excerpt">
            Vitae bibendum egestas magna sit elit non. Netus volutpat dignissim
            pharetra felis dictumst.
          </p>
          <div className="course-footer">
            <div className="course-user">
              <Image
                src="/images/blog/1.jpg"
                alt="user"
                className="course-author"
                roundedCircle
              />
              <p className="author-name">Jhon Doe</p>
            </div>
            <Button variant="outlined" className="course-btn add_to_cart_btns">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
