import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setUserData } from "../store/userProfileSlice";
import Button from "../UI/Button";

export default function UserProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.userprofile.userData);

  const [userInfo, setUserInfo] = useState(userData);

  function handleInputChange(event) {
    const { name, value } = event.target;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(setUserData(userInfo));
    navigate("/report/dashboard");
  }

  function handleNavigate() {
    navigate("/report/dashboard");
  }

  return (
    <>
      <div className="d-flex justify-content-between mt-3">
        <div className="d-flex user">
          <FontAwesomeIcon icon={faUserTie} className="py-2 ps-4 pe-3 icon" />
          <p className="fs-3 fw-bold text-md-sm ">User Profile</p>
        </div>

        <div>
          <Button label="Cancel" onClick={handleNavigate}></Button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-column align-items-center mt-2">
          <TextField
            name="name"
            label="User Name"
            variant="outlined"
            type="text"
            sx={{
              width: "45%",
            }}
            className="mb-4"
            value={userInfo.name}
            onChange={handleInputChange}
          />
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            type="email"
            sx={{
              width: "45%",
            }}
            className="mb-4"
            value={userInfo.email}
            disabled
          />
          <TextField
            name="mobileNumber"
            label="Mobile Number"
            variant="outlined"
            type="number"
            sx={{
              width: "45%",
            }}
            className="mb-4"
            value={userInfo.mobileNumber}
            onChange={handleInputChange}
          />
          <TextField
            name="companyAddress"
            label="Address"
            type="text"
            variant="outlined"
            sx={{
              width: "45%",
            }}
            className="mb-4"
            value={userInfo.companyAddress}
            onChange={handleInputChange}
          />
          <TextField
            name="vatNumber"
            label="Vat Number"
            variant="outlined"
            type="text"
            sx={{
              width: "45%",
            }}
            className="mb-4"
            value={userInfo.vatNumber}
            onChange={handleInputChange}
          />

          <TextField
            type="text"
            name="crNumber"
            label="Cr Number"
            variant="outlined"
            sx={{
              width: "45%",
            }}
            className="mb-4"
            value={userInfo.crNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="d-flex flex-row justify-content-center">
          <Button type="submit" label="Submit"></Button>
        </div>
      </form>
    </>
  );
}
