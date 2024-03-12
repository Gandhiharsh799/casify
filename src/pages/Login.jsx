import { useState } from "react";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import Button from "../UI/Button";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = {};

    if (formData.email.trim() === "") {
      validationErrors.email = "You must enter an email ";
    }
    if (!formData.email.trim().includes("@")) {
      validationErrors.email = "You must enter a valid email";
    }
    if (formData.password.trim() === "") {
      validationErrors.password = "password is a required field";
    }
    if (formData.password.length != 0 && formData.password.length < 6) {
      validationErrors.password =
        "Password is too short - should be 6 chars minimum.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("login form submitted", formData);
    dispatch(login());
    navigate("/report/dashboard");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row bg-white shadow-lg box-area">
        <div className="hidden left-box rounded-start-4 ">
          <div className="text-center d-flex justify-content-center flex-column align-items-center p-3 h-100">
            <h1 className="text-white fs-1">Welcome to Casify!</h1>
            <p className="text-white">Manage your details here</p>
          </div>
        </div>

        <div className="col-md-6 rounded-end-4 border right-box">
          <div className="row align-items-center">
            <p className="text-center p-2 heading my-4 nav-label">Casify</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mt-3 pt-3 d-flex flex-column align-items-center ">
              <TextField
                type="text"
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
            </div>

            <div className="mb-5 d-flex justify-content-center">
              <Button type="submit" label="Submit"></Button>
            </div>
          </form>

          <div className="row">
            <p className="text-center mt-5">Don't have an account?</p>
            <Link to="/signup">
              <p className="text-center mb-4 user">Create an account</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
