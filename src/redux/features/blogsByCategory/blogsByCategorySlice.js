import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getBlogsByCategory } from "./blogsByCategoryAPI";

const initialState = {
  blogsByCategory: [],
  category: null,
  currentPage: 1,
  perPage: 6,
  hasMore: false,
  isLoading: false,
  isError: false,
  error: "",
};

export const getBlogsByCategoryId = createAsyncThunk(
  "blogs/getBlogsByCategoryId",
  async ({ categoryId, sortBy, sortOrder, language }) => {
    const blogs = await getBlogsByCategory({
      categoryId: categoryId,
      sortBy: sortBy,
      sortOrder: sortOrder,
      language: language,
      // perPage: perPage,
      // page: page,
    });
    return blogs;
  }
);

const blogsByCategorySlice = createSlice({
  name: "blogsByCategory",
  initialState,
  reducers: {
    resetBlogs(state) {
      state.blogsByCategory = [];
      state.currentPage = 1;
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBlogsByCategoryId.pending, (state) => {
        (state.isError = false),
          (state.isLoading = true),
          (state.blogsByCategory = []);
      })
      .addCase(getBlogsByCategoryId.fulfilled, (state, action) => {
        (state.isLoading = false), 
        (state.blogsByCategory = action.payload),
        (state.category = action.payload.category);
        // (state.hasMore = !!action.payload.pagination.next_page_url),
        // (state.currentPage += 1);
      })
      .addCase(getBlogsByCategoryId.rejected, (state, action) => {
        (state.isError = true),
          (state.isLoading = false),
          (state.blogsByCategory = []),
          (state.error = action.error?.message);
      });
  },
});

export const { resetBlogs } = blogsByCategorySlice.actions;

export default blogsByCategorySlice.reducer;
