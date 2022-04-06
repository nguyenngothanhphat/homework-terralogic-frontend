import { authService } from "../../services/AuthService"
import { LOGIN } from "../constants/AuthConstant";

export const LoginAction = (dataLogin, history) => {
  return async (dispatch) => {
    try {
      const {data, status} = await authService.login(dataLogin);
      if (status === 200) {
        dispatch({
          type: LOGIN,
          data
        })
        history.push('/admin/dashboard');
      }
    } catch (err) {
      console.log("error", err);
    }
  }
}