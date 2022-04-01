import React from 'react'
import { Route } from 'react-router-dom'
import { BrowserRouter, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import HomeTemplate from './templates/HomeTemplate/HomeTemplate'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <HomeTemplate exact path="/" Component={Home} />
        <HomeTemplate exact path="*" Component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}
