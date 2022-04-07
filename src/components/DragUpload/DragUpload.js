import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./DragUpload.css";

export default function DragUpload(props) {
  const{showbtn}=props
  const [files, setFiles] = useState(null);
  const dispatch = useDispatch();
  const handleDrapUpload = (e) => {
    let file = e.target.files[0]
    setFiles(file)
  }
  const handleUploadDocument = (e) => {
    props.handleUploadDocument(files)
  }
  
  return (
    <div>
      <ToastContainer />
      <div className="dropzone">
        <input type="file" accept=".doc, .docx, .pdf" onChange={(e) => handleDrapUpload(e)} />
        <p className="dropzone-text">Click or Drag the file here to Upload a new Document</p>
      </div>
      {files && showbtn && (<button className="btn btn-success text-center" onClick={(e) => handleUploadDocument(e)}>Upload</button>) }
    </div>
  )
}