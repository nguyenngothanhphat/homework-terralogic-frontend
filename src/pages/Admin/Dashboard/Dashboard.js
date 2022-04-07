import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DragUpload from '../../../components/DragUpload/DragUpload';
import Sidebar from '../../../templates/AdminTemplate/Layout/Sidebar/Sidebar';
import Modal from '../../../HOC/Modal/Modal';
import PDF from '../../../components/PDF/PDF';
import UserUnassigned from '../../../components/UserUnassigned/UserUnassigned';

import "../../../App.css";
import "./Dashboard.css";
import { deleteDocumentAction, getAllDocumentAction, createDocumentAction } from '../../../redux/actions/AdminAction';
import EditDocument from '../../../components/EditDocument/EditDocument';
import CardDocument from '../../../components/CardDocument/CardDocument';

export default function Dashboard(props) {
  const [files, setFiles] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isModeCard, setIsModeCard] = useState(false);
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
  const deleteDocument = (e, doc) => {
    e.preventDefault();
    const {_id: id, title: title} = doc;
    let result = window.confirm(`Bạn có muốn xóa ${title} document không ?`);
    if (result) {
      dispatch(deleteDocumentAction(id));
    }
  }
  const handleUploadDocument = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', files);
    dispatch(createDocumentAction(data));
  }
  useEffect(() => {
    getAllDocument();
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
            <a href="#" onClick={(e) => {deleteDocument(e, doc)}}><i className="fas fa-trash table-action"></i></a>
          </td>
        </tr>
      )
    })
  }
  return (
    <main className="main-content">
      <Sidebar />
      <div style={{flex: 1, marginTop: '20px'}}>
        <button className="btn btn-primary mr-3 ml-3 mb-5" onClick={() => setIsModeCard(false)}><i className="fas fa-list"></i></button>
        <button className="btn btn-primary mb-5" onClick={() => setIsModeCard(true)}><i className="fas fa-id-card"></i></button>
        {isModeCard ? (<CardDocument documents={documents} />) : (
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
        )}
        <DragUpload showbtn={true} files={files} setFiles={setFiles} handleUploadDocument={handleUploadDocument}/>
        <Modal isOpen={isOpen} closePopup={closePopup} />
      </div>
    </main>
  )
}