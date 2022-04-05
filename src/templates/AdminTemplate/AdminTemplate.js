import React from 'react'
import { Route } from 'react-router-dom';
import Header from './Layout/Header/Header';
import Dashboard from '../../pages/Admin/Dashboard/Dashboard';
import "../../App.css"
import { USER_LOGIN } from '../../utils/constants/settingSystem';
import { Redirect } from 'react-router-dom';

export default function AdminTemplate(props) {
  if (!localStorage.getItem(USER_LOGIN)) {
    return <Redirect to="/login" />
  }
  const {Components, ...restParams} = props;
  return <Route {...restParams} render={(propsRoute) => {
    return (
      <div>
        <Header />
        <Dashboard />
      </div>
    )
  }} />
}
