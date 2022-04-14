import swal from 'sweetalert';
import { authService } from "../../services/AuthService"
import { STATUS_CODE } from '../../utils/constants/settingSystem';
import { CLEAR_DATA, LOGIN , LOGIN_WITH_GOOGLE } from "../constants/AuthConstant";
import {showLoadingAction, hideLoadingAction} from './LoadingAction'

export const loginAction = (dataLogin, history) => {
  return async (dispatch) => {
    try {
      dispatch(showLoadingAction());
      const {data, status} = await authService.login(dataLogin);
      if (status === STATUS_CODE.SUCCESS) {
        dispatch({
          type: LOGIN,
          data
        })
        dispatch(hideLoadingAction());
        history.push('/admin/dashboard');
      } 
    } catch (err) {
      dispatch(hideLoadingAction())
      console.log("error", err);
      swal({
        title: "Login failed",
        text: "Username or password is incorrect!",
        icon: "error",
        button: "Re-login",
      });
    }
  }
}
export const loginWithGoogleAction = (history, token) => {
  return async (dispatch) => {
    try {
      const {data, status} = await authService.loginWithGoogle(token);
      if (status === STATUS_CODE.SUCCESS) {
        dispatch({
          type: LOGIN_WITH_GOOGLE, 
          data
        })
        history.push('/')
      }
    } catch(err) {
      console.log("error", err)
    }
  }
}
export const clearDataAction = () => {
  let action = {
    type: CLEAR_DATA
  }
  return action;
}