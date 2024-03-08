import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setUserData } from "../store/userProfileSlice";


export default function UserProfile() {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const userData = useSelector((state) => state.userprofile.userData);

  const [userInfo, setUserInfo] = useState(userData)

  function handleInputChange(event){

    const {name, value} = event.target;

    setUserInfo({
      ...userInfo,
      [name]:value,
    })
  }

  function handleSubmit(event){
    event.preventDefault();

    dispatch(setUserData(userInfo));
    navigate('/report/dashboard')
  }

  function handleNavigate() {
    navigate("/report/dashboard");
  }

  return (
    <div>
      <div className="d-flex justify-content-between mt-3">
        <div className="d-flex user">
          <FontAwesomeIcon
            icon={faUserTie}
            className="py-2 ps-4 pe-3"
            style={{ height: "25px" }}
          />
          <p className="fs-3 fw-bold text-md-sm ">User Profile</p>
        </div>

        <div>
          <button
            className="btn btn-lg rounded-pill mx-2 fs-6"
            style={{ backgroundColor: "#502cb7", color: "white" }}
            onClick={handleNavigate}
          >
            Cancel
          </button>
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
          <button
            type="submit"
            className="btn btn-lg rounded-pill m-3 fs-6"
            style={{ backgroundColor: "#502cb7", color: "white" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
