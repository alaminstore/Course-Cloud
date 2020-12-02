import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Button from "@material-ui/core/Button";
import "../Styles/_authorPage.css";
import Popularcourseslider from "../Components/popularCourseSlider";
import Anothercourseslider from "../Components/anotherCourseSlider";
import Individualblogslider from "../Components/individualBlogSlider";
import Recordedclassslider from "../Components/recordedClassSlider";
export default function Authorpage(props) {
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div>
      <div className="extra-content area_extrs">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
        nesciunt dolore sit aliquam, adipisci quas qui, accusantium ipsum
        voluptatum dolor ipsa tempore dolorum architecto minima? Sunt placeat
        excepturi id quos nemo debitis aperiam ex dolorem quaerat totam
        obcaecati hic laboriosam dignissimos optio impedit corporis
        consequuntur, quis iste exercitationem iure facere libero consectetur!
        Excepturi ratione ipsa praesentium quod dolorem eius, facere possimus
        pariatur eaque harum fuga aperiam minus rem deserunt quis cum saepe,
        dignissimos corrupti dicta similique quo, assumenda quaerat error.
        Beatae cupiditate perferendis maiores architecto veniam iure tempore
        tempora sequi, officia deleniti id necessitatibus porro, voluptas
        praesentium. Accusamus, blanditiis a.
      </div>
    </div>
  );

  const ActiontoClick = readMore ? "See Less" : "See More";

  return (
    <React.Fragment>
      <div className="author_banner_portion">
        <Container>
          <Row>
            <Col md={4}>
              <div className="card_portion card_author">
                <div class="card">
                  <div className="image_portion">
                    <Image fluid src="/images/author_test.png" />
                    <div className="image_overly_text">
                      <h5>Jake Hyde</h5>
                      <p>Teaches Writing for Television</p>
                    </div>
                  </div>

                  <div class="card-body card_author">
                    <div className="portion_left">
                      <h5>15+ Classes</h5>
                      <p>From the masters</p>
                    </div>
                    <div className="middle_part"> </div>
                    <div className="portion_right">
                      <h5>20 Lessons</h5>
                      <p>Average per class</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={8}>
              <div className="popular_course_slider">
                <h5 className="text-white">Popular Courses</h5>
                <div className="popular_course_slider_start">
                  <Popularcourseslider />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="about_author_portion">
        <Container>
          <Row>
            <Col md={12}>
              <div className="about_author">
                <h5>About</h5>
                <p>
                  Unlike many other professions, teaching is very strict in its
                  requirements. It’s because we don’t want to give the
                  responsibility of educating our children to someone who
                  doesn’t have the proper education and credentials. So, getting
                  into teaching requires a minimum degree in the first place.
                  After that, the other things come. You need a bachelor degree
                  to become a teacher. There are also other specialized and
                  advanced degrees, but you need your bachelor degree before
                  everything.
                </p>
                {readMore && extraContent}
                <a
                  className="read-more-link"
                  onClick={() => {
                    setReadMore(!readMore);
                  }}
                >
                  {ActiontoClick}
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="explore_live_record">
        <Container>
          <Row>
            <Col md={6}>
              <div className="explore_text">
                <h4>Explore Live Recorded Classes</h4>
                <p>
                  Our customers pay us every month, which means we pay you every
                  month. Once you refer someone to us, you earn a commission for
                  as long as that person stays a customer.
                </p>
                <p className="course_p_gap">
                  We’ll deposit money straight into your PayPal account.
                  Hassle-free and guaranteed.
                </p>
                <Button variant="contained" className="course_view_all_btn">
                  View All
                </Button>
              </div>
            </Col>
            <Col md={6}>
              <Recordedclassslider />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="couses_another_slider">
        <Container>
          <Row>
            <Col md={12}>
              <div className="another_courses_slider_portion">
                <h5>Courses</h5>
                <div className="another_slider_slider_start">
                  <Anothercourseslider />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="blogs_by_jakes_hyde">
        <Container>
          <Row>
            <Col md={12}>
              <div className="blogs_part_start_ind">
                <h5>Blogs By Jake Hyde</h5>
                <div className="blog_by_ind_start">
                  <Individualblogslider />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}
