import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import UserProfileCard from "./UserProfileCard";
import { useAuth } from "../contexts/AuthContext";

export default function AddReview(props) {
  const [showComment, setShowComment] = useState(false);
  const [starReview, setStarReview] = useState(0);
  const [comment, setComment] = useState("");
  const { currentUser } = useAuth();
  const [username, setUsername] = useState(currentUser.displayName);

  const toggleHideComment = (bool = true) => {
    setShowComment(bool);
  };

  const handleStarReview = (e) => {
    setStarReview(e.target.value);
  };

  const resetReview = () => {
    setComment("");
    setStarReview(0);
    toggleHideComment(false);
  };

  const handleSubmit = () => {
    props.handleReviewSubmit({ starReview: starReview, comment: comment });
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
                    <fieldset className="rating">
                      <input
                        type="radio"
                        id="star5"
                        name="rating"
                        value="5"
                        onClick={(e) => {
                          toggleHideComment(true);
                          handleStarReview(e);
                        }}
                      />
                      <label
                        className="full"
                        htmlFor="star5"
                        title="Awesome - 5 stars"
                      ></label>{" "}
                      <input
                        type="radio"
                        id="star4half"
                        name="rating"
                        value="4.5"
                        onClick={(e) => {
                          toggleHideComment(true);
                          handleStarReview(e);
                        }}
                      />
                      <label
                        className="half"
                        htmlFor="star4half"
                        title="Pretty good - 4.5 stars"
                      ></label>{" "}
                      <input
                        type="radio"
                        id="star4"
                        name="rating"
                        value="4"
                        onClick={(e) => {
                          toggleHideComment(true);
                          handleStarReview(e);
                        }}
                      />
                      <label
                        className="full"
                        htmlFor="star4"
                        title="Pretty good - 4 stars"
                      ></label>{" "}
                      <input
                        type="radio"
                        id="star3half"
                        name="rating"
                        value="3.5"
                        onClick={(e) => {
                          toggleHideComment(true);
                          handleStarReview(e);
                        }}
                      />
                      <label
                        className="half"
                        htmlFor="star3half"
                        title="Meh - 3.5 stars"
                      ></label>{" "}
                      <input
                        type="radio"
                        id="star3"
                        name="rating"
                        value="3"
                        onClick={(e) => {
                          toggleHideComment(true);
                          handleStarReview(e);
                        }}
                      />
                      <label
                        className="full"
                        htmlFor="star3"
                        title="Meh - 3 stars"
                      ></label>{" "}
                      <input
                        type="radio"
                        id="star2half"
                        name="rating"
                        value="2.5"
                        onClick={(e) => {
                          toggleHideComment(true);
                          handleStarReview(e);
                        }}
                      />
                      <label
                        className="half"
                        htmlFor="star2half"
                        title="Kinda bad - 2.5 stars"
                      ></label>{" "}
                      <input
                        type="radio"
                        id="star2"
                        name="rating"
                        value="2"
                        onClick={(e) => {
                          toggleHideComment(true);
                          handleStarReview(e);
                        }}
                      />
                      <label
                        className="full"
                        htmlFor="star2"
                        title="Kinda bad - 2 stars"
                      ></label>{" "}
                      <input
                        type="radio"
                        id="star1half"
                        name="rating"
                        value="1.5"
                        onClick={(e) => {
                          toggleHideComment(true);
                          handleStarReview(e);
                        }}
                      />
                      <label
                        className="half"
                        htmlFor="star1half"
                        title="Meh - 1.5 stars"
                      ></label>{" "}
                      <input
                        type="radio"
                        id="star1"
                        name="rating"
                        value="1"
                        onClick={(e) => {
                          toggleHideComment(true);
                          handleStarReview(e);
                        }}
                      />
                      <label
                        className="full"
                        htmlFor="star1"
                        title="Sucks big time - 1 star"
                      ></label>{" "}
                      <input
                        type="radio"
                        id="starhalf"
                        name="rating"
                        value="0.5"
                        onClick={(e) => {
                          toggleHideComment(true);
                          handleStarReview(e);
                        }}
                      />
                      <label
                        className="half"
                        htmlFor="starhalf"
                        title="Sucks big time - 0.5 stars"
                      ></label>{" "}
                      <input
                        type="radio"
                        className="reset-option"
                        name="rating"
                        value="reset"
                        onClick={(e) => {
                          toggleHideComment(true);
                          handleStarReview(e);
                        }}
                      />{" "}
                    </fieldset>
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
