import { configureStore } from "react-redux";
import userReducer from "./userslice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
