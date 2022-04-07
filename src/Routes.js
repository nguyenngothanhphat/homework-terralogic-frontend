import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import LoadingComponent from './components/Loading/LoadingComponent';

export default function Routes() {
  return (
    <BrowserRouter>
      <LoadingComponent />
      <Switch>
        <Route exact path="/login" component={Login} />
        <AdminTemplate exact path="/admin/dashboard" Component={Dashboard} />
        <HomeTemplate exact path="/" Component={Home} />
        <HomeTemplate exact path="*" Component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}
