import { Paper } from "@mui/material";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import '../index.css'
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row bg-white shadow box-area">
        <div className="col-md-6 p-3 d-flex justify-content-center rounded-start-4 flex-column align-items-center left-box">
          <div className="text-center">
            <h1 className="text-white fs-1">Welcome to Casify!</h1>
            <p className="text-white">Manage your details here</p>
          </div>
        </div>

        <Paper elevation={3} className="col-md-6 rounded-end-4 right-box">
          <div className="row align-items-center">
            <p
              className="text-center p-2  my-4 nav-label"
              style={{ fontSize: "64px" }}
            >
              Casify
            </p>
          </div>
          <div className="input-group mb-3 justify-content-center">
            <TextField
              type="email"
              label="E-mail"
              variant="outlined"
              required
            />
          </div>
          <div className="input-group mb-3 justify-content-center">
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              required
            />
          </div>
          <div className="input-group mb-5 justify-content-center">
            <Link to= "/report">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#502cb7",
                textTransform: "capitalize",
                width: "25%",
                height: "40px",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#502cb7",
                },
              }}
              className="btn btn-lg rounded-pill"
              >
              Login
            </Button>
              </Link>
          </div>
          <div className="row">
            <p className="text-center mt-5">Don't have an account?</p>
            <Link to="/">
              <p className="text-center mb-4" style={{ color: "#502cb7" }}>
                Create an account
              </p>
            </Link>
          </div>
        </Paper>
      </div>
    </div>
  );
}
