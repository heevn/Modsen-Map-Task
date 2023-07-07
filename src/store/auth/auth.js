import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  uid: null,
  image: null,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    logIn: (state, action) => {
      state.loggedIn = true;
      state.uid = action.payload.uid;
      state.image = action.payload.image;
    },

    logOut: (state, action) => {
      state.image = null;
      state.loggedIn = false;
      state.uid = null;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
