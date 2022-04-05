import { TOKEN, USER_LOGIN } from "../../utils/constants/settingSystem"
import { LOGIN } from "../constants/AuthConstant";

const initialState = {
  userLogin: {},
  loginInfo: {}
}
if (localStorage.getItem(USER_LOGIN)) {
  initialState.userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}
export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN : {
      const {data} = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(data.body));
      localStorage.setItem(TOKEN, data.token);
      return {...state, userLogin: data.body}
    }
    default: {
      return {...state}
    }
  }
}