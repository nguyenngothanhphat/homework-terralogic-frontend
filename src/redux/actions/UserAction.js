import {userServices} from '../../services/UserServices';
import { STATUS_CODE } from '../../utils/constants/settingSystem';
import { GET_ALL_DOCUMENT_USER, RELOAD_DOCUMENT } from '../constants/UserConstant';
import { hideLoadingAction, showLoadingAction } from './LoadingAction';
export const getAllDocumentsUserAction = (pageNumber, sizePage) => {
  return async (dispatch) => {
    try {
      dispatch(showLoadingAction());
      const {data, status} = await userServices.getAllDocumentsUser(pageNumber, sizePage);
      if (status === STATUS_CODE.SUCCESS) {
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
      const {status} = await userServices.changeReadingStatus(id);
      if (status === STATUS_CODE.SUCCESS) {
        dispatch({
          type: RELOAD_DOCUMENT
        })
      }
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
        dispatch(reloadDocumentUserAction());
      }
    } catch (err) {
      console.log("error", err);
      dispatch(hideLoadingAction());
    }
  }
}
export const reloadDocumentUserAction = () => {
  return {
    type: RELOAD_DOCUMENT
  }
}