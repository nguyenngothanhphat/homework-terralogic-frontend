import { GET_ALL_DOCUMENT_USER, RELOAD_DOCUMENT } from "../constants/UserConstant"

const initialState = {
  userDocuments: [],
  reload: false
}
export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOCUMENT_USER : {
      state.userDocuments = {...action.data}
      return {...state}
    }
    case RELOAD_DOCUMENT : {
      return {...state, reload: !state.reload}
    }
    default: {
      return {...state}
    }
  }
}