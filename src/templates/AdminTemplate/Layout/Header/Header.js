import React from 'react';
import {useSelector} from 'react-redux';
import "../../../../App.css"
import "./Header.css"

export default function Header() {
  const {name} = useSelector(state => state.AuthReducer.userLogin);
  const openSidebar = () => {
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("content-button").classList.toggle("active");
  }
  return (
    <header>
      <div className="header-logo-wrapper">
        <a href="/admin/dashboard" className="header-logo">
          <img src="../images/header-logo.svg" alt="TERRALOGIC" width="" height="" />
        </a>
      </div>
      <div className="header-content">
        <a href="#" className="content-button" id="content-button" onClick={() => {openSidebar()}}>
          <i className="fas fa-bars content-open"></i>
          <i className="fas fa-times content-close"></i>
        </a>
        <div className="content-account-wrapper">
          <a href="#" className="content-account">
            <figure className="account-image">
              <img src="https://picsum.photos/50" alt="{name}" width="" height="" />
            </figure>
            <p className="account-name">{name}</p>
          </a>
          <div className="content-account-dropdown">
            <a href="/">Log Out</a>
          </div>
        </div>
      </div>
    </header>
  )
}
