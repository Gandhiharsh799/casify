import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextField,
} from "@mui/material";
import CaseList from "./CaseList";

import { useRef } from "react";
import Modal from "../UI/Modal";

export default function Cases() {
  const dialog = useRef();

  const handleModal = () => {
    dialog.current.showModal();
  };

  return (
    <div>
      <Modal ref={dialog} />
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex">
          <FontAwesomeIcon
            icon={faBriefcase}
            className="py-4 ps-4 pe-3"
            style={{ color: "#502cb7", height: "25px" }}
          />
          <p className="mt-3 fs-3 fw-bold">Cases</p>
        </div>
        <div className="d-flex">
          <button
            className="btn btn-lg rounded-pill m-3 fs-6"
            style={{ backgroundColor: "#502cb7", color: "white" }}
            onClick={handleModal}
          >
            <FontAwesomeIcon icon={faPlus} className="px-1" />
            Add Case
          </button>
          <div className="search d-flex align-items-center rounded-pill px-4 my-3 me-3">
            <span className="input-group-append">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "#502bc7" }}
              />
            </span>
            <input
              type="text"
              placeholder="Search..."
              name="search"
              style={{ border: "none", outline: "none", flexGrow: "1" }}
              className="px-2"
            />
          </div>
        </div>
      </div>

      <div className="d-flex flex-row justify-content-start align-items-center">
        <div className="d-flex flex-row mt-3">
          <p className=" ms-3 fs-5 fw-bold">Filters</p>
          <FontAwesomeIcon icon={faChevronRight} className="mt-2 ms-2" />
          <FontAwesomeIcon icon={faChevronRight} className="mt-2" />
        </div>

        <div className="d-flex flex-row mx-3  ">
          <FormControl
            variant="standard"
            sx={{ minWidth: 150 }}
            className="ms-2"
          >
            <InputLabel>Case Category</InputLabel>
            <Select color="primary" label="Age">
              <MenuItem value="Theft">Theft</MenuItem>
              <MenuItem value="Crime">Crime</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant="standard"
            sx={{ minWidth: 150 }}
            className="ms-3"
          >
            <InputLabel>Case Stage</InputLabel>
            <Select label="Case Stage">
              <MenuItem value="First Degree">First Degree</MenuItem>
              <MenuItem value="Appeal">Appeal</MenuItem>
              <MenuItem value="Supreme">Supreme</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            className="ms-3"
            variant="standard"
            sx={{ minWidth: 150 }}
          >
            <InputLabel>Case Status</InputLabel>
            <Select label="Age">
              <MenuItem value="Open">Open</MenuItem>
              <MenuItem value="Close">Close</MenuItem>
            </Select>
          </FormControl>
          <TextField
            name="date"
            type="date"
            size="small"
            variant="outlined"
            className="m-2"
            sx={{
              width: "45%",
            }}
          />
        </div>

        <div>
          <button
            className="btn btn-md rounded-pill fs-6"
            style={{ backgroundColor: "#502cb7", color: "white" }}
          >
            Clear All
          </button>
        </div>
      </div>

   

      <CaseList />
    </div>
  );
}
