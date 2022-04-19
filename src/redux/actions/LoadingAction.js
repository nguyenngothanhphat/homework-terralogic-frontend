import { HIDE_LOADING, SHOW_LOADING, SHOW_SPINNER, HIDE_SPINNER } from "../constants/LoadingConstant"

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
export const showSpinnerAction = () => {
  let action = {
    type: SHOW_SPINNER
  }
  return action;
}
export const hideSpinnerAction = () => {
  let action = {
    type: HIDE_SPINNER
  }
  return action;
}