import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { CardContent, Paper, Card, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

export default function CaseDetails() {
  const { caseId } = useParams();
  const document = useSelector((state) => state.cases.cases);
  const navigate = useNavigate();

  const caseData = document.find(
    (cas) => cas.caseId.toString() === caseId.toString()
  );

  if (!caseData) {
    return <p>Case not found</p>;
  }

  function handleClick() {
    navigate("/report/cases");
  }

  const issueDate = new Date(caseData.date);
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - issueDate.getTime();
  const daysOpen = Math.floor(timeDifference / (1000 * 3600 * 24));

  return (
    <>
      <div>
        <button className=" btn btn-sm bg-white border-0" onClick={handleClick}>
          <FontAwesomeIcon icon={faArrowLeft} className="py-4 ps-4 pe-3 icon" />
        </button>
      </div>

      <div className="d-flex justify-content-start">
        <FontAwesomeIcon icon={faClock} className="mt-2 ps-4 pe-3 icon" />
        <p className="fs-3 user">Case Timeline</p>
      </div>

      <Paper
        elevation={8}
        className="mx-5 rounded-4 border"
        sx={{ width: "70%" }}
      >
        <Card variant="outlined" className="rounded-4 px-2 ">
          <CardContent>
            <Grid container>
              <Grid item xs={12}>
                <p className="fw-bold fs-4 p-2">
                  {caseData.status === "Open" ? "Days Open" : "Close in"} -{" "}
                  {daysOpen} days
                </p>
              </Grid>
              <Grid item xs={12} sm={2}>
                <p className="fw-bold px-2">Case Name</p>
              </Grid>
              <Grid item xs={12} sm={4}>
                <p className="px-2">{caseData.caseName}</p>
              </Grid>
              <Grid item xs={12} sm={2}>
                <p className="fw-bold px-2">Case No.</p>
              </Grid>
              <Grid item xs={12} sm={4}>
                <p className="px-2">{caseData.caseNo}</p>
              </Grid>
              <Grid item xs={12} sm={2}>
                <p className="fw-bold px-2">Lawyer Name</p>
              </Grid>
              <Grid item xs={12} sm={4}>
                <p className="px-2">{caseData.lawyerName}</p>
              </Grid>
              <Grid item xs={12} sm={2}>
                <p className="fw-bold px-2">Case Status</p>
              </Grid>
              <Grid item xs={12} sm={4}>
                <p className="px-2">{caseData.status}</p>
              </Grid>
              <Grid item xs={12} sm={2}>
                <p className="fw-bold px-2">Court</p>
              </Grid>
              <Grid item xs={12} sm={4}>
                <p className="px-2">{caseData.court}</p>
              </Grid>
              <Grid item xs={12} sm={2}>
                <p className="fw-bold px-2">Case Group</p>
              </Grid>
              <Grid item xs={12} sm={4}>
                <p className="px-2">{caseData.caseGroup}</p>
              </Grid>
              <Grid item xs={12} sm={2}>
                <p className="fw-bold px-2">Issue Date</p>
              </Grid>
              <Grid item xs={12} sm={4}>
                <p className="px-2">{caseData.date}</p>
              </Grid>
              <Grid item xs={12} sm={2}>
                <p className="fw-bold px-2">Description</p>
              </Grid>
              <Grid item xs={12} sm={4}>
                <p className="px-2">{caseData.description}</p>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Paper>
      <div className="d-flex justify-content-start mt-4">
        <FontAwesomeIcon icon={faUsers} className="mt-2 ps-4 pe-3 icon" />
        <p className="fs-3 user">Staff Information</p>
      </div>

      <Paper
        elevation={8}
        className="mx-5 rounded-4 border"
        sx={{ width: "40%" }}
      >
        <Card variant="outlined" className="rounded-4 px-2 ">
          <CardContent>
            <Grid container>
              <Grid item xs={12} sm={5}>
                <p className="fw-bold px-2">Staff Name</p>
              </Grid>
              <Grid item xs={12} sm={7}>
                <p className="px-2">{caseData.staffLink}</p>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Paper>
    </>
  );
}
