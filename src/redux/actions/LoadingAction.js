import { HIDE_LOADING, SHOW_LOADING } from "../constants/LoadingConstant"

export const showLoadingAction = () => {
  let action = {
    type: SHOW_LOADING
  }
  return action;
}
export const hideLoadingAction = () => {
  let action = {
    type: HIDE_LOADING
  }
  return action;
}