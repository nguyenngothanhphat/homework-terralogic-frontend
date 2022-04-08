import React from 'react';
import "./CardDocument.css"

export default function CardDocument(props) {
  const {documents} = props;
  const showCard = () => {
    return documents.map((doc, index) => {
      return (
        <div className="card border-primary" key={index}>
          <div className="card-body">
            <h4 className="card-title">{doc.docId ? doc.docId.title : doc.title}</h4>
            <p className="card-text">{doc.docId ?  doc.docId.updatedAt : doc.updatedAt}</p>
          </div>
          <div className="card-button">
            {doc.docId ? (
              <div className="card-button-assign">{doc.status}</div>
            ) : (
              <a href="/" className="card-button-assign" onClick={(e) => {props.openPopupAssign(e, doc)}}>Assign</a>
            )}
            <ul className="card-button-list">
              {!doc.docId ? (
                <li>
                  <a href="/" onClick={(e) => {props.openPopupEdit(e, doc)}}><i className="fas fa-edit table-action"></i></a>
                </li>
              ) : ""}
              <li>
                <a href="/" onClick={(e) => {props.openPopupPDF(e, doc)}}><i className="fas fa-eye table-action"></i></a>
              </li>
              {!doc.docId ? (
                <li>
                  <a href="/" onClick={(e) => {props.deleteDocument(e, doc)}}><i className="fas fa-trash table-action"></i></a>
                </li>
              ) : ""}
            </ul>
          </div>
        </div>
      )
    })
  }
  return (
    <>
      {showCard()}
    </>
  )
}