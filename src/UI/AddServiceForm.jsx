import { TextField } from "@mui/material";
import "../index.css";
import { useDispatch } from "react-redux";
import { addService } from "../store/serviceSlice";
import Button from "./Button";
import { Form, Formik } from "formik";
import { serviceSchema } from "../schemas/serviceSchema";
import { SelectItem } from "./SelectItem";
import { ModalInput } from "./ModalInput";

export default function AddServiceForm({ close }) {
  const dispatch = useDispatch();

  const initialValues = {
    serviceName: "",
    serviceType: "",
    startDate: "",
    endDate: "",
    status: "",
    clients: "",
    lawyers: "",
    note: "",
  };

  function handleSubmit(values) {
    const currentDate = new Date();
    const uniqueId = currentDate.getTime();

    const newService = {
      id: uniqueId,
      ...values,
    };

    dispatch(addService(newService));
    close();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={serviceSchema}
    >
      {({ touched, errors, values, handleChange, handleBlur }) => (
        <Form>
          <div className="m-3 d-flex flex-row justify-content-evenly">
            <ModalInput
              name="serviceName"
              label="Service Name"
              onChange={handleChange}
              value={values.serviceName}
              error={!!errors.serviceName}
              helperText={touched.serviceName && errors.serviceName}
              touched={touched.serviceName}
            />
            {SelectItem(
              "serviceType",
              "Type of service",
              values,
              handleChange,
              handleBlur,
              touched,
              errors,
              ["Service 1", "Service 2"]
            )}
          </div>
          <div className="m-3 d-flex flex-row justify-content-evenly">
            <ModalInput
              name="startDate"
              label="Start Date"
              type="date"
              onChange={handleChange}
              value={values.startDate}
              error={!!errors.startDate}
              helperText={touched.startDate && errors.startDate}
              touched={touched.startDate}
            />

            <ModalInput
              name="endDate"
              label="End Date"
              type="date"
              onChange={handleChange}
              value={values.endDate}
              error={!!errors.endDate}
              helperText={touched.endDate && errors.endDate}
              touched={touched.endDate}
            />
          </div>

          <div className="m-3 d-flex flex-row justify-content-evenly">
            {SelectItem(
              "status",
              "Status",
              values,
              handleChange,
              handleBlur,
              touched,
              errors,
              ["Reviewing", "Accept", "Reject", "Close", "Completed", "Invoice"]
            )}
            {SelectItem(
              "clients",
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
            <TextField
              value={values.note}
              onChange={handleChange}
              name="note"
              label="Note"
              variant="outlined"
              multiline
              minRows={4}
              fullWidth
              sx={{
                width: "45%",
              }}
              error={touched.note && !!errors.note}
              helperText={touched.note && errors.note}
              FormHelperTextProps={{
                sx: { fontSize: "14px", marginLeft: "-1px" },
              }}
            />

            {SelectItem(
              "lawyers",
              "Lawyer Name",
              values,
              handleChange,
              handleBlur,
              touched,
              errors,
              ["Lawyer 1", "Lawyer 2"]
            )}
          </div>

          <div className="d-flex flex-row justify-content-center">
            <Button type="submit" label="Submit">
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
