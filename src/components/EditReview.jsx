import React, { useState, useEffect } from "react";
import { Collapse } from "react-bootstrap";
import UserProfileCard from "./UserProfileCard";
import { useAuth } from "../contexts/AuthContext";
import ReactStars from "react-stars";

export default function EditReview(props) {
  const [showComment, setShowComment] = useState(true);
  const [starReview, setStarReview] = useState(0);
  const [comment, setComment] = useState("");
  const { currentUser } = useAuth();
  const [username, setUsername] = useState(currentUser.displayName);

  useEffect(() => {
    if (props.reviewObj.comment) setComment(props.reviewObj.comment);
    if (props.reviewObj.starReview) setStarReview(props.reviewObj.starReview);
  }, []);

  const toggleHideComment = (bool = true) => {
    setShowComment(bool);
    if (!bool) props.closeReviewEdit();
  };

  const handleStarReview = (starReview) => {
    setStarReview(starReview);
  };

  const resetReview = () => {
    setComment("");
    setStarReview(0);
    toggleHideComment(false);
  };

  const handleSubmit = () => {
    props.handleReviewEditSubmit(
      { starReview: starReview, comment: comment },
      props.index
    );
    resetReview();
  };
  return (
    <>
      <hr />
      <div className="row d-flex mb-3">
        <div className="col-4 d-flex justify-content-between">
          <div className=" mb-3">
            <UserProfileCard username={username} />
          </div>
        </div>
        <div className="col-8">
          <div className="container d-flex justify-content-center ">
            <div className="row mt-2 d-flex justify-content-center">
              <div className="col-md-6">
                <div className="start-card">
                  <div className="start-card-body text-center">
                    <ReactStars
                      count={5}
                      value={starReview}
                      onChange={handleStarReview}
                      size={50}
                      color2={"#3d5af1"}
                      color1={"#c4c8e4"}
                      className="rating"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <Collapse in={showComment}>
            <div id="example-collapse-text" className="">
              <div className="form-group mt-3 mb-2">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="2"
                  placeholder="Add your comment here..."
                  value={comment}
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                ></textarea>
              </div>
              <div className="d-flex justify-content-end">
                <div className="w-50 align-middle d-flex justify-content-between">
                  <button
                    className="btn btn-primary d-grid  mx-2 w-50"
                    onClick={resetReview}
                  >
                    Cancel
                  </button>
                  <button
                    className="d-grid  mx-2 w-50 btn btn-secondary"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
    </>
  );
}

/*
$(document).ready(function(){

$("input[type='radio']").click(function(){
var sim = $("input[type='radio']:checked").val();
//alert(sim);
if (sim<3) { $('.myratings').css('color','red'); $(".myratings").text(sim); }else{ $('.myratings').css('color','green'); $(".myratings").text(sim); } }); });
 */
