import { GET_ALL_DOCUMENT_USER } from "../constants/UserConstant"

const initialState = {
  userDocuments: []
}
export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOCUMENT_USER : {
      state.userDocuments = {...action.data}
      console.log(state.userDocuments)
      return {...state}
    }
    default: {
      return {...state}
    }
  }
}