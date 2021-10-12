import { ActionAuthTypes } from "../types/auth.types";

export const AuthinitialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

export function AuthrReducer(state = AuthinitialState, action) {
  switch (action.type) {
    case ActionAuthTypes.LOGIN_REQUEST:
      return {
        ...state,
        user: null,
        token: null,
        loading: true,
        error: null,
      };
    case ActionAuthTypes.LOGIN_SUCCESS:
      const { user, token } = action.payload;
      return {
        ...state,
        user: user,
        token: token,
        loading: false,
        error: null,
      };
    case ActionAuthTypes.LOGIN_ERROR:
      return {
        ...state,
        user: null,
        token: null,
        loading: false,
        error: action.payload.error,
      };
    case ActionAuthTypes.LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        loading: false,
        error: null,
      };
    default:
      throw Error(`action type not allowed: ${action.type}`);
  }
}
