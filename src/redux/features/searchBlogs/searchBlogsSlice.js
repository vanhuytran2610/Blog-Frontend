import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { searchBlogs } from "./searchBlogsAPI";

const initialState = {
  blogsBySearch: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const searchBlog = createAsyncThunk(
  "blogs/searchBlogs",
  async (searchTerm) => {
    const blogs = await searchBlogs(searchTerm);
    return blogs;
  }
);

const blogsBySearchSlice = createSlice({
  name: "blogsBySearch",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(searchBlog.pending, (state) => {
        (state.isError = false),
          (state.isLoading = true),
          (state.blogsBySearch = []);
      })
      .addCase(searchBlog.fulfilled, (state, action) => {
        (state.isLoading = false), (state.blogsBySearch = action.payload);
      })
      .addCase(searchBlog.rejected, (state, action) => {
        (state.isError = true),
          (state.isLoading = false),
          (state.blogsBySearch = []),
          (state.error = action.error?.message);
      });
  },
});

export default blogsBySearchSlice.reducer;
