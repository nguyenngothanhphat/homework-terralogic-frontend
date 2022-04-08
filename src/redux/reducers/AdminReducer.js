import { GET_ALL_DOCUMENT, GET_ALL_USER_UNASSIGNED } from "../constants/AdminConstant";

const initialState = {
  documents: [],
  usersUnassigned: []
}
export const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOCUMENT: {
      return {...state, documents: action.data}
    }
    case GET_ALL_USER_UNASSIGNED : {
      return {...state, usersUnassigned: action.data}
    }
    default: {
      return {...state}
    }
  }
}