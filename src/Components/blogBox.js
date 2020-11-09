import React from "react";
import "../Styles/_blogbox.css";
import Image from "react-bootstrap/Image";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Button from "@material-ui/core/Button";
import { useStateValue } from "../Store";
export default function BlogBox() {
  const [{ bookmark }, dispatch] = useStateValue();
  const handleBookmark = () => {
    dispatch({
      type: "SET_STATE",
      payload: { name: "bookmark", value: !bookmark },
    });
  };
  return (
    <React.Fragment>
      <div className="blog-box">
        <div className="img-sec">
          <Image fluid src="/images/blog/1.jpg" className="blog-img" />
        </div>
        <div className="content-sec">
          <Image
            src="/images/blog/1.jpg"
            className="blog-author"
            roundedCircle
          />
          <h1 className="blog-title">
            How to Pitch a Video Game: 7 Tips for Pitching Games
          </h1>
          <p className="blog-date">August 10th, 2020</p>
          <p className="blog-excerpt">
            Vitae bibendum egestas magna sit elit non. Netus volutpat dignissim
            pharetra felis dictumst.
          </p>
          <div className="blog-footer">
            <Button variant="outlined" className="blog-btn">
              Read more
            </Button>
            <span onClick={handleBookmark} className="icon">
              {bookmark ? <BookmarkIcon /> : <BookmarkBorderIcon />}
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
