import React from "react";
import { Link } from "react-router-dom";
export default function Greeting() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10  mx-auto">
          <div className="card flex-row border-0 shadow overflow">
            <div className="card-img-left d-none d-md-flex"></div>
            <div className="card-body p-4 ">
              <h1 className="greeting-title">Heyo!</h1>
              <p className="greeting-passive">Welcome to Comment-It</p>
              <p>
                <b>Comment-it</b> makes it possible to:
              </p>
              <ul>
                <li>
                  <b>Publish your thougts</b> about the website you’re currently
                  on.
                </li>
                <li>
                  <b>Like/dislike</b> webpages.
                </li>
                <li>
                  <b>Interacting</b> with other people who’ve been on the
                  website you are currently on.
                </li>
              </ul>
              <div className="d-flex w-100">
                <div class="d-grid mb-2 mx-2 w-50">
                  <Link
                    class="btn btn-primary btn-login fw-bold text-uppercase"
                    to="/singup"
                  >
                    Sing Up
                  </Link>
                </div>
                <div class="d-grid mb-2 mx-2 w-50">
                  <Link
                    to="/singin"
                    class="btn btn-secondary btn-login fw-bold text-uppercase"
                  >
                    Sing In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
