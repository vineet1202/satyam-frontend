import { createSlice } from "@reduxjs/toolkit";

// user slice
const user = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    reset() {
      return {};
    },
    updateToken(state, { payload: { token } }) {
      state.token = token;
    },
    update(state, { payload }) {
      return { ...state, ...payload };
    },
  },
});

// action creators
export const { reset, updateToken, update } = user.actions;

export default user.reducer;
