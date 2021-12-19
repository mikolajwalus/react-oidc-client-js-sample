import { createStore } from "redux";
import { setHeaders } from "../api/axios";
import { USER_FOUND, USER_EXPIRED, USER_LOADING } from "./constants";

const initialState = {
  user: null,
  isLoadingUser: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case USER_LOADING:
      return { ...state, isLoadingUser: true };
    case USER_FOUND:
      setHeaders(action.payload);
      return { ...state, user: action.payload, isLoadingUser: false };
    case USER_EXPIRED:
      return { ...state, isLoadingUser: false, user: null };
    default:
      return state;
  }
};

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
