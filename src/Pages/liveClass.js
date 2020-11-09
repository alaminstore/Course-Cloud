import React from "react";
import {Container, Row, Col, Nav} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Button from "@material-ui/core/Button";
import "../Styles/liveclass.css"
import Blogbox from "../Components/blogBox";
import LiveRecordings from "../Components/liveRecordings";


export default function liveClass() {


    return (
        <React.Fragment>


            <section className="info_section py-6">
                <Container>
                    <Row>
                        <Col className='mb-4'>
                            <h2 className="sec-title">
                                What is CourseCloud Live?
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <div className="info-box">
                                <img src="images/livecast.svg" alt="cast"/>
                                <h4 className='mt-3'>
                                    Flexible Learning
                                </h4>
                                <p>
                                    Take classes at your own pace with on-demand videos and class workbooks.
                                </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="info-box">
                                <img src="images/chat.svg" alt="cast"/>
                                <h4 className='mt-3'>
                                    Engaging Community
                                </h4>
                                <p>
                                    Participate in student opportunities and connect with other students on the CourseCloud.
                                </p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="info-box">
                                <img src="images/compass.svg" alt="cast"/>
                                <h4 className='mt-3'>
                                    Explore
                                </h4>
                                <p>
                                    MasterClass offers full refunds up to 30 days after gift redemption.
                                </p>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </section>




            <section className="live_recordings py-6">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="sec-title">
                                Explore Other Courses
                            </h2>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col md={12}>
                            <Nav className="nav_dark course_tab justify-content-center">
                                <Nav.Item>
                                    <Nav.Link href="/home">Most Popular</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1">Last Week</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-2">Last Month</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3} md={3} sm={2}>
                                <LiveRecordings/>
                        </Col>
                        <Col lg={3} md={3} sm={2}>
                            <LiveRecordings/>
                        </Col>
                        <Col lg={3} md={3} sm={2}>
                            <LiveRecordings/>
                        </Col>
                        <Col lg={3} md={3} sm={2}>
                            <LiveRecordings/>
                        </Col>

                    </Row>
                </Container>
            </section>


            <section className="subcription_sec py-6" style={{backgroundImage: 'url(/images/subscription-bg.png)'}}>
                <Container>
                    <Row>
                        <Col>
                            <h2 className="my-0">Get Your Subscription & Avail Courses</h2>
                            <p className="my-4">Try condensed lessons, topic playlists, or binge right through a
                                class. <br/>
                                MasterClass fits in any part of your day.</p>
                            <Button className="login_btn" variant="contained"> GET STARTED</Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="blog_sec py-6">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="mb-4">
                                Our Recent Blogs
                            </h2>
                        </Col>
                    </Row>
                    <Row>

                        <Col className="home-blog">
                            <Blogbox/>
                        </Col>
                        <Col className="home-blog">
                            <Blogbox/>
                        </Col>
                        <Col className="home-blog">
                            <Blogbox/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="outlined" className="blog-sec_readmore">Read More</Button>
                        </Col>
                    </Row>
                </Container>
            </section>


        </React.Fragment>
    );
}