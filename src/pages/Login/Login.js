import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import swal from 'sweetalert'
import "../../App.css"
import "./Login.css";

const LoginSchema = yup.object().shape({
  username:yup.string()
    .min(2, 'Too Short !')
    .max(50, 'Too Long !')
    .required('Username is required!'),
  password:yup.string()
    .min(6, 'Password must have min 6 characters')
    .max(32, 'Password  have max 32 characters')
    .required('Password is required!'),
});

export default function Login(props) {
  const handleLogin = (e, values, isValid) => {
    e.preventDefault()
    if (!values || !values.username || !values.password) {
      return;
    }
    if (isValid) {
      /* Xử lý truyền data vào api */
      swal({
        title: "Congratulations! Successful login",
        text: "You clicked the button!",
        icon: "success",
        button: "Go to admin page",
      });
      console.log(values)
    }
  }
  return (
    <div className="container">
      <div className="wrapper">
        <div className="login-wrapper" style={{height: window.innerHeight}}>
          <div className="login-image">
            <img src="../images/login-image.png" alt="login-image" />
          </div>
          <div className="login-form">
            <h2 className="login-title">Login Form</h2>
            <Formik
              initialValues={{
                username: '',
                password: ''
              }}
              validationSchema={LoginSchema}
            >
              {({errors, touched, values, isValid}) => (
                <Form onSubmit={handleLogin}>
                  <div className="form-wrapper">
                    <label className="login-label">Username</label>
                    <div className="login-input-wrapper">
                      <Field type="text" name="username" value={values.username} className="login-input" />
                    </div>
                    {errors.username && touched.username && <div className="login-error">{errors.username}</div>}
                  </div>
                  <div className="form-wrapper">
                    <label className="login-label">Password</label>
                    <div className="login-input-wrapper">
                      <Field type="password" name="password" value={values.password} className="login-input" />
                    </div>
                    {errors.password && touched.password && <div className="login-error">{errors.password}</div>}
                  </div>
                  <button type='submit' className="btn-login" onClick={(e) => {handleLogin(e, values, isValid)}}>Login</button>
                  <button type="submit" className="btn-login-google">Login with Terralogic email</button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}