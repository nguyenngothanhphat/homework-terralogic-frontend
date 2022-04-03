import React, {useState} from 'react';
import { useDropzone } from 'react-dropzone';
import styles from './DragUpload.module.css';

export default function DragUpload(props) {
  const [files, setFiles] = useState([]);
  // const acceptValidate = (file) => {
  //   let fileType = file.type.split('/', 2)[1];
  //   if (fileType !== 'doc' || fileType !== 'pdf') {
  //     return {
  //       code: 'khác pdf và doc',
  //       message: 'phải là file pdf hoặc doc'
  //     }
  //   }
  //   return null;
  // }
  const {getRootProps, getInputProps} = useDropzone({
    accept: '.doc, .pdf',
    // validator: acceptValidate,
    onDrop: (acceptedFiles) => {
    console.log("🚀 ~ file: DragUpload.js ~ line 10 ~ DragUpload ~ acceptedFiles", acceptedFiles)
      setFiles(
        acceptedFiles.map((file) => Object.assign(file, {
          preview: URL.createObjectURL(file)
        }))
      )
    }
  })
  const showFileUploaded = () => {
    return files.map((file, index) => {
      return (
        <div key={index}>
          <p>{file.name}</p>
        </div>
      )
    })
  }
  // console.log("🚀 ~ file: DragUpload.js ~ line 6 ~ DragUpload ~ files", files)
  console.log("getInputProps", getInputProps())
  return (
    <div className="container">
      <div {...getRootProps()} className={styles.dropzone}>
        <input {...getInputProps()} />
        <p>Drop file here</p>
        {showFileUploaded()}
      </div>
    </div>
  )
}