import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from './Layout/Header/Header';
import Dashboard from '../../pages/Admin/Dashboard/Dashboard';
import { USER_LOGIN } from '../../utils/constants/settingSystem';
import "../../App.css"
import Restore from '../../pages/Admin/Restore/Restore';

export default function AdminTemplate(props) {
  const userLogin = useSelector(state => state.AuthReducer.userLogin);
  if (!localStorage.getItem(USER_LOGIN)) {
    return <Redirect to="/login" />
  }
  if (userLogin.role !== 9) {
    return <Redirect to="/" />
  }
  const {Component, ...restParams} = props;
  return <Route {...restParams} render={(propsRoute) => {
    return (
      <div>
        <Header />
        <Component {...propsRoute} />
      </div>
    )
  }} />
}
