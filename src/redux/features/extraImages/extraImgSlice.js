import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getExtraImage } from "./extraImgAPI";

const initialState = {
  extraImg: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const getExtraImg = createAsyncThunk("blogs/getExtraImgs", async () => {
  const blogs = await getExtraImage();
  return blogs;
});

const extraImgSlice = createSlice({
  name: "extraImg",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getExtraImg.pending, (state) => {
        (state.isError = false), (state.isLoading = true), (state.extraImg = []);
      })
      .addCase(getExtraImg.fulfilled, (state, action) => {
        (state.isLoading = false), (state.extraImg = action.payload);
      })
      .addCase(getExtraImg.rejected, (state, action) => {
        (state.isError = true),
          (state.isLoading = false),
          (state.extraImg = []),
          (state.error = action.error?.message);
      });
  },
});

export default extraImgSlice.reducer;
