import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  password: null,
  displayName: null,
  lastName: null,
  firstName: null,
  id: null,
  progress: [
    {
      gradeName: "gradingfirst",
      blocks: [
        { blockName: "videofirst", lastItem: "", blockProgress: 0 },
        { blockName: "theoryfirst", lastItem: "", blockProgress: 0 },
        { blockName: "testsfirst", lastItem: "", blockProgress: 0 },
      ],
      totalProgress: 0,
    },
  ],
  avatar: null,
  feedback: null,
  isAuth: false,
};

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.displayName = action.payload.displayName;
      state.id = action.payload.id;
      state.progress = Array.isArray(action.payload.progress)
        ? action.payload.progress
        : initialState.progress;
      state.avatar = action.payload.avatar;
      state.feedback = action.payload.feedback;
      state.lastName = action.payload.lastName;
      state.firstName = action.payload.firstName;
      state.isAuth = true;
    },

    removeUser: state => {
      state.email = null;
      state.password = null;
      state.displayName = null;
      state.id = null;
      state.progress = [];
      state.avatar = null;
      state.feedback = null;
      state.isAuth = false;
    },
  },
});

export const { setUser, removeUser } = userAuthSlice.actions;
export default userAuthSlice.reducer;
