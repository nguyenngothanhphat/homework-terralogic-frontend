import { adminServices } from "../../services/AdminServices"
import { GET_ALL_DOCUMENT } from "../constants/AdminConstant";

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