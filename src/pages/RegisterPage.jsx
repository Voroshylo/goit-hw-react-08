import { useDispatch } from "react-redux";
import { register } from "../redux/auth/operations";
import { Formik, Form, Field } from "formik";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <div>
      <h1>Register</h1>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            Name
            <Field name="name" type="text" />
          </label>
          <label>
            Email
            <Field name="email" type="email" />
          </label>
          <label>
            Password
            <Field name="password" type="password" />
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterPage;
