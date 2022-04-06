import React from 'react';
import { useSelector } from 'react-redux'
import "./Modal.css";

export default function Modal(props) {
  const Component = useSelector(state => state.ModalReducer.Component);
  const closeModalOverlay = () => {
    props.closePopup()
  }
  return (
    <div className={`custom-model-main ${props.isOpen ? "model-open" : ""}`}>
      <div className="custom-model-inner">        
        <div className="custom-model-wrap">
          <div className="pop-up-content-wrap">
            {Component}
          </div>
        </div>  
      </div>  
    <div className="bg-overlay" onClick={() => {closeModalOverlay()}}></div>
  </div> 
  )
}
