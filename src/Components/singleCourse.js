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
            <Button variant="outlined" className="course-btn">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
