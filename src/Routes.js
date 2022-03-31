import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import HomeTemplate from './templates/HomeTemplate/HomeTemplate'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate exact path="/" Component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
