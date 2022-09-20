import {
  SET_USER,
  SET_REGISTER_IS_SUCCESS,
  SET_REGISTER_USERNAME,
  SET_REGISTER_EMAIL,
  SET_REGISTER_PASSWORD,
  SET_REGISTER_CONFIRM_PASSWORD,
  SET_EMAIL_OR_USERNAME,
  SET_LOGIN_PASSWORD,
  LOGOUT_USER,
} from "../actions/user";

export const initialState = {
  user: {},
  isSuccessfullyRegistered: false,
  isSuccessfullyLoggedIn: false,
  registerUsername: "",
  registerPassword: "",
  registerConfirmPassword: "",
  registerEmail: "",
  emailOrUsername: "",
  loginPassword: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isSuccessfullyLoggedIn: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: {},
        isSuccessfullyLoggedIn: false,
        isSuccessfullyRegistered: false,
      };
    case SET_REGISTER_IS_SUCCESS:
      return {
        ...state,
        isSuccessfullyRegistered: true,
        emailOrUsername: state.registerEmail,
      };
    case SET_REGISTER_USERNAME:
      return {
        ...state,
        registerUsername: action.payload,
      };
    case SET_REGISTER_EMAIL:
      return {
        ...state,
        registerEmail: action.payload,
      };
    case SET_REGISTER_PASSWORD:
      return {
        ...state,
        registerPassword: action.payload,
      };
    case SET_REGISTER_CONFIRM_PASSWORD:
      return {
        ...state,
        registerConfirmPassword: action.payload,
      };
    case SET_EMAIL_OR_USERNAME:
      return {
        ...state,
        emailOrUsername: action.payload,
      };
    case SET_LOGIN_PASSWORD:
      return {
        ...state,
        loginPassword: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
