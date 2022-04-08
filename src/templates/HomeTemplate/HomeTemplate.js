import React from 'react';
import {useSelector} from 'react-redux';
import { Route, Redirect } from 'react-router-dom'
import Header from './Layout/Header/Header'
import {USER_LOGIN} from '../../utils/constants/settingSystem';
import "../../App.css";

export default function HomeTemplate(props) {
  const userLogin = useSelector(state => state.AuthReducer.userLogin);
  if (!localStorage.getItem(USER_LOGIN)) {
    return <Redirect to="/login" />
  }
  if (userLogin.role !== 0) {
    return <Redirect to="/admin/dashboard" />
  }
  const {Component, ...resParams} = props
  return <Route {...resParams} render={(propsRoute) => {
    return <div className="container-body">
      <Header />
      <Component {...propsRoute} />
    </div>
  }} />
}
