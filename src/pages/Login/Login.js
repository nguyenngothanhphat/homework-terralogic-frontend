import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import styleApp from '../../App.module.css';
import styleLogin from './Login.module.css';

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
      console.log(values)
    }
  }
  return (
    <div className={styleApp.wrapper}>
      <div className={styleLogin.loginWrapper} style={{height: window.innerHeight}}>
        <div className={styleLogin.loginImage}>
          <img src="../images/login-image.png" alt="login-image" />
        </div>
        <div className={styleLogin.loginForm}>
          <h2 className={styleLogin.loginTitle}>Login Form</h2>
          <Formik
            initialValues={{
              username: '',
              password: ''
            }}
            validationSchema={LoginSchema}
          >
            {({errors, touched, values, isValid}) => (
              <Form onSubmit={handleLogin}>
                <div className={styleLogin.formWrapper}>
                  <label className={styleLogin.labelLogin}>Username</label>
                  <div className="input-group" style={{marginBottom: '20px'}}>
                    <div className="input-group-prepend">
                      <div className="input-group-text"><i className="fas fa-user"></i></div>
                    </div>
                    <Field type="text" name="username" value={values.username} className={styleLogin.formInput} />
                  </div>
                  {errors.username && touched.username && <div className={styleLogin.validateError}>{errors.username}</div>}
                </div>
                <div className={styleLogin.formWrapper}>
                  <label className={styleLogin.labelLogin}>Password</label>
                  <div className="input-group" style={{marginBottom: '20px'}}>
                    <div className="input-group-prepend">
                      <div className="input-group-text"><i className="fas fa-key"></i></div>
                    </div>
                    <Field type="password" name="password" value={values.password} className={styleLogin.formInput} />
                  </div>
                  {errors.password && touched.password && <div className={styleLogin.validateError}>{errors.password}</div>}
                </div>
                <button type='submit' className={styleLogin.btnLogin} onClick={(e) => {handleLogin(e, values, isValid)}}>Login</button>
                <button type="submit" className={styleLogin.btnLoginGoogle}>Login with Terralogic email</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}