import React from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import swal from 'sweetalert';
import { TOKEN, USER_LOGIN } from '../../../../utils/constants/settingSystem';
import "./Header.css";
import {clearDataAction} from '../../../../redux/actions/AuthAction'

export default function Header(props) {
  const history = useHistory()
  const dispatch = useDispatch();
  const {name, avatar} = useSelector(state => state.AuthReducer.userLogin);
  const logout = (e) => {
    e.preventDefault();
    swal({
      title: "Are you sure?",
      text: "Bạn có muốn logout ra khỏi trang user không ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willLogout) => {
      if (willLogout) {
        localStorage.removeItem(USER_LOGIN);
        localStorage.removeItem(TOKEN);
        dispatch(clearDataAction())
        history.push('/login')
      }
    })
  }

  return (
    <header>
      <div className="header-logo-wrapper">
        <a href="/admin/dashboard" className="header-logo">
          <img src="../images/header-logo.svg" alt="TERRALOGIC" width="" height="" />
        </a>
      </div>
      <div className="header-content">
        <a href="#" className="content-button" id="content-button">
        </a>
        <div className="content-account-wrapper">
          <a href="#" className="content-account">
            <figure className="account-image">
              <img src={avatar} alt={name} width="" height="" />
            </figure>
            <p className="account-name">{name}</p>
          </a>
          <div className="content-account-dropdown">
            <a href="/" onClick={(e) => logout(e)}>Log Out</a>
          </div>
        </div>
      </div>
    </header>
  )
}
