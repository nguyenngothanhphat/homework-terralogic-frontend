import React, {useState} from 'react'
import DragUpload from '../DragUpload/DragUpload'

export default function EditDocument(props) {
  let {_id, title, description} = props.doc
  return (
    <>
      <h3>Edit Document</h3>
      <form>
        <div className="form-group">
          <label>Document Name</label>
          <input type="text" className="form-control" value={title} />
        </div>
        <div className="form-group">
          <label>Document Description</label>
          <input type="text" className="form-control" value={description} />
        </div>
        <DragUpload />
        <button>Update</button>
      </form>
    </>
  )
}
