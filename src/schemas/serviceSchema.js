import * as Yup from "yup";

export const serviceSchema = Yup.object().shape({
  serviceName: Yup.string().required("Service Name is required"),
  serviceType: Yup.string().required("Please select service type"),
  startDate: Yup.string().required("Please select service start date"),
  endDate: Yup.string().required("Please select service end date"),
  status: Yup.string().required("Please select a status"),
  clients: Yup.string().required("Please select any one client"),
  lawyers: Yup.string().required("Please select any one lawyer"),
  note: Yup.string().required("Enter a note"),
});
