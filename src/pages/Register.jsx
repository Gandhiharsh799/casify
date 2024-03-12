import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../index.css";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { setUserData } from "../store/userProfileSlice";
import Button from "../UI/Button";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobileNumber: "",
    companyAddress: "",
    vatNumber: "",
  });

  const [errors, setErrors] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormdata({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = {};

    if (formData.name.trim() === "") {
      validationErrors.name = "Name is required";
    }

    if (formData.email.trim() === "") {
      validationErrors.email = "You must enter an email ";
    }
    if (!formData.email.trim().includes("@")) {
      validationErrors.email = "You must enter a valid email";
    }
    if (formData.password.trim() === "") {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password =
        "Password is too short - should be 6 chars minimum.";
    }
    if (formData.confirmPassword.trim() === "") {
      validationErrors.confirmPassword = "confirm password is required";
    } else if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Passwords must match";
    }
    if (formData.mobileNumber.trim() === "") {
      validationErrors.mobileNumber = "You must enter a mobile number";
    } else if (formData.mobileNumber.length < 10) {
      validationErrors.mobileNumber =
        "Number is too short - should be 10 chars.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("signup form submitted", formData);
    dispatch(setUserData(formData));
    navigate("/login");
  }

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row bg-white shadow-lg box-area">
        <div className="hidden left-box rounded-start-4 ">
          <div className="text-center d-flex justify-content-center flex-column align-items-center p-3 h-100">
            <h1 className="text-white fs-1 fw-bold">Welcome to Casify!</h1>
            <p className="text-white">Manage your details here</p>
          </div>
        </div>

        <div className="col-md-6 rounded-end-4 border right-box">
          <div className="row align-items-center">
            <p className="text-center p-2  nav-label heading">Casify</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-column align-items-center">
              <TextField
                type="text"
                className="mb-3"
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
                className="mb-3"
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
                className="mb-3"
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
                className="mb-3"
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
                className="mb-3"
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
                className="mb-3"
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
                className="mb-3"
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
            <div className="mb-4 d-flex justify-content-center">
              <Button type="submit" label="Sign Up"></Button>
            </div>
          </form>

          <div className="row">
            <p className="text-center mt-4">Already have an account?</p>
            <Link to="/login">
              <p className="mb-3 text-center user">Sign in</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
