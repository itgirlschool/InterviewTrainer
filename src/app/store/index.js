import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from "./slice/UserAuthSlice";
import usersSlice from "./slice/UsersSlice";
import middlewareUsers from "./middleware/middlewareUsers";
import firebase from "firebase/compat/app";
import firebaseConfig from "../../../firebaseConfig";
import "firebase/compat/database";
import { initializeApp } from "firebase/app";

initializeApp(firebaseConfig);
export const database = firebase.initializeApp(firebaseConfig).database();
const listenerMiddlewareUsers = middlewareUsers(database);

export const store = configureStore({
  reducer: {
    userAuth: userAuthSlice,
    users: usersSlice,
  },

  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(listenerMiddlewareUsers),

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(listenerMiddlewareUsers),
});
