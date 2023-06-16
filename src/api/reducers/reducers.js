import { LOGIN_SUCCESS, LOGIN_FAILURE, GET_USER_SUCCESS, GET_USER_FAILURE, REGISTER_SUCCESS, REGISTER_FAILURE, EDIT_USER_SUCCESS, EDIT_USER_FAILURE } from '../actions/actionType';

const initialState = {
  user: null,
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case EDIT_USER_FAILURE:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;