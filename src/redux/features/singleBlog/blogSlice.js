import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getBlog } from "./blogAPI";

const initialState = {
  blog: {},
  isLoading: false,
  isError: false,
  error: "",
};

export const getBlogById = createAsyncThunk(
  "blogs/getBlogById",
  async ({ categoryId, id, language }) => {
    const blog = await getBlog({
      categoryId: categoryId,
      id: id,
      language: language,
    });
    return blog;
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBlogById.pending, (state) => {
        (state.isError = false), (state.isLoading = true), (state.blog = {});
      })
      .addCase(getBlogById.fulfilled, (state, action) => {
        (state.isLoading = false), (state.blog = action.payload);
      })
      .addCase(getBlogById.rejected, (state, action) => {
        (state.isError = true),
          (state.isLoading = false),
          (state.blog = {}),
          (state.error = action.error?.message);
      });
  },
});

export default blogSlice.reducer;
