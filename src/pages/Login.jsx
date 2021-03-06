import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const { login, signInWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setIsLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/comments");
    } catch (err) {
      setError("Failled to login.");
    }
    setIsLoading(false);
  };
  const handleSignInWithGoogle = async () => {
    console.log("google btn clicked");
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
                <h1 className="card-title ">Login</h1>
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                <p className="auth-greeting mb-4">
                  Welcome, please enter your details!
                </p>
                <form onSubmit={handleLogin}>
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

                  <div className="d-grid mb-2">
                    <button
                      className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                      type="submit"
                      disabled={isLoading}
                    >
                      Sing In
                    </button>
                  </div>

                  <a className="d-block small text-end my-3" href="#">
                    Forgot password?
                  </a>
                </form>{" "}
                <div className="d-grid mb-2">
                  <button
                    className="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
                    onClick={handleSignInWithGoogle}
                  >
                    <i className="fab fa-google me-2"></i> Sign in with Google
                  </button>
                </div>
                <hr />
                <p className="d-block text-center mt-2">
                  Need an account?{" "}
                  <Link className=" small" to="/singup">
                    Sign Up
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
