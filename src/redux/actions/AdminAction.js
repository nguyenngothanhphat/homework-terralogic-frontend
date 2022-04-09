import { adminServices } from "../../services/AdminServices";
import {showLoadingAction, hideLoadingAction} from './LoadingAction'
import { 
  GET_ALL_DOCUMENT, 
  GET_ALL_USER_UNASSIGNED
} from "../constants/AdminConstant";

export const getAllDocumentAction = () => {
  return async (dispatch) => {
    try {
      dispatch(showLoadingAction())
      const {data, status} = await adminServices.getAllDocument();
      if (status === 200) {
        dispatch({
          type: GET_ALL_DOCUMENT,
          data
        })
        dispatch(hideLoadingAction())
      }
    } catch (err) {
      console.log('error', err)
    }
  }
}
export const updateDocumentAction = (dataUpdate, id) => {
  return async (dispatch) => {
    try {
      await adminServices.updateDocument(dataUpdate, id);
      window.location.reload();
    } catch (err) {
      console.log("error", err);
    }
  }
}
export const getAllUserUnassignedAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch(showLoadingAction())
      const {data, status} = await adminServices.getAllUserUnassigned(id);
      if (status === 200) {
        dispatch({
          type: GET_ALL_USER_UNASSIGNED,
          data
        })
        dispatch(hideLoadingAction())
      }
    } catch (err) {
      console.log("error", err);
    }
  }
}
export const createDocumentAction = (data) => {
  return async (dispatch) => {
    try {
      dispatch(showLoadingAction())
      await adminServices.createDocument(data);
      dispatch(hideLoadingAction())
      window.location.reload()
    } catch (err) {
      console.log("error", err);
    }
  }
}
export const deleteDocumentAction = (id) => {
  return async (dispatch) => {
    try {
      await adminServices.deleteDocument(id);
      window.location.reload();
    } catch (err) {
      console.log("error", err);
    }
  }
}
export const assignUserForDocument = (id, data) => {
  return async (dispatch) => {
    try {
      await adminServices.assignUserForDocument(id, data);
      window.location.reload();
    } catch (err) {
      console.log("error", err);
    }
  }
}