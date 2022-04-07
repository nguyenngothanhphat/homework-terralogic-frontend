import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAllDocumentsUserAction} from '../../redux/actions/UserAction';
import "../../App.css"

export default function Home(props) {
  const userDocuments = useSelector(state => state.UserReducer.userDocuments);
  const dispatch = useDispatch();
  useEffect(() => {
    getAllDocumentsUser();
  }, [])
  const getAllDocumentsUser = () => {
    dispatch(getAllDocumentsUserAction());
  }
  const showAllDocumentsUser = () => {
    return userDocuments.map((userDoc, index) => {
      return (
        <tr key={index}>
          <td>{userDoc.docId.title}</td>
          <td>{userDoc.docId.updatedAt}</td>
          <td>
            <a href="#"><i className={`fas fa-eye`}></i></a>
          </td>
          <td>{userDoc.status}</td>
        </tr>
      )
    })
  }
  return (
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
          {showAllDocumentsUser()}
        </tbody>
      </table>
    </div>
  )
}
