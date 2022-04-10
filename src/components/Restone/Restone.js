import React from 'react'

export default function Restone(props) {
  const showListDeleted = () => {
    return props.docs.filter(doc => doc.deleted).map((doc, index) => {
      return (
        <tr key={index}>
          <td>{doc.title}</td>
          <td>
            <a href="#"><i className="fas fa-trash-restore"></i></a>
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
