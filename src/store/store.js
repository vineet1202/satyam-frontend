// Third party modules
import { configureStore } from "@reduxjs/toolkit";

// User Modules
import userReducer from "./userslice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
