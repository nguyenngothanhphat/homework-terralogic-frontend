import React from 'react'

export default function Header(props) {
  return (
    <header>
      <div className="header-logo-wrapper">
        <a href="/" className="header-logo">
          <img src="../images/header-logo.svg" alt="TERRALOGIC" width="" height="" />
        </a>
      </div>
      <div className="header-content">
        <a href="javascript:void(0)" className="content-button" id="content-button">
    
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
