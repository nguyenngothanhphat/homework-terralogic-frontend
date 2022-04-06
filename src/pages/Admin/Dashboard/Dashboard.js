import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DragUpload from '../../../components/DragUpload/DragUpload';
import Sidebar from '../../../templates/AdminTemplate/Layout/Sidebar/Sidebar';
import Modal from '../../../HOC/Modal/Modal';
import PDF from '../../../components/PDF/PDF';
import UserUnassigned from '../../../components/UserUnassigned/UserUnassigned';

import "../../../App.css";
import "./Dashboard.css";
import { getAllDocumentAction } from '../../../redux/actions/AdminAction';
import EditDocument from '../../../components/EditDocument/EditDocument';
import { Link } from 'react-router-dom';

export default function Dashboard(props) {
  const [isOpen, setIsOpen] = useState(false);
  const documents = useSelector(state => state.AdminReducer.documents);
  const dispatch = useDispatch();
  const closePopup = () => {
    setIsOpen(false);
  }
  const openPopupAssign = (e, doc) => {
    e.preventDefault();
    setIsOpen(true);
    dispatch({
      type: "OPEN_FORM",
      Component: <UserUnassigned doc={doc} />
    })
  }
  const openPopupPDF = (e, url) => {
    e.preventDefault();
    setIsOpen(true);
    dispatch({
      type: "OPEN_FORM",
      Component: <PDF url={url} />
    })
  }
  const openPopupEdit = (e, doc) => {
    e.preventDefault();
    setIsOpen(true);
    dispatch({
      type: "OPEN_FORM",
      Component: <EditDocument doc={doc} />
    })
  }
  const getAllDocument = () => {
    dispatch(getAllDocumentAction());
  }
  useEffect(() => {
    getAllDocument()
  }, [])
  const showDocument = () => {
    return documents.map((doc, index) => {
      return (
        <tr key={index}>
          <td>{doc.title}</td>
          <td>{doc.updatedAt}</td>
          <td><a href="#" onClick={(e) => {openPopupAssign(e, doc)}}>Assign</a></td>
          <td>
            <a href="#" onClick={(e) => {openPopupEdit(e, doc)}}><i className="fas fa-edit table-action"></i></a>
            <a href="#" onClick={(e) => {openPopupPDF(e, doc.url)}}><i className="fas fa-eye table-action"></i></a>
            <a href="#"><i className="fas fa-trash table-action"></i></a>
          </td>
        </tr>
      )
    })
  }
  return (
    <main className="main-content">
      <Sidebar />
      <div style={{flex: 1}}>
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
            {showDocument()}
          </tbody>
        </table>
        <DragUpload />
        <Modal isOpen={isOpen} closePopup={closePopup} />
      </div>
    </main>
  )
}