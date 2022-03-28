import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-10  mx-auto">
            <div className="card flex-row border-0 shadow overflow">
              <div className="card-img-left d-none d-md-flex"></div>
              <div className="card-body p-4 ">
                <h1 className="card-title ">Sign up</h1>
                <p className="auth-greeting mb-4">
                  Welcome, Let’s get started!
                </p>
                <form>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInputEmail"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInputEmail">Email address</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPasswordConfirm"
                      placeholder="Confirm Password"
                    />
                    <label htmlFor="floatingPasswordConfirm">
                      Confirm Password
                    </label>
                  </div>

                  <div className="d-grid mb-2">
                    <button
                      className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                      type="submit"
                    >
                      Sing Up
                    </button>
                  </div>

                  <Link className="d-block text-center mt-2 small" to="/singin">
                    Have an account? Sign In
                  </Link>

                  <hr className="my-3" />

                  <div className="d-grid mb-2">
                    <button
                      className="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
                      type="submit"
                    >
                      <i className="fab fa-google me-2"></i> Sign up with Google
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
