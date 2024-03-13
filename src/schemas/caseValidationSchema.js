import * as Yup from "yup";

export const caseSchema = Yup.object().shape({
  caseNo: Yup.string().required("Please enter case number"),
  caseName: Yup.string().required("Please enter case name"),
  caseCategory: Yup.string().required("Please select case type"),
  court: Yup.string().required("Please select court"),
  date: Yup.date().required("Please select issue date"),
  cityName: Yup.string().required("Please select a city"),
  caseGroup: Yup.string().required("Please select case group"),
  clientName: Yup.string().required("Please select a client"),
  lawyerName: Yup.string().required("Please select a lawyer"),
  staffLink: Yup.string().required("Please select a staff"),
  description: Yup.string().required("Please enter some description"),
});
