import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from "./slice/UserAuthSlice";
import usersSlice from "./slice/UsersSlice";
import middlewareUsers from "./middleware/middlewareUsers";
import firebase from "firebase/compat/app";
import firebaseConfig from "../../../firebaseConfig";
import "firebase/compat/database";
import { initializeApp } from "firebase/app";

initializeApp(firebaseConfig.app);
export const database = firebase.initializeApp(firebaseConfig.app).database();
const listenerMiddlewareUsers = middlewareUsers(database);

export const store = configureStore({
  reducer: {
    userAuth: userAuthSlice,
    users: usersSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(listenerMiddlewareUsers),
});
