import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from "./slice/UserAuthSlice";
import usersSlice from "./slice/UsersSlice";
import middlewareUsers from "./middleware/middlewareUsers";
import { realtimeDb } from "../../../firebaseConfig"; 

export const database = realtimeDb;

export const store = configureStore({
  reducer: {
    userAuth: userAuthSlice,
    users: usersSlice,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(middlewareUsers),
});
