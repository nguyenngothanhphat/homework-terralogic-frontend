import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTrashDocumentsAction, restoneDocumentAction } from '../../redux/actions/AdminAction';

export default function Restone(props) {
  const trashDocuments = useSelector(state => state.AdminReducer.trashDocuments);
  const dispatch = useDispatch();
  useEffect(() => {
    getAllTrashDocs()
  }, [])
  const handleRestoneDocument = (e, id) => {
    e.preventDefault();
    dispatch(restoneDocumentAction(id));
  }
  const getAllTrashDocs = () => {
    dispatch(getTrashDocumentsAction());
  }
  const showListDeleted = () => {
    return trashDocuments?.map((trashDoc, index) => {
      return (
        <tr key={index}>
          <td>{trashDoc.title}</td>
          <td>
            <a href="#" onClick={(e) => handleRestoneDocument(e, trashDoc._id)}><i className="fas fa-trash-restore"></i></a>
          </td>   
        </tr>
      )
    })
  }
  return (
    <div>
      <h2 className="unassigned-title">List of deleted documents</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Document Title</th>
            <th>Restone</th>
          </tr>
        </thead>
        <tbody>
          {showListDeleted()}
        </tbody>
      </table>
    </div>
  )
}
