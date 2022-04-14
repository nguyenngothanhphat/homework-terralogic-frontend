import { 
  GET_ALL_DOCUMENT, 
  GET_ALL_USER_UNASSIGNED, 
  GET_ALL_TRASH_DOCUMENT,
  RELOAD_DOCUMENT
} from "../constants/AdminConstant";

const initialState = {
  documents: [],
  usersUnassigned: [],
  trashDocuments: [],
  reload: false
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
      state.trashDocuments = action.data.docs
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