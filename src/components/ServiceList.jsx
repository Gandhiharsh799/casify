import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useRef, useState } from "react";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TableContainer,
  TableRow,
  TableCell,
  TableHead,
  Table,
  TextField,
} from "@mui/material";
import ServiceModal from "../UI/ServiceModal";
import StyledRow from "../theme/theme";
import Button from "../UI/Button";
import useFilters from "../schemas/useFilters";

const tableHeaders = [
  { label: "Service Name", key: "serviceName" },
  { label: "Service Type", key: "serviceType" },
  { label: "Start Date", key: "startDate" },
  { label: "End Date", key: "endDate" },
  { label: "Status", key: "status" },
  { label: "Clients", key: "clients" },
  { label: "Lawyers", key: "lawyers" },
];

export default function ServiceList() {
  const initialValues = {
    serviceTypefilter: "",
    serviceStatusfilter: "",
    startDate: "",
    endDate: "",
  };

  const dialog = useRef();
  const navigate = useNavigate();

  const [filters, updateFilter] = useFilters(initialValues);

  const [filteredServices, setFilteredServices] = useState([]);

  function handleModal() {
    dialog.current.showModal();
  }
  const services = useSelector((state) => state.services.services);

  useEffect(() => {
    let filtered = services.filter((service) => {
      let serviceFilters =
        (filters.serviceTypefilter &&
          service.serviceType !== filters.serviceTypefilter) ||
        (filters.serviceStatusfilter &&
          service.status !== filters.serviceStatusfilter) ||
        (filters.startDate && service.startDate !== filters.startDate) ||
        (filters.endDate && service.endDate !== filters.endDate);

      if (serviceFilters) {
        return false;
      }

      return true;
    });

    setFilteredServices(filtered);
  }, [services, filters]);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    updateFilter(name, value);
  };

  const handleClearAll = () => {
    updateFilter("serviceTypefilter", "");
    updateFilter("serviceStatusfilter", "");
    updateFilter("startDate", "");
    updateFilter("endDate", "");
  };

  const serviceData = (serviceItem) =>
    tableHeaders.map((header, index) => (
      <TableCell key={index} align="center" className="fs-6 fw-bold">
        {serviceItem[header.key]}
      </TableCell>
    ));

  return (
    <>
      <ServiceModal ref={dialog} />
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex">
          <FontAwesomeIcon
            icon={faCircleInfo}
            className="py-4 ps-4 pe-3 icon"
          />
          <p className="mt-3 fs-3 fw-bold">Services</p>
        </div>

        <div className="d-flex">
          <Button
            label="Add Service"
            onClick={handleModal}
            icon={faPlus}
          ></Button>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-start align-items-center">
        <div className="d-flex flex-row mt-3">
          <p className=" ms-3 fs-5 fw-bold">Filters</p>
          <FontAwesomeIcon icon={faChevronRight} className="mt-2 ms-2" />
          <FontAwesomeIcon icon={faChevronRight} className="mt-2" />
        </div>

        <div className="scrollable-container">
          <div className="d-flex flex-row mx-3  ">
            <FormControl
              variant="standard"
              sx={{ minWidth: 150 }}
              className="ms-2"
            >
              <InputLabel>Service Type</InputLabel>
              <Select
                color="primary"
                label="Service Type"
                value={filters.serviceTypefilter}
                name="serviceTypefilter"
                onChange={handleFilterChange}
              >
                <MenuItem value="Service 1">Service 1</MenuItem>
                <MenuItem value="Service 2">Service 2</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              variant="standard"
              sx={{ minWidth: 150 }}
              className="ms-3"
            >
              <InputLabel>Status</InputLabel>
              <Select
                label="Status"
                name="serviceStatusfilter"
                value={filters.serviceStatusfilter}
                onChange={handleFilterChange}
              >
                <MenuItem value="First Degree">First Degree</MenuItem>
                <MenuItem value="Reviewing">Reviewing</MenuItem>
                <MenuItem value="Reject">Reject</MenuItem>
                <MenuItem value="Close">Close</MenuItem>
                <MenuItem value="Invoice">Invoice</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select>
            </FormControl>

            <TextField
              className="m-3"
              label="Start Date"
              type="date"
              inputProps={{ placeholder: "" }}
              InputLabelProps={{ shrink: true }}
              size="small"
              name="startDate"
              value={filters.startDate}
              onChange={handleFilterChange}
            />

            <TextField
              className="m-3"
              label="End Date"
              type="date"
              name="endDate"
              inputProps={{ placeholder: "" }}
              InputLabelProps={{ shrink: true }}
              size="small"
              value={filters.endDate}
              onChange={handleFilterChange}
            />
          </div>
        </div>

        <button
          className="btn btn-md rounded-pill fs-6 my-2 mx-3"
          style={{ backgroundColor: "#502cb7", color: "white" }}
          onClick={handleClearAll}
        >
          Clear All
        </button>
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

          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <StyledRow
                key={service.id}
                onClick={() => navigate(`/report/services/${service.id}`)}
                className="list"
              >
                {serviceData(service)}
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
