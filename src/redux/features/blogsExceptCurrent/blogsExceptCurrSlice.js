import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getBlogsExceptCurrent } from "./blogsExceptCurrAPI";

const initialState = {
  blogsExceptCurr: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const getBlogsExceptCurr = createAsyncThunk(
  "blogs/getBlogsExceptCurr",
  async ({ categoryId, id }) => {
    const blogs = await getBlogsExceptCurrent({categoryId: categoryId, id: id});
    return blogs;
  }
);

const blogsExceptCurrSlice = createSlice({
  name: "blogsExceptCurr",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBlogsExceptCurr.pending, (state) => {
        (state.isError = false), (state.isLoading = true), (state.blogsExceptCurr = []);
      })
      .addCase(getBlogsExceptCurr.fulfilled, (state, action) => {
        (state.isLoading = false), (state.blogsExceptCurr = action.payload);
      })
      .addCase(getBlogsExceptCurr.rejected, (state, action) => {
        (state.isError = true),
          (state.isLoading = false),
          (state.blogsExceptCurr = []),
          (state.error = action.error?.message);
      });
  },
});

export default blogsExceptCurrSlice.reducer;
