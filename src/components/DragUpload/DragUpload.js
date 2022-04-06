import React, {useState} from 'react';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./DragUpload.css";

export default function DragUpload(props) {
  const [files, setFiles] = useState({})
  const handleDrapUpload = (e) => {
    let file = e.target.files[0]
    setFiles(file)
  }
  return (
    <div>
      <ToastContainer />
      <div className="dropzone">
        <input type="file" accept=".doc, .docx, .pdf" onChange={(e) => handleDrapUpload(e)} />
        <p className="dropzone-text">Click or Drag the file here to Upload a new Document</p>
      </div>
    </div>
  )
}