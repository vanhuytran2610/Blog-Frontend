import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getBlogsByCategory } from "./blogsByCategoryAPI";

const initialState = {
  blogsByCategory: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const getBlogsByCategoryId = createAsyncThunk("blogs/getBlogsByCategoryId", async (categoryId) => {
  const blogs = await getBlogsByCategory(categoryId);
  return blogs;
});

const blogsByCategorySlice = createSlice({
  name: "blogsByCategory",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBlogsByCategoryId.pending, (state) => {
        (state.isError = false), (state.isLoading = true), (state.blogsByCategory = []);
      })
      .addCase(getBlogsByCategoryId.fulfilled, (state, action) => {
        (state.isLoading = false), (state.blogsByCategory = action.payload);
      })
      .addCase(getBlogsByCategoryId.rejected, (state, action) => {
        (state.isError = true),
          (state.isLoading = false),
          (state.blogsByCategory = []),
          (state.error = action.error?.message);
      });
  },
});

export default blogsByCategorySlice.reducer;
