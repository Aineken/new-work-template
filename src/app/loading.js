import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../actions/posts";

export const loadingSlicer = createSlice({
  name: "loading",
  initialState: false,
  reducers: {
    toggleLoading: (state) => !state,
  },
  extraReducers: {
    [fetchPosts.pending]: () => true,
    [fetchPosts.fulfilled]: () => false,
    [fetchPosts.rejected]: () => false,
  },
});

export const selectLoading = (state) => state.loading;

export default loadingSlicer.reducer;
