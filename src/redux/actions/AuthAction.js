import { authService } from "../../services/AuthService"
import { LOGIN , LOGIN_WITH_GOOGLE } from "../constants/AuthConstant";

export const LoginAction = (dataLogin, history) => {
  return async (dispatch) => {
    try {
      const {data, status} = await authService.login(dataLogin);
      if (status === 200) {
        dispatch({
          type: LOGIN,
          data
        })
        if (data.body.role === 9) {
          history.push('/admin/dashboard');
        }
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