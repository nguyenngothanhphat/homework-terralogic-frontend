import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import GoogleLogin from 'react-google-login';
import "../../App.css"
import "./Login.css";
import { LoginAction, loginWithGoogleAction } from '../../redux/actions/AuthAction';
import {USER_LOGIN} from '../../utils/constants/settingSystem';

const LoginSchema = yup.object().shape({
  name:yup.string()
    .min(2, 'Too Short !')
    .max(50, 'Too Long !')
    .required('Username is required!'),
  password:yup.string()
    .min(6, 'Password must have min 6 characters')
    .max(32, 'Password  have max 32 characters')
    .required('Password is required!'),
});

export default function Login(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  if (localStorage.getItem(USER_LOGIN)) {
    history.goBack();
  }
  const handleSubmit = (e, values, isValid) => {
    e.preventDefault()
    if (!values || !values.name || !values.password) {
      return;
    }
    if (isValid) {
      /* Xử lý truyền data vào api */
      dispatch(LoginAction(values, history))
      // swal({
      //   title: "Congratulations! Successful login",
      //   text: "You clicked the button!",
      //   icon: "success",
      //   button: "Go to admin page",
      // });
    }
  }
  const handleLogin = (googleData) => {
    let token = googleData.tokenId;
    dispatch(loginWithGoogleAction(history, token))
  }
  const handleFailure = (result) => {
    alert(result);
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
                name: '',
                password: ''
              }}
              validationSchema={LoginSchema}
            >
              {({errors, touched, values, isValid}) => (
                <Form onSubmit={handleSubmit}>
                  <div className="form-wrapper">
                    <label className="login-label">Username</label>
                    <div className="login-input-wrapper">
                      <Field type="text" name="name" value={values.name} className="login-input" />
                    </div>
                    {errors.name && touched.name && <div className="login-error">{errors.name}</div>}
                  </div>
                  <div className="form-wrapper">
                    <label className="login-label">Password</label>
                    <div className="login-input-wrapper">
                      <Field type="password" name="password" value={values.password} className="login-input" />
                    </div>
                    {errors.password && touched.password && <div className="login-error">{errors.password}</div>}
                  </div>
                  <button type='submit' className="btn-login" onClick={(e) => {handleSubmit(e, values, isValid)}}>Login</button>
                  {/* <button type="submit" className="btn-login-google">Login with Terralogic email</button> */}
                  <GoogleLogin
                    clientId='21667441834-0mt5i62cnjeg5khc90uu54d0bplk2sh4.apps.googleusercontent.com'
                    buttonText='Login with Terralogic email'
                    onSuccess={handleLogin}
                    onFailure={handleFailure}
                    cookiePolicy={'single_host_origin'}
                  ></GoogleLogin>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}