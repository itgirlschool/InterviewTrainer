import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from "./slice/UserAuthSlice";
import usersSlice from "./slice/UsersSlice";
import middlewareUsers from "./middleware/middlewareUsers";
<<<<<<< HEAD

=======
>>>>>>> b2615a3d948aafe4cf29c4a60cba9abadb1c68a1
import firebase from "firebase/compat/app";
import firebaseConfig from "../../../firebaseConfig";
import "firebase/compat/database";
import { initializeApp } from "firebase/app";

initializeApp(firebaseConfig);
export const database = firebase.initializeApp(firebaseConfig).database();
const listenerMiddlewareUsers = middlewareUsers(database);

<<<<<<< HEAD

=======
>>>>>>> b2615a3d948aafe4cf29c4a60cba9abadb1c68a1
export const store = configureStore({
  reducer: {
    userAuth: userAuthSlice,
    users: usersSlice,
  },
<<<<<<< HEAD
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(listenerMiddlewareUsers),
=======
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(listenerMiddlewareUsers),
>>>>>>> b2615a3d948aafe4cf29c4a60cba9abadb1c68a1
});
