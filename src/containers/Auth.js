import { connect } from "react-redux";
import Auth from "../components/Auth";

import {
  loginUser,
  registerUser,
  setRegisterUsername,
  setRegisterEmail,
  setRegisterPassword,
  setRegisterConfirmPassword,
  setEmailOrUsername,
  setLoginPassword,
} from "../actions/user";

const mapStateToProps = (state) => ({
  user: state.user.user,
  isSuccessfullyRegistered: state.user.isSuccessfullyRegistered,
  isSuccessfullyLoggedIn: state.user.isSuccessfullyLoggedIn,
  registerUsername: state.user.registerUsername,
  registerPassword: state.user.registerPassword,
  registerConfirmPassword: state.user.registerConfirmPassword,
  registerEmail: state.user.registerEmail,
  emailOrUsername: state.user.emailOrUsername,
  loginPassword: state.user.loginPassword,
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (payload) => dispatch(loginUser(payload)),
  registerUser: (payload) => dispatch(registerUser(payload)),
  setRegisterUsername: (payload) => dispatch(setRegisterUsername(payload)),
  setRegisterPassword: (payload) => dispatch(setRegisterPassword(payload)),
  setRegisterConfirmPassword: (payload) =>
    dispatch(setRegisterConfirmPassword(payload)),
  setRegisterEmail: (payload) => dispatch(setRegisterEmail(payload)),
  setEmailOrUsername: (payload) => dispatch(setEmailOrUsername(payload)),
  setLoginPassword: (payload) => dispatch(setLoginPassword(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
