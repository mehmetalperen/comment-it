import React, { useEffect, useState } from "react";
import UserProfileCard from "./UserProfileCard";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import { Collapse } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
export default function CommentCard(props) {
  const { user, starReview, comment } = props.reviewObj;
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");
  const [star, setStar] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  useEffect(() => {
    if (user && user.displayName) setUsername(user.displayName);
    if (comment) setCommentText(comment);
    if (starReview) setStar(starReview);
  }, []);

  const fullStar = Math.floor(star);
  const halfStar = Math.round(star) - fullStar;
  const emtyStar = 5 - (fullStar + halfStar);

  console.log(props.comment);
  return (
    <>
      <div className="row d-flex mb-5">
        <hr />
        <div className="col-4">
          <UserProfileCard username={username} />
          <div className="start-review-wrapper m-2">
            <p>
              {[...Array(fullStar)].map((x, i) => (
                <StarIcon className="star-icon" key={i} />
              ))}
              {[...Array(halfStar)].map((x, i) => (
                <StarHalfIcon className="star-icon" key={i} />
              ))}
              {[...Array(emtyStar)].map((x, i) => (
                <StarBorderIcon className="star-icon" key={i} />
              ))}
            </p>
          </div>
        </div>
        <div className="col-1 offset-6">
          <DropdownButton id="dropdown-basic-button" title=":">
            <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="comment-content">{commentText}</div>
      </div>
    </>
  );
}
