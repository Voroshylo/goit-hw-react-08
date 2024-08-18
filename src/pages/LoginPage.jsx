import { useDispatch } from "react-redux";
import { logIn } from "../redux/auth/operations";
import { Formik, Form, Field } from "formik";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            Email
            <Field name="email" type="email" />
          </label>
          <label>
            Password
            <Field name="password" type="password" />
          </label>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
