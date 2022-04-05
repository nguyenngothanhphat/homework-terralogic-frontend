import React from 'react'
import { Route } from 'react-router-dom'
import { BrowserRouter, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import { Router } from 'react-router-dom';

export const history = createBrowserHistory();

export default function Routes() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <AdminTemplate exact path="/admin/dashboard" Component={Dashboard} />
        <HomeTemplate exact path="/" Component={Home} />
        <HomeTemplate exact path="*" Component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}
