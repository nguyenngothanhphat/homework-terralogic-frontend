import {userServices} from '../../services/UserServices';
import { STATUS_CODE } from '../../utils/constants/settingSystem';
import { GET_ALL_DOCUMENT_USER } from '../constants/UserConstant';
import { hideLoadingAction, showLoadingAction } from './LoadingAction';
export const getAllDocumentsUserAction = () => {
  return async (dispatch) => {
    try {
      const {data, status} = await userServices.getAllDocumentsUser();
      if (status === 200) {
        dispatch({
          type: GET_ALL_DOCUMENT_USER,
          data
        })
      }
    } catch (err) {
      console.log("error", err)
    }
  }
}
export const changeReadingStatusAction = (id) => {
  return async (dispatch) => {
    try {
      await userServices.changeReadingStatus(id);
    } catch (err) {
      console.log("error", err);
    }
  }
}
export const changeCompletedStatusAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch(showLoadingAction());
      const {status} = await userServices.changeCompletedStatus(id);
      if (status === STATUS_CODE.SUCCESS) {
        dispatch(hideLoadingAction());
        window.location.reload();
      }
    } catch (err) {
      console.log("error", err);
    }
  }
}