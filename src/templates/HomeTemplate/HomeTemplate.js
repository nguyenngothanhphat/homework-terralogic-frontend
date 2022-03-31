import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../../components/Home/Header/Header'

export default function HomeTemplate(props) {
  const {Component, ...resParams} = props
  return <Route {...resParams} render={(propsRoute) => {
    return <>
      <Header />
      <Component {...propsRoute} />
    </>
  }} />
}
