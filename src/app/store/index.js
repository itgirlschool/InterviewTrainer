import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from "./slice/UserAuthSlice";
import usersSlice from "./slice/UsersSlice";
import { videosReducer } from "./slice/VideosSlice.js";
import { autotestsReducer } from "./slice/AutoTestsSlice.js";
import { userAutoTestsReducer } from "./slice/UserAutoTestsSlice.js";
import middlewareUsers from "./middleware/middlewareUsers";
import middlewareUserAuth from "./middleware/middlewareUsersAuth.js";
import firebase from "firebase/compat/app";
import { firebaseConfig } from "../../../firebaseConfig";
import "firebase/compat/database";
import { initializeApp } from "firebase/app";

initializeApp(firebaseConfig);
export const database = firebase
  .initializeApp(firebaseConfig)
  .database();
const listenerMiddlewareUsers = middlewareUsers(database);
const listenerMiddlewareUserAuth =
  middlewareUserAuth(database);
export const store = configureStore({
  reducer: {
    userAuth: userAuthSlice,
    users: usersSlice,
    videos: videosReducer,
    autotests: autotestsReducer,
    userAutoTests: userAutoTestsReducer,
  },
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      listenerMiddlewareUsers,
      listenerMiddlewareUserAuth,
    ),
});
