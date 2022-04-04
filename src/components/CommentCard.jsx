import React from "react";
import UserProfileCard from "./UserProfileCard";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
export default function CommentCard(props) {
  const { fName, lName, starReview, comment } = props.comment;

  const fullStar = Math.floor(starReview);
  const halfStar = Math.round(starReview) - fullStar;
  const emtyStar = 5 - (fullStar + halfStar);

  return (
    <>
      <div className="row d-flex mb-5">
        <hr />
        <div className="col-4 ">
          <UserProfileCard fName={fName} lName={lName} />
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
        <div className="comment-content">{comment}</div>
      </div>
    </>
  );
}
