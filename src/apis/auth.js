import axios from "./http.js";

export const fetchToken = async (params) => {
  const url = "login";
  const data = await axios.post(url, params);
  return data;
};

export const fetchCurrentUserInfo = async () => {
  const url = "users/me";
  const data = await axios.get(url);
  return data;
};

// export {
//     fetchToken,
//     fetchCurrentUserInfo,

// }
