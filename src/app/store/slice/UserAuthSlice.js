import { createSlice } from "@reduxjs/toolkit";

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    email: null,
    password: null,
    displayName: null,
    lastName: null,
    firstName: null,
    id: null,
    progress: [
      {
        gradeId: "grade1",
        gradeName: "Intern",
        blocks: [
          { blockId: "InternVideo", lastItem: 0 },
          { blockId: "InternTheory", lastItem: 0 },
          { blockId: "InternTests", lastItem: 0 },
        ],
      },
    ],
    avatar: null,
    feedback: null,
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
    },
  },
  removeUser: state => {
    state.email = null;
    state.password = null;
    state.displayName = null;
    state.id = null;
    state.progress = [
      {
        gradeId: "grade1",
        gradeName: "Intern",
        blocks: [
          { blockId: "InternVideo", lastItem: 0 },
          { blockId: "InternTheory", lastItem: 0 },
          { blockId: "InternTests", lastItem: 0 },
        ],
      },
    ];
    state.avatar = null;
    state.feedback = null;
  },
  updateLastItem: (state, action) => {
    const { gradeId, blockId, lastItem } = action.payload;
    const grade = state.progress.find(
      g => g.gradeId === gradeId,
    );
    if (grade) {
      const block = grade.blocks.find(
        b => b.blockId === blockId,
      );
      if (block) {
        block.lastItem = lastItem;
      }
    }
  },
});

export const { setUser, removeUser, updateLastItem } =
  userAuthSlice.actions;
export default userAuthSlice.reducer;
