import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Greeting() {
  const navigate = useNavigate();
  const { signInWithGoogle } = useAuth();

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate("/comments");
    } catch (err) {
      console.log(err);
    }
  };

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
              <div className="d-grid mb-2">
                <button
                  className="btn btn-lg btn-login fw-bold text-uppercase"
                  onClick={handleSignInWithGoogle}
                >
                  <img
                    src="google-logo-color.png"
                    className="google-logo"
                    alt=""
                  />{" "}
                  Sign in with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
