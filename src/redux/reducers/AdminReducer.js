import { GET_ALL_DOCUMENT } from "../constants/AdminConstant";

const initialState = {
  documents: []
}
export const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOCUMENT: {
      return {...state, documents: action.data.docs}
    }
    default: {
      return {...state}
    }
  }
}