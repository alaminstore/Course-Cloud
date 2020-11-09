import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { useStateValue } from "../Store";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  list: {
    width: 250,
    paddingTop: theme.spacing(8),
  },
  drawer: {
    background: "#21252d",
  },
  fullList: {
    width: "auto",
  },
}));

export default function SideMenu() {
  const classes = useStyles();
  const [{ user, ui }, dispatch] = useStateValue();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    dispatch({ type: "TOGGLEDRAWER", payload: { ...ui, drawer: open } });
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {!user && (
        <Nav className="ml-auto main_Nav sidbar_nav flex-column">
          <Link to="#home" className="nav-link">
            Categories
          </Link>
          <Link to="#features" className="nav-link">
            Support
          </Link>
          <Link to="#features" className="nav-link">
            <Button className="login_btn" variant="contained">
              LOGIN
            </Button>
          </Link>
        </Nav>
      )}
      {user && (
        <Nav className="ml-auto main_Nav sidbar_nav flex-column">
          <Link to="/live-class" className="nav-link " id="live-class">
            <Image src="images/live.svg" />
            Live Class
          </Link>
          <Link to="#home" className="nav-link">
            Categories
          </Link>
          <Link to="#features" className="nav-link">
            WHAT WE OFFER
          </Link>
          <Link to="#features" className="nav-link">
            BLOGS
          </Link>
        </Nav>
      )}
    </div>
  );
  return (
    <div>
      <React.Fragment>
        <Drawer
          className={classes.root}
          classes={{ paper: classes.drawer }}
          anchor="left"
          open={ui.drawer}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
