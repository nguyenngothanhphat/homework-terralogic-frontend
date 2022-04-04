import React from 'react'
import { Route } from 'react-router-dom';
import Header from './Layout/Header/Header';
import Dashboard from '../../pages/Admin/Dashboard/Dashboard';
import styles from '../../App.module.css';

export default function AdminTemplate(props) {
  const {Components, ...restParams} = props;
  return <Route {...restParams} render={(propsRoute) => {
    return (
      <div className={styles.container}>
        <Header />
        <Dashboard />
      </div>
    )
  }} />
}
