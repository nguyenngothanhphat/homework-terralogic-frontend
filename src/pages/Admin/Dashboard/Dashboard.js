import React from 'react';
import { useDispatch } from 'react-redux';

import DragUpload from '../../../components/DragUpload/DragUpload';
import Sidebar from '../../../templates/AdminTemplate/Layout/Sidebar/Sidebar';
import Modal from '../../../HOC/Modal/Modal';
import PDF from '../../../components/PDF/PDF';
import UserUnassigned from '../../../components/UserUnassigned/UserUnassigned';

import "../../../App.css";
import "./Dashboard.css";

export default function Dashboard(props) {
  const dispatch = useDispatch();
  const openPopup = (isAssign) => {
    document.getElementById("myModal").style.display = "block";
    if (isAssign) {
      dispatch({
        type: "OPEN_FORM",
        Component: <UserUnassigned />
      })
    } else {
      dispatch({
        type: "OPEN_FORM",
        Component: <PDF />
      })
    }
  }
  return (
    <main className="main-content">
      <Sidebar />
      <div style={{flex: 1}}>
        <div className="wrapper">
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
                <td><a href="javascript:void(0)" onClick={() => {openPopup(true)}}>Assign</a></td>
                <td>
                  <a href="#"><i className="fas fa-edit table-action"></i></a>
                  <a href="javascript:void(0)" onClick={() => {openPopup(false)}}><i className="fas fa-eye table-action"></i></a>
                  <a href="#"><i className="fas fa-trash table-action"></i></a>
                </td>
              </tr>
              <tr>
                <td>Document 1</td>
                <td>December 10, 2021</td>
                <td><a href="javascript:void(0)" onClick={() => {openPopup(true)}}>Assign</a></td>
                <td>
                  <a href="#"><i className="fas fa-edit table-action"></i></a>
                  <a href="javascript:void(0)" onClick={() => {openPopup(false)}}><i className="fas fa-eye table-action"></i></a>
                  <a href="#"><i className="fas fa-trash table-action"></i></a>
                </td>
              </tr>
              <tr>
                <td>Document 1</td>
                <td>December 10, 2021</td>
                <td><a href="javascript:void(0)" onClick={() => {openPopup(true)}}>Assign</a></td>
                <td>
                  <a href="#"><i className="fas fa-edit table-action"></i></a>
                  <a href="javascript:void(0)" onClick={() => {openPopup(false)}}><i className="fas fa-eye table-action"></i></a>
                  <a href="#"><i className="fas fa-trash table-action"></i></a>
                </td>
              </tr>
              <tr>
                <td>Document 1</td>
                <td>December 10, 2021</td>
                <td><a href="javascript:void(0)" onClick={() => {openPopup(true)}}>Assign</a></td>
                <td>
                  <a href="#"><i className="fas fa-edit table-action"></i></a>
                  <a href="javascript:void(0)" onClick={() => {openPopup(false)}}><i className="fas fa-eye table-action"></i></a>
                  <a href="#"><i className="fas fa-trash table-action"></i></a>
                </td>
              </tr>
            </tbody>
          </table>
          <DragUpload />
          <Modal />
        </div>
      </div>
    </main>
  )
}