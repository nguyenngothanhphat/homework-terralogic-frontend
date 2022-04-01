import React, {useState} from 'react';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';

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

function Login(props) {
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
    <div className="container">
      <h2>Login Form</h2>
      <Formik
        initialValues={{
          username: '',
          password: ''
        }}
        validationSchema={LoginSchema}
      >
        {({errors, values, isValid}) => (
          <Form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username</label>
              <Field type="text" name="username" value={values.username} className="form-control" />
              {errors.username && <div className='text-danger'>{errors.username}</div>}
            </div>
            <div className="form-group">
              <label>Password</label>
              <Field type="password" name="password" value={values.password} className="form-control" />
              {errors.password && <div className='text-danger'>{errors.password}</div>}
            </div>
            <button type='submit' className="btn btn-success" onClick={(e) => {handleLogin(e, values, isValid)}}>Login</button>
          </Form>
        )}
        
      </Formik>
    </div>
  )
}
export default Login;