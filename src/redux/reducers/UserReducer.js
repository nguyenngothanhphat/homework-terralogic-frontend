import { GET_ALL_DOCUMENT_USER } from "../constants/UserConstant"

const initialState = {
  userDocuments: []
}
export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOCUMENT_USER : {
      return {...state, userDocuments: action.data.confirms}
    }
    default: {
      return {...state}
    }
  }
}