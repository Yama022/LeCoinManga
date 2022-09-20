import {
  LOGIN_USER,
  REGISTER_USER,
  setUser,
  setRegisterIsSuccess,
} from "../actions/user";

import api from "./utils/api";

const user = (store) => (next) => async (action) => {
  const { dispatch } = store;
  switch (action.type) {
    case LOGIN_USER:
      const loginRes = await api.post("/auth/login", action.payload);
      localStorage.setItem("user", JSON.stringify(loginRes.data));
      api.defaults.headers.common.authorization = `Bearer ${loginRes.data.accessToken}`;
      if (loginRes.status === 200) {
        dispatch(setUser(loginRes.data));
      }
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
