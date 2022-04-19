import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

export default function Sidebar() {
  return (
    <aside className="sidebar" id="sidebar">
      <ul className="sidebar-menu">
        <li className="menu-item"><Link to="/admin/dashboard/1"><i className="fas fa-home"></i> Dashboard</Link></li>
      </ul>
    </aside>
  )
}