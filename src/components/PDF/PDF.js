import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { changeReadingStatusAction, changeCompletedStatusAction } from '../../redux/actions/UserAction';
import { DOMAIN, DOMAIN_TERRA, USER_LOGIN } from '../../utils/constants/settingSystem';
import "./PDF.css"

export default function PDF(props) {
  const dispatch = useDispatch();
  let {_id: id, url, status} = props.doc
  useEffect(() => {
    changeReadingStatus();
  }, [])
  const changeReadingStatus = () => {
    if(JSON.parse(localStorage.getItem(USER_LOGIN)).role === 0) {
      dispatch(changeReadingStatusAction(id));
    }
  }
  const changeCompletedStatus = (e) => {
    e.preventDefault();
    if(JSON.parse(localStorage.getItem(USER_LOGIN)).role === 0) {
      dispatch(changeCompletedStatusAction(id));
    }
  }
  return (
    <>
      <iframe id="iframe1" src={`${DOMAIN_TERRA}${url}`} frameBorder={0} width="100%" height="90%" ></iframe>
      {status && status !== 'Completed' ? (<button className="btn btn-success" onClick={(e) => {changeCompletedStatus(e)}}>Sign</button>) : ""}
    </>
  )
}
