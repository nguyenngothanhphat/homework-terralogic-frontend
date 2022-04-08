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
console.log("🚀 ~ file: AdminAction.js ~ line 26 ~ updateDocumentAction ~ dataUpdate", dataUpdate.values())
  return async (dispatch) => {
    try {
      const {status} = await adminServices.updateDocument(dataUpdate, id);
      // if (status === 200) {
      //   dispatch({type: GET_ALL_DOCUMENT})
      // }
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
      // if (status === 200) {
      //   dispatch({
      //     type: GET_ALL_DOCUMENT
      //   })
      // }
      dispatch(hideLoadingAction())
    } catch (err) {
      console.log("error", err);
    }
  }
}
export const deleteDocumentAction = (id) => {
  return async (dispatch) => {
    try {
      const {status} = await adminServices.deleteDocument(id);
      // if (status === 200) {
      //   dispatch({
      //     type: GET_ALL_DOCUMENT
      //   })
      // }
    } catch (err) {
      console.log("error", err);
    }
  }
}
export const assignUserForDocument = (id, data) => {
console.log("🚀 ~ file: AdminAction.js ~ line 78 ~ assignUserForDocument ~ data", data)
  return async (dispatch) => {
    try {
      const {status} = await adminServices.assignUserForDocument(id, data);
    } catch (err) {
      console.log("error", err);
    }
  }
}