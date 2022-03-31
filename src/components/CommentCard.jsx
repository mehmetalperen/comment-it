import React from "react";
import UserProfileCard from "./UserProfileCard";

export default function CommentCard() {
  return (
    <>
      <div className="row d-flex">
        <hr />
        <div className="col-4">
          <UserProfileCard />
        </div>
      </div>
    </>
  );
}
