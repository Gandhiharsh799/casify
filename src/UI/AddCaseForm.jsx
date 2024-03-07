import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCase } from "../store/caseSlice";

export default function AddCaseForm({ close }) {
    const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    caseNo: "",
    caseName: "",
    caseCategory: "",
    court: "",
    date: "",
    cityName: "",
    caseGroup: "",
    clientName: "",
    lawyerName: "",
    staffLink: "",
    description: "",
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

    if (formData.caseNo.trim() === "") {
      validationErrors.caseNo = "Please enter a Case No.";
    }
    if (formData.caseName.trim() === "") {
      validationErrors.caseName = "Please enter a Case Name";
    }
    if (formData.caseCategory.trim() === "") {
      validationErrors.caseCategory = "Please select case category";
    }
    if (formData.court.trim() === "") {
      validationErrors.court = "Please select court";
    }
    
    if (formData.date.trim() === "") {
      validationErrors.date = "Please  select a date";
    }
    if (formData.cityName.trim() === "") {
      validationErrors.cityName = "Please select a city";
    }
    if (formData.caseGroup.trim() === "") {
      validationErrors.caseGroup = "Please select a case group";
    }
    if (formData.clientName.trim() === "") {
      validationErrors.clientName = "Please select at least one client";
    }
    if (formData.lawyerName.trim() === "") {
      validationErrors.lawyerName = "Please select at least one lawyer";
    }
    if (formData.description.trim() === "") {
      validationErrors.description = "Please enter some description";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log(formData);
    dispatch(addCase(formData))
    close();
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="m-3 d-flex flex-row justify-content-evenly">
        <TextField
          color="primary"
          name="caseNo"
          label="Case No."
          variant="outlined"
          error={!!errors.caseNo}
          value={formData.caseNo}
          onChange={handleInputChange}
          helperText={errors.caseNo}
          sx={{
            width: "45%",
          }}
          FormHelperTextProps={{ sx: { fontSize: "14px", marginLeft: "-2px" } }}
        />
        <TextField
          name="caseName"
          label="Case Name"
          variant="outlined"
          error={!!errors.caseName}
          value={formData.caseName}
          onChange={handleInputChange}
          sx={{
            width: "45%",
          }}
          helperText={errors.caseName}
          FormHelperTextProps={{ sx: { fontSize: "14px", marginLeft: "-2px" } }}
        />
      </div>
      <div className="m-3 d-flex flex-row justify-content-evenly">
        <FormControl variant="outlined" sx={{ width: "45%" }}>
          <InputLabel color={!errors.caseCategory ? "primary" : "error"}>
            Case Category
          </InputLabel>
          <Select
            label="Case Category"
            name="caseCategory"
            value={formData.caseCategory}
            onChange={handleInputChange}
            error={!!errors.caseCategory}
          >
            <MenuItem value="Theft">Theft</MenuItem>
            <MenuItem value="Crime">Crime</MenuItem>
          </Select>
          {errors.caseCategory && (
            <div className="text-danger">
              <small>{errors.caseCategory}</small>
            </div>
          )}
        </FormControl>
        <FormControl variant="outlined" sx={{ width: "45%" }}>
          <InputLabel color="primary">Court</InputLabel>
          <Select
            label="Court"
            name="court"
            value={formData.court}
            onChange={handleInputChange}
            error={!!errors.court}
          >
            <MenuItem value="First Degree">First Degree</MenuItem>
            <MenuItem value="Appeal">Appeal</MenuItem>
            <MenuItem value="Supreme">Supreme</MenuItem>
          </Select>
          {errors.court && (
            <div className="text-danger">
              <small>{errors.court}</small>
            </div>
          )}
        </FormControl>
      </div>

      <div className="m-3 d-flex flex-row justify-content-evenly">
        <TextField
          value={formData.date}
          onChange={handleInputChange}
          name="date"
          type="date"
          variant="outlined"
          error={!!errors.date}
          helperText={errors.date}
          sx={{
            width: "45%",
          }}
          FormHelperTextProps={{ sx: { fontSize: "14px", marginLeft: "-2px" } }}
        />
        <FormControl variant="outlined" sx={{ width: "45%" }}>
          <InputLabel color="primary">City Name</InputLabel>
          <Select
            label="City Name"
            name="cityName"
            error={!!errors.cityName}
            value={formData.cityName}
            onChange={handleInputChange}
          >
            <MenuItem value="Ahmedabad">Ahmedabad</MenuItem>
            <MenuItem value="Gandhinagar">Gandhinagar</MenuItem>
          </Select>
          {errors.cityName && (
            <div className="text-danger">
              <small>{errors.cityName}</small>
            </div>
          )}
        </FormControl>
      </div>
      <div className="m-3 d-flex flex-row justify-content-evenly">
        <FormControl variant="outlined" sx={{ width: "45%" }}>
          <InputLabel color="primary">Case Group</InputLabel>
          <Select
            label="Case Group"
            name="caseGroup"
            value={formData.caseGroup}
            onChange={handleInputChange}
            error={!!errors.cityName}
          >
            <MenuItem value="Individual">Individual</MenuItem>
            <MenuItem value="Company">Company</MenuItem>
          </Select>
          {errors.caseGroup && (
            <div className="text-danger">
              <small>{errors.caseGroup}</small>
            </div>
          )}
        </FormControl>
        <FormControl variant="outlined" sx={{ width: "45%" }}>
          <InputLabel color="primary">Client Name</InputLabel>
          <Select
            label="Client Name"
            name="clientName"
            value={formData.clientName}
            onChange={handleInputChange}
            error={!!errors.clientName}
          >
            <MenuItem value="Client 1">Client 1</MenuItem>
            <MenuItem value="Client 2">Client 2</MenuItem>
          </Select>
          {errors.clientName && (
            <div className="text-danger">
              <small>{errors.clientName}</small>
            </div>
          )}
        </FormControl>
      </div>
      <div className="m-3 d-flex flex-row justify-content-evenly">
        <FormControl variant="outlined" sx={{ width: "45%" }}>
          <InputLabel>Lawyer Name</InputLabel>
          <Select
            label="Lawyer Name"
            name="lawyerName"
            value={formData.lawyerName}
            onChange={handleInputChange}
            error={!!errors.lawyerName}
          >
            <MenuItem value="lawyer 1">lawyer 1</MenuItem>
            <MenuItem value="lawyer 2">lawyer 2</MenuItem>
          </Select>
          {errors.lawyerName && (
            <div className="text-danger">
              <small>{errors.lawyerName}</small>
            </div>
          )}
        </FormControl>
        <FormControl variant="outlined" sx={{ width: "45%" }}>
          <InputLabel>Staff Link</InputLabel>
          <Select
            label="Staff Link"
            name="staffLink"
            value={formData.staffLink}
            onChange={handleInputChange}
          >
            <MenuItem value="Staff 1">Staff 1</MenuItem>
            <MenuItem value="Staff 2">Staff 2</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="m-3 d-flex flex-row justify-content-start">
        <TextField
          name="description"
          label="Description"
          variant="outlined"
          multiline
          minRows={4}
          fullWidth
          className="mx-3"
          value={formData.description}
          onChange={handleInputChange}
          error={!!errors.description}
          helperText={errors.description}
          FormHelperTextProps={{ sx: { fontSize: "14px", marginLeft: "-2px" } }}
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
  );
}
