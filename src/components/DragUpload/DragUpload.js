import React, {useState} from 'react';
import { useDropzone } from 'react-dropzone';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./DragUpload.css";

export default function DragUpload(props) {
  // const [files, setFiles] = useState([]);
  const [files, setFiles] = useState({});
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
  // const {getRootProps, getInputProps} = useDropzone({
  //   accept: '.doc, .pdf',
  //   onDrop: (acceptedFiles) => {
  //     if (acceptedFiles.length === 0) {
  //       console.log("IT WORK")
  //       toast.error('Required is docs or pdf');
  //     } else {
  //       setFiles(
  //         acceptedFiles.map((file) => Object.assign(file, {
  //           preview: URL.createObjectURL(file)
  //         }))
  //       )
  //       toast.success('Upload file successfully');
  //     }
  //   }
  // })
  // const showFileUploaded = () => {
  //   return files.map((file, index) => {
  //     return (
  //       <div key={index}>
  //         <p>{file.name}</p>
  //       </div>
  //     )
  //   })
  // }
  const uploadFiles = () => {
    var files = document.getElementById('file_upload').files;
    if(files.length==0){
      alert("Please first choose or drop any file(s)...");
      return;
    }
    var filenames="";
    for(var i=0;i<files.length;i++){
      filenames+=files[i].name;
    }
    let render = new FileReader();
    render.readAsDataURL(filenames);
    render.onload = function() {
      console.log(render.result);
    };
    // setFiles(render.result);
  }
  console.log(files)
  return (
    <div>
      <ToastContainer />
      {/* <div {...getRootProps()} className={styles.dropzone}>
        <input {...getInputProps()} />
        <p>Click or Drag the file here to Upload a new Document</p>
        {showFileUploaded()}
      </div> */}
      <div className="dropzone">
        <input type="file" id="file_upload" accept=".doc, .docx, .pdf" multiple />
        <p>Click or Drag the file here to Upload a new Document</p>
        
      </div>	
      <button className="upload-btn" onClick={() => {uploadFiles()}}>Submit</button>
    </div>
  )
}