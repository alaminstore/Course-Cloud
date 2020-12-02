import React from "react";
import { createStyles } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  progressBarContainer: {
    width: "100%",
    height: "5px",
    background: "#919191",
    borderRadius: "19px",
    display: "flex",
    alignItems: "center",
  },
  progressBar: {
    width: "40px",
    height: "4px",
    background: "#D19F28",
    borderRadius: "19px",
    display: "block",
  },
}));

export default function Percentageprogress({ completed }) {
  const classes = styles();
  return (
    <>
      <div className={classes.progressBarContainer}>
        <span
          className={classes.progressBar}
          style={{ width: completed }}
        ></span>
      </div>
      <h6 className="progress_number">{completed}</h6>
    </>
  );
}
