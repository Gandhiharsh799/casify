import { useSelector } from "react-redux";
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
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Table,
  TextField,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Modal from "../UI/Modal";
import StyledRow from "../theme/theme";
import "../index.css";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import useFilters from "../schemas/useFilters";

const tableHeaders = [
  { label: "Case No.", key: "caseNo" },
  { label: "Case Name", key: "caseName" },
  { label: "Case Category", key: "caseCategory" },
  { label: "Case Stage", key: "court" },
  { label: "Issue Date", key: "date" },
  { label: "City Name", key: "cityName" },
  { label: "Client Name", key: "clientName" },
  { label: "Lawyer Name", key: "lawyerName" },
  { label: "Status", key: "status" },
];

export default function CaseList() {
  const initialValues = {
    caseCategory: "",
    caseStage: "",
    caseStatus: "",
    issueDate: "",
  };

  const [filters, updateFilter] = useFilters(initialValues);
  const cases = useSelector((state) => state.cases.cases);

  const [filteredCases, setFilteredCases] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const dialog = useRef();
  const navigate = useNavigate();

  const handleModal = () => {
    dialog.current.showModal();
  };

  useEffect(() => {
    const filtered = cases.filter((caseItem) => {
      let caseFilters =
        (filters.caseCategory &&
          caseItem.caseCategory !== filters.caseCategory) ||
        (filters.caseStage && caseItem.court !== filters.caseStage) ||
        (filters.caseStatus && caseItem.status !== filters.caseStatus) ||
        (filters.issueDate && caseItem.date !== filters.issueDate);
      if (caseFilters) {
        return false;
      }

      if (
        Object.values(caseItem).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(searchQuery.toLowerCase())
        )
      ) {
        return true;
      }
      return true;
    });

    setFilteredCases(filtered);
  }, [cases, searchQuery, filters]);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    updateFilter(name, value);
  };

  const handleClearAll = () => {
    updateFilter("caseCategory", "");
    updateFilter("caseStage", "");
    updateFilter("caseStatus", "");
    updateFilter("issueDate", "");
    setSearchQuery("");
  };

  const caseData = (caseItem) =>
    tableHeaders.map((header, index) => (
      <TableCell key={index} align="center" className="fs-6 fw-bold">
        {caseItem[header.key]}
      </TableCell>
    ));

  return (
    <>
      <Modal ref={dialog} />
      <div className="d-flex flex-column flex-md-row justify-content-between">
        <div className="d-flex">
          <FontAwesomeIcon icon={faBriefcase} className="py-4 ps-4 pe-3 icon" />
          <p className="mt-3 fs-3 fw-bold">Cases</p>
        </div>
        <div className="d-flex">
          <Button label="Add Case" onClick={handleModal} icon={faPlus}></Button>
          <div className="search d-flex align-items-center rounded-pill px-4 my-3 me-3">
            <span className="input-group-append">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="user" />
            </span>
            <input
              type="text"
              placeholder="Search..."
              name="search"
              className="px-2 input"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
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

        <div className="scrollable-container">
          <div className="d-flex flex-row ms-3  ">
            <FormControl
              variant="standard"
              sx={{ minWidth: 150 }}
              className="ms-2"
            >
              <InputLabel>Case Category</InputLabel>
              <Select
                color="primary"
                name="caseCategory"
                value={filters.caseCategory}
                onChange={handleFilterChange}
              >
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
              <Select
                label="Case Stage"
                name="caseStage"
                value={filters.caseStage}
                onChange={handleFilterChange}
              >
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
              <Select
                label="Case Status"
                name="caseStatus"
                value={filters.caseStatus}
                onChange={handleFilterChange}
              >
                <MenuItem value="Open">Open</MenuItem>
                <MenuItem value="Close">Close</MenuItem>
              </Select>
            </FormControl>
            <TextField
              className="m-3"
              label="Issue Date"
              type="date"
              name="issueDate"
              inputProps={{ placeholder: "" }}
              InputLabelProps={{ shrink: true }}
              size="small"
              value={filters.issueDate}
              onChange={handleFilterChange}
            />
          </div>
        </div>

        <div>
          <Button label="Clear All" onClick={handleClearAll}></Button>
        </div>
      </div>

      <TableContainer className="mt-3">
        <Table>
          <TableHead className="tab">
            <TableRow>
              {tableHeaders.map((header, index) => (
                <TableCell
                  key={index}
                  className="fs-6 fw-bold text-white"
                  align="center"
                >
                  {header.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {filteredCases.length > 0 ? (
            filteredCases.map((caseItem) => (
              <StyledRow
                key={caseItem.caseId}
                onClick={() => navigate(`/report/cases/${caseItem.caseId}`)}
                className="list"
              >
                {caseData(caseItem)}
              </StyledRow>
            ))
          ) : (
            <TableRow>
              <TableCell>No rows to show</TableCell>
            </TableRow>
          )}
        </Table>
      </TableContainer>
    </>
  );
}
