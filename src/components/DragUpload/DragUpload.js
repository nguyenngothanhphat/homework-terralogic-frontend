import React from 'react';
import "./DragUpload.css";

export default function DragUpload(props) {
  const{showbtn} = props
  const handleDrapUpload = (e) => {
    let file = e.target.files[0]
    props.setFiles(file)
  }
  return (
    <div>
      <div className="dropzone">
        <input type="file" accept=".doc, .docx, .pdf" onChange={(e) => handleDrapUpload(e)} />
        <p className="dropzone-text">Click or Drag the file here to Upload a new Document</p>
      </div>
      {props.files && showbtn && (<button className="btn btn-success text-center btn-upload" onClick={(e) => props.handleUploadDocument(e)}>Upload</button>) }
    </div>
  )
}