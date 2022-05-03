import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { signup, signInWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Passwords do not match.");
    }
    try {
      setError("");
      setIsLoading(true);
      await signup(
        emailRef.current.value,
        passwordRef.current.value,
        usernameRef.current.value
      );
      navigate("/comments");
    } catch (err) {
      setError("Failled to create an account.");
    }
    setIsLoading(false);
  };

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate("/comments");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-10  mx-auto">
            <div className="card flex-row border-0 shadow overflow">
              <div className="card-img-left d-none d-md-flex"></div>
              <div className="card-body p-4 ">
                <h1 className="card-title ">Sign up</h1>
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                <p className="auth-greeting mb-4">
                  Welcome, Let’s get started!
                </p>
                <form onSubmit={handleSignUp}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Username"
                      ref={usernameRef}
                      required
                    />
                    <label htmlFor="username">Username</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                      ref={emailRef}
                      required
                    />
                    <label htmlFor="email">Email address</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      ref={passwordRef}
                      required
                    />
                    <label htmlFor="password">Password</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="passwordConfirmation"
                      placeholder="Confirm Password"
                      ref={passwordConfirmationRef}
                      required
                    />
                    <label htmlFor="passwordConfirmation">
                      Confirm Password
                    </label>
                  </div>

                  <div className="d-grid mb-2">
                    <button
                      className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                      type="submit"
                      disabled={isLoading}
                    >
                      Sing Up
                    </button>
                  </div>
                </form>
                <div className="d-grid mb-2">
                  <button
                    className="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
                    onClick={handleSignInWithGoogle}
                  >
                    <i className="fab fa-google me-2"></i> Sign up with Google
                  </button>
                </div>
                <hr className="my-3" />
                <p className="d-block text-center mt-2">
                  Already have an acoount?{" "}
                  <Link className=" small" to="/singin">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
