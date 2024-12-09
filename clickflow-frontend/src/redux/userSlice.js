import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    user: {},
  },
  reducers: {
    addUserData(state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout(state) {
      state.token = null;
      state.user = {};
    },
  },
});

export const { addUserData, logout } = userSlice.actions;
export default userSlice.reducer;
