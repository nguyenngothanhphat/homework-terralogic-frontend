import { authService } from "../../services/AuthService"
import { LOGIN } from "../constants/AuthConstant";
// import { history } from '../../App'

export const loginAction = (dataLogin) => {
  console.log("🚀 ~ file: AuthAction.js ~ line 4 ~ loginAction ~ data", dataLogin)
  return async (dispatch) => {
    try {
      const {data, status} = await authService.login(dataLogin);
      console.log("🚀 ~ file: AuthAction.js ~ line 9 ~ return ~ status", status)
      if (status === 200) {
        dispatch({
          type: LOGIN,
          data
        })
        // history.goBack();
      }
    } catch (err) {
      console.log("error", err);
    }
  }
}