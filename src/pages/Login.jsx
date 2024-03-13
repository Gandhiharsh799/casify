import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import Button from "../UI/Button";
import { Form, Formik } from "formik";
import { LoginSchema } from "../schemas/validationSchema";
import { InputField } from "../UI/InputField";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = () => {
    dispatch(login());
    navigate("/report/dashboard");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row bg-white shadow-lg box-area">
        <div className="hidden left-box rounded-start-4 ">
          <div className="text-center d-flex justify-content-center flex-column align-items-center p-3 h-100">
            <h1 className="text-white fs-1">Welcome to Casify!</h1>
            <p className="text-white">Manage your details here</p>
          </div>
        </div>

        <div className="col-md-6 rounded-end-4 border right-box">
          <div className="row align-items-center">
            <p className="text-center p-2 heading my-4 nav-label">Casify</p>
          </div>

          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={LoginSchema}
          >
            {({ touched, errors, values, handleChange, handleBlur }) => (
              <Form>
                <div className="mt-3 pt-3 d-flex flex-column align-items-center ">
                  <InputField
                    type="text"
                    name="email"
                    label="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    touched={touched.email}
                  />

                  <InputField
                    type="password"
                    name="password"
                    label="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && errors.password}
                    helperText={touched.password && errors.password}
                    touched={touched.password}
                  />
                </div>

                <div className="mb-5 d-flex justify-content-center">
                  <Button type="submit" label="Submit"></Button>
                </div>
              </Form>
            )}
          </Formik>

          <div className="row">
            <p className="text-center mt-5">Don't have an account?</p>
            <Link to="/signup">
              <p className="text-center mb-4 user">Create an account</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
