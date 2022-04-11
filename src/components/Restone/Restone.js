import React from 'react';
import { useDispatch } from 'react-redux';
import { restoneDocumentAction } from '../../redux/actions/AdminAction';

export default function Restone(props) {
  const dispatch = useDispatch();
  const handleRestoneDocument = (e, id) => {
    e.preventDefault();
    console.log("ID", id)
    dispatch(restoneDocumentAction(id));
  }
  const showListDeleted = () => {
    return props.docs.filter(doc => doc.deleted).map((doc, index) => {
      return (
        <tr key={index}>
          <td>{doc.title}</td>
          <td>
            <a href="#" onClick={(e) => handleRestoneDocument(e, doc._id)}><i className="fas fa-trash-restore"></i></a>
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
