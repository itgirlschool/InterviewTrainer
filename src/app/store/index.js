import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from "./slice/UserAuthSlice";
import usersSlice from "./slice/UsersSlice";
import middlewareUsers from "./middleware/middlewareUsers";

import { firebaseConfig } from "../../../firebaseConfig";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const app = initializeApp(firebaseConfig);
const realtimeDb = getDatabase(app);

export const store = configureStore({
  reducer: {
    userAuth: userAuthSlice,
    users: usersSlice,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(middlewareUsers),
});
