import React, {useState} from 'react';
import './Sidebar.css'

export default function Sidebar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const openSubMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  return (
    <aside className="sidebar active" id="sidebar">
      <ul className="sidebar-menu">
        <li className="menu-item"><a href="/"><i className="fas fa-home"></i> Dashboard</a></li>
      </ul>
    </aside>
  )
}