import axios from "axios";

export const configureAxios = () => {
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return error.response.status;
    }
  );
};

export const setHeaders = (user) => {
  axios.defaults.headers.common["Authorization"] =
    "Bearer " + user.access_token;
};
