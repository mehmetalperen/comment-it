import React, { useEffect, useState } from "react";
import AddReview from "../components/AddReview";
import CommentCard from "../components/CommentCard";
import dummyComments from "../dummy/comments";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "../contexts/AuthContext";
import firebase from "../firebase";

export default function Comments(props) {
  // const [reviews, setReviews] = useState([]);//delete
  const [isEmpty, setIsEmpty] = useState(false); //modify this
  const [totReview, setTotReview] = useState(0);
  const [totComment, setTotComment] = useState(0);
  const { currentUser } = useAuth();
  const [pageData, setPageData] = useState(0);

  useEffect(() => {
    console.log(props.dataID);
    const ref = firebase.database().ref(`Websites/${props.dataID}`);
    ref.on("value", (snapshot) => {
      setPageData(snapshot.val());
    });

    return () => ref.off();
  }, []);

  const handleReviewSubmit = (userReview) => {
    if (!pageData) return;
    const { starReview, comment } = userReview;
    console.log(starReview);
    console.log(comment);
    console.log(pageData);
    const pageDataCopy = { ...pageData };
    pageDataCopy.reviews.push({
      starReview,
      comment,
      user: {
        displayName: currentUser.displayName,
        email: currentUser.email,
        uid: currentUser.uid,
      },
    });
    firebase
      .database()
      .ref(`Websites/${props.dataID}`)
      .set(pageDataCopy);
  };

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-10  mx-auto">
            <div className="card flex-row border-0 shadow overflow">
              <div className="card-img-left d-none d-md-flex"></div>
              <div className="card-body p-4 ">
                {isEmpty ? (
                  <>
                    <h1
                      className="greeting-title text-secondary"
                      style={{ fontSize: "40px" }}
                    >
                      First one to review!
                    </h1>
                    <div className="row">
                      <div className="col-4 mb-1 d-flex pl-5 justify-content-between">
                        <p className="auth-greeting">No review</p>
                        <p className="auth-greeting">||</p>
                        <p className="auth-greeting">No comment</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="row d-flex">
                      <div className="col-6 ">
                        <h4 className="text-secondary">All reviews</h4>
                        <div className="mr-5 pe-5 d-flex justify-content-between">
                          <p className="auth-greeting">
                            {totReview} review
                            {totReview > 0 ? "s" : ""}
                          </p>
                          <p className="auth-greeting">||</p>
                          <p className="auth-greeting">
                            {totComment} comment{totComment > 0 ? "s" : ""}
                          </p>
                        </div>
                      </div>
                      <div className="col-6 left-border">
                        <div className="row">
                          <div className="col-10 offset-2">
                            <h1
                              className="greeting-title text-primary"
                              style={{ fontSize: "40px" }}
                            >
                              4.2
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                <AddReview handleReviewSubmit={handleReviewSubmit} />
                {pageData.reviews
                  ? pageData.reviews.map((comment, index) => {
                      const id = uuidv4();
                      if (index !== 0) {
                        //bc of firebase, the first review is always empty, so we don't wanna render it.
                        return <CommentCard key={id} comment={comment} />;
                      }
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
