import React from 'react';
import { Link } from 'react-router-dom';
import { USER_LOGIN } from '../../utils/constants/settingSystem';
import "./Pagination.css"

export default function Pagination(props) {
  let {page, pages} = props;
  return (
    pages > 1 && (
      <div className="pagination">
          <Link to={JSON.parse(localStorage.getItem(USER_LOGIN)).role === 9 ? `/admin/dashboard/1` : `/1`} disabled={page <= 1}>
            &laquo;
          </Link>
        <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&raquo;</a>
      </div>
    ) 
    
  )
}
