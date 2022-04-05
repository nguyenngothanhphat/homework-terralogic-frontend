import React from 'react';
import "../../../../App.css"
import "./Header.css"

export default function Header() {
  const openSidebar = () => {
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("content-button").classList.toggle("active");
  }
  return (
    <header>
      <div className="header-logo-wrapper">
        <a href="/" className="header-logo">
          <img src="../images/header-logo.svg" alt="TERRALOGIC" width="" height="" />
        </a>
      </div>
      <div className="header-content">
        <a href="javascript:void(0)" className="content-button" id="content-button" onClick={() => {openSidebar()}}>
          <i className="fas fa-bars content-open"></i>
          <i className="fas fa-times content-close"></i>
        </a>
        <div className="content-account">
          <figure className="account-image">
            <img src="https://picsum.photos/50" alt="PhatXYZ" width="" height="" />
          </figure>
          <p className="account-name">PhatXYZ</p>
        </div>
      </div>
    </header>
  )
}
