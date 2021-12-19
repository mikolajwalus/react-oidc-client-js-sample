import { USER_FOUND, USER_EXPIRED, USER_LOADING } from "./constants";

export const userFound = (payload) => ({
  type: USER_FOUND,
  payload: payload,
});

export const userLoading = () => ({
  type: USER_LOADING,
});

export const userExpired = () => ({
  type: USER_EXPIRED,
});
