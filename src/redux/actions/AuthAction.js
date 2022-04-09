import swal from 'sweetalert';
import { authService } from "../../services/AuthService"
import { USER_LOGIN } from '../../utils/constants/settingSystem';
import { LOGIN , LOGIN_WITH_GOOGLE } from "../constants/AuthConstant";
import {showLoadingAction, hideLoadingAction} from './LoadingAction'

export const loginAction = (dataLogin, history) => {
  return async (dispatch) => {
    try {
      // dispatch(showLoadingAction())
      const {data, status} = await authService.login(dataLogin);
      if (status === 200) {
        dispatch({
          type: LOGIN,
          data
        })
        // dispatch(hideLoadingAction())
        history.push('/admin/dashboard'); 
        // swal({
        //   title: "Congratulations! Successful login",
        //   text: "You clicked the button!",
        //   icon: "success",
        //   button: "Go to admin page",
        // });      
      }
      
    } catch (err) {
      console.log("error", err);
    }
  }
}
export const loginWithGoogleAction = (history, token) => {
  return async (dispatch) => {
    try {
      const {data, status} = await authService.loginWithGoogle(token);
      if (status === 200) {
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
    type: "CLEAR_DATA"
  }
  return action;
}