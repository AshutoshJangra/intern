import axios from "axios";
import authService from "../../../services/auth-service";

export const register = (userData) => {
  // return axios
  //   .post("https://apicoopinn.herokuapp.com/api/v1/shops/signup", {
  //     ...userData,
  //   })
  //   .then((res) => res.data, (err) => Promise.reject(err.response.data.errors));
  return axios
    .post("http://localhost:8000/api/v1/users/signup", {
      ...userData,
    })
    .then((res) => res.data, (err) => Promise.reject(err.response.data.errors));
};

export const checkAuthState = (e) => {
  if (authService.isAuthenticated()) {
    return true;
  }
};

export const getSellerName = () => {
  return axios
  .get("http://localhost:8000/api/v1/users/")
  .then((res) => res.data)
  .catch((error) => console.log(error));
};

export const login = (userData) => {
  // return axios
  //   .post("https://apicoopinn.herokuapp.com/api/v1/shops/login", {
  //     ...userData,
  //   })
  //   .then((res) => res.data)
  //   .catch((error) => console.log(error));
  return axios
    .post("http://localhost:8000/api/v1/users/login", { ...userData })
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const logout = () => {
  authService.invalidateUser();
};
