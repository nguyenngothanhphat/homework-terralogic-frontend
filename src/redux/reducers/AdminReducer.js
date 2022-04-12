import { GET_ALL_DOCUMENT, GET_ALL_USER_UNASSIGNED, GET_ALL_TRASH_DOCUMENT } from "../constants/AdminConstant";

const initialState = {
  documents: [],
  usersUnassigned: [],
  trashDocuments: []
}
export const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOCUMENT: {
      state.documents = {...action.data}
      return {...state}
    }
    case GET_ALL_USER_UNASSIGNED : {
      return {...state, usersUnassigned: action.data}
    }
    case GET_ALL_TRASH_DOCUMENT: {
      return {...state, trashDocuments: action.data.docs}
    }
    default: {
      return {...state}
    }
  }
}