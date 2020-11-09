import React from 'react';
import {Row, Col, Container, Image} from "react-bootstrap";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Nav from "react-bootstrap/Nav";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

export default function Footer() {
    return (
        <footer className="main_Footer">
            <div className="top_footer">
                <Container>
                    <Row>
                        <Col lg={3} >
                            <div className="footer-widget">
                                <Image src="images/logo.svg"/>
                                <p>Quis consectetur orci proin massa, et. Fermentum fringilla pharetra arcu mauris dis
                                    tristique sit id mattis. Pretium quisque phasellus dictum duis dapibus hendrerit
                                    curabitur.</p>
                                <p>
                                    <LocationOnIcon/> 89 Crown Street, LONDON, SW3 1AQ
                                </p>
                            </div>
                        </Col>
                        <Col lg={3} md={3}>
                            <h6>About</h6>
                            <Nav className="flex-column footer_nav">
                                <Nav.Link href="#home">Affiliate program </Nav.Link>
                                <Nav.Link href="#features">Careers</Nav.Link>
                                <Nav.Link href="#features">Privacy</Nav.Link>
                                <Nav.Link href="#features">Terms</Nav.Link>
                                <Nav.Link href="#features">Grants</Nav.Link>
                                <Nav.Link href="#features">Groups</Nav.Link>
                                <Nav.Link href="#features">Support</Nav.Link>

                            </Nav>
                        </Col>
                        <Col lg={3} >
                            <h6>Social</h6>
                            <Nav className="flex-column footer_nav">
                                <Nav.Link href="#home"> <TwitterIcon/> Twitter </Nav.Link>
                                <Nav.Link href="#features"><InstagramIcon/> Instagram</Nav.Link>
                                <Nav.Link href="#features"><FacebookIcon/> Facebook</Nav.Link>
                                <Nav.Link href="#features"><YouTubeIcon/> Youtube</Nav.Link>
                                <Nav.Link href="#features"><LinkedInIcon/> LinkedIn</Nav.Link>
                            </Nav>
                        </Col>
                        <Col lg={3} >
                            <h6>Download</h6>
                            <Image className='google-badge mb-2' src="images/google-play-badge.png" fluid/>
                            <Image src="images/apple-badge.png" fluid/>
                        </Col>
                    </Row>

                </Container>
            </div>
            <div className="bottom-footer py-4">
                <Container>
                    <Row>
                        <Col>
                            <p className="text-center mb-0 ">&copy; 2020 CourseCloud</p>
                        </Col>
                    </Row>

                </Container>
            </div>
        </footer>
    );
}