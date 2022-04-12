import React from 'react';
import {useLocation} from 'react-router-dom'
import Restone from '../../../components/Restore/Restore'
import Sidebar from '../../../templates/AdminTemplate/Layout/Sidebar/Sidebar'

export default function Restore() {
  const {pathname} = useLocation()
  return (
    <div className="main-content">
      <Sidebar />
      <div style={{flex: 1, padding: '20px 20px 0'}}>
        <Restone pathname={pathname} />
      </div>
    </div>
  )
}
