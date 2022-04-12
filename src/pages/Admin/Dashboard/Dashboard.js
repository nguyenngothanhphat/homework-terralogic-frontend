import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useParams, NavLink} from 'react-router-dom';
import swal from 'sweetalert';
import DragUpload from '../../../components/DragUpload/DragUpload';
import Sidebar from '../../../templates/AdminTemplate/Layout/Sidebar/Sidebar';
import Modal from '../../../HOC/Modal/Modal';
import PDF from '../../../components/PDF/PDF';
import UserUnassigned from '../../../components/UserUnassigned/UserUnassigned';
import { deleteDocumentAction, getAllDocumentAction, createDocumentAction } from '../../../redux/actions/AdminAction';
import EditDocument from '../../../components/EditDocument/EditDocument';
import CardDocument from '../../../components/CardDocument/CardDocument';
import Pagination from '../../../components/Pagination/Pagination';
import "../../../App.css";
import "./Dashboard.css";

export default function Dashboard() {
  const [files, setFiles] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isModeCard, setIsModeCard] = useState(false);
  const documents = useSelector(state => state.AdminReducer.documents?.docs);
  const totalPages = useSelector(state => state.AdminReducer.documents?.pages);
  const {pageNumber} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    getAllDocument(pageNumber);
  }, [dispatch, pageNumber])
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
  const openPopupPDF = (e, doc) => {
    e.preventDefault();
    setIsOpen(true);
    dispatch({
      type: "OPEN_FORM",
      Component: <PDF doc={doc} />
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
  const getAllDocument = (pageNumber) => {
    dispatch(getAllDocumentAction(pageNumber));
  }
  const deleteDocument = (e, doc) => {
    e.preventDefault();
    const {_id: id, title: title} = doc;
    swal({
      title: "Are you sure?",
      text: `Do you want to delete the ${title} ?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteDocumentAction(id));
      } else {
        swal("Your imaginary file is safe!");
      }
    })
  }
  const handleUploadDocument = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', files);
    dispatch(createDocumentAction(data));
  }
  const showDocument = () => {
    return documents?.map((doc, index) => {
      return (
        <tr key={index}>
          <td className="table-title">{doc.title}</td>
          <td>{new Date(doc.updatedAt).toLocaleDateString('en-vi', { day: "numeric", year:"numeric", month:"short"})}</td>
          <td><a href="#" onClick={(e) => {openPopupAssign(e, doc)}}>Assign</a></td>
          <td className="sticky">
            <a href="#" onClick={(e) => {openPopupEdit(e, doc)}}><i className="fas fa-edit table-action"></i></a>
            <a href="#" onClick={(e) => {openPopupPDF(e, doc)}}><i className="fas fa-eye table-action"></i></a>
            <a href="#" onClick={(e) => {deleteDocument(e, doc)}}><i className="fas fa-trash table-action"></i></a>
          </td>
        </tr>
      )
    })
  }
  return (
    <main className="main-content">
      <Sidebar />
      <div style={{flex: 1, padding:'20px 20px 0'}}>
        <div className="button-list">
          <button className="btn btn-primary" onClick={() => setIsModeCard(false)}><i className="fas fa-list"></i></button>
          <button className="btn btn-primary" onClick={() => setIsModeCard(true)}><i className="fas fa-id-card"></i></button>
          <NavLink className="btn btn-primary" to="/admin/restore"><i className="fas fa-trash-restore"></i></NavLink>
        </div>
        {isModeCard ? 
        (<div className="main-content-wrapper">
          <CardDocument 
            documents={documents} 
            openPopupAssign={openPopupAssign}   
            openPopupEdit={openPopupEdit}
            openPopupPDF={openPopupPDF}
            deleteDocument={deleteDocument}
          />
          </div>) : (
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th className="th-name">Document Name</th>
                  <th>Last Update Date</th>
                  <th>Assign</th>
                  <th className="sticky">Action</th>
                </tr>
              </thead>
              <tbody>
                {showDocument()}
              </tbody>
            </table>
          </div>
        )}
        <Pagination pages={totalPages} />
        <DragUpload showbtn={true} files={files} setFiles={setFiles} handleUploadDocument={handleUploadDocument}/>
        <Modal isOpen={isOpen} closePopup={closePopup} />
      </div>
    </main>
  )
}