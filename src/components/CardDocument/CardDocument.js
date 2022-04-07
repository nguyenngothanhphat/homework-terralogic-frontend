import React from 'react'

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
