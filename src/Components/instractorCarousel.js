import React from 'react';
import "../Styles/_singlecourse.css"

import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import Slider from "react-slick";
import {Col} from "react-bootstrap";
import Instractor from "./instractor";

function SampleNextArrow(props) {
    let {className, onClick} = props;
    className = " slick-custom-nav slick-custom-next";
    return (
        <div
            className={className}

            onClick={onClick}
        >
            <KeyboardArrowRightIcon/>
        </div>
    );
}

function SamplePrevArrow(props) {
    let {className,  onClick} = props;
    className = " slick-custom-nav slick-custom-prev";
    return (
        <div
            className={className}
            onClick={onClick}
        >
            <KeyboardArrowLeftIcon/>

        </div>
    );
}
export  default function InstractorCarousel() {
    const testi_settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        appendDots: dots => (
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
        customPaging: i => (
            <span>

            </span>
        )
    };
    return (
        <React.Fragment>
            <Slider {...testi_settings}>

                <Col>
                    <Instractor/>
                </Col>
                <Col>
                    <Instractor/>
                </Col>
                <Col>
                    <Instractor/>
                </Col>
                <Col>
                    <Instractor/>
                </Col>




            </Slider>
        </React.Fragment>
    );
}