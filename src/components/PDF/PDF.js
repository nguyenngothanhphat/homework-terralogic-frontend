import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { changeStatusDocumentAction } from '../../redux/actions/UserAction';
import { DOMAIN, DOMAIN_TERRA, USER_LOGIN } from '../../utils/constants/settingSystem';
import "./PDF.css"

export default function PDF(props) {
  const dispatch = useDispatch();
  let {_id: id, url} = props.doc;
  useEffect(() => {
    changeStatus();
  }, [])
  const changeStatus = () => {
    if(JSON.parse(localStorage.getItem(USER_LOGIN)).role === 0) {
      dispatch(changeStatusDocumentAction(id));
    }
  }
  return (
    <iframe id="iframe1" src={`${DOMAIN_TERRA}${url}`} frameBorder={0} width="100%" height="100%" ></iframe>
  )
}
