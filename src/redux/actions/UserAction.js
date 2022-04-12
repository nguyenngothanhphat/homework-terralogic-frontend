import {userServices} from '../../services/UserServices';
import { STATUS_CODE } from '../../utils/constants/settingSystem';
import { GET_ALL_DOCUMENT_USER } from '../constants/UserConstant';
import { hideLoadingAction, showLoadingAction } from './LoadingAction';
export const getAllDocumentsUserAction = (pageNumber) => {
  return async (dispatch) => {
    try {
      dispatch(showLoadingAction());
      const {data, status} = await userServices.getAllDocumentsUser(pageNumber);
      if (status === 200) {
        dispatch({
          type: GET_ALL_DOCUMENT_USER,
          data
        })
        dispatch(hideLoadingAction());
      }
    } catch (err) {
      console.log("error", err)
      dispatch(hideLoadingAction());
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