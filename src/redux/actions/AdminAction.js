import { adminServices } from "../../services/AdminServices";
import {showLoadingAction, hideLoadingAction} from './LoadingAction'
import { 
  GET_ALL_DOCUMENT, 
  GET_ALL_USER_UNASSIGNED,
  GET_ALL_TRASH_DOCUMENT
} from "../constants/AdminConstant";
import { STATUS_CODE } from "../../utils/constants/settingSystem";
import swal from "sweetalert";

export const getAllDocumentAction = (pageNumber) => {
  return async (dispatch) => {
    try {
      dispatch(showLoadingAction())
      const {data, status} = await adminServices.getAllDocument(pageNumber);
      if (status === STATUS_CODE.SUCCESS) {
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
      dispatch(showLoadingAction());
      const {status} = await adminServices.updateDocument(dataUpdate, id);
      if (status === STATUS_CODE.SUCCESS) {
        dispatch(hideLoadingAction());
        window.location.reload();
      }
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
      if (status === STATUS_CODE.SUCCESS) {
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
      dispatch(showLoadingAction());
      const {status} = await adminServices.createDocument(data);
      if (status === STATUS_CODE.SUCCESS) {
        dispatch(hideLoadingAction());
        swal({
          title: "Congratulations! Create Document Successful",
          text: "You clicked the button!",
          icon: "success",
          button: "Okay",
        }).then((accept) => {
          if (accept) {
            window.location.reload();
          }
        })
      }   
    } catch (err) {
      dispatch(hideLoadingAction());
      console.log("error", err);
      swal({
        title: "Create failed",
        icon: "error",
        button: "Re-create",
      });
    }
  }
}
export const deleteDocumentAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch(showLoadingAction());
      const {status} = await adminServices.deleteDocument(id);
      if (status === STATUS_CODE.SUCCESS) {
        dispatch(hideLoadingAction());
        window.location.reload();
      }
    } catch (err) {
      console.log("error", err);
    }
  }
}
export const assignUserForDocument = (id, data) => {
  return async (dispatch) => {
    try {
      dispatch(showLoadingAction());
      const {status} = await adminServices.assignUserForDocument(id, data);
      if (status === STATUS_CODE.SUCCESS) {
        dispatch(hideLoadingAction());
        window.location.reload();
      }
    } catch (err) {
      console.log("error", err);
    }
  }
}
export const restoneDocumentAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch(showLoadingAction());
      const {status} = await adminServices.restoneDocument(id);
      if (status === STATUS_CODE.SUCCESS) {
        dispatch(hideLoadingAction());
        window.location.reload();
      }
    } catch (err) {
      console.log("error", err);
    }
  }
}
export const getTrashDocumentsAction = () => {
  return async (dispatch) => {
    try {
      dispatch(showLoadingAction());
      const {data, status} = await adminServices.getTrashDocuments();
      if (status === STATUS_CODE.SUCCESS) {
        dispatch({
          type: GET_ALL_TRASH_DOCUMENT,
          data
        })
        dispatch(hideLoadingAction());
      }
    } catch (err) {
      console.log("error", err);
    }
  }
}