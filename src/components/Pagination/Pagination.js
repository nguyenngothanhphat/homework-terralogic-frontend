import React from 'react';
import { NavLink } from 'react-router-dom';
import { USER_LOGIN } from '../../utils/constants/settingSystem';
import "./Pagination.css"

export default function Pagination(props) {
  let {pages} = props;
  return (
    <div className="pagination">
      {[...Array(pages).keys()]?.map((p, index) => {
        return (
          <NavLink activeClassName="active" to={JSON.parse(localStorage.getItem(USER_LOGIN)).role === 0 ? `/${p + 1}` : `/admin/dashboard/${p + 1}`} key={index}>{p + 1}</NavLink>
        )
      })}
    </div>
  )
}
