import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from "./slice/UserAuthSlice";
import usersSlice from "./slice/UsersSlice";
import middlewareUsers from "./middleware/middlewareUsers";
import firebase from "firebase/compat/app";
import {
  app,
  realtimeDb,
  firebaseConfig,
} from "../../../firebaseConfig";
import "firebase/compat/database";
import { initializeApp } from "firebase/app";
import { videosApi } from "./middleware/videosApi";

initializeApp(firebaseConfig);
export const database = firebase
  .initializeApp(firebaseConfig)
  .database();
const listenerMiddlewareUsers = middlewareUsers(database);

export const store = configureStore({
  reducer: {
    userAuth: userAuthSlice,
    users: usersSlice,
    [videosApi.reducerPath]: videosApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      listenerMiddlewareUsers,
      videosApi.middleware,
    ),
});
