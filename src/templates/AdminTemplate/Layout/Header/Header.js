import React from 'react';
import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import swal from 'sweetalert';
import "../../../../App.css"
import { TOKEN, USER_LOGIN } from '../../../../utils/constants/settingSystem';
import "./Header.css"
import {clearDataAction} from '../../../../redux/actions/AuthAction';

export default function Header() {
  const history = useHistory()
  const dispatch = useDispatch();
  const {name} = useSelector(state => state.AuthReducer.userLogin);
  const logout = (e) => {
    e.preventDefault();
    swal({
      title: "Are you sure?",
      text: "Do you want to logout from the admin page?",
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
  const openSidebar = () => {
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("content-button").classList.toggle("active");
  }
  return (
    <header>
      <div className="header-logo-wrapper">
        <a href="/admin/dashboard" className="header-logo">
          <img src={require('../../../../assets/img/logo.png')} alt="TERRALOGIC" width="" height="" />
        </a>
      </div>
      <div className="header-content">
        <a href="#" className="content-button" id="content-button" onClick={() => {openSidebar()}}>
          <i className="fas fa-bars content-open"></i>
          <i className="fas fa-times content-close"></i>
        </a>
        <div className="content-account-wrapper">
          <a href="#" className="content-account">
            <figure className="account-image">
              <img src="https://picsum.photos/50" alt="{name}" width="" height="" />
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
