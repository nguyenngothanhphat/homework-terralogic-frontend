import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DragUpload from '../../../components/DragUpload/DragUpload';
import Sidebar from '../../../templates/AdminTemplate/Layout/Sidebar/Sidebar';
import Modal from '../../../HOC/Modal/Modal';
import PDF from '../../../components/PDF/PDF';
import UserUnassigned from '../../../components/UserUnassigned/UserUnassigned';
import { deleteDocumentAction, getAllDocumentAction, createDocumentAction } from '../../../redux/actions/AdminAction';
import EditDocument from '../../../components/EditDocument/EditDocument';
import CardDocument from '../../../components/CardDocument/CardDocument';
import "../../../App.css";
import "./Dashboard.css";
import swal from 'sweetalert';
import Pagination from '../../../components/Pagination/Pagination';

export default function Dashboard(props) {
  const [files, setFiles] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isModeCard, setIsModeCard] = useState(false);
  const documents = useSelector(state => state.AdminReducer.documents.docs);
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
  const getAllDocument = () => {
    dispatch(getAllDocumentAction());
  }
  const deleteDocument = (e, doc) => {
    e.preventDefault();
    const {_id: id, title: title} = doc;
    swal({
      title: "Are you sure?",
      text: `Bạn có muốn xóa ${title} không ?`,
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
  useEffect(() => {
    getAllDocument();
  }, [])
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
                  <th></th>
                  <th className="sticky"></th>
                </tr>
              </thead>
              <tbody>
                {showDocument()}
              </tbody>
            </table>
            
          </div>
        )}
        <Pagination />
        <DragUpload showbtn={true} files={files} setFiles={setFiles} handleUploadDocument={handleUploadDocument}/>
        <Modal isOpen={isOpen} closePopup={closePopup} />
      </div>
    </main>
  )
}