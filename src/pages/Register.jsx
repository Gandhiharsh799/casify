import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import { InputField } from "../UI/InputField";
import { useDispatch } from "react-redux";
import { setUserData } from "../store/userProfileSlice";
import Button from "../UI/Button";
import { Form, Formik } from "formik";
import { signUpSchema } from "../schemas/validationSchema";

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobileNumber: "",
    companyAddress: "",
    vatNumber: "",
  };

  const handleSubmit = (values) => {
    dispatch(setUserData(values));
    navigate("/login");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row bg-white shadow-lg box-area">
        <div className="hidden left-box rounded-start-4 ">
          <div className="text-center d-flex justify-content-center flex-column align-items-center p-3 h-100">
            <h1 className="text-white fs-1 fw-bold">Welcome to Casify!</h1>
            <p className="text-white">Manage your details here</p>
          </div>
        </div>

        <div className="col-md-6 rounded-end-4 border right-box">
          <div className="row align-items-center">
            <p className="text-center p-2  nav-label heading">Casify</p>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={signUpSchema}
            onSubmit={handleSubmit}
          >
            {({ touched, errors, handleBlur, handleChange, values }) => (
              <Form>
                <div className="d-flex flex-column align-items-center">
                  <InputField
                    type="text"
                    name="name"
                    label="Name"
                    error={touched.name && !!errors.name}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.name && errors.name}
                    touched={touched.name}
                  />
                  <InputField
                    type="email"
                    name="email"
                    label="Email"
                    error={touched.email && !!errors.email}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.email && errors.email}
                    touched={touched.email}
                  />
                  <InputField
                    type="password"
                    name="password"
                    label="Password"
                    error={touched.password && !!errors.password}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.password && errors.password}
                    touched={touched.password}
                  />
                  <InputField
                    type="password"
                    name="confirmPassword"
                    label="Confirm Password"
                    error={touched.confirmPassword && !!errors.confirmPassword}
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      touched.confirmPassword && errors.confirmPassword
                    }
                    touched={touched.confirmPassword}
                  />
                  <InputField
                    type="number"
                    name="mobileNumber"
                    label="Mobile Number"
                    error={touched.mobileNumber && !!errors.mobileNumber}
                    value={values.mobileNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.mobileNumber && errors.mobileNumber}
                    touched={touched.mobileNumber}
                  />
                  <InputField
                    type="text"
                    name="companyAddress"
                    label="Company Address"
                    value={values.companyAddress}
                    onChange={handleChange}
                  />
                  <InputField
                    type="text"
                    name="vatNumber"
                    label="Vat Number"
                    value={values.vatNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4 d-flex justify-content-center">
                  <Button type="submit" label="Sign Up"></Button>
                </div>
              </Form>
            )}
          </Formik>

          <div className="row">
            <p className="text-center mt-4">Already have an account?</p>
            <Link to="/login">
              <p className="mb-3 text-center user">Sign in</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
