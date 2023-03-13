import { configureStore } from "@reduxjs/toolkit";
import posts from "./posts";



const store = configureStore({
  reducer: {
    posts,
  },
});

export default store;