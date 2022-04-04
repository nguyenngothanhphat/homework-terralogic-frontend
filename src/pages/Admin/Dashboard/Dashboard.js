import React from 'react';
import DragUpload from '../../../components/DragUpload/DragUpload'
import styleApp from '../../../App.module.css';
import styleDashboard from './Dashboard.module.css';

export default function Dashboard(props) {
  return (
    <div className={styleApp.wrapper}>
      <table>
        <thead>
          <tr>
            <th>Document Name</th>
            <th>Last Update Date</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Document 1</td>
            <td>December 10, 2021</td>
            <td><a href="#">Assign</a></td>
            <td>
              <a href="#"><i className={`${styleDashboard.tableAction} fas fa-edit`}></i></a>
              <a href="#"><i className={`${styleDashboard.tableAction} fas fa-eye`}></i></a>
              <a href="#"><i className={`${styleDashboard.tableAction} fas fa-trash`}></i></a>
            </td>
          </tr>
          <tr>
            <td>Document 1</td>
            <td>December 10, 2021</td>
            <td>Assign</td>
            <td>
              <a href="#"><i className={`${styleDashboard.tableAction} fas fa-edit`}></i></a>
              <a href="#"><i className={`${styleDashboard.tableAction} fas fa-eye`}></i></a>
              <a href="#"><i className={`${styleDashboard.tableAction} fas fa-trash`}></i></a>
            </td>
          </tr>
          <tr>
            <td>Document 1</td>
            <td>December 10, 2021</td>
            <td>Assign</td>
            <td>
              <a href="#"><i className={`${styleDashboard.tableAction} fas fa-edit`}></i></a>
              <a href="#"><i className={`${styleDashboard.tableAction} fas fa-eye`}></i></a>
              <a href="#"><i className={`${styleDashboard.tableAction} fas fa-trash`}></i></a>
            </td>
          </tr>
          <tr>
            <td>Document 1</td>
            <td>December 10, 2021</td>
            <td>Assign</td>
            <td>
              <a href="#"><i className={`${styleDashboard.tableAction} fas fa-edit`}></i></a>
              <a href="#"><i className={`${styleDashboard.tableAction} fas fa-eye`}></i></a>
              <a href="#"><i className={`${styleDashboard.tableAction} fas fa-trash`}></i></a>
            </td>
          </tr>
        </tbody>
      </table>
      <DragUpload />
    </div>
  )
}
