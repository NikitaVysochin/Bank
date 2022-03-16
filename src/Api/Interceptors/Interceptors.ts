import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost/",
});

api.interceptors.request.use(
  async (config) => {
    const jwt = localStorage.getItem("jwtToken");
    config.headers = {
      Authorization: `Bearer ${jwt}`,
    };    
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const jwt = axios
        .post(
          "/auth/jwt/refresh/",
          {
            refresh: localStorage.getItem("jwtRefresh"),
          },
        )
        .then((res) => {
          localStorage.setItem("jwtToken", res.data.access);
          return jwt;
        });
      axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
    
      return api(originalRequest);
    }
    return Promise.reject(error);
  }
);

export const API = (token) =>
  axios.create({
    baseURL: "http://localhost",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
