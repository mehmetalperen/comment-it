import React from "react";

export default function () {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-10  mx-auto">
            <div className="card flex-row border-0 shadow overflow">
              <div className="card-img-left d-none d-md-flex"></div>
              <div className="card-body p-4 ">
                <h1 className="card-title ">Login</h1>
                <p className="auth-greeting mb-4">
                  Welcome, please enter your details!
                </p>
                <form>
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInputEmail"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInputEmail">Email address</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input
                      type="password"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label for="floatingPassword">Password</label>
                  </div>

                  <div class="d-grid mb-2">
                    <button
                      class="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                      type="submit"
                    >
                      Sing Up
                    </button>
                  </div>

                  <a class="d-block small text-end mt-3" href="#">
                    Forgot password?
                  </a>

                  <hr className="my-3" />

                  <div class="d-grid mb-2">
                    <button
                      class="btn btn-lg btn-secondary btn-login fw-bold text-uppercase"
                      type="submit"
                    >
                      <i class="fab fa-google me-2"></i> Sign up with Google
                    </button>
                  </div>
                </form>
                <p className="p-passive mt-4">
                  Dont have an account?{" "}
                  <a class="" href="#">
                    Sign up for free
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
