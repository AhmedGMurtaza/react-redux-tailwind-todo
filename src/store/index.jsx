import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

const allReducers = combineReducers({
  [todoSlice.name]: todoSlice.reducer,
});

export const store = configureStore({
  reducer: allReducers,
});
