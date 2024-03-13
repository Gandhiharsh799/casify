import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("You must enter an email")
    .email("You must enter a valid email"),
  password: Yup.string()
    .required("Password is a required field")
    .min(6, "Password is too short - should be 6 chars minimum."),
});

export const signUpSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Must be more than 2 chars."),
  email: Yup.string()
    .required("You must enter an email")
    .email("You must enter a valid email"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum."),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  mobileNumber: Yup.string()
    .required("You must enter a mobile number")
    .min(10, "Number is too short - should be 10 chars."),
});
