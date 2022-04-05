import React from 'react'
import { Route } from 'react-router-dom';
import Header from './Layout/Header/Header';
import Dashboard from '../../pages/Admin/Dashboard/Dashboard';
import "../../App.css"

export default function AdminTemplate(props) {
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
