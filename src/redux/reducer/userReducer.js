import {
  LOGIN_PROCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_PROCESS,
  LOGOUT_SUCCESS,
  GET_USER_INFO_FAIL,
  GET_USER_INFO_SUCCESS,
  RESET_STATUS,
} from "../constant/userType";

const userState = {
  user: [],
  loading: false,
  success: false,
  fail: false,
  message: "",
};

export const userReducer = (state = userState, action) => {
  switch (action.type) {
    case LOGIN_PROCESS:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        message: "Login successful",
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        fail: true,
        message: "Incorrect Username or Password",
      };

    case GET_USER_INFO_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        user: action.payload,
      };

    case GET_USER_INFO_FAIL:
      return {
        ...state,
        user: [],
      };

    case LOGOUT_PROCESS:
      return {
        ...state,
        loading: true,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        user: [],
      };

    case RESET_STATUS:
      return {
        user: [],
        loading: false,
        success: false,
        fail: false,
        message: "",
      };
    default:
      return state;
  }
};