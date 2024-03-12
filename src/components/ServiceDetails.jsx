import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, Grid, Paper } from "@mui/material";

export default function ServiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const services = useSelector((state) => state.services.services);

  const service = services.find((serv) => serv.id.toString() === id.toString());
  console.log(service);
  if (!service) {
    return <p>service not found</p>;
  }

  console.log(services);

  function handleClick() {
    navigate("/report/services");
  }

  return (
    <>
      <div>
        <button className=" btn btn-sm bg-white border-0" onClick={handleClick}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="py-4 ps-4 pe-3 icon"
            style={{ color: "#502cb7", height: "20px" }}
          />
        </button>
      </div>

      <div className="d-flex justify-content-start">
        <FontAwesomeIcon icon={faCircleInfo} className="mt-2 ps-4 pe-3 icon" />
        <p className="fs-3 fw-bold">Service Information</p>
      </div>

      <Paper elevation={8} className="mx-5 rounded-4 border">
        <Card variant="outlined" className="rounded-4 px-2 ">
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={2}>
                <p className="fw-bold p-2">Service Name</p>
              </Grid>
              <Grid item xs={12} sm={4}>
                <p className="p-2">{service.serviceName}</p>
              </Grid>
              <Grid item xs={12} sm={2}>
                <p className="fw-bold p-2">Status</p>
              </Grid>
              <Grid item xs={12} sm={4}>
                <p className="p-2">{service.status}</p>
              </Grid>
              <Grid item xs={12} sm={2}>
                <p className="fw-bold p-2">Start Date</p>
              </Grid>
              <Grid item xs={12} sm={4}>
                <p className="p-2">{service.startDate}</p>
              </Grid>
              <Grid item xs={12} sm={2}>
                <p className="fw-bold p-2">End Date</p>
              </Grid>
              <Grid item xs={12} sm={4}>
                <p className="p-2">{service.endDate}</p>
              </Grid>
              <Grid item xs={12}>
                <p className="fw-bold px-2">Note:</p>
                <p className="px-2">{service.note}</p>
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
          </CardContent>
        </Card>
      </Paper>
    </>
  );
}
