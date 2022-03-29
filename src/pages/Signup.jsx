import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Passwords do not match.");
    }
    try {
      setError("");
      setIsLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/singin");
    } catch (err) {
      setError("Failled to create an account.");
    }
    setIsLoading(false);
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
                  <div class="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                <p className="auth-greeting mb-4">
                  Welcome, Let’s get started!
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                      ref={emailRef}
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

                  <div className="d-grid mb-2">
                    <button
                      className="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
                      type="submit"
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
