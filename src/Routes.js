import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import LoadingComponent from './components/Loading/LoadingComponent';
import Restore from './pages/Admin/Restore/Restore';
import 'react-toastify/dist/ReactToastify.css';

export default function Routes() {
  return (
    <BrowserRouter>
      {/* <LoadingComponent /> */}
      <ToastContainer />
      <Switch>
        <Route exact path="/login" component={Login} />
        <HomeTemplate exact path="/" Component={Home} />
        <HomeTemplate exact path="/:pageNumber" Component={Home} />
        <AdminTemplate exact path="/admin/dashboard/:pageNumber" Component={Dashboard} />
        <AdminTemplate exact path="/admin/dashboard" Component={Dashboard} />
        <AdminTemplate exact path="/admin/restore" Component={Restore} />
        <AdminTemplate exact path="/admin/restore/:pageNumber" Component={Restore} />
        <HomeTemplate exact path="*" Component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}
