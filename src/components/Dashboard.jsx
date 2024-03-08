import { Grid } from "@mui/material";
import { Card } from "react-bootstrap";
import "../index.css";

export default function Dashboard() {
  return (
    <div style={{ paddingBottom: "60px" }} className="d-flex">
      <Grid container xs={4} className="pt-2 px-3">

        <Grid item xs={12} className="gride">
          <Card className="card">
            <Card.Title className="grid-title rounded-top-4 fs-5 px-3 py-3">
              Open Cases
            </Card.Title>
            <Card.Body>
              <Grid container>
                <Grid xs={12}>
                  <p className="fs-2 fw-bold color">1</p>
                </Grid>
                <Grid xs={11} className="border-bottom ">
                  <p>New Cases in last 30 days</p>
                </Grid>
                <Grid xs={1} className="border-bottom">
                  <p className="color">0</p>
                </Grid>
                <Grid xs={11} className="border-bottom pt-3 ">
                  <p>Cases closed in last 30 days</p>
                </Grid>
                <Grid xs={1} className="border-bottom pt-3">
                  <p className="color">0</p>
                </Grid>
                <Grid xs={11} className="border-bottom pt-3">
                  <p>Updated in last 30 days</p>
                </Grid>
                <Grid xs={1} className="border-bottom pt-3">
                  <p className="color">0</p>
                </Grid>
              </Grid>
            </Card.Body>
          </Card>
        </Grid>

        <Grid item xs={12} className="mt-2 gride">
          <Card className="card">
            <Card.Title className="grid-title rounded-top-4 fs-5 px-3 py-3">
              Financial Overview
            </Card.Title>

            <Grid container>
              <Grid xs={6}>
                <p className="text-center fs-5">Unpaid Amount</p>
              </Grid>
              <Grid xs={6}>
                <p className="text-center fs-5">Paid Amount</p>
              </Grid>
              <Grid xs={6}>
                <p className="text-center fs-3 color">SAR 0.00</p>
              </Grid>
              <Grid xs={6}>
                <p className="text-center fs-3 color-green">SAR 0.00</p>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item xs={12} className="mt-2 gride">
          <Card className="card">
            <Card.Title className="grid-title rounded-top-4 fs-5 px-3 py-3">
              My Tasks
            </Card.Title>
            <Grid container>
              <Grid xs={4}>
                <p className="text-center fs-6">Due Today</p>
              </Grid>
              <Grid xs={4}>
                <p className="text-center fs-6">Overdue</p>
              </Grid>
              <Grid xs={4}>
                <p className="text-center fs-6">Completed</p>
              </Grid>
              <Grid xs={4}>
                <p className="text-center fs-3 color">0</p>
              </Grid>
              <Grid xs={4}>
                <p className="text-center fs-3 color">1</p>
              </Grid>
              <Grid xs={4}>
                <p className="text-center fs-3 color">0</p>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item xs={12} className="mt-2 gride">
          <Card className="card">
            <Card.Title className="grid-title rounded-top-4 fs-5 px-3 py-3">
              Upcoming Events
            </Card.Title>
            <Card.Body>
              <Grid container>
                <Grid xs={12}>
                  <p className="fs-2 fw-bold color">1</p>
                </Grid>
              </Grid>
            </Card.Body>
          </Card>
        </Grid>

      </Grid>

      <Grid container xs={8} className="pt-2 pe-3">
        <Grid item xs={12} >
          <Card className="gride card">
            <Card.Title className="grid-title rounded-top-4 fs-5 px-3 py-3">
              Events Calendar
            </Card.Title>
            <Card.Body>
              <Grid container>
                <Grid xs={12}>
                  <p className="fs-2 fw-bold color">1</p>
                </Grid>
                <Grid xs={11} className="border-bottom ">
                  <p>New Cases in last 30 days</p>
                </Grid>
                <Grid xs={1} className="border-bottom">
                  <p className="color">0</p>
                </Grid>
                <Grid xs={11} className="border-bottom pt-3 ">
                  <p>Cases closed in last 30 days</p>
                </Grid>
                <Grid xs={1} className="border-bottom pt-3">
                  <p className="color">0</p>
                </Grid>
                <Grid xs={11} className="border-bottom pt-3">
                  <p>Updated in last 30 days</p>
                </Grid>
                <Grid xs={1} className="border-bottom pt-3">
                  <p className="color">0</p>
                </Grid>
              </Grid>
            </Card.Body>
          </Card>
        </Grid>

      </Grid>
    </div>
  );
}
