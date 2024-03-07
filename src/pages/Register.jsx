import { Link } from "react-router-dom";
import { useState } from "react";
import "../index.css";
import { TextField } from "@mui/material";

export default function Register() {

  const [formData, setFormdata] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
    companyAddress: '',
    vatNumber: ''

  })

  const [errors, setErrors] = useState({})

    function handleInputChange(event){
      const {name, value} = event.target
      setFormdata({
        ...formData,
        [name]: value
      })
    }

    function handleSubmit(event){
      event.preventDefault();

      const validationErrors = {};

    }

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
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-column align-items-center">
              <TextField
                type="text"
                className="mb-2"
                name="name"
                label="Name"
                variant="outlined"
                error={!!errors.name}
                value={formData.name}
                onChange={handleInputChange}
                sx={{
                  width: "70%",
                }}
                helperText={errors.name}
              />
              <TextField
                type="email"
                className="mb-2"
                name="email"
                label="Email"
                variant="outlined"
                error={!!errors.email}
                value={formData.email}
                onChange={handleInputChange}
                sx={{
                  width: "70%",
                }}
                helperText={errors.email}
              />
              <TextField
                type="password"
                className="mb-2"
                name="password"
                label="Password"
                variant="outlined"
                error={!!errors.password}
                value={formData.password}
                onChange={handleInputChange}
                sx={{
                  width: "70%",
                }}
                helperText={errors.password}
              />
              <TextField
                type="password"
                className="mb-2"
                name="confirmPassword"
                label="Confirm Password"
                variant="outlined"
                error={!!errors.confirmPassword}
                value={formData.confirmPassword}
                onChange={handleInputChange}
                sx={{
                  width: "70%",
                }}
                helperText={errors.confirmPassword}
              />
              <TextField
                type="number"
                className="mb-2"
                name="mobileNumber"
                label="Mobile Number"
                variant="outlined"
                error={!!errors.mobileNumber}
                value={formData.mobileNumber}
                onChange={handleInputChange}
                sx={{
                  width: "70%",
                }}
                helperText={errors.mobileNumber}
              />
              <TextField
                type="text"
                className="mb-2"
                name="companyAddress"
                label="Company Address"
                variant="outlined"
                error={!!errors.companyAddress}
                value={formData.companyAddress}
                onChange={handleInputChange}
                sx={{
                  width: "70%",
                }}
                helperText={errors.companyAddress}
              />
              <TextField
                type="text"
                className="mb-2"
                name="companyAddress"
                label="Company Address"
                variant="outlined"
                error={!!errors.companyAddress}
                value={formData.companyAddress}
                onChange={handleInputChange}
                sx={{
                  width: "70%",
                }}
                helperText={errors.companyAddress}
              />
              <TextField
                type="text"
                className="mb-2"
                name="vatNumber"
                label="Vat Number"
                variant="outlined"
                error={!!errors.vatNumber}
                value={formData.vatNumber}
                onChange={handleInputChange}
                sx={{
                  width: "70%",
                }}
                helperText={errors.vatNumber}
              />
            </div>
            <div className="input-group mb-4 justify-content-center">
              <button
                type="submit"
                className="btn btn-lg rounded-pill m-3 fs-6"
                style={{ backgroundColor: "#502cb7", color: "white" }}
              >
                Sign up
              </button>
            </div>
          </form>
          <div className="d-flex flex-column align-items-center">
            <small className="text-center mt-4">Already have an account?</small>
            <Link to="/login">
              <small className="m-3" style={{ color: "#502cb7" }}>
                Sign in
              </small>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
