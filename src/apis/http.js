import axios from "axios";
axios.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      config.headers["authorization"] = token;
    }
    config.baseURL = "http://localhost:3001/";
    return config;
  },
  (error) => {
    throw error;
  }
);

axios.interceptors.response.use(
  function (response) {
    if (response.data.success === true) {
      console.log("isSuccess");
    } else {
      console.log("ele error");
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
