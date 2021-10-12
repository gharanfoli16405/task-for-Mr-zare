import { ActionAuthTypes } from "../types/auth.types";

export const loginRequest = (payload) => ({
  type: ActionAuthTypes.LOGIN_REQUEST,
  payload,
});
export const logginSuccess = (payload) => ({
  type: ActionAuthTypes.LOGIN_SUCCESS,
  payload,
});
export const loginError = (payload) => ({
  type: ActionAuthTypes.LOGIN_ERROR,
  payload,
});
export const logout = (payload) => ({
  type: ActionAuthTypes.LOGOUT,
  payload,
});
