import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import ServiceList from "./ServiceList";
import ServiceModal from "../UI/ServiceModal";
import { useRef } from "react";



export default function Services() {
  const dialog = useRef();

  function handleModal() {
    dialog.current.showModal();
  }
  return (
    <div>
      <ServiceModal ref={dialog} />
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex">
          <FontAwesomeIcon
            icon={faCircleInfo}
            className="py-4 ps-4 pe-3"
            style={{ color: "#502cb7", height: "25px" }}
          />
          <p className="mt-3 fs-3 fw-bold">Services</p>
        </div>

        <div className="d-flex">
          <button
            className="btn btn-lg rounded-pill m-3 fs-6"
            style={{ backgroundColor: "#502cb7", color: "white" }}
            onClick={handleModal}
          >
            <FontAwesomeIcon icon={faPlus} className="px-1" />
            Add Service
          </button>
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
            <InputLabel>Service Type</InputLabel>
            <Select color="primary" label="Age">
              <MenuItem value="service1">Service 1</MenuItem>
              <MenuItem value="service2">Service 2</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            variant="standard"
            sx={{ minWidth: 150 }}
            className="ms-3"
          >
            <InputLabel>Status</InputLabel>
            <Select label="Case Stage">
              <MenuItem value="First Degree">First Degree</MenuItem>
              <MenuItem value="Reviewing">Reviewing</MenuItem>
              <MenuItem value="Reject">Reject</MenuItem>
              <MenuItem value="Close">Close</MenuItem>
              <MenuItem value="Invoice">Invoice</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Start Date"
              sx={{ width: "30%" }}
              className="mx-3"
            />
            <DatePicker label="End Date" sx={{ width: "30%" }} />
          </LocalizationProvider>

          <button
            className="btn btn-md rounded-pill fs-6 my-2 mx-3"
            style={{ backgroundColor: "#502cb7", color: "white" }}
          >
            Clear All
          </button>
        </div>
      </div>
      <ServiceList />
      
    </div>
  );
}
