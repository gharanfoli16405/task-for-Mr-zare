import { ActionUsersTypes } from "../types/users.types";

export const filterUsers = (payload) => ({
  type: ActionUsersTypes.FILTER_USERS,
  payload,
});
