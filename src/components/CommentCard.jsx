import React from "react";
import UserProfileCard from "./UserProfileCard";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
export default function CommentCard() {
  return (
    <>
      <div className="row d-flex mb-5">
        <hr />
        <div className="col-4 ">
          <UserProfileCard />
          <div className="start-review-wrapper m-2">
            <p>
              <StarIcon className="star-icon" />
              <StarIcon className="star-icon" />
              <StarIcon className="star-icon" />
              <StarHalfIcon className="star-icon" />
              <StarBorderIcon className="star-icon" />
            </p>
          </div>
        </div>
        <div className="comment-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error ut
          nisi repellat similique blanditiis, hic debitis consectetur,
          praesentium eius, minus distinctio harum officia corrupti obcaecati et
          laudantium veniam ea minima.
        </div>
      </div>
    </>
  );
}
