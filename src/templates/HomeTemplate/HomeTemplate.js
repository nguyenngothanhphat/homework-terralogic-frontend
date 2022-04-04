import React from 'react'
import { Route } from 'react-router-dom'
import Footer from './Layout/Footer/Footer'
import Header from './Layout/Header/Header'
import styles from '../../App.module.css'

export default function HomeTemplate(props) {
  const {Component, ...resParams} = props
  return <Route {...resParams} render={(propsRoute) => {
    return <div className={styles.container}>
      <Header />
      <Component {...propsRoute} />
      <Footer />
    </div>
  }} />
}
