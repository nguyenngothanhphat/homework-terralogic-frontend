import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import DragUpload from '../DragUpload/DragUpload';
import {adminServices} from '../../services/AdminServices';
import {updateDocumentAction} from '../../redux/actions/AdminAction';
import "./EditDocument.css";
import { hideLoadingAction, showLoadingAction } from '../../redux/actions/LoadingAction';

const initialState = {
  title: '',
  description: ''
}
export default function EditDocument(props) {
  const [files, setFiles] = useState(null);
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();
  const { _id: id } = props.doc
  const getDocumentById = async (id) => {
    try {
      dispatch(showLoadingAction())
      const  {data, status} = await adminServices.getAllDocumentById(id);
      if (status === 200) {
        setValues({...values, ...data.doc})
      }
      dispatch(hideLoadingAction())
    } catch (err) {
      console.log("error", err);
    }
  }
  useEffect(() => {
    getDocumentById(id)
  }, [id])
  const handleChange = (e) => {
    setValues({ 
      ...values, 
      [e.target.name]: e.target.value
    })
  }
  const handleUpdateDocument = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', files);
    data.append('title', values.title);
    data.append('description', values.description);
    dispatch(updateDocumentAction(data, id))
  }
  return (
    <>
      <h3>Edit Document</h3>
      <form onSubmit={handleUpdateDocument}>
        <div className="form-group">
          <label>Document Title</label>
          <input type="text" name="title" className="form-control" value={values.title} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Document Description</label>
          <input type="text" name="description" className="form-control" value={values.description} onChange={handleChange} />
        </div>
        <DragUpload  showbtn={false} files={files} setFiles={setFiles} handleUploadDocument={handleUpdateDocument}  />
        <button className="btn btn-success"onClick={(e) => {handleUpdateDocument(e)}}>Update</button>
      </form>
    </>
  )
}
