import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    del(state, action) {
      let i = state.findIndex((x) => x.id == action.payload);
      if (i > -1) {
        state.splice(i, 1);
      }
    },
  },
});
export const { add, del } = cardSlice.actions;
export default cardSlice.reducer;
