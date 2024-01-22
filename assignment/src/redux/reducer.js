import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  authentication: "",
};
const counterReducer = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    addData: (state, action) => {
      console.log(action, "udate");
      state.name = action.payload.name;
      state.authentication = action.payload.authentication;
    },
  },
  sessionExpiry: (state) => {
    state = { ...state, authentication: false };
  },
});

export const { addData, sessionExpiry } = counterReducer.actions;

export default counterReducer.reducer;
