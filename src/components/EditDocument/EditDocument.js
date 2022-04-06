import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import DragUpload from '../DragUpload/DragUpload';
import {adminServices} from '../../services/AdminServices';
import {updateDocumentAction} from '../../redux/actions/AdminAction';

const initialState = {
  title: '',
  description: ''
}
export default function EditDocument(props) {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialState);
  const {_id: id} = props.doc
  const getDocumentById = async (id) => {
    try {
      const  {data, status} = await adminServices.getAllDocumentById(id);
      if (status === 200) {
        setValues({...values, ...data.doc})
      }
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
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateDocumentAction(values, id))
  }
  return (
    <>
      <h3>Edit Document</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Document Title</label>
          <input type="text" name="title" className="form-control" value={values.title} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Document Description</label>
          <input type="text" name="description" className="form-control" value={values.description} onChange={handleChange} />
        </div>
        <DragUpload />
        <button onClick={(e) => {handleSubmit(e)}}>Update</button>
      </form>
    </>
  )
}
