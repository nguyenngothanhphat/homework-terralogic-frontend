import React from 'react';
import {useSelector} from 'react-redux'
import "./Modal.css";

export default function Modal(props) {
  const Component = useSelector(state => state.ModalReducer.Component);
  const closeModalOverlay = () => {
    document.getElementById("myModal").style.display = "none";
  }
  return (
    <div id="myModal" className="modal" onClick={() => {closeModalOverlay()}}>
      <div className="modal-content">
        {/* <span className="close">&times;</span> */}
        <p>{Component}</p>
      </div>
    </div>
  )
}
