import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../actions/posts";

const initialState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    updatePost: (state, action) => {
      state.posts = state.posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export const selectAllPosts = (state) => state.posts.posts;
export const { addPost, deletePost, updatePost } = postsSlice.actions;

export default postsSlice.reducer;
