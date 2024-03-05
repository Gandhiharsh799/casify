
import "../index.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row bg-white shadow-lg box-area">
        <div className="col-md-6 p-3 d-flex justify-content-center rounded-start-4 flex-column align-items-center left-box">
          <div className="text-center">
            <h1 className="text-white fs-1 fw-bold">Welcome to Casify!</h1>
            <p className="text-white">Manage your details here</p>
          </div>
        </div>

        <div className="col-md-6 rounded-end-4 border right-box">
          <div className="row align-items-center">
            <p
              className="text-center p-2  nav-label"
              style={{ fontSize: "64px" }}
            >
              Casify
            </p>
          </div>
          <form>
            <div className=" inp form-floating form-group mx-5 mb-2">
              <input
                type="text"
                className="form-control"
                id="floatingInputGroup1"
                placeholder="Name"
                required
              />
              <label htmlFor="floatingInputGroup1">Name</label>
            </div>

            <div className="inp form-floating mx-5 mb-2">
              <input
                type="email"
                className="form-control"
                id="floatingInputGroup1"
                placeholder="Email"
                required
              />
              <label htmlFor="floatingInputGroup1">E-mail</label>
            </div>

            <div className="inp form-floating mx-5 mb-2">
              <input
                type="password"
                className="form-control"
                id="floatingInputGroup1"
                placeholder="Password"
                required
              />
              <label htmlFor="floatingInputGroup1">Password</label>
            </div>

            <div className="inp form-floating mx-5 mb-2">
              <input
                type="password"
                className="form-control"
                id="floatingInputGroup1"
                placeholder="Password"
                required
              />
              <label htmlFor="floatingInputGroup1">Confirm Password</label>
            </div>

            <div className="inp form-floating mx-5 mb-2">
              <input
                type="number"
                className="form-control"
                id="floatingInputGroup1"
                placeholder="Mobile Number"
                required
              />
              <label htmlFor="floatingInputGroup1">Mobile Number</label>
            </div>

            <div className="inp form-floating mx-5 mb-2">
              <input
                type="text"
                className="form-control"
                id="floatingInputGroup1"
                placeholder=""
                required
              />
              <label htmlFor="floatingInputGroup1">Company Address</label>
            </div>

            <div className="inp form-floating mx-5 mb-4">
              <input
                type="text"
                className="form-control"
                id="floatingInputGroup1"
                placeholder=""
                required
              />
              <label htmlFor="floatingInputGroup1">TAX number</label>
            </div>

            <div className="input-group mb-5 justify-content-center">
              <Link to="/login">
                <button
                  className="btn btn-lg rounded-pill m-3 fs-6"
                  style={{ backgroundColor: "#502cb7", color: "white" }}
                >
                  Sign up
                </button>
              </Link>
            </div>
          </form>
          <div className="row">
            <p className="text-center mt-5">Do you have an account?</p>
            <Link to="/login">
              <p className="text-center mb-4" style={{ color: "#502cb7" }}>
                Sign in
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
