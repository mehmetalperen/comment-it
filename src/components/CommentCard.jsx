import React, { useEffect, useState } from "react";
import UserProfileCard from "./UserProfileCard";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
export default function CommentCard(props) {
  const { user, starReview, comment } = props.comment;

  const [username, setUsername] = useState("usernamehere");
  const [commentText, setCommentText] = useState("commenthere");
  const [star, setStar] = useState(0);

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
        <div className="col-4 ">
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
        <div className="comment-content">{commentText}</div>
      </div>
    </>
  );
}
