import { 
  HIDE_LOADING, 
  SHOW_LOADING,
  SHOW_SPINNER,
  HIDE_SPINNER
} from "../constants/LoadingConstant";

const initialState = {
  isLoading: false,
  isSpinner: false,
}
export const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADING : {
      state.isLoading = true;
      return {...state};
    }
    case HIDE_LOADING : {
      state.isLoading = false;
      return {...state};
    }
    case SHOW_SPINNER: {
      state.isSpinner = true;
      return {...state};
    }
    case HIDE_SPINNER: {
      state.isSpinner = false;
      return {...state};
    }
    default: {
      return {...state}
    }
  }
}