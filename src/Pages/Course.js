import React, { useState, useRef, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { Col, Container, Row, Nav } from "react-bootstrap";
import ReactPlayer from "react-player";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PlayerControl from "../Components/playerControl";
import screenfull from "screenfull";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Courseoverview from "../Components/courseComponent/courseOverview";
import { useStateValue } from "../Store";
import SliderCourse from "../Components/sliderCourse";
import Othercourse from "../Components/otherCourse";
import Blogbox from "../Components/blogBox";
import { data } from "../Components/gridListData/Data";
import Image from "react-bootstrap/Image";
import Quesans from "../Components/courseComponent/quesAns";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../Styles/_course.css";

const useStyles = makeStyles({
  playerWrapper: {
    width: "100%",
    position: "relative",
    background: "transparent",
  },
});
const format = (seconds) => {
  if (isNaN(seconds)) {
    return `00:00`;
  }
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, "0");
  if (hh) {
    return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
  }
  return `${mm}:${ss}`;
};

var count = 0;

// ====================================================================================================
export default function Course(props) {
  const [{ bookmark }, dispatch] = useStateValue();
  const [Data, setData] = useState({
    Data: data,
    DataList: data,
  });
  const handleBookmarks = () => {
    dispatch({
      type: "SET_STATE",
      payload: { name: "bookmark", value: !bookmark },
    });
  };

  useEffect(() => {
    let buttons = document.querySelectorAll("button");
    return buttons.forEach((button) => {
      button.addEventListener("click", function () {
        buttons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");
      });
    });
  }, []);

  function handleBtns(e) {
    let DataList;
    console.log("Dataaaaa", props.Data);
    DataList = props.Data.filter((item) => item.cat === e.target.value);

    setData({
      DataList: DataList,
    });
    console.log("okkkkkk", DataList);
  }

  const classes = useStyles();
  const [timeDisplayFormat, setTimeDisplayFormat] = React.useState("normal");
  const [state, setState] = useState({
    playing: false,
    muted: false,
    volume: 0.5,
    playbackRate: 1.0,
    exitScreen: false,
    played: 0,
    seeking: false,
  });
  const {
    playing,
    muted,
    volume,
    playbackRate,
    exitScreen,
    played,
    seeking,
  } = state;
  const playerRef = useRef(null);
  const playerContainerRef = useRef(null);
  const controlsRef = useRef(null);

  const handlePlayPause = () => {
    setState({ ...state, playing: !state.playing });
  };

  const handleRewind = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 15);
  };

  const handleFastForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 15);
  };

  const hanldeMute = () => {
    setState({ ...state, muted: !state.muted });
  };
  const handleVolumeSeekUp = (e, newValue) => {
    setState({ ...state, seeking: false, volume: parseFloat(newValue / 100) });
  };
  const handleVolumeChange = (e, newValue) => {
    setState({
      ...state,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    });
  };

  const handlePlaybackRateChange = (rate) => {
    setState({ ...state, playbackRate: rate });
  };

  const toggleFullScreen = () => {
    screenfull.toggle(playerContainerRef.current);
    setState({ ...state, exitScreen: !state.exitScreen });
  };

  const handleProgress = (changeState) => {
    // console.log(changeState); //changeState is the time increase in the player.
    if (count > 2) {
      controlsRef.current.style.visibility = "hidden";
      count = 0;
    }
    if (controlsRef.current.style.visibility == "visible") {
      count += 1;
    }
    if (!state.seeking) {
      setState({ ...state, ...changeState });
    }
  };

  const handleSeekChange = (e, newValue) => {
    console.log({ newValue });
    setState({ ...state, played: parseFloat(newValue / 100) });
  };

  const handleSeekMouseDown = (e) => {
    setState({ ...state, seeking: true });
  };
  const handleSeekMouseUp = (e, newValue) => {
    console.log({ value: e.target });
    setState({ ...state, seeking: false });
    // console.log(sliderRef.current.value)
    playerRef.current.seekTo(newValue / 100, "fraction");
  };

  const handleChangeDisplayFormat = () => {
    setTimeDisplayFormat(
      timeDisplayFormat === "normal" ? "remaining" : "normal"
    );
  };

  const handleMouseMove = () => {
    controlsRef.current.style.visibility = "visible";
    count = 0;
  };

  const currentTime =
    playerRef && playerRef.current
      ? playerRef.current.getCurrentTime()
      : "00:00";

  const duration =
    playerRef && playerRef.current ? playerRef.current.getDuration() : "00:00";

  const elapsedTime =
    timeDisplayFormat == "normal"
      ? format(currentTime)
      : `-${format(duration - currentTime)}`;

  const totalDuration = format(duration);
  return (
    <React.Fragment>
      <Container>
        <div className="course_header">
          <Row>
            <Col md={8}>
              <div className="course_title">
                <h2>
                  Interior Design Styling (Residential and Commercial Spaces)
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <div className="get_started_gift">
                <Button variant="outlined" className="getstarted">
                  GET STARTED
                </Button>
                <Button variant="outlined" className="gift">
                  GIFT
                </Button>
              </div>
              <p className="billed">
                <span className="billed_bold">$15/month</span> (billed annually)
                Offer terms apply
              </p>
            </Col>
          </Row>
        </div>
        <section className="Content">
          <Row>
            <Col md={8}>
              <div
                ref={playerContainerRef}
                className={classes.playerWrapper}
                onMouseMove={handleMouseMove}
              >
                <ReactPlayer
                  ref={playerRef}
                  width={"100%"}
                  height="100%"
                  url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  //light="http://placekitten.com/200/300"
                  muted={muted}
                  playing={playing}
                  volume={volume}
                  playbackRate={playbackRate}
                  onProgress={handleProgress}
                  config={{
                    file: {
                      attributes: {
                        crossorigin: "anonymous",
                      },
                    },
                  }}
                />

                <PlayerControl
                  ref={controlsRef}
                  onPlayPause={handlePlayPause}
                  playing={playing}
                  onRewind={handleRewind}
                  onFastForward={handleFastForward}
                  muted={muted}
                  onMute={hanldeMute}
                  onVolumechange={handleVolumeChange}
                  onVolumeSeekUp={handleVolumeSeekUp}
                  volume={volume}
                  playbackRate={playbackRate}
                  onPlaybackRateChange={handlePlaybackRateChange}
                  onToggleFullScreen={toggleFullScreen}
                  exitScreen={exitScreen}
                  played={played}
                  onSeek={handleSeekChange}
                  onSeekMouseDown={handleSeekMouseDown}
                  onSeekMouseUp={handleSeekMouseUp}
                  elapsedTime={elapsedTime}
                  totalDuration={totalDuration}
                  onChangeDisplayFormat={handleChangeDisplayFormat}
                />
              </div>

              {/*
====================================
====================================
*/}

              <Tabs>
                <TabList className="tab_btn">
                  <Tab>Overview</Tab>
                  <Tab>Q & A </Tab>
                  <Tab>Notes</Tab>
                  <Tab>Announcements</Tab>
                  <span onClick={handleBookmarks} className="icon ">
                    {bookmark ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                  </span>
                </TabList>

                <TabPanel>
                  <div className="margin_adjust">
                    <Courseoverview />
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="margin_adjust">
                    <Quesans />
                  </div>
                </TabPanel>
              </Tabs>
            </Col>
            <Col md={4}>
              <div className="playList">
                <table>
                  <tbody>
                    <tr>
                      <Accordion className="modify-accordion ">
                        <AccordionSummary
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography className="icon_trailer">
                            <svg
                              width="25"
                              height="25"
                              viewBox="0 0 25 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="12.5"
                                cy="12.5"
                                r="12.5"
                                transform="rotate(90 12.5 12.5)"
                                fill="#191C21"
                              />
                              <path
                                d="M17.5 11.634C18.1667 12.0189 18.1667 12.9811 17.5 13.366L10.75 17.2631C10.0833 17.648 9.25 17.1669 9.25 16.3971L9.25 8.60289C9.25 7.83309 10.0833 7.35196 10.75 7.73686L17.5 11.634Z"
                                fill="white"
                              />
                            </svg>
                            <p className="trailer">Class Trailer</p>
                          </Typography>
                        </AccordionSummary>
                      </Accordion>
                    </tr>
                    <tr>
                      <Accordion className="modify-accordion">
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>
                            2. What is included in a WorldClass membership?
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet
                            blandit leo lobortis eget.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </tr>
                    <tr>
                      <Accordion className="modify-accordion">
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>3. Where can I watch?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet
                            blandit leo lobortis eget.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </tr>
                    <tr>
                      <Accordion className="modify-accordion">
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>
                            4. Which classes are right for me?
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet
                            blandit leo lobortis eget.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </tr>
                    <tr>
                      <Accordion className="modify-accordion">
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>
                            5. Which classes are right for me?
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet
                            blandit leo lobortis eget.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </tr>
                    <tr>
                      <Accordion className="modify-accordion">
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>
                            6. Which classes are right for me?
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet
                            blandit leo lobortis eget.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </tr>
                    <tr>
                      <Accordion className="modify-accordion">
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>
                            7. Which classes are right for me?
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet
                            blandit leo lobortis eget.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </tr>
                    <tr>
                      <Accordion className="modify-accordion">
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>
                            8. Which classes are right for me?
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet
                            blandit leo lobortis eget.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </tr>
                    <tr>
                      <Accordion className="modify-accordion">
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>
                            9. What kind of classes are right for you?
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet
                            blandit leo lobortis eget.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="gift_course">
                <h4>Gift the Course and get 5% off for your next Course</h4>
                <Button variant="outlined" className="getstarted Gift_course">
                  GIFT THIS COURSE
                </Button>
              </div>
              <div className="suggestion">
                <div className="suggestion_heading">
                  <h4>Suggested Course</h4>
                </div>
                <div className="course_info">
                  <div className="trainer_image">
                    <Image fluid src="/images/author.png" />
                  </div>
                  <div className="course_title_authorName ml-2">
                    <h6>How to Prepare yourselfs for an Interview</h6>
                    <p>Joerge Mathew</p>
                  </div>
                </div>
              </div>
              <div className="certificate">
                <h5>Certified by</h5>
                <div className="image_certificate">
                  <Image
                    fluid
                    src="/images/certificate.png"
                    className="img-fluid"
                  />
                </div>
              </div>
            </Col>
          </Row>
          <div className="clr"></div>
        </section>
      </Container>
      <section className="offer_slider ">
        <div className="container">
          <div className="col-md-12 col-xs-12 col-sm-12">
            <div className="row">
              <div className="header_slider">
                <h4>We’re offering Some useful Course Materials</h4>
                <p>
                  Vitae bibendum egestas magna sit elit non. Netus volutpat
                  dignissim pharetra felis. Orci commodo mauris adipiscing
                  semper amet.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="slider_start">
                <SliderCourse />
              </div>
              <div className="col-md-12">
                <div className="container">
                  <div className="row">
                    <div className="view_all">
                      <Button className="" variant="outlined">
                        VIEW ALL
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="join_us_forum">
        <Container>
          <Row>
            <Col md={12}>
              <div className="forum">
                <h4>Join Our Discussions Forum</h4>
                <p>
                  Learn about important delivery information, purchase options,
                  and more.
                </p>
                <Button className="join_now" variant="contained">
                  JOIN NOW
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="Other_courses">
        <div className="other_courses_heading">
          <h4>Explore Other Courses</h4>
          <Othercourse />
        </div>
      </section>
      <section className="course_related_blog">
        <Container>
          <Row>
            <Col className="course_related_header">
              <h4>Course Related Blogs</h4>
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
              <div className="view_all_blog">
                <Button className="view_all_blog_btn" variant="outlined">
                  VIEW ALL
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}
// data={this.state.DataList}
