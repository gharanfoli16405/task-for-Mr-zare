import { ActionUsersTypes } from "../types/users.types";

export const UsersInitialState = {
  users: [],
  loading: false,
};

export function usersrReducer(state = UsersInitialState, action) {
  console.log("acion", action);
  switch (action.type) {
    case ActionUsersTypes.FILTER_USERS:
      return { ...state, users: action.payload.users };
    default:
      return state;
  }
}
