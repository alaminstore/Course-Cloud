import React from 'react';
import "../Styles/_instractor.css"
import Image from "react-bootstrap/Image";

import Button from "@material-ui/core/Button";

export  default function LiveRecordings() {

    return (
        <React.Fragment>
            <div className="instractor-box">
                <div className="img-sec">
                    <Image fluid src="/images/image.jpg" className="instractor"/>
                    <div className="overlay">
                        <div className="overlay_content">
                            <h2>Connor Francis</h2>

                            <p>
                                Teaches Writing for Television
                            </p>
                            <Button variant="contained" className="login_btn">VIEW DETAILS</Button>
                        </div>
                    </div>
                </div>

                <div className="content-sec">

                    <div className="left">
                        <h5>
                            85+ Classes
                        </h5>
                        <p>
                            From the masters
                        </p>
                    </div>
                    <div className="middle">

                    </div>
                    <div className="right">
                        <h5>
                            20 Lessons
                        </h5>
                        <p>
                            Average per class
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}