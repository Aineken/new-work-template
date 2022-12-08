import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const { data } = await api.getPosts();
    return data;
  } catch (error) {
    console.log(error);
  }
});
