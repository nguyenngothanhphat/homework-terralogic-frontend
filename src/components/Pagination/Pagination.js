import React from 'react';
import { Link } from 'react-router-dom';
import { USER_LOGIN } from '../../utils/constants/settingSystem';
import "./Pagination.css"

export default function Pagination(props) {
  return (
    <div className="pagination">
      {props.pageNumber.map((num, index) => {
        <a href="#" key={index}>{num}</a>
      })}
    </div>
  )
}
