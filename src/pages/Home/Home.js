import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getAllDocumentsUserAction} from '../../redux/actions/UserAction';
import CardDocument from '../../components/CardDocument/CardDocument';
import PDF from '../../components/PDF/PDF';
import Modal from '../../HOC/Modal/Modal';
import Pagination from '../../components/Pagination/Pagination';
import SizeChanger from '../../components/SizeChanger/SizeChanger';
import "../../App.css";

export default function Home(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isModeCard, setIsModeCard] = useState(false);
  const [sizePage, setSizePage] = useState(5);
  const userDocuments = useSelector(state => state.UserReducer.userDocuments.docConfirms);
  const totalPages = useSelector(state => state.UserReducer.userDocuments?.pages);
  const reload = useSelector(state => state.UserReducer.reload);
  const dispatch = useDispatch();
  const {pageNumber} = useParams();
  useEffect(() => {
    getAllDocumentsUser(pageNumber, sizePage);
  }, [dispatch, pageNumber, sizePage, reload])
  const getAllDocumentsUser = (pageNumber, sizePage) => {
    dispatch(getAllDocumentsUserAction(pageNumber, sizePage));
  }
  const closePopup = () => {
    setIsOpen(false);
  }
  const openPopupPDF = (e, doc) =>{
    e.preventDefault();
    setIsOpen(true);
    dispatch({
      type: "OPEN_FORM",
      Component: <PDF doc={doc} />
    })
  }
  const handleChangeSizePage = (e) => {
    e.preventDefault();
    setSizePage(e.target.value);
  }
  const showAllDocumentsUser = () => {
    return userDocuments && userDocuments.map((userDoc, index) => {
      return (
        <tr key={index}>
          <td>{userDoc.title}</td>
          <td>{new Date(userDoc.createdAt).toLocaleDateString('en-vi', { day: "numeric", year:"numeric", month:"short"})}</td>
          <td>
            <a href="#" onClick={(e) => {openPopupPDF(e, userDoc)}}><i className={`fas fa-eye`}></i></a>
          </td>
          <td>{userDoc.status}</td>
        </tr>
      )
    })
  }
  return (
    <div className="wrapper">
      <div className="button-list" style={{marginTop: '20px'}}>
        <button className="btn btn-primary" onClick={() => setIsModeCard(false)}><i className="fas fa-list"></i></button>
        <button className="btn btn-primary" onClick={() => setIsModeCard(true)}><i className="fas fa-id-card"></i></button>
      </div>
      {isModeCard ? (<div className="main-content-wrapper"><CardDocument documents={userDocuments} openPopupPDF={openPopupPDF} /></div>) : (
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
      )}
      <div className="home-paginate">
        <SizeChanger handleChangeSizePage={handleChangeSizePage} />
        <Pagination pages={totalPages} />
      </div>
      
      <Modal isOpen={isOpen} closePopup={closePopup} />
    </div>
  )
}
