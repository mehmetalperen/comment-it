import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import UserProfileCard from "./UserProfileCard";
import { useAuth } from "../contexts/AuthContext";

export default function EditReview(props) {
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
                    <fieldset className="rating-edit">
                      <input
                        type="radio"
                        id="editstar5"
                        name="rating-edit"
                        value="5"
                        onClick={(e) => {
                          toggleHideComment(true);
                          handleStarReview(e);
                        }}
                      />
                      <label
                        className="full"
                        htmlFor="editstar5"
                        title="Awesome - 5 stars"
                      ></label>{" "}
                      <input
                        type="radio"
                        id="editstar4half"
                        name="rating-edit"
                        value="4.5"
                        onClick={(e) => {
                          toggleHideComment(true);
                          handleStarReview(e);
                        }}
                      />
                      <label
                        className="half"
                        htmlFor="editstar4half"
                        title="Pretty good - 4.5 stars"
                      ></label>{" "}
                      <input
                        type="radio"
                        id="editstar4-edit"
                        name="rating-edit"
                        value="4"
                        onClick={(e) => {
                          toggleHideComment(true);
                          handleStarReview(e);
                        }}
                      />
                      <label
                        className="full"
                        htmlFor="editstar4"
                        title="Pretty good - 4 stars"
                      ></label>{" "}
                      <input
                        type="radio"
                        id="editstar3half"
                        name="rating-edit"
                        value="3.5"
                        onClick={(e) => {
                          toggleHideComment(true);
                          handleStarReview(e);
                        }}
                      />
                      <label
                        className="half"
                        htmlFor="editstar3half"
                        title="Meh - 3.5 stars"
                      ></label>{" "}
                      <input
                        type="radio"
                        id="editstar3"
                        name="rating-edit"
                        value="3"
                        onClick={(e) => {
                          toggleHideComment(true);
                          handleStarReview(e);
                        }}
                      />
                      <label
                        className="full"
                        htmlFor="editstar3"
                        title="Meh - 3 stars"
                      ></label>{" "}
                      <input
                        type="radio"
                        id="editstar2half"
                        name="rating-edit"
                        value="2.5"
                        onClick={(e) => {
                          toggleHideComment(true);
                          handleStarReview(e);
                        }}
                      />
                      <label
                        className="half"
                        htmlFor="editstar2half"
                        title="Kinda bad - 2.5 stars"
                      ></label>{" "}
                      <input
                        type="radio"
                        id="editstar2"
                        name="rating-edit"
                        value="2"
                        onClick={(e) => {
                          toggleHideComment(true);
                          handleStarReview(e);
                        }}
                      />
                      <label
                        className="full"
                        htmlFor="editstar2"
                        title="Kinda bad - 2 stars"
                      ></label>{" "}
                      <input
                        type="radio"
                        id="editstar1half"
                        name="rating-edit"
                        value="1.5"
                        onClick={(e) => {
                          toggleHideComment(true);
                          handleStarReview(e);
                        }}
                      />
                      <label
                        className="half"
                        htmlFor="editstar1half"
                        title="Meh - 1.5 stars"
                      ></label>{" "}
                      <input
                        type="radio"
                        id="editstar1"
                        name="rating-edit"
                        value="1"
                        onClick={(e) => {
                          toggleHideComment(true);
                          handleStarReview(e);
                        }}
                      />
                      <label
                        className="full"
                        htmlFor="editstar1"
                        title="Sucks big time - 1 star"
                      ></label>{" "}
                      <input
                        type="radio"
                        id="editstarhalf"
                        name="rating-edit"
                        value="0.5"
                        onClick={(e) => {
                          toggleHideComment(true);
                          handleStarReview(e);
                        }}
                      />
                      <label
                        className="half"
                        htmlFor="editstarhalf"
                        title="Sucks big time - 0.5 stars"
                      ></label>{" "}
                      <input
                        type="radio"
                        className="reset-option"
                        name="rating-edit"
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
