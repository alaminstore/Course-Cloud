import React, { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import SingleCourse from "../Components/singleCourse";
import Button from "@material-ui/core/Button";
import "../Styles/homepage.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Blogbox from "../Components/blogBox";
import Testimonial from "../Components/testimonial";

import InstractorCarousel from "../Components/instractorCarousel";
import Timer from "react-compound-timer";

export default function Home() {
  return (
    <React.Fragment>
      <section className="home-banner py-6">
        <Container>
          <Row>
            <Col md={6}>
              <div className="content-wrapper">
                <div className="inner-wrapper">
                  <div className="content">
                    <h2>a learning curve</h2>
                    <h1>is essential to growth</h1>
                    <p>All of CourseCloud.Free for 3 days.</p>
                  </div>
                  <div className="banner-btn-sec">
                    <div>
                      <Button className="login_btn" variant="contained">
                        Get Started
                      </Button>
                    </div>
                    <p>
                      $15/month (billed annually) <br />
                      Offer terms apply
                    </p>
                  </div>
                  <div className="banner-partner">
                    <div>
                      <Image fluid src="images/partner/img-1.png" />
                    </div>
                    <div>
                      <Image fluid src="images/partner/img-2.png" />
                    </div>
                    <div>
                      <Image fluid src="images/partner/img-3.png" />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} style={{ padding: "0" }}>
              <Image
                fluid
                src="images/banner-img.jpg"
                style={{ marginLeft: "auto" }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="become_instractor_sec py-6">
        <Container fluid>
          <Row>
            <Col md={6}>
              <div className="inst_container_top">
                <div className="instractors">
                  <Image src="images/instractor.jpg" fluid />
                  <div className="overlay"></div>
                </div>

                <div className="instractors">
                  <Image src="images/instractor.jpg" fluid />
                  <div className="overlay"></div>
                </div>

                <div className="instractors">
                  <Image src="images/instractor.jpg" fluid />
                  <div className="overlay"></div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <h2 className="text-white">
                Become an Instructor - Earn by <br />
                Teaching Online at Course Cloud
              </h2>
              <p className="text-white mt-4">
                Watch thousands of lessons from the best as they share their{" "}
                <br />
                stories, skills, shortcuts, failures, and successes.
              </p>
              <Button variant="contained" className="primary_btn">
                BECOME A INSTRUCTOR
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="inst_container">
                <div className="instractors">
                  <Image src="images/instractor.jpg" fluid />
                  <div className="overlay"></div>
                </div>

                <div className="instractors">
                  <Image src="images/instractor.jpg" fluid />
                  <div className="overlay"></div>
                </div>

                <div className="instractors">
                  <Image src="images/instractor.jpg" fluid />
                  <div className="overlay"></div>
                </div>

                <div className="instractors">
                  <Image src="images/instractor.jpg" fluid />
                  <div className="overlay"></div>
                </div>

                <div className="instractors">
                  <Image src="images/instractor.jpg" fluid />
                  <div className="overlay"></div>
                </div>

                <div className="instractors">
                  <Image src="images/instractor.jpg" fluid />
                  <div className="overlay"></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="courses_tab_sec py-6">
        <Container>
          <Row>
            <Col>
              <h2 className="sec-title">Explore Other Courses</h2>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col md={9}>
              <Nav className="nav_dark course_tab">
                <Nav.Item>
                  <Nav.Link href="/home">Most Popular</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Culinary Arts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Film & TV</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Lifestyle</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Sports & Games</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col>
              <Nav className="nav_dark justify-content-end">
                <Nav.Item>
                  <Nav.Link>
                    See All Courses
                    <ArrowRightAltIcon />
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={3} sm={2}>
              <SingleCourse discount="true" />
            </Col>
            <Col lg={3} md={3} sm={2}>
              <SingleCourse discount="true" />
            </Col>
            <Col lg={3} md={3} sm={2}>
              <SingleCourse />
            </Col>
            <Col lg={3} md={3} sm={2}>
              <SingleCourse discount="true" />
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="discount_Course py-6"
        style={{ backgroundImage: "url(/images/dealofthe-bg.png)" }}
      >
        <Container>
          <Row>
            <Col>
              <div className="dis_header">
                <h2 className="text-center text-white">Deal of The Day</h2>
                <p>
                  Vestibulum purus mus gravida ultrices consectetur morbi
                  tomorbi faucibus ut eget nec tempor.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="timer mb-5">
                <Timer initialTime={550000000} direction="backward">
                  {() => (
                    <React.Fragment>
                      <ul className="nav time-nav">
                        <li>
                          <span className="time">
                            <Timer.Days />
                          </span>
                          <span className="time_sub">Days</span>
                        </li>
                        <li>
                          <span className="time">
                            <Timer.Hours />
                          </span>
                          <span className="time_sub">Hours</span>
                        </li>
                        <li>
                          <span className="time">
                            <Timer.Minutes />
                          </span>
                          <span className="time_sub">Minutes</span>
                        </li>
                        <li>
                          <span className="time">
                            <Timer.Seconds />
                          </span>
                          <span className="time_sub">Seconds</span>
                        </li>
                      </ul>
                    </React.Fragment>
                  )}
                </Timer>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={4} sm={2}>
              <SingleCourse discountpercent="true" />
            </Col>
            <Col lg={4} md={4} sm={2}>
              <SingleCourse discountpercent="true" />
            </Col>
            <Col lg={4} md={4} sm={2}>
              <SingleCourse discountpercent="true" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="instrator_sec py-6">
        <Container>
          <Row>
            <Col>
              <h2 className="mb-5 text-white">Featured Instructors</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <InstractorCarousel />
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="testimonial_sec py-6"
        style={{ backgroundImage: "url(/images/testimonial-bg.jpg)" }}
      >
        <Container>
          <Row>
            <Col>
              <h2 className="mb-5 text-center text-white">
                What Students are Saying
              </h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="blog_sec py-6">
        <Container>
          <Row>
            <Col>
              <h2 className="mb-4">Our Recent Blogs</h2>
            </Col>
          </Row>
          <Row>
            <Col className="home-blog">
              <Blogbox />
            </Col>
            <Col className="home-blog">
              <Blogbox />
            </Col>
            <Col className="home-blog">
              <Blogbox />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="outlined" className="blog-sec_readmore">
                Read More
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="app_sec py-6">
        <Container>
          <Row>
            <Col lg={6} className=" mt-5 mt-lg-0 ">
              <div className="content-wrapper">
                <div className="text-container">
                  <h2 className="title mb-4">Easy Access From Anywhere</h2>
                  <p>
                    Tincidunt eget lectus facilisis ut tincidunt. Tellus at diam
                    facilisis enim consectetur adipiscing cras tincidunt. Et
                    placerat tempor dignissim tempor eget sit cursus. Diam nunc
                    vulputate vel ornare. Ultrices sapien ullamcorper tristique
                    eleifend amet leo odio.
                  </p>
                  <div className="text-footer">
                    <Image
                      className="google-badge"
                      src="images/google-play-badge.png"
                      fluid
                    />
                    <Image src="images/apple-badge.png" fluid />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={5} className=" mt-5 mt-lg-0 offset-lg-1">
              <div className="wrapper">
                <div className="app-box">
                  <Image className="app-img" src="images/app.png" fluid />
                  <div className="content">
                    <Image src="images/app-pre.png" fluid />
                    <h4 className="mt-2">Digital Marketing - Basic</h4>
                    <p className="author">By Arthur Bell</p>
                    <p className="excerpt">
                      Orci gravida elit, egestas tincidunt. Viverra consectetur
                      sit auctor nibh cursus accumsan...
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        className="subcription_sec py-6"
        style={{ backgroundImage: "url(/images/subscription-bg.png)" }}
      >
        <Container>
          <Row>
            <Col>
              <h2 className="my-0">Get Your Subscription & Avail Courses</h2>
              <p className="my-4">
                Try condensed lessons, topic playlists, or binge right through a
                class. <br />
                MasterClass fits in any part of your day.
              </p>
              <Button className="login_btn" variant="contained">
                {" "}
                GET STARTED
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="faq-sec py-6">
        <Container>
          <Row>
            <Col md={6}>
              <Row>
                <Col>
                  <h6 className="text-white">Free Trial</h6>
                  <Accordion className="faq-accordion">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>How does the free trial work?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className="faq-accordion">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>
                        Who is eligible to participate in free trial?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col>
                  <h6 className="text-white">Free Trial</h6>
                  <Accordion className="faq-accordion">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>How much does WorldClass cost?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className="faq-accordion">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>
                        How does the 30-day guarantee work?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className="faq-accordion">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>How do I cancel?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Col>
              </Row>
            </Col>
            <Col md={6} className="mt-4 mt-md-0 mt-sm-0">
              <h6 className="text-white">General</h6>
              <Accordion className="faq-accordion">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>How does the free trial work?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="faq-accordion">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    Who is eligible to participate in free trial?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="faq-accordion">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    Who is eligible to participate in free trial?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="faq-accordion">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    Who is eligible to participate in free trial?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}
