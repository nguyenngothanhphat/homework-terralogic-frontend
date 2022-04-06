import { adminServices } from "../../services/AdminServices"
import { 
  GET_ALL_DOCUMENT, 
  GET_ALL_USER_UNASSIGNED,
  UPDATE_DOCUMENT
} from "../constants/AdminConstant";

export const getAllDocumentAction = () => {
  return async (dispatch) => {
    try {
      const {data, status} = await adminServices.getAllDocument();
      if (status === 200) {
        dispatch({
          type: GET_ALL_DOCUMENT,
          data
        })
      }
    } catch (err) {
      console.log('error', err)
    }
  }
}
export const updateDocumentAction = (dataUpdate, id) => {
  return async (dispatch) => {
    try {
      const {status} = await adminServices.updateDocument(dataUpdate, id);
      if (status === 200) {
        dispatch({type: GET_ALL_DOCUMENT})
      }
    } catch (err) {
      console.log("error", err);
    }
  }
}
export const getAllUserUnassignedAction = (id) => {
  return async (dispatch) => {
    try {
      const {data, status} = await adminServices.getAllUserUnassigned(id);
      if (status === 200) {
        dispatch({
          type: GET_ALL_USER_UNASSIGNED,
          data
        })
      }
    } catch (err) {
      console.log("error", err);
    }
  }
}