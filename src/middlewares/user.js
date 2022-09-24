import {
  LOGIN_USER,
  REGISTER_USER,
  setUser,
  setRegisterIsSuccess,
  setLoginError,
} from "../actions/user";

import api from "./utils/api";

const user = (store) => (next) => async (action) => {
  const { dispatch } = store;
  switch (action.type) {
    case LOGIN_USER:
      await api
        .post("/auth/login", action.payload)
        .then((response) => {
          localStorage.setItem("user", JSON.stringify(response.data));
          api.defaults.headers.common.authorization = `Bearer ${response.data.accessToken}`;
          dispatch(setUser(response.data));
        })
        .catch((error) => {
          const errorCode = error.response.data.code;

          if (errorCode === "INVALID_PASSWORD") {
            dispatch(
              setLoginError({
                isEmailInvalid: false,
                isPasswordInvalid: true,
              })
            );
          }

          if (errorCode === "INVALID_EMAIL") {
            dispatch(
              setLoginError({
                isEmailInvalid: true,
                isPasswordInvalid: false,
              })
            );
          }
        });

      break;
    case REGISTER_USER:
      const registerRes = await api.post("/auth/register", action.payload);
      if (registerRes.status === 200) {
        dispatch(setRegisterIsSuccess());
      }
      break;
    default:
      next(action);
  }
};

export default user;
