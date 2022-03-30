import React, { useState } from "react";
import AddReview from "../components/AddReview";

export default function Comments() {
  const [isEmpty, setIsEmpty] = useState(false);
  return (
    <>
      <div className="container">
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
                    <hr className="m-0" />
                  </>
                ) : (
                  <>
                    <div className="row d-flex">
                      <div className="col-6 ">
                        <h4 className="text-secondary">All reviews</h4>
                        <div className="mr-5 pe-5 d-flex justify-content-between">
                          <p className="auth-greeting">## review(s)</p>
                          <p className="auth-greeting">||</p>
                          <p className="auth-greeting">## comment(s)</p>
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
                <AddReview />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
