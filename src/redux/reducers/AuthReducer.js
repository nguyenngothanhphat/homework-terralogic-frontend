import { TOKEN, USER_LOGIN } from "../../utils/constants/settingSystem"
import { LOGIN, LOGIN_WITH_GOOGLE } from "../constants/AuthConstant";

const initialState = {
  userLogin: {},
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
      return {...state, adminLogin: data.body}
    }
    case LOGIN_WITH_GOOGLE : {
      const {data} = action.data;
      localStorage.setItem(USER_LOGIN, JSON.stringify(data));
      localStorage.setItem(TOKEN, data.token);
      return {...state, userLogin: data}
    }
    case "CLEAR_DATA": {
      return {...state, userLogin: {}}
    }
    default: {
      return {...state}
    }
  }
}