import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addCase } from "../store/caseSlice";
import Button from "./Button";
import { Form, Formik } from "formik";
import { caseSchema } from "../schemas/caseValidationSchema";
import { SelectItem } from "./SelectItem";
import { ModalInput } from "./ModalInput";
import { getCurrentDate } from "../schemas/currentDate";

export default function AddCaseForm({ close }) {
  const dispatch = useDispatch();
  const initialValues = {
    caseNo: "",
    caseName: "",
    caseCategory: "",
    court: "",
    date: getCurrentDate(),
    cityName: "",
    caseGroup: "",
    clientName: "",
    lawyerName: "",
    staffLink: "",
    description: "",
    status: "Close",
  };

  function handleSubmit(values) {
    const currentDate = new Date();
    const uniqueId = currentDate.getTime();
    const newCase = {
      caseId: uniqueId,
      ...values,
    };

    dispatch(addCase(newCase));
    close();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={caseSchema}
    >
      {({ touched, values, errors, handleChange, handleBlur }) => (
        <Form>
          <div className="m-3 d-flex flex-row justify-content-evenly">
            <ModalInput
              name="caseNo"
              label="Case No."
              touched={touched.caseNo}
              value={values.caseNo}
              error={touched.caseNo && !!errors.caseNo}
              helperText={touched.caseNo && errors.caseNo}
              onChange={handleChange}
            />
            <ModalInput
              name="caseName"
              label="Case Name"
              touched={touched.caseName}
              error={touched.caseName && !!errors.caseName}
              value={values.caseName}
              onChange={handleChange}
              helperText={touched.caseName && errors.caseName}
            />
          </div>
          <div className="m-3 d-flex flex-row justify-content-evenly">
            {SelectItem(
              "caseCategory",
              "Case Category",
              values,
              handleChange,
              handleBlur,
              touched,
              errors,
              ["Theft", "Crime"]
            )}

            {SelectItem(
              "court",
              "Court",
              values,
              handleChange,
              handleBlur,
              touched,
              errors,
              ["First Degree", "Appeal", "Supreme"]
            )}
          </div>

          <div className="m-3 d-flex flex-row justify-content-evenly">
            <ModalInput
              label="Issue Date"
              value={values.date}
              onChange={handleChange}
              name="date"
              type="date"
              variant="outlined"
              error={touched.date && !!errors.date}
              touched={touched.date}
              onBlur={handleBlur}
              helperText={touched.date && errors.date}
              sx={{
                width: "45%",
              }}
              FormHelperTextProps={{
                sx: { fontSize: "14px", marginLeft: "0px" },
              }}
            />
            {SelectItem(
              "cityName",
              "City Name",
              values,
              handleChange,
              handleBlur,
              touched,
              errors,
              ["Ahmedabad", "Gandhinagar"]
            )}
          </div>
          <div className="m-3 d-flex flex-row justify-content-evenly">
            {SelectItem(
              "caseGroup",
              "Case Group",
              values,
              handleChange,
              handleBlur,
              touched,
              errors,
              ["Individual", "Company"]
            )}
            {SelectItem(
              "clientName",
              "Client Name",
              values,
              handleChange,
              handleBlur,
              touched,
              errors,
              ["Client 1", "Client 2"]
            )}
          </div>
          <div className="m-3 d-flex flex-row justify-content-evenly">
            {SelectItem(
              "lawyerName",
              "Lawyer Name",
              values,
              handleChange,
              handleBlur,
              touched,
              errors,
              ["Lawyer 1", "Lawyer 2"]
            )}

            {SelectItem(
              "staffLink",
              "Staff Link",
              values,
              handleChange,
              handleBlur,
              touched,
              errors,
              ["Staff 1", "Staff 2"]
            )}
          </div>
          <div className="m-3 d-flex flex-row justify-content-start">
            <TextField
              name="description"
              label="Description"
              variant="outlined"
              className="mx-3"
              value={values.description}
              onChange={handleChange}
              error={touched.description && !!errors.description}
              helperText={touched.description && errors.description}
              touched={touched.description}
              multiline
              minRows={4}
              fullWidth
              FormHelperTextProps={{
                sx: { fontSize: "14px", marginLeft: "0px" },
              }}
            />
          </div>

          <div className="d-flex flex-row justify-content-center">
            <Button type="submit" label="Submit"></Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
