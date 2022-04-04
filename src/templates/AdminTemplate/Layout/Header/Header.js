import React from 'react';
import "./Header.css"

export default function Header() {
  return (
    <header>
      <div className="header-logo-wrapper">
        <a href="/" className="header-logo">
          <img src="../images/header-logo.svg" alt="TERRALOGIC" width="" height="" />
        </a>
      </div>
      <div className="header-content">
        <a href="javascript:;" className="content-button" id="content-button" onclick="openSidebar()">
          <i className="fas fa-bars content-open"></i>
          <i className="fa-solid fa-xmark content-close"></i>
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
