export const GET_USER = "GET_USER";
export const SET_USER = "SET_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const REGISTER_USER = "REGISTER_USER";
export const SET_REGISTER_USERNAME = "SET_REGISTER_USERNAME";
export const SET_REGISTER_PASSWORD = "SET_REGISTER_PASSWORD";
export const SET_REGISTER_CONFIRM_PASSWORD = "SET_REGISTER_CONFIRM_PASSWORD";
export const SET_REGISTER_EMAIL = "SET_REGISTER_EMAIL";
export const SET_EMAIL_OR_USERNAME = "SET_EMAIL_OR_USERNAME";
export const SET_LOGIN_PASSWORD = "SET_LOGIN_PASSWORD";
export const SET_REGISTER_IS_SUCCESS = "SET_REGISTER_IS_SUCCESS";
export const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";

export const getUser = () => ({
  type: GET_USER,
});

export const setRegisterIsSuccess = () => ({
  type: SET_REGISTER_IS_SUCCESS,
});

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

export const loginUser = (payload) => ({
  type: LOGIN_USER,
  payload,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const registerUser = (payload) => ({
  type: REGISTER_USER,
  payload,
});

export const setRegisterUsername = (payload) => ({
  type: SET_REGISTER_USERNAME,
  payload,
});

export const setRegisterPassword = (payload) => ({
  type: SET_REGISTER_PASSWORD,
  payload,
});

export const setRegisterConfirmPassword = (payload) => ({
  type: SET_REGISTER_CONFIRM_PASSWORD,
  payload,
});

export const setRegisterEmail = (payload) => ({
  type: SET_REGISTER_EMAIL,
  payload,
});

export const setEmailOrUsername = (payload) => ({
  type: SET_EMAIL_OR_USERNAME,
  payload,
});

export const setLoginPassword = (payload) => ({
  type: SET_LOGIN_PASSWORD,
  payload,
});

export const setLoginError = (payload) => ({
  type: SET_LOGIN_ERROR,
  payload,
});