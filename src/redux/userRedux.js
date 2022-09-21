import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    verify: null,
    verifyTimes: 0,
    subscribeTimes: 0,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutStart: (state) => {
      state.isFetching = true;
    },
    logoutSuccess: (state) => {
      state.isFetching = false;
      state.currentUser = null;
    },
    logoutFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateUserSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = { ...state.currentUser, ...action.payload };
    },
    updateUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    verifyStart: (state) => {
      state.isFetching = true;
    },
    verifySuccess: (state) => {
      state.isFetching = false;
      state.verify = action.payload;
      state.verifyTimes++;
    },
    verifyFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.verifyTimes++;
    },
    subscribeSuccess: (state) => {
      state.subscribeTimes = state.subscribeTimes + 1;
    },
    // resetStart: (state) => {
    //   state.isFetching = true;
    // },
    // resetSuccess: (state) => {
    //   state.isFetching = false;
    //   state.verify = action.payload;
    //   state.verifyTimes++;
    // },
    // resetFailure: (state) => {
    //   state.isFetching = false;
    //   state.error = true;
    //   state.verifyTimes++;
    // },
  },
});

export const {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutStart,
  logoutSuccess,
  logoutFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  verifyStart,
  verifySuccess,
  verifyFailure,
  subscribeSuccess,
} = userSlice.actions;
export default userSlice.reducer;
