import { useSelector } from "react-redux";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Table
} from "@mui/material";
import { useRef } from "react";
import Modal from "../UI/Modal";
import styled from "@emotion/styled";
import '../index.css'
import { useNavigate } from "react-router-dom";

export default function CaseList() {
  const cases = useSelector((state) => state.cases.cases);
  const dialog = useRef();
  const navigate = useNavigate();

  const handleModal = () => {
    dialog.current.showModal();
  };
  const StyledRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "white",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "#ece5ff",
    },
    "&:nth-of-type(even):hover": {
      backgroundColor: "#dceff7",
    },
    "&:nth-of-type(odd):hover": {
      backgroundColor: "#dceff7",
    },
  }));
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

        <div className="d-flex flex-row ms-3  ">
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Start Date"
              sx={{ width: "25%" }}
              className="ms-3"
            />
          </LocalizationProvider>
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

      <TableContainer className="mt-3">
        <Table>
          <TableHead className="tab">
            <TableRow>
              <TableCell className="fs-6 fw-bold text-white " align="center">
                Case No.
              </TableCell>
              <TableCell className="fs-6 fw-bold text-white" align="center">
                Case Name
              </TableCell>
              <TableCell className="fs-6 fw-bold text-white" align="center">
                Case Category
              </TableCell>
              <TableCell className="fs-6 fw-bold text-white" align="center">
                Case Stage
              </TableCell>
              <TableCell className="fs-6 fw-bold text-white " align="center">
                City Name
              </TableCell>
              <TableCell className="fs-6 fw-bold text-white " align="center">
                Client Name
              </TableCell>
              <TableCell className="fs-6 fw-bold text-white " align="center">
                Lawyer Name
              </TableCell>
              <TableCell className="fs-6 fw-bold text-white" align="center">
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          {cases.map((cases) => (
            <>
              <StyledRow
                key={cases.caseId}
                onClick={() => navigate(`/report/cases/${cases.caseId}`)}
                className="list"
              >
                <TableCell align="center" className="fs-6 fw-bold">
                  {cases.caseNo}
                </TableCell>
                <TableCell align="center" className="fs-6 fw-bold">
                  {cases.caseName}
                </TableCell>
                <TableCell align="center" className="fs-6 fw-bold">
                  {cases.caseCategory}
                </TableCell>
                <TableCell align="center" className="fs-6 fw-bold">
                  {cases.court}
                </TableCell>
                <TableCell align="center" className="fs-6 fw-bold">
                  {cases.cityName}
                </TableCell>
                <TableCell align="center" className="fs-6 fw-bold">
                  {cases.clientName}
                </TableCell>
                <TableCell align="center" className="fs-6 fw-bold">
                  {cases.lawyerName}
                </TableCell>
                <TableCell align="center" className="fs-6 fw-bold">
                  {cases.status}
                </TableCell>
              </StyledRow>
            </>
          ))}
        </Table>
      </TableContainer>
    </div>
  );
}
