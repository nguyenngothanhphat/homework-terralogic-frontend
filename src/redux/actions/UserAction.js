import {userServices} from '../../services/UserServices';
import { GET_ALL_DOCUMENT_USER } from '../constants/UserConstant';
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
      await userServices.changeCompletedStatus(id);
      window.location.reload();
    } catch (err) {
      console.log("error", err);
    }
  }
}