import { forwardRef, useImperativeHandle, useState } from "react";
import "../index.css";
import { Dialog, TextField, FormControl, InputLabel, Select, MenuItem, Textarea } from "@mui/material";


const Modal = forwardRef(function Modal(props, ref) {
    const [isOpen, setIsOpen] = useState(false);
  
  useImperativeHandle(ref, () => ({
    showModal(){
        setIsOpen(true);
    }
  }));

  const closeModal = ()=>{
    setIsOpen(false);
  }

  return (
    <Dialog
      open={isOpen}
      sx={{
        backdropFilter: "blur(2px) sepia(5%)",
      }}
      PaperProps={{ sx: { borderRadius: "15px" } }}
      fullWidth
    >
      <header className="head">
        <p className="pt-2 px-4 fs-5">Add Case</p>
      </header>

      <form>
        <div className="m-3 d-flex flex-row justify-content-evenly">
          <TextField
            label="Case No."
            variant="outlined"
            color="primary"
            required
            sx={{
              width: "45%",
            }}
          />

          <TextField
            label="Case Name"
            variant="outlined"
            color="primary"
            required
            sx={{
              width: "45%",
            }}
          />
        </div>
        <div className="m-3 d-flex flex-row justify-content-evenly">
          <FormControl variant="outlined" sx={{ width: "45%" }}>
            <InputLabel color="primary">Case Category</InputLabel>
            <Select color="primary" label="Case Category">
              <MenuItem>Ten</MenuItem>
              <MenuItem>Twenty</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" sx={{ width: "45%" }}>
            <InputLabel color="primary">Court</InputLabel>
            <Select color="primary" label="Court">
              <MenuItem>First Degree</MenuItem>
              <MenuItem>Appeal</MenuItem>
              <MenuItem>Supreme</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="m-3 d-flex flex-row justify-content-evenly">
          <TextField
            type="date"
            variant="outlined"
            color="primary"
            required
            sx={{
              width: "45%",
            }}
          />
          <FormControl variant="outlined" sx={{ width: "45%" }}>
            <InputLabel color="primary">City Name</InputLabel>
            <Select color="primary" label="City Name ">
              <MenuItem>No options</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="m-3 d-flex flex-row justify-content-evenly">
          <FormControl variant="outlined" sx={{ width: "45%" }}>
            <InputLabel color="primary">Case Group</InputLabel>
            <Select color="primary" label="Case Category">
              <MenuItem>Individual</MenuItem>
              <MenuItem>Company</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" sx={{ width: "45%" }}>
            <InputLabel color="primary">Client Name</InputLabel>
            <Select color="primary" label="Court">
              <MenuItem>Client 1</MenuItem>
              <MenuItem>Clent 2</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="m-3 d-flex flex-row justify-content-evenly">
          <FormControl variant="outlined" sx={{ width: "45%" }}>
            <InputLabel color="primary">Lawyer Name</InputLabel>
            <Select color="primary" label="Case Category">
              <MenuItem>laywer 1</MenuItem>
              <MenuItem>laywer 2</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" sx={{ width: "45%" }}>
            <InputLabel color="primary">Staff Link</InputLabel>
            <Select color="primary" label="Court">
              <MenuItem>Staff 1</MenuItem>
              <MenuItem>Staff 2</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="m-3 d-flex flex-row justify-content-start">
          <Textarea label="Description" variant="outlined" color="primary" />
        </div>

        <div className="d-flex flex-row justify-content-center">
          <button
            type="button"
            onClick={closeModal}
            className="btn btn-lg rounded-pill m-3 fs-6"
            style={{ backgroundColor: "#502cb7", color: "white" }}
          >
            Submit
          </button>
        </div>
      </form>
    </Dialog>
  );
});

export default Modal;
