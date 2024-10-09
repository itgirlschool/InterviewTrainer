import { createSlice } from "@reduxjs/toolkit";
import { changePassword } from "../../../Services/changePassword";

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    email: null,
    password: null,
    displayName: null,
    lastName: null,
    firstName: null,
    id: null,
    progress: null,
    avatar: null,
    feedback: null,
    isAuth: false,
    changePasswordStatus: "idle",
    changePasswordError: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.displayName = action.payload.displayName;
      state.id = action.payload.id;
      state.progress = action.payload.progress;
      state.avatar = action.payload.avatar;
      state.feedback = action.payload.feedback;
      state.lastName = action.payload.lastName;
      state.firstName = action.payload.firstName;
      state.isAuth = true;
    },
  },
  removeUser: state => {
    state.email = null;
    state.password = null;
    state.displayName = null;
    state.id = null;
    state.progress = null;
    state.avatar = null;
    state.feedback = null;
    state.isAuth = false;
  },
  extraReducers: (builder) => {
    builder
      .addCase(changePassword.pending, (state) => {
        state.changePasswordStatus = "loading";
        state.changePasswordError = null;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.changePasswordStatus = "succeeded";
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.changePasswordStatus = "failed";
        state.changePasswordError = action.payload;
      });
  },
});

export const { setUser, removeUser } = userAuthSlice.actions;
export default userAuthSlice.reducer;
