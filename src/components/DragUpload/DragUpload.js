import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createDocumentAction } from '../../redux/actions/AdminAction';
import "./DragUpload.css";

export default function DragUpload(props) {
  const [files, setFiles] = useState({});
  const dispatch = useDispatch();
  const handleDrapUpload = (e) => {
    let file = e.target.files[0]
    setFiles(file)
  }
  const handleUploadDocument = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', files);
    dispatch(createDocumentAction(data));
  }
  return (
    <div>
      <ToastContainer />
      <div className="dropzone">
        <input type="file" accept=".doc, .docx, .pdf" onChange={(e) => handleDrapUpload(e)} />
        <p className="dropzone-text">Click or Drag the file here to Upload a new Document</p>
      </div>
      <button className="btn btn-success" onClick={(e) => {handleUploadDocument(e)}}>Upload</button>
    </div>
  )
}