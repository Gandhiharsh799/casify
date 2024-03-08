import { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import "../index.css";
import { useDispatch } from "react-redux";
import { addService } from "../store/serviceSlice";

export default function AddServiceForm({ close }) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    serviceName: "",
    serviceType: "",
    startDate: "",
    endDate: "",
    status: "",
    clients: "",
    lawyers: "",
    note: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = {};

    if (formData.serviceName.trim() === "") {
      validationErrors.serviceName = "Service Name is required ";
    }
    if (formData.serviceType.trim() === "") {
      validationErrors.serviceType = "Please select service type ";
    }
    if (formData.startDate.trim() === "") {
      validationErrors.startDate = "Please select service start date ";
    }
    if (formData.endDate.trim() === "") {
      validationErrors.endDate = "Please select service end date ";
    }
    if (formData.status.trim() === "") {
      validationErrors.status = "Status is a required field ";
    }
    if (formData.clients.trim() === "") {
      validationErrors.clients = "Please select at least one client ";
    }
    if (formData.lawyers.trim() === "") {
      validationErrors.lawyers = "Please select at least one lawyer ";
    }
    if (formData.note.trim() === "") {
      validationErrors.note = "Note is a required field";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const currentDate = new Date();
    const uniqueId = currentDate.getTime();
    

    const newService = {
      id: uniqueId,
      ...formData,
    }
    
    console.log(newService);
    console.log("done");
    dispatch(addService(newService));
    close();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="m-3 d-flex flex-row justify-content-evenly">
        <TextField
          name="serviceName"
          label="Service Name"
          variant="outlined"
          sx={{
            width: "45%",
          }}
          onChange={handleInputChange}
          value={formData.serviceName}
          error={!!errors.serviceName}
          helperText={errors.serviceName}
          FormHelperTextProps={{ sx: { fontSize: "14px", marginLeft: "-1px" } }}
        />
        <FormControl variant="outlined" sx={{ width: "45%" }}>
          <InputLabel>Type of Service</InputLabel>
          <Select
            label="Type of service"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleInputChange}
            error={!!errors.serviceType}
          >
            <MenuItem value="client1">Service 1</MenuItem>
            <MenuItem value="client2">Service 2</MenuItem>
          </Select>
          {errors.serviceType && (
            <div className="text-danger">
              <small>{errors.serviceType}</small>
            </div>
          )}
        </FormControl>
      </div>
      <div className="m-3 d-flex flex-row justify-content-evenly">
        <TextField
          name="startDate"
          type="date"
          label="Start Name"
          variant="outlined"
          sx={{
            width: "45%",
          }}
          onChange={handleInputChange}
          value={formData.startDate}
          error={!!errors.startDate}
          helperText={errors.startDate}
          FormHelperTextProps={{ sx: { fontSize: "14px", marginLeft: "-1px" } }}
          InputLabelProps={{ shrink: true }}
          inputProps={{ placeholder: "" }}
        />

        <TextField
          name="endDate"
          type="date"
          label="End Date"
          variant="outlined"
          sx={{
            width: "45%",
          }}
          onChange={handleInputChange}
          value={formData.endDate}
          error={!!errors.endDate}
          helperText={errors.endDate}
          FormHelperTextProps={{ sx: { fontSize: "14px", marginLeft: "-1px" } }}
          InputLabelProps={{ shrink: true }}
          inputProps={{ placeholder: "" }}
        />

        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="End Date"
            name="endDate"
            sx={{ width: "45%" }}
            value={formData.endDate}
            onChange={handleInputChange}
          />
        </LocalizationProvider> */}
      </div>

      <div className="m-3 d-flex flex-row justify-content-evenly">
        <FormControl variant="outlined" sx={{ width: "45%" }}>
          <InputLabel>Status</InputLabel>
          <Select
            label="Status"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            error={!!errors.status}
          >
            <MenuItem value="First Degree">First Degree</MenuItem>
            <MenuItem value="Reviewing">Reviewing</MenuItem>
            <MenuItem value="Reject">Reject</MenuItem>
            <MenuItem value="Close">Close</MenuItem>
            <MenuItem value="Invoice">Invoice</MenuItem>
          </Select>
          {errors.status && (
            <div className="text-danger">
              <small>{errors.status}</small>
            </div>
          )}
        </FormControl>
        <FormControl variant="outlined" sx={{ width: "45%" }}>
          <InputLabel>Client Name</InputLabel>
          <Select
            label="Client Name"
            name="clients"
            value={formData.clients}
            onChange={handleInputChange}
            error={!!errors.clients}
          >
            <MenuItem value="client1">Client 1</MenuItem>
            <MenuItem value="client2">Client 2</MenuItem>
          </Select>
          {errors.clients && (
            <div className="text-danger">
              <small>{errors.clients}</small>
            </div>
          )}
        </FormControl>
      </div>
      <div className="m-3 d-flex flex-row justify-content-evenly">
        <TextField
          value={formData.note}
          onChange={handleInputChange}
          name="note"
          label="Note"
          variant="outlined"
          multiline
          minRows={4}
          fullWidth
          sx={{
            width: "45%",
          }}
          error={!!errors.note}
          helperText={errors.note}
          FormHelperTextProps={{ sx: { fontSize: "14px", marginLeft: "-1px" } }}
        />

        <FormControl variant="outlined" sx={{ width: "45%" }}>
          <InputLabel>Lawyer Name</InputLabel>
          <Select
            label="lawyer name"
            name="lawyers"
            value={formData.lawyers}
            onChange={handleInputChange}
            error={!!errors.lawyers}
          >
            <MenuItem value="lawyer1">Lawyer 1</MenuItem>
            <MenuItem value="lawyer2">Lawyer 2</MenuItem>
          </Select>
          {errors.lawyers && (
            <div className="text-danger">
              <small>{errors.lawyers}</small>
            </div>
          )}
        </FormControl>
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
  );
}
