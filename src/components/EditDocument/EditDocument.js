import React, {useState, useEffect} from 'react'
import DragUpload from '../DragUpload/DragUpload';
import {adminServices} from '../../services/AdminServices';

const initialState = {
  title: '',
  description: ''
}
export default function EditDocument(props) {
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
  return (
    <>
      <h3>Edit Document</h3>
      <form>
        <div className="form-group">
          <label>Document Name</label>
          <input type="text" className="form-control" value={values.title} />
        </div>
        <div className="form-group">
          <label>Document Description</label>
          <input type="text" className="form-control" value={values.description} />
        </div>
        <DragUpload />
        <button>Update</button>
      </form>
    </>
  )
}
