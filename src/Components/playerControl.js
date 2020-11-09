import React, { forwardRef } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

import PauseIcon from "@material-ui/icons/Pause";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import Popover from "@material-ui/core/Popover";
import Volumeoff from "@material-ui/icons/VolumeOff";
import "../Styles/_playerControl.css";

const useStyles = makeStyles({
  contrilsWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // backgroundImage: `url(${"/images/video.png"})`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    zIndex: 1,
  },
  controlIcons: {
    color: "#FFFFFF",
    fontSize: 50,
    transform: "scale(0.9)",
    "&:hover": {
      color: "#fff",
      transform: "scale(1)",
    },
  },
  bottomIcons: {
    color: "#FFFFFF",
    "&:hover": {
      color: "#fff",
    },
  },
  volumeSlider: {
    width: 100,
  },
});
function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};
const PrettoSlider = withStyles({
  root: {
    color: "#FFFFFF",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default forwardRef(
  (
    {
      onPlayPause,
      playing,
      onRewind,
      onFastForward,
      muted,
      onMute,
      onVolumechange,
      onVolumeSeekUp,
      volume,
      playbackRate,
      onPlaybackRateChange,
      onToggleFullScreen,
      exitScreen,
      played,
      onSeek,
      onSeekMouseDown,
      onSeekMouseUp,
      elapsedTime,
      totalDuration,
      onChangeDisplayFormat,
    },
    ref
  ) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopover = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? "playbackrate-popover" : undefined;

    return (
      <div className={classes.contrilsWrapper} ref={ref}>
        {/* Top controls */}
        <Grid
          Container
          direction="row"
          alignItem="center"
          justify="space-between"
          style={{ padding: 16 }}
        >
          <Grid item>
            <Typography variant="h6" style={{ color: "#fff" }}>
              Video Title...
            </Typography>
          </Grid>
        </Grid>
        {/* Middle controls .. */}
        <Grid container direction="row" alignItems="center" justify="center">
          {/* <IconButton
        onClick={onRewind}
        className={classes.controlIcons}
        aria-label="reqind"
      >
        <FastRewindIcon fontSize="inherit" />
      </IconButton> */}

          <IconButton
            onClick={onPlayPause}
            className={classes.controlIcons}
            aria-label="reqind"
          >
            {playing ? (
              <PauseIcon fontSize="" />
            ) : (
              <div className="playBg">
                <svg
                  width="26"
                  height="30"
                  viewBox="0 0 26 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.3734 12.8496C26.0067 13.818 26.0067 16.182 24.3734 17.1504L4.02509 29.216C2.35859 30.2042 0.25 29.0031 0.25 27.0656L0.25 2.93436C0.25 0.996923 2.35858 -0.204189 4.02508 0.783968L24.3734 12.8496Z"
                    fill="white"
                  />
                </svg>
              </div>
            )}
          </IconButton>

          {/* <IconButton
        onClick={onFastForward}
        className={classes.controlIcons}
        aria-label="reqind"
      >
        <FastForwardIcon fontSize="inherit" />
      </IconButton> */}
        </Grid>
        {/* Bottom controls .. */}

        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          style={{ padding: 16 }}
        >
          <Grid item xs={12}>
            <PrettoSlider
              min={0}
              max={100}
              // defaultValue={20}
              value={played * 100}
              ValueLabelComponent={(props) => (
                <ValueLabelComponent {...props} value={elapsedTime} />
              )}
              onChange={onSeek}
              onMouseDown={onSeekMouseDown}
              onChangeCommitted={onSeekMouseUp}
            />
          </Grid>
          <Grid item>
            <Grid container alignItems="center" direction="row">
              <IconButton onClick={onPlayPause} className={classes.bottomIcons}>
                {playing ? (
                  <PauseIcon />
                ) : (
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 5.65442V9.34558C0 12.3179 0 13.8041 0.969617 14.3869C1.93923 14.9698 3.2517 14.2725 5.87662 12.878L9.35066 11.0325C12.2749 9.47896 13.737 8.70221 13.737 7.5C13.737 6.29779 12.2749 5.52104 9.35066 3.96754L5.87662 2.12195C3.2517 0.727463 1.93923 0.0302178 0.969617 0.613059C0 1.1959 0 2.68207 0 5.65442Z"
                      fill="white"
                    />
                  </svg>
                )}
              </IconButton>
              <IconButton onClick={onMute} className={classes.bottomIcons}>
                {muted ? (
                  <Volumeoff />
                ) : (
                  <svg
                    width="20"
                    height="17"
                    viewBox="0 0 20 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 6.78472C0.5 5.68015 1.39543 4.78472 2.5 4.78472H4.52934C4.98348 4.78472 5.4241 4.63016 5.77873 4.34646L8.3371 2.29976C8.99186 1.77595 9.9618 2.24212 9.9618 3.08062V14.0582C9.9618 14.8968 8.99186 15.3629 8.3371 14.8391L5.77873 12.7924C5.4241 12.5087 4.98348 12.3542 4.52934 12.3542H2.5C1.39543 12.3542 0.5 11.4587 0.5 10.3542V6.78472Z"
                      fill="white"
                    />
                    <path
                      d="M12.8003 4.78516C12.8003 4.78516 14.2196 6.20443 14.2196 8.56988C14.2196 10.9353 12.8003 12.3546 12.8003 12.3546"
                      stroke="white"
                      stroke-width="1.7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.6387 1C15.6387 1 18.6664 3.83854 18.6664 8.56944C18.6664 13.3003 15.6387 16.1389 15.6387 16.1389"
                      stroke="white"
                      stroke-width="1.7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                )}
              </IconButton>

              <Slider
                min={0}
                max={100}
                // defaultValue={60}
                value={volume * 100}
                className={classes.volumeSlider}
                onChange={onVolumechange}
                onChangeCommitted={onVolumeSeekUp}
              />
              <Button
                onClick={onChangeDisplayFormat}
                variant="text"
                style={{ color: "#fff", marginLeft: 16 }}
              >
                <Typography>
                  {elapsedTime}/{totalDuration}
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            {/*  */}
            <Button
              onClick={onRewind}
              variant="text"
              className={classes.bottomIcons}
            >
              <Typography>
                <svg
                  width="17"
                  height="20"
                  viewBox="0 0 17 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.999997 11C0.999997 12.4834 1.43986 13.9334 2.26397 15.1668C3.08809 16.4001 4.25943 17.3614 5.62987 17.9291C7.00032 18.4968 8.50832 18.6453 9.96317 18.3559C11.418 18.0665 12.7544 17.3522 13.8033 16.3033C14.8522 15.2544 15.5665 13.918 15.8559 12.4632C16.1453 11.0083 15.9968 9.50032 15.4291 8.12987C14.8614 6.75943 13.9001 5.58809 12.6668 4.76398C11.4334 3.93987 9.98336 3.5 8.5 3.5H6M6 3.5L8.5 1M6 3.5L8.5 6"
                    stroke="white"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.01533 13.26H6.18734V9.888C6.18734 9.75733 6.19133 9.62 6.19933 9.476L5.36733 10.172C5.33267 10.2013 5.29667 10.2213 5.25933 10.232C5.22467 10.2427 5.19 10.248 5.15533 10.248C5.102 10.248 5.05267 10.2373 5.00733 10.216C4.96467 10.192 4.93267 10.1653 4.91133 10.136L4.59933 9.708L6.36333 8.208H7.17533V13.26H8.21533V14H5.01533V13.26ZM12.376 8.636C12.376 8.77733 12.3306 8.892 12.24 8.98C12.152 9.068 12.004 9.112 11.796 9.112H10.204L9.99596 10.32C10.2573 10.2667 10.496 10.24 10.712 10.24C11.016 10.24 11.2826 10.2853 11.512 10.376C11.744 10.4667 11.9386 10.592 12.096 10.752C12.2533 10.912 12.372 11.1 12.452 11.316C12.532 11.5293 12.572 11.76 12.572 12.008C12.572 12.3147 12.5173 12.5947 12.408 12.848C12.3013 13.1013 12.152 13.3187 11.96 13.5C11.768 13.6787 11.54 13.8173 11.276 13.916C11.0146 14.0147 10.7293 14.064 10.42 14.064C10.2386 14.064 10.0666 14.0453 9.90396 14.008C9.74129 13.9707 9.58796 13.9213 9.44396 13.86C9.30263 13.796 9.17063 13.724 9.04796 13.644C8.92796 13.5613 8.81996 13.4747 8.72396 13.384L9.02796 12.964C9.09196 12.8733 9.17729 12.828 9.28396 12.828C9.35063 12.828 9.41729 12.8493 9.48396 12.892C9.55329 12.9347 9.63329 12.9813 9.72396 13.032C9.81463 13.0827 9.91996 13.1293 10.04 13.172C10.16 13.2147 10.3053 13.236 10.476 13.236C10.6573 13.236 10.8173 13.2067 10.956 13.148C11.0946 13.0893 11.2093 13.008 11.3 12.904C11.3933 12.7973 11.4626 12.672 11.508 12.528C11.556 12.3813 11.58 12.2227 11.58 12.052C11.58 11.7373 11.488 11.492 11.304 11.316C11.1226 11.1373 10.8546 11.048 10.5 11.048C10.22 11.048 9.93863 11.0987 9.65596 11.2L9.03996 11.024L9.51996 8.216H12.376V8.636Z"
                    fill="white"
                  />
                </svg>
              </Typography>
            </Button>

            <Button
              onClick={onFastForward}
              variant="text"
              className={classes.bottomIcons}
            >
              <Typography>
                <svg
                  width="17"
                  height="20"
                  viewBox="0 0 17 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 11C16 12.4834 15.5601 13.9334 14.736 15.1668C13.9119 16.4001 12.7406 17.3614 11.3701 17.9291C9.99968 18.4968 8.49168 18.6453 7.03683 18.3559C5.58197 18.0665 4.2456 17.3522 3.1967 16.3033C2.14781 15.2544 1.4335 13.918 1.14411 12.4632C0.854725 11.0083 1.00325 9.50032 1.57091 8.12987C2.13856 6.75943 3.09986 5.58809 4.33323 4.76398C5.5666 3.93987 7.01664 3.5 8.5 3.5H11M11 3.5L8.5 1M11 3.5L8.5 6"
                    stroke="white"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.01533 13.26H6.18734V9.888C6.18734 9.75733 6.19133 9.62 6.19933 9.476L5.36733 10.172C5.33267 10.2013 5.29667 10.2213 5.25933 10.232C5.22467 10.2427 5.19 10.248 5.15533 10.248C5.102 10.248 5.05267 10.2373 5.00733 10.216C4.96467 10.192 4.93267 10.1653 4.91133 10.136L4.59933 9.708L6.36333 8.208H7.17533V13.26H8.21533V14H5.01533V13.26ZM12.376 8.636C12.376 8.77733 12.3306 8.892 12.24 8.98C12.152 9.068 12.004 9.112 11.796 9.112H10.204L9.99596 10.32C10.2573 10.2667 10.496 10.24 10.712 10.24C11.016 10.24 11.2826 10.2853 11.512 10.376C11.744 10.4667 11.9386 10.592 12.096 10.752C12.2533 10.912 12.372 11.1 12.452 11.316C12.532 11.5293 12.572 11.76 12.572 12.008C12.572 12.3147 12.5173 12.5947 12.408 12.848C12.3013 13.1013 12.152 13.3187 11.96 13.5C11.768 13.6787 11.54 13.8173 11.276 13.916C11.0146 14.0147 10.7293 14.064 10.42 14.064C10.2386 14.064 10.0666 14.0453 9.90396 14.008C9.74129 13.9707 9.58796 13.9213 9.44396 13.86C9.30263 13.796 9.17063 13.724 9.04796 13.644C8.92796 13.5613 8.81996 13.4747 8.72396 13.384L9.02796 12.964C9.09196 12.8733 9.17729 12.828 9.28396 12.828C9.35063 12.828 9.41729 12.8493 9.48396 12.892C9.55329 12.9347 9.63329 12.9813 9.72396 13.032C9.81463 13.0827 9.91996 13.1293 10.04 13.172C10.16 13.2147 10.3053 13.236 10.476 13.236C10.6573 13.236 10.8173 13.2067 10.956 13.148C11.0946 13.0893 11.2093 13.008 11.3 12.904C11.3933 12.7973 11.4626 12.672 11.508 12.528C11.556 12.3813 11.58 12.2227 11.58 12.052C11.58 11.7373 11.488 11.492 11.304 11.316C11.1226 11.1373 10.8546 11.048 10.5 11.048C10.22 11.048 9.93863 11.0987 9.65596 11.2L9.03996 11.024L9.51996 8.216H12.376V8.636Z"
                    fill="white"
                  />
                </svg>
              </Typography>
            </Button>

            {/*  */}

            <Button
              onClick={handlePopover}
              variant="text"
              className={classes.bottomIcons}
            >
              <Typography>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.08062 2.6124C8.4919 0.462533 11.5081 0.462533 11.9194 2.6124C12.1696 3.92062 13.5837 4.61508 14.7427 3.99895C16.6474 2.98644 18.5279 5.39127 17.1361 7.0596C16.2892 8.0748 16.6385 9.63522 17.8335 10.1752C19.7972 11.0624 19.1261 14.0612 16.9793 13.9917C15.6729 13.9494 14.6943 15.2008 15.0254 16.4902C15.5696 18.6091 12.8521 19.9437 11.5668 18.1887C10.7847 17.1208 9.21525 17.1208 8.43317 18.1887C7.14792 19.9437 4.43042 18.6091 4.97456 16.4902C5.30568 15.2008 4.32712 13.9494 3.02075 13.9917C0.873935 14.0612 0.202766 11.0624 2.16655 10.1752C3.36153 9.63522 3.71078 8.0748 2.86385 7.0596C1.47206 5.39127 3.35263 2.98644 5.25728 3.99895C6.41629 4.61508 7.83035 3.92062 8.08062 2.6124Z"
                    stroke="white"
                    stroke-width="1.7"
                  />
                  <path
                    d="M12.7529 10.3595C12.7529 11.91 11.5204 13.167 10 13.167C8.47959 13.167 7.24706 11.91 7.24706 10.3595C7.24706 8.80904 8.47959 7.55212 10 7.55212C11.5204 7.55212 12.7529 8.80904 12.7529 10.3595Z"
                    stroke="white"
                    stroke-width="1.7"
                  />
                </svg>
              </Typography>
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
            >
              <Grid container direction="column-reverse">
                {[0.5, 1, 1.5, 2, 3].map((rate) => (
                  <Button
                    onClick={() => onPlaybackRateChange(rate)}
                    variant="text"
                  >
                    <Typography
                      color={rate === playbackRate ? "secondary" : "inherit"}
                    >
                      {rate}x
                    </Typography>
                  </Button>
                ))}
              </Grid>
            </Popover>

            <IconButton
              onClick={onToggleFullScreen}
              className={classes.bottomIcons}
            >
              {exitScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
            </IconButton>
          </Grid>
        </Grid>
      </div>
    );
  }
);
