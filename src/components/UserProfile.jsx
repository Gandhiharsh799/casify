import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

export default function UserProfile() {
  const navigate = useNavigate();

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

      <form>
        <div className="d-flex flex-column align-items-center mt-2">
          <TextField
            name="username"
            label="User Name"
            variant="outlined"
            type="text"
            sx={{
              width: "45%",
            }}
            className="mb-4"
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
          />
          <TextField
            name="vat"
            label="Vat (%)"
            type="text"
            variant="outlined"
            sx={{
              width: "45%",
            }}
            className="mb-4"
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
          />
        </div>
        <div className="d-flex flex-row justify-content-center">
          <button
            type="button"
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
