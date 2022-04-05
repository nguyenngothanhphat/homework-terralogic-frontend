import React from 'react';
import './Sidebar.css'

export default function Sidebar(props) {
  return (
    <aside className="sidebar" id="sidebar">
      <ul className="sidebar-menu">
        <li className="menu-item"><a href="/"><i className="fas fa-home"></i> Dashboard</a></li>
      </ul>
    </aside>
  )
}