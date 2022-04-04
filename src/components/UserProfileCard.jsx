import React, { useEffect, useState } from "react";

export default function UserProfileCard(props) {
  return (
    <div className="row no-gutters">
      <div className="col-md-4">
        <img
          src={`https://ui-avatars.com/api/?name=${props.username}`}
          alt="user profile image"
          className="rounded-circle"
        />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <p className="username-text">{props.username}</p>
          <p className="user-tot-reviews">12 Reviews</p>
        </div>
      </div>
    </div>
  );
}
