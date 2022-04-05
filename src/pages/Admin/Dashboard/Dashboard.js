import React from 'react';
import {useDispatch} from 'react-redux';
import DragUpload from '../../../components/DragUpload/DragUpload';
import "../../../App.css";
import "./Dashboard.css";
import Sidebar from '../../../templates/AdminTemplate/Layout/Sidebar/Sidebar';
import Modal from '../../../HOC/Modal/Modal';
import PDF from '../../../components/PDF/PDF';
import UserUnassigned from '../../../components/UserUnassigned/UserUnassigned';

export default function Dashboard(props) {
  const dispatch = useDispatch();
  const openPopup = () => {
    document.getElementById("myModal").style.display = "block";
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
                <td><a href="javascript:;" onClick={() => {
                  openPopup()
                  dispatch({
                    type: "OPEN_FORM",
                    Component: <UserUnassigned />
                  })
                }}>Assign</a></td>
                <td>
                  <a href="#"><i className="fas fa-edit table-action"></i></a>
                  <a href="javascript:;"><i className="fas fa-eye table-action"></i></a>
                  <a href="#"><i className="fas fa-trash table-action"></i></a>
                </td>
              </tr>
              <tr>
                <td>Document 1</td>
                <td>December 10, 2021</td>
                <td><a href="javascript:;" onClick={() => {
                  openPopup()
                  dispatch({
                    type: "OPEN_FORM",
                    Component: <UserUnassigned />
                  })
                }}>Assign</a></td>
                <td>
                  <a href="#"><i className="fas fa-edit table-action"></i></a>
                  <a href="#"><i className="fas fa-eye table-action"></i></a>
                  <a href="#"><i className="fas fa-trash table-action"></i></a>
                </td>
              </tr>
              <tr>
                <td>Document 1</td>
                <td>December 10, 2021</td>
                <td><a href="javascript:;" onClick={() => {
                  openPopup()
                  dispatch({
                    type: "OPEN_FORM",
                    Component: <UserUnassigned />
                  })
                }}>Assign</a></td>
                <td>
                  <a href="#"><i className="fas fa-edit table-action"></i></a>
                  <a href="#"><i className="fas fa-eye table-action"></i></a>
                  <a href="#"><i className="fas fa-trash table-action"></i></a>
                </td>
              </tr>
              <tr>
                <td>Document 1</td>
                <td>December 10, 2021</td>
                <td><a href="javascript:;" onClick={() => {
                  openPopup()
                  dispatch({
                    type: "OPEN_FORM",
                    Component: <UserUnassigned />
                  })
                }}>Assign</a></td>
                <td>
                  <a href="#"><i className="fas fa-edit table-action"></i></a>
                  <a href="#"><i className="fas fa-eye table-action"></i></a>
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
