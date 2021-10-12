export const userFilter = (users, value = "", filter = "email", page = 0) => {
  const filterr = users.filter((user) => user[filter].startsWith(value));
  return filterr;
};
