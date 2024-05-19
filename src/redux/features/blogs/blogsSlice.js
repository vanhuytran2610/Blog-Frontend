import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getBlogs } from "./blogsAPI";

const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const getAllBlogs = createAsyncThunk("blogs/getAllBlogs", async () => {
  const blogs = await getBlogs();
  return blogs;
});

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllBlogs.pending, (state) => {
        (state.isError = false), (state.isLoading = true), (state.blogs = []);
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        (state.isLoading = false), (state.blogs = action.payload);
      })
      .addCase(getAllBlogs.rejected, (state, action) => {
        (state.isError = true),
          (state.isLoading = false),
          (state.blogs = []),
          (state.error = action.error?.message);
      });
  },
});

export default blogsSlice.reducer;
