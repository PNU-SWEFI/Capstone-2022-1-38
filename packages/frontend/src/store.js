import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./slice/userDataSlice";
import settingModalSlice from "./slice/settingModalSlice";
import postSlice from "./slice/postSlice";
import performanceSlice from "./slice/performanceSlice";
export const store = configureStore({
  reducer: {
    userData: userDataReducer,
    settingModalOpen: settingModalSlice,
    posts: postSlice,
    performance: performanceSlice,
  },
});
