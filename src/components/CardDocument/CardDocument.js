import React from 'react';
import "./CardDocument.css"

export default function CardDocument(props) {
  const {documents} = props;
  const showCard = () => {
    return documents.map((doc, index) => {
      return (
        <div className="card border-primary" key={index}>
          <div className="card-body">
            <h4 className="card-title">{doc.title}</h4>
            <p className="card-text">{doc.updatedAt}</p>
          </div>
          <div className="card-button">
            <a href="/" className="card-button-assign">Assign</a>
            <ul className="card-button-list">
              <li>
                <a href="/"><i className="fas fa-edit table-action"></i></a>
              </li>
              <li>
                <a href="/"><i className="fas fa-eye table-action"></i></a>
              </li>
              <li>
                <a href="/"><i className="fas fa-trash table-action"></i></a>
              </li>
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
